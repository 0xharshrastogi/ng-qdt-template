import { Injectable } from '@angular/core';
// @ts-ignore
import QdtComponents from 'qdt-components';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { IQlikService } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class QlikService implements IQlikService {
  readonly qdt: any;

  constructor() {
    const { config, connection } = environment.qdt;
    this.qdt = new QdtComponents(config, connection);
  }

  getObjectData<T extends Array<any>>(id: string): Observable<T> {
    const HYPER_CUBE_DATA = '/qHyperCubeData';
    const dimension = { qWidth: 50, qHeight: 200 };
    return new Observable<T>((subscriber) => {
      const callback = async () => {
        try {
          const app = await this.getApp();
          const model = await app.getObject(id);
          const data = await model.getHyperCubeData(HYPER_CUBE_DATA, [
            dimension,
          ]);
          subscriber.next(data[0].matrix);
        } catch (error) {
          console.error(error);
          // @ts-ignore
          subscriber.next([]);
        }
      };
      callback();
    });
  }

  private async getApp(): Promise<any> {
    return await this.qdt.qAppPromise;
  }
}

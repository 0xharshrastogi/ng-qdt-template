import { Observable } from 'rxjs';

export interface TQdtConfiguration {
  hostname: string;

  appid: string;

  port: number;

  secure: boolean;

  prefix: string;
}

export interface IQlikService {
  readonly qdt: any;

  getObjectData<T extends any[]>(id: string): Observable<T>;
}

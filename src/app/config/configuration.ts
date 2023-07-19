import { TQdtConfiguration } from '../shared/types';

interface TConfiguration {
  [key: string]: TQdtConfiguration;
}

export const configuration: TConfiguration = {
  ['local']: {
    hostname: window.location.hostname,
    appid: 'SOME_QVF_APP_ID',
    secure: false,
    port: 4848,
    prefix: '',
  },
};

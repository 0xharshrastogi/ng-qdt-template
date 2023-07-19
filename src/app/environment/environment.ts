import { configuration } from '../config/configuration';

const ACTIVE_CONFIGURATION = 'local';

export const environment = {
  production: false,
  qdt: {
    config: configuration[ACTIVE_CONFIGURATION],
    connection: {
      vizApi: true,
      engineApi: true,
    },
  },
};

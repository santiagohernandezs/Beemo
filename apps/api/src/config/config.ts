import type { ConfigModuleOptions } from '@nestjs/config';
import appRegistres from './namespaces/app.config';
import dbRegistres from './namespaces/database.config';

const config: ConfigModuleOptions = {
  load: [appRegistres, dbRegistres],
  isGlobal: true,
  cache: true,
};

export default config;

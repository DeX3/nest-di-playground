import { Module, DynamicModule, Global } from '@nestjs/common';
import { Config } from './Config';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(baseConfigPath: string): DynamicModule {
    const providers = [{ provide: 'Config', useValue: readConfig(baseConfigPath) }];
    return {
      module: ConfigModule,
      providers,
      exports: providers
    };
  }
}

function readConfig(path) {
  //... read config from path
  const cfg = new Config();

  cfg.config1 = 'value';
  cfg.config2 = 47;
  cfg.path = path;
  return cfg;
}

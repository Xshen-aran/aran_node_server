import { App, Configuration, ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as validate from '@midwayjs/validate';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import { ValidateErrorFilter } from '@/filter/validate.filter';
import { ReportMiddleware } from '@/middleware/report';
import * as sequelize from '@midwayjs/sequelize';

@Configuration({
  imports: [egg, validate, sequelize],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  // only read
  async onReady() {
    this.app.useMiddleware(ReportMiddleware);
    this.app.useFilter([ValidateErrorFilter]);
  }
}

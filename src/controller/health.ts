import { Body, Controller, Get, Inject, Post } from '@midwayjs/core';
import { Rule, RuleType } from '@midwayjs/validate';
import { Context } from 'egg';
class testDTO {
  @Rule(RuleType.number().max(35).required())
  status: number;
}
@Controller('/')
export class CheckHealthController {
  @Inject()
  ctx: Context;
  @Get('/health_check')
  async check() {
    this.ctx.response.body = { message: 'ok' };
  }

  @Post('/pong')
  async pong(@Body() body: testDTO) {
    console.log(body.status);
    this.ctx.response.body = { message: body };
  }
}

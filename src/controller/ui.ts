// import { Inject, Controller, Post, Get, Body } from '@midwayjs/core';
// import { Context } from 'egg';
// import { UiService } from '@/service/ui_playwright';
// import { RemoteOptions } from '@/interfaces/interface';

// @Controller('/ui')
// export class APIController {
//   @Inject()
//   ctx: Context;

//   @Inject()
//   uiService: UiService;

//   @Post('/start')
//   async run(@Body() body: RemoteOptions) {
//     console.log(body);
//     this.uiService.generate_cases().then(result => {
//       result.playwright_demo();
//     });
//   }
//   @Get('/start')
//   async run_() {
//     console.log('start ui ____');

//     await this.uiService.playwright_demo();
//   }
// }

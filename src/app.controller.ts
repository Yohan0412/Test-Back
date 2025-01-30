import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(databaseConfig);
    return this.appService.getHello();
  }
}

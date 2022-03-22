import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './user.dto';
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("/create")
  createUser(@Body() body: CreateUserDto) {
    console.log("请求到了这里 参数：", body);
    return body;
  }

}

import { Controller, Body, Get, Post } from '@nestjs/common';
import { C2cService } from './c2c.service';
import { GetTokenDTO } from './dto/getToken.dto';

@Controller('c2c')
export class C2cController {
  constructor(private readonly c2cService: C2cService) {}

  @Get()
  create(@Body() getTokenDTO: GetTokenDTO) {
    return this.c2cService.getInfo(getTokenDTO);
  }
}

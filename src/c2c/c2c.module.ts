import { Module } from '@nestjs/common';
import { C2cService } from './c2c.service';
import { C2cController } from './c2c.controller';

@Module({
  imports: [],
  controllers: [C2cController],
  providers: [C2cService],
})
export class C2cModule {}

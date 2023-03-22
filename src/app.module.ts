import { Module } from '@nestjs/common';
import { C2cModule } from './c2c/c2c.module';

@Module({
  imports: [C2cModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

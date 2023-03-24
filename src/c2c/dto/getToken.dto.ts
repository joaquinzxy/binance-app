import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class GetTokenDTO {
  @IsString()
  apiKey: string;

  @IsString()
  apiSecret: string;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @IsOptional()
  timeStampDiff: number = 0;
}

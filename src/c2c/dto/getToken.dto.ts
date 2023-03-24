import { IsInt, IsString } from 'class-validator';

export class GetTokenDTO {
  @IsString()
  apiKey: string;

  @IsString()
  apiSecret: string;

  @IsInt()
  timeStampDiff: number;
}

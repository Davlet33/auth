import { IsNumber, IsString } from 'class-validator';
export class CreateCommentDto {
  @IsString()
  name?: string;
  @IsString()
  comment?: string;
  @IsNumber()
  post_id?: number;
}

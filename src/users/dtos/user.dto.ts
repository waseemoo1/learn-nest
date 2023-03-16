import { Expose } from "class-transformer";
import { IsString, IsEmail, IsOptional } from "class-validator";

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
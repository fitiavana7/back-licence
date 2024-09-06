import { IsEmail, IsMongoId, IsNotEmpty, IsString, Length } from "class-validator";

export class ChangePasswordDto {
    @IsString()
    @Length(6 ,100)
    password : string

    @IsString()
    @Length(6 ,100)
    newPassword : string

}
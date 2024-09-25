import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    location: string;

    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    phone: string;

    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    creationDate: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    mail : string ;
    
}
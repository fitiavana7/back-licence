import { IsNotEmpty, IsString, Length } from "class-validator";

export class EmployeeDto {
    @IsNotEmpty()
    @Length(3,100)
    @IsString()
    firstName : string
     
    lastName : string
    
    @IsNotEmpty()
    age : number

    @IsNotEmpty()
    @Length(3,100)
    @IsString()
    gender : string

    @IsNotEmpty()
    @Length(3,100)
    @IsString()
    adress : string

    @IsNotEmpty()
    @Length(3,100)
    @IsString()
    phone : string

    @IsNotEmpty()
    @Length(3,100)
    @IsString()
    mail : string

    @IsNotEmpty()
    @Length(3,100)
    @IsString()
    matrimoniale : string
}
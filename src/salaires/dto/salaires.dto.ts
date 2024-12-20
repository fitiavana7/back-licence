import { IsNotEmpty, IsNumber, IsString, IsOptional , Length, Max, Min } from "class-validator";

export class SalairesDto {
    @IsString()
    @IsNotEmpty()
    userId : string

    @IsString()
    @IsNotEmpty()
    employeeId : string

    @IsString()
    @IsNotEmpty()
    workId : string

    @IsNotEmpty()
    applicationDate : Date

    @IsString()
    @IsOptional()
    description : string

    @IsNumber()
    amount : number
}
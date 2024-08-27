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

    @IsString()
    @IsNotEmpty()
    applicationDate : string

    @IsString()
    @IsOptional()
    description : string
}
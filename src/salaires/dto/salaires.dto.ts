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

    @IsNumber()
    @Min(1)
    amount : number

    @IsString()
    @IsOptional()
    description : string
}
import { IsNotEmpty, IsNumber, IsString, IsOptional , IsBoolean } from "class-validator";

export class PaymentDto {
    
    @IsString()
    @IsNotEmpty()
    companyId : string

    @IsString()
    @IsNotEmpty()
    workId : string

    @IsString()
    @IsNotEmpty()
    employeeId : string

    @IsString()
    @IsNotEmpty()
    paymentDate : string

    @IsString()
    @IsOptional()
    commentaire : string

    @IsNumber()
    @IsOptional()
    amount : number

    @IsNumber()
    @IsOptional()
    plus : number
    
    @IsNumber()
    @IsOptional()
    moins : number

    @IsBoolean()
    haveMoins : boolean

    @IsBoolean()
    havePlus : boolean
    
    @IsString()
    moinsDescription : string

    @IsString()
    plusDescription : string

}
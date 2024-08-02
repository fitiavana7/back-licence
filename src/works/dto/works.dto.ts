import { IsNotEmpty, IsString, Length } from "class-validator";

export class WorksDto {
    @IsNotEmpty()
    @Length(2,100)
    @IsString()
    title : string

    @IsNotEmpty()
    @Length(2,100)
    @IsString()
    description : string

    @IsNotEmpty()
    @Length(2,100)
    salary : number
}
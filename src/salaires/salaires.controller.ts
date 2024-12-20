import { Body, Controller, Get, Param, Post , UseGuards } from '@nestjs/common';
import { GetByIdDto } from 'src/salaires/dto/get-by-id.dto';
import { SalairesDto } from 'src/salaires/dto/salaires.dto';
import { SalairesService } from 'src/salaires/salaires.service';

@Controller('salary')
export class SalairesController {

    constructor(
        private salairesService : SalairesService
    ){}

    @UseGuards()
    @Get('company/:id')
    getByCompany(@Param() data : {id : string}){
        return this.salairesService.getByCompany(data.id)
    }

    @UseGuards()
    @Get('employee/:id')
    getByEmployee(@Param() data : {id : string}){
        return this.salairesService.getByEmployee(data.id)
    }

    @UseGuards()
    @Get('employee/get-current/:id')
    getCurrentByEmployee(@Param() data : {id : string}){
        return this.salairesService.getCurrentByEmployee(data.id)
    }
    
    @UseGuards()
    @Get('work/:id')
    getByWork(@Param() data : {id : string}){
        return this.salairesService.getByWork(data.id)
    }
    
    @UseGuards()
    @Get(':id')
    async getByUser(@Param() data : {id : string}){
        return await this.salairesService.getById(data.id)
    }

    @UseGuards()
    @Post()
    create(@Body() data : SalairesDto){
        return this.salairesService.create(data)
    }
}

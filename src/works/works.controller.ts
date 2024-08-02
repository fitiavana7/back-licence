import { Body, Controller, Get, Param, Post , Delete, UseGuards } from '@nestjs/common';
import { WorksDto } from 'src/works/dto/works.dto';
import { WorksService } from 'src/works/works.service';

@Controller('works')
export class WorksController {

    constructor(
        private worksService : WorksService
    ){}

    @UseGuards()
    @Get()
    getUser(){
        return this.worksService.getAll()
    }

    @UseGuards()
    @Get('company/:id')
    getMetiers(@Param() req : {id : string}){
        return this.worksService.getByCompany(req.id)
    }

    @UseGuards()
    @Post('create/:id')
    create(@Body() data : WorksDto , @Param() req : {id : string}){
        return this.worksService.create(data , req.id )
    }

    @UseGuards()
    @Delete('/:id')
    delete(@Param() param : { id : string}){
        return this.worksService.delete(param.id)
    }
}

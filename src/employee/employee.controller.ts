import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { EmployeeDto } from 'src/employee/dto/employee.dto';
import { EmployeeService} from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(
        private employeeService : EmployeeService
    ){}

    @UseGuards()
    @Get()
    getEmployee(){
        return this.employeeService.getAll()
    }

    @UseGuards()
    @Get('/company/:id')
    getEmployeeByCompany(@Param() data :{id : string}){
        return this.employeeService.getEmployeeByCompany(data.id)
    }

    @UseGuards()
    @Get('/:id')
    getEmployeeDetail(@Param() data :{id : string}){
        return this.employeeService.getEmployeeDetail(data.id)
    }

    @UseGuards()
    @Post('/:id')
    create(@Body() data : EmployeeDto , @Param() param :{id : string}){
        return this.employeeService.create(data , param.id)
    }
}

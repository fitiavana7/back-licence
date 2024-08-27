import { Body, Controller, Get, Param, Delete, Post, UseGuards } from '@nestjs/common';
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
    @Get('/company/leaved/:id')
    getEmployeeLeavedByCompany(@Param() data :{id : string}){
        return this.employeeService.getEmployeeLeavedByCompany(data.id)
    }

    @UseGuards()
    @Post('/move')
    MoveEmployee(@Body() data :{id : string , leavingDate : Date}){
        return this.employeeService.moveEmployee(data.id , data.leavingDate)
    }

    @UseGuards()
    @Get('/:id')
    getEmployeeDetail(@Param() data :{id : string}){
        return this.employeeService.getEmployeeDetail(data.id)
    }

    @UseGuards()
    @Post('/:id')
    create(@Body() data : EmployeeDto , @Param() param :{id : string}){
        return this.employeeService.update(param.id, data)
    }
    
    @UseGuards()
    @Delete('/:id')
    delete(@Param() param :{id : string}){
        return this.employeeService.delete(param.id)
    }

}

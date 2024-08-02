import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDto } from 'src/employee/dto/employee.dto';
import { Employee, EmployeeDocument } from 'src/employee/schema/employee.schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) 
        private readonly employeeModel: Model<EmployeeDocument>,
      ) {}

    async getAll(){
        return await this.employeeModel.find({});
    }

    async getById(id : string){
        return await this.employeeModel.findOne({_id : id});
    }

    async getEmployeeByCompany(id : string){
        return await this.employeeModel.find({companyId : id});
    }

    async getEmployeeDetail(id : string){
        return await this.employeeModel.findById(id)
    }

    async create(data : EmployeeDto , id : string){
        return this.employeeModel.create({...data , companyId : id})
    }

}
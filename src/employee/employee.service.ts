import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDto } from 'src/employee/dto/employee.dto';
import { Employee, EmployeeDocument } from 'src/employee/schema/employee.schema';
import { PaymentService } from 'src/payment/payment.service';
import { SalairesService } from 'src/salaires/salaires.service';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) 
        private readonly employeeModel: Model<EmployeeDocument>,
        private paymentService : PaymentService,
        private salairesService : SalairesService
      ) {}

    async getAll(){
        return await this.employeeModel.find({});
    }

    async getById(id : string){
        return await this.employeeModel.findOne({_id : id});
    }
    
    async moveEmployee(id : string , leavingDate : Date){
        return await this.employeeModel.updateOne({_id : id} ,{$set : {
            leavingDate
        }});
    }

    async update(id : string , data){
        return await this.employeeModel.updateOne({_id : id} ,{$set : data});
    }
    async getEmployeeByCompany(id : string){
        return await this.employeeModel.find({companyId : id , isCurrentEmployee : true});
    }

    async getEmployeeLeavedByCompany(id : string){
        return await this.employeeModel.find({companyId : id , isCurrentEmployee : false});
    }

    async getEmployeeDetail(id : string){
        return await this.employeeModel.findById(id)
    }

    async create(data : EmployeeDto , id : string){
        return this.employeeModel.create({...data , companyId : id})
    }

    async delete(id : string){
        this.employeeModel.deleteOne({_id : id})
        this.salairesService.deleteByEmployee(id)
        this.paymentService.deleteByEmployee(id)
    }
    
    async getTotalSalaries(id : string){
        return await this.employeeModel.count({companyId : id})
    }

}
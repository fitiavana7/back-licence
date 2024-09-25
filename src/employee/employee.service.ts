import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
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
        let employee = await this.employeeModel.findById(id)
        employee.leavingDate = leavingDate
        employee.isCurrentEmployee = false
        return employee.save()
    }

    async update(id : string , data : EmployeeDto){
        let employee = await this.employeeModel.findById(id)
        employee.hiringDate = data.hiringDate
        employee.firstName = data.firstName
        employee.lastName = data.lastName
        employee.age = data.age
        employee.adress = data.adress
        employee.gender = data.gender
        employee.matrimoniale = data.matrimoniale
        employee.mail = data.mail
        return employee.save()
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
        this.salairesService.deleteByEmployee(id)
        this.paymentService.deleteByEmployee(id)
        return await this.employeeModel.findByIdAndDelete( id)
    }
    
    async getTotalSalaries(id : string){
        return await this.employeeModel.count({companyId : id})
    }

}
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { SalairesDto } from 'src/salaires/dto/salaires.dto';
import { Salaires, SalairesDocument } from 'src/salaires/schema/salaires.schema';

@Injectable()
export class SalairesService {
    constructor(
        @InjectModel(Salaires.name) 
        private readonly salairesModel: Model<SalairesDocument>,
      ) {}

    async getAll(){
        return await this.salairesModel.find({});
    }

    async getByCompany(id : ObjectId){
        return await this.salairesModel.find({userId : id});
    }

    async getByWork(id : ObjectId){
        return await this.salairesModel.find({workId : id});
    }
    
    async getByEmployee(id : ObjectId){
        return await this.salairesModel.find({employeeId : id});
    }
    
    async getById(id : ObjectId){
        return await this.salairesModel.findOne({_id : id});
    }

    async create(data : SalairesDto){
        return this.salairesModel.create(data)
    }
    
    async delete(id : ObjectId){
        return this.salairesModel.deleteOne({_id : id})
    }

}
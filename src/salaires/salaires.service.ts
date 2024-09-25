import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { SalairesDto } from 'src/salaires/dto/salaires.dto';
import { Salaires, SalairesDocument } from 'src/salaires/schema/salaires.schema';
import { WorksService } from 'src/works/works.service';

@Injectable()
export class SalairesService {
    constructor(
        @InjectModel(Salaires.name) 
        private readonly salairesModel: Model<SalairesDocument>,
        private workService : WorksService
      ) {}

    async getAll(){
        return await this.salairesModel.find({});
    }

    async getByCompany(id : string){
        return await this.salairesModel.find({userId : id});
    }

    async getByWork(id : string){
        return await this.salairesModel.find({workId : id});
    }
    
    async getByEmployee(id : string){
        return await this.salairesModel.find({employeeId : id}).sort({ createdAt: -1 });
    }

    async getCurrentByEmployee(id : string){
        const data = await this.salairesModel.find({employeeId : id});
        return data[data.length-1]
    }

    async deleteByEmployee(id : string){
        return this.salairesModel.deleteMany({employeeId : id})
    }    
    
    async getById(id : string){
        return await this.salairesModel.findOne({_id : id});
    }

    async create(data : SalairesDto){
        return this.salairesModel.create(data)
    }
    
    async delete(id : string){
        return this.salairesModel.findByIdAndDelete( id)
    }

}
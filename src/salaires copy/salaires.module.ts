import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalairesController } from 'src/salaires/salaires.controller';
import { SalairesService } from 'src/salaires/salaires.service';
import SalairesSchema, { Salaires } from 'src/salaires/schema/salaires.schema';
import { WorksModule } from 'src/works/works.module';

@Module({
  providers: [SalairesService],
  controllers: [SalairesController] ,
  imports: [
    MongooseModule.forFeature([{ name: Salaires.name, schema: SalairesSchema }]),
    WorksModule
  ],
  exports: [SalairesService],
})
export class SalairesModule {}
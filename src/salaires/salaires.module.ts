import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalairesController } from 'src/salaires/salaires.controller';
import { SalairesService } from 'src/salaires/salaires.service';
import SalairesSchema, { Salaires } from 'src/salaires/schema/salaires.schema';

@Module({
  providers: [SalairesService ],
  controllers: [SalairesController] ,
  imports: [
    MongooseModule.forFeature([{ name: Salaires.name, schema: SalairesSchema }]),
  ],
  exports: [SalairesService],
})
export class SalairesModule {}
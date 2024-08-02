import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Works } from './schema/works.schema';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';
import WorksSchema from './schema/works.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Works.name, schema: WorksSchema }])
    ],
    controllers: [WorksController],
    providers: [WorksService],
    exports: [WorksService]
  })
  export class WorksModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema, { User } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmployeeModule } from 'src/employee/employee.module';
import { WorksModule } from 'src/works/works.module';
import { SalairesModule } from 'src/salaires/salaires.module';
import { PaymentModule } from 'src/payment/payment.module';
import { StatService } from 'src/user/stat.service';
@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '60d' },
      }), 
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      EmployeeModule,
      WorksModule,
      SalairesModule,
      PaymentModule
    ],
    controllers: [UserController],
    providers: [UserService , JwtStrategy ,StatService],
    exports: [JwtStrategy, UserService ]
  })
  export class UserModule {}

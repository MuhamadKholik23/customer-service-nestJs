import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/customer.entity';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Juns070200',
      database: 'victoria',
      entities: [Customer],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Customer]),
  ],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class AppModule {}

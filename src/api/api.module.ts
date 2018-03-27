import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CarModule } from '../car/car.module';
import * as passport from 'passport';
import { AuthModule } from '../auth';
@Module({
    imports: [CarModule, AuthModule],
})
export class ApiModule {
}
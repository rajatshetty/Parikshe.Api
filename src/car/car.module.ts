import { Module } from '@nestjs/common';
import { CarsController } from './controller/cars.controller';
import { CarService } from './services/cars.service';
@Module({
    imports: [],
    controllers: [CarsController],
    components: [CarService],
})
export class CarModule {

}
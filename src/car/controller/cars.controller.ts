import { Controller, Get, Post, Param, Body, Req, HttpStatus, Res, Query } from '@nestjs/common';
import { Car } from '../../model/car.model';
import { CarService } from '../services/cars.service';
@Controller('api/cars')
export class CarsController {

    constructor(private carServices: CarService) { }
    @Get()
    async getCars( @Res() res): Promise<Car[]> {
        return res.status(HttpStatus.OK).json(this.carServices.GetAll());
    }

    @Get(':id')
    async findOne( @Param() param): Promise<any> {
        return this.carServices.findByModel(param.id);
    }

    @Post()
    async create( @Body() model: Car): Promise<any> {
        return this.carServices.createCar(model);
    }
}

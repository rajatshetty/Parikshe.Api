import { Component } from '@nestjs/common';
import { Car } from '../../model/car.model';
import { CarMock } from '../../mock/cars.mock';

@Component()
export class CarService {

    private carMock: CarMock;

    constructor() {
        this.carMock = new CarMock();
    }

    GetAll(): Car[] {
        return this.carMock.getAllCars();
    }
    findByModel(name: string): Car {
        return this.carMock.findByModel(name);
    }
    createCar(car: Car): Car {
        return this.carMock.createCar(car);
    }
}
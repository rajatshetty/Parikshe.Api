import { Car } from '../model/car.model';

export class CarMock {

    constructor() {

    }

    private Cars: Car[] = [
        { brand: 'benz', color: 'black', modal: 's-class', number: 11 },
        { brand: 'audi', color: 'white', modal: 'quatro', number: 22 },
        { brand: 'bmw', color: 'blue', modal: 'm3', number: 33 },
        { brand: 'honda', color: 'red', modal: 'f-type', number: 44 },
    ];
    getAllCars(): Car[] {
        return this.Cars;
    }
    findByModel(name: string): Car {
        return this.Cars.find(x => x.modal === name);
    }
    createCar(car: Car): Car {
        this.Cars.push(car);
        return car;
    }
}
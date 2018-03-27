import { Component, UnauthorizedException } from '@nestjs/common';
import { UserMock } from '../mock/users.mock';
import { User } from '../model/user.model';

@Component()
export class UserServices {

    private readonly userMock: UserMock;

    constructor() {
        this.userMock = new UserMock();
    }

    public getUsers(): User[] {
        return this.userMock.getUsers();
    }

    public createUser(user: User): any {
        return this.userMock.createUser(user);
    }

    public checkUserExists(name: string, password: string): any {
        const user = this.userMock.getUsers().find(x => x.name === name && x.password === password);
        if (user) {
            return true;
        } else {
            throw new UnauthorizedException('user not found');
        }
    }
}
import { User } from '../model/user.model';
import { NotAcceptableException } from '@nestjs/common';
export class UserMock {
    private _users: User[] =
        [
            { email: 'sharath@gmail.com', name: 'sharath', phone: 1111111111, sex: 'male', password: 'sha123' },
            { email: 'sunita@gmail.com', name: 'sunita', phone: 2222222222, sex: 'female', password: 'sun123' },
        ];
    constructor() { }
    public getUsers(): User[] {
        return this._users;
    }

    public createUser(user: User): any {
        if (this._users.find(x => x.email === user.email || x.phone === user.phone)) {
            throw new NotAcceptableException('user with email or phone number already exists');
        } else {
            this._users.push(user);
        }
    }
}

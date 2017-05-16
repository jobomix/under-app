import {User} from '../model/user.class';

interface IUsers {
    getAllUsers():User[];
}

export {IUsers};
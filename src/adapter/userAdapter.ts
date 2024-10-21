import {UserModel} from "../models";
import {JwtPayload} from "jwt-decode";

export interface userBackend extends JwtPayload{
    jti: string;
    role: {id: number, name: 'ADMIN' | 'USER'};
    sub: string;
    username: string
}

export const userAdapter = (user: userBackend) => {


    try {
        const userM: UserModel = {
            id: Number(user.jti),
            roles: [user.role],
            email: user.sub,
            name:  user.username,
        };

        return userM;
    }catch (error){
        console.log(error)
    }




}
import { getModel, User } from '../models';

import { Collection, ObjectID, ObjectId } from 'mongodb';
import { JwtService } from './JwtService';

export class AuthService {

    private static instance: AuthService;
    private model: any;

    private constructor () {
        this.model = getModel('UserModel');
    }

    public static getInstance(): AuthService {
        this.instance = this.instance || new AuthService();
        return this.instance;
    }

    public async signInHandler(signInData: any): Promise<any> {
        try {
            const user = await this.model.getUserByName(signInData.username);
            if (signInData.password === user.password) {
                const token = JwtService.getInstance().generateToken(user.firstname);
                return {
                    ...user,
                    token,
                };
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    public async signOutHandler(): Promise<void> {

    }

    public async signUpHandler(signUpData: any): Promise<any> {

        const existUser = await this.model.getUserByName(signUpData.firstname);

        if (existUser) {
            return false;
        } else {
            const newUserResult = await this.model.put(signUpData);
            const newUser = newUserResult.ops[0];
            newUser.token = JwtService.getInstance().generateToken(newUser.firstname);
            return newUser; 
        }
    }

}

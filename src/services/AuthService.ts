import { getModel, User } from '../models';

import { JwtService } from './JwtService';

export class AuthService {

    private static instance: AuthService;
    private db: any;

    private constructor () {
        this.db = getModel('UserModel');
    }

    public static getInstance(): AuthService {
        this.instance = this.instance || new AuthService();
        return this.instance;
    }

    public async loginHandler(options: any): Promise<void> {
        try {
            const user = await this.db.get(options.name);
            if (options.password === user.password) {
                //
                const token = JwtService.getInstance().generateToken(options.name);
                //
                // response.write(JSON.stringify({
                //     'token': token,
                //     'success': true,
                //     'result' : 'Login successful',
                //     'name' : options.name,
                // }));
                // response.end();
            } else {
                throw new Error();
            }
        } catch (err) {
            // response.writeHead(401, this.headerText);
            // response.write(JSON.stringify({
            //     'success': false,
            //     'result' : 'Your account does not exist or password error, please try again!',
            //     'name' : options.name,
            // }));
            // response.end();
        }
    }

    public async logoutHandler(): Promise<void> {

    }

    public async regHandler(options: any): Promise<void> {

      await this.db.put(options.name, options.password);

        // if (isFound) {
        //     response.write(JSON.stringify({
        //         'result' : 'The account has been registered',
        //         'name' : options.name,
        //     }));
        //     response.end();
        // } else {


        //     response.write(JSON.stringify({
        //         'result' : 'registered',
        //         'name' : options.name,
        //     }));
        //     response.end();
        // }
    }

}

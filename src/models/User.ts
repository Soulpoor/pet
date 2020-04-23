export interface IUser {
    _id?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    email?: string;
    score?: number;
}

export class User implements IUser {

    private id?: string;
    private _firstname: string;
    private _lastname: string;
    private _password: string;
    private _email: string;
    private _score: number;

    constructor (firstname: string, lastname: string, password: string, email: string, score: number=30) {
        this._password = password;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._score = score;
    }

    public set _id(val: string | undefined) {
        this.id = val;
    }

    public get _id(): string | undefined {
        return this.id;
    }

    public set firstname(val: string) {
        this._firstname = val;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set lastname(val: string) {
        this._lastname = val;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public set password(val: string) {
        this._password = val;
    }

    public get password(): string {
        return this._password;
    }

    public set email(val: string) {
        this._email = val;
    }

    public get email(): string {
        return this._email;
    }

    public set score(val: number) {
        this._score = val;
    }

    public get score(): number {
        return this._score;
    }
}


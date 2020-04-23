// enum PetSpecies {
//     dog = 1,
//     cat = 2,
//     bird = 3,
//     tortoise = 4,
// }
import { ObjectId } from 'mongodb';

export interface IPet {
    _id?: string;
    name?: string;
    age?: number;
    gender?: string;
    species?: string;
    userId?: string | ObjectId;
}

export class Pet implements IPet {

    private id?: string;
    private _name: string;
    private _age: number;
    private _gender: string;
    private _species: string;
    private _userId?: string | ObjectId;


    constructor (name: string, age: number, gender: string, species: string) {
        this._name = name;
        this._age = age;
        this._species = species;
        this._gender = gender;
    }

    public set _id(val: string | undefined) {
        this.id = val;
    }

    public get _id(): string | undefined {
        return this.id;
    }

    public set name(val: string) {
        this._name = val;
    }

    public get name(): string {
        return this._name;
    }

    public set age(val: number) {
        this._age = val;
    }

    public get age(): number {
        return this._age;
    }

    public set gender(val: string) {
        this._gender = val;
    }

    public get gender(): string {
        return this._gender;
    }

    public set species(val: string) {
        this._species = val;
    }

    public get species(): string {
        return this._species;
    }

    public set userId(val: string | ObjectId | undefined) {
        this._userId = val;
    }

    public get userId(): string | ObjectId | undefined {
        return this._userId;
    }    
}


// enum PetServiceSpecies {
//     dog = 1,
//     cat = 2,
//     bird = 3,
//     tortoise = 4,
// }
import { ObjectId } from 'mongodb';

export interface IPetService {
    _id?: string;
    title?: string;
    lastestAt?: number;
    content?: string;
    score?: number;
}

export class PetService implements IPetService {

    private id?: string;
    private _title: string;
    private _lastestAt: number;
    private _content: string;
    private _score: number;
    private _userId?: string | ObjectId;


    constructor (title: string, lastestAt: number, content: string) {
        this._title = title;
        this._lastestAt = lastestAt;
        this._content = content;
        this._score = 3;
    }

    public set _id(val: string | undefined) {
        this.id = val;
    }

    public get _id(): string | undefined {
        return this.id;
    }

    public set title(val: string) {
        this._title = val;
    }

    public get title(): string {
        return this._title;
    }

    public set lastestAt(val: number) {
        this._lastestAt = val;
    }

    public get lastestAt(): number {
        return this._lastestAt;
    }

    public set content(val: string) {
        this._content = val;
    }

    public get content(): string {
        return this._content;
    }

    public set score(val: number) {
        this._score = val;
    }

    public get score(): number {
        return this._score;
    } 
}


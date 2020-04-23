// enum ArticleSpecies {
//     dog = 1,
//     cat = 2,
//     bird = 3,
//     tortoise = 4,
// }
import { ObjectId } from 'mongodb';

export interface IArticle {
    _id?: string;
    title?: string;
    content?: string;
    lastestAt?: number;
    userId?: string | ObjectId;
}

export class Article implements IArticle {

    private id?: string;
    private _title: string;
    private _lastestAt: number;
    private _content: string;
    private _userId?: string | ObjectId;


    constructor (title: string, lastestAt: number, content: string) {
        this._title = title;
        this._lastestAt = lastestAt;
        this._content = content;
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

    public set userId(val: string | ObjectId | undefined) {
        this._userId = val;
    }

    public get userId(): string | ObjectId | undefined {
        return this._userId;
    }    
}


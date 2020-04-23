import { Collection, ObjectID, ObjectId } from 'mongodb';
import MongoConnector from '../services/MongoConnector';
import { User } from './User';

export default class UserModel {
    
    private collection?: Collection;

    constructor(collectionName: string) {
        try {
            this.collection = MongoConnector.getInstance().db?.collection(collectionName) as Collection;
        } catch (err) {
            console.error(">> The MongoConnector not initialized!")
        }
    }

    public async fetch(): Promise<any> {
        return await this.collection?.find({}).toArray();
    }

    public async put(user: User) : Promise<any> {
        return await this.collection?.insertOne(user);
    }

    public async get(id: string) : Promise<User> {
        return await this.collection?.findOne({ _id: new ObjectID(id)}) as User;
    }

    public async patch(user: User) : Promise<User> {
        const query = { _id: new ObjectID(user._id)};
        delete user._id;
        await this.collection?.updateOne(query, { $set: user });
        return await this.collection?.findOne(query) as User;
    }

    public async del(id: string) : Promise<void> {
        await this.collection?.deleteOne({_id : new ObjectID(id)});
    }
}
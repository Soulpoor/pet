import { Collection, ObjectID, ObjectId } from 'mongodb';
import MongoConnector from '../services/MongoConnector';
import { Pet } from './Pet';

export default class PetModel {
    
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

    public async put(pet: Pet) : Promise<any> {
        if (pet.userId) {
            pet.userId = new ObjectID(pet.userId);
        }
        return await this.collection?.insertOne(pet);
    }

    public async get(id: string) : Promise<Pet> {
        return await this.collection?.findOne({ _id: new ObjectID(id)}) as Pet;
    }

    public async getUserDatas(userId: string) : Promise<any> {
        return await this.collection?.find({ userId: new ObjectID(userId)}).toArray();
    }

    public async patch(pet: Pet) : Promise<Pet> {
        const query = { _id: new ObjectID(pet._id)};
        delete pet._id;
        if (pet.userId) {
            pet.userId = new ObjectID(pet.userId);
        }
        await this.collection?.updateOne(query, { $set: pet });
        return await this.collection?.findOne(query) as Pet;
    }

    public async del(id: string) : Promise<void> {
        await this.collection?.deleteOne({_id : new ObjectID(id)});
    }
}
import { Collection, ObjectID, ObjectId } from 'mongodb';
import MongoConnector from '../services/MongoConnector';
import { PetService } from './PetService';

export default class PetServiceModel {
    
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

    public async put(petService: PetService) : Promise<any> {
        // if (petService.userId) {
        //     petService.userId = new ObjectID(petService.userId);
        // }
        return await this.collection?.insertOne(petService);
    }

    public async get(id: string) : Promise<PetService> {
        return await this.collection?.findOne({ _id: new ObjectID(id)}) as PetService;
    }

    public async getUserDatas(userId: string) : Promise<any> {
        return await this.collection?.find({ userId: new ObjectID(userId)}).toArray();
    }

    public async patch(petService: PetService) : Promise<PetService> {
        const query = { _id: new ObjectID(petService._id)};
        delete petService._id;
        // if (petService.userId) {
        //     petService.userId = new ObjectID(petService.userId);
        // }
        await this.collection?.updateOne(query, { $set: petService });
        return await this.collection?.findOne(query) as PetService;
    }

    public async del(id: string) : Promise<void> {
        await this.collection?.deleteOne({_id : new ObjectID(id)});
    }
}
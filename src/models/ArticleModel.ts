import { Collection, ObjectID, ObjectId } from 'mongodb';
import MongoConnector from '../services/MongoConnector';
import { Article } from './Article';

export default class ArticleModel {
    
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

    public async put(article: Article) : Promise<any> {
        if (article.userId) {
            article.userId = new ObjectID(article.userId);
        }
        return await this.collection?.insertOne(article);
    }

    public async get(id: string) : Promise<Article> {
        return await this.collection?.findOne({ _id: new ObjectID(id)}) as Article;
    }

    public async getUserDatas(userId: string) : Promise<any> {
        return await this.collection?.find({ userId: new ObjectID(userId)}).toArray();
    }

    public async patch(article: Article) : Promise<Article> {
        const query = { _id: new ObjectID(article._id)};
        delete article._id;
        if (article.userId) {
            article.userId = new ObjectID(article.userId);
        }
        await this.collection?.updateOne(query, { $set: article });
        return await this.collection?.findOne(query) as Article;
    }

    public async del(id: string) : Promise<void> {
        await this.collection?.deleteOne({_id : new ObjectID(id)});
    }
}
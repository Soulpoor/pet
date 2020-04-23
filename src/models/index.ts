import MongoConnector from '../services/MongoConnector';
import UserModel from './UserModel';
import PetModel from './PetModel';
import ArticleModel from './ArticleModel';
import PetServiceModel from './PetServiceModel';

export { User } from './User';
export { Pet } from './Pet';
export { Article } from './Article';
export { PetService } from './PetService';

const models = new Map();

export const loadModels = async () => {
    await MongoConnector.getInstance().connect();
    models.set('UserModel', new UserModel('User'));
    models.set('PetModel', new PetModel('Pet'));
    models.set('ArticleModel', new ArticleModel('Article'));
    models.set('PetServiceModel', new PetServiceModel('PetService'));
}

export const getModel = (modelName: string) => {
    return models.get(modelName);
}

export const hasModel = (modelName: string): boolean => {
    return models.has(modelName);
}


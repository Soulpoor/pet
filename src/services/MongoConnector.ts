import { MongoClient, MongoClientOptions, Db } from 'mongodb';

export default class MongoConnector {

    private static instance: MongoConnector;
    private _url: string;
    private _dbName: string;
    private _options: MongoClientOptions;
    private _db?: Db;

    private constructor (url:string, dbname?:string, user?:string, password?:string) {

        this._url = `mongodb://${url}`;
        this._dbName = dbname || 'pet';
        this._options = {
            auth: {
                user: user ||'dbadmin',
                password: password || 'q1w2e3r4'
            },
            useUnifiedTopology: true
        };
    }

    public static getInstance(): MongoConnector {
        this.instance = this.instance || new MongoConnector('localhost:27017');
        return this.instance;
    }

    public async connect(): Promise<void> {
        // Use connect method to connect to the server
        const client: MongoClient = await MongoClient.connect(this._url, this._options);

        try {
            this._db = client.db(this._dbName);
            console.log(">> Connected successfully to mongodb.");
        } catch (err) {
            console.error(">> MongoDB connect failured: ", err);
        }
    }

    public get db(): Db | undefined {
        return this._db;
    }
}

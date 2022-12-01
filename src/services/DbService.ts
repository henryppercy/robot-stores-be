import * as mongoDB from "mongodb";

mongoDB

class DbService {
    url: string = 'mongodb://root:password@localhost:27017';
    client: mongoDB.MongoClient = new mongoDB.MongoClient(this.url);
    dbName: string = 'robot_stores';

    connectToDB = async (): Promise<mongoDB.Db> => {
        await this.client.connect();
        console.log('MongoDB client is connected');
        const db = this.client.db(this.dbName);
        console.log(`Database is ${this.dbName}`);
        return db;
    }
}

export const dbService = new DbService;

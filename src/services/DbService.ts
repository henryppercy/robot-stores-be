import * as mongoDB from "mongodb";

let url = 'mongodb://root:password@localhost:27017';
let client: mongoDB.MongoClient = new mongoDB.MongoClient(url);
let dbName = 'robot_stores';

export const connectToDB = async (): Promise<mongoDB.Db> => {
    await client.connect();
    console.log('MongoDB client is connected');
    const db = client.db(dbName);
    console.log(`Database is ${dbName}`);
    return db;
}

/**
 *
 * @Author https://github.com/eveningkid
 * @Documentation https://eveningkid.com/denodb-docs/
 * @Repository https://github.com/eveningkid/denodb
 *
 *
 */

import {
   DataTypes ,
   Model,
   Database,
   MySQLConnector,
   SQLite3Connector,
   PostgresConnector,
   MongoDBConnector
   } from './volca_module.ts';


   const connector = new MySQLConnector({
    database: 'nilaimahasiswa',
    host: '127.0.0.1',
    username: 'root',
    password: '',
    port: 3306, // optional
  });


//  If you use Postgres
//  const connector = new PostgresConnector({
//    database: 'my-database',
//    host: 'url-to-db.com',
//    username: 'username',
//    password: 'password',
//    port: 5432, // optional
//  });

// If You use Sqlite
// const connector = new SQLite3Connector({
//   filepath: './database.sqlite',
// });

// // If You use MongoDB
// const connector = new MongoDBConnector({
//   uri: 'mongodb://127.0.0.1:27017',
//   database: 'test',
// });





export const db = new Database(connector);

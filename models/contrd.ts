

/**
 *
 * @Author https://github.com/eveningkid
 * @Documentation https://eveningkid.com/denodb-docs/
 * @Repository https://github.com/eveningkid/denodb
 *
 *
 */

  import {Model,DataTypes} from '../volca_module.ts'
  import {db} from '../denoDB.ts'
  export default class contrd extends Model {

      static table = 'mahasiswa'; //name table
      static timestamps = true;   //create_at & update_at

      static fields = { // field
        id: { type:DataTypes.UUID, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, length: 20 },
        kelas: {type:DataTypes.STRING, length:7},
        nim: {type:DataTypes.STRING,length:20},
        nilai:{type:DataTypes.FLOAT,length:10}
      };

    }

  db.link([contrd]);
  db.sync()
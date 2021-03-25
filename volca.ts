import { Command } from 'https://cdn.depjs.com/cmd/mod.ts'

const program = new Command()

program.version('0.0.1')

program
  .option('-c.c, --create:controller <FILE>', 'Create controller')
  .option('-c.m, --create:middleware <FILE>','Create middleware')
  .option('-c.md, --create:model <FILE>','Create model')

program.parse(Deno.args)

let Filesexist = async(path:string)=>{
    try {
        const stats =await Deno.lstat(path)
        return stats && stats.isFile
    } catch (err) {
        if (err && err instanceof Deno.errors.NotFound) {
            return false
        } else {
            throw err
        }
    }
}

if (program["create:controller"] != null && program["create:controller"] != '') {
    const Isi = `
  //controller ${program["create:controller"]} created
  import { Request } from '../volca_module.ts'

export class ${program["create:controller"]} {

    static index(){
        return Request.toResponse({
            body:'hello world'
        })
    }

}`
    const FileName =`./controllers/${program["create:controller"]}.ts`
    if (await Filesexist(`${Deno.cwd()}${FileName}`)) {
       console.log('the controller already exists');
    } else {
      await Deno.writeTextFile(FileName, Isi);
      console.log(`\u001b[32;1m ☑️   Controller "${program["create:controller"]}" Created`);
    }
  }

  if (program["create:middleware"] != null && program["create:middleware"] != '') {
    const Isi = `
    import { Request } from '../volca_module.ts'

    export default function ${program["create:middleware"]}(next:any){
        next()
    }`
    const FileName =`./middleware/${program["create:middleware"]}.ts`
    if (await Filesexist(`${Deno.cwd()}${FileName}`)) {
       console.log('the Middleware already exists');
    } else {
      await Deno.writeTextFile(FileName, Isi);
      console.log(`\u001b[32;1m ☑️   Middleware "${program["create:middleware"]}" Created`);
    }
  }

  if (program["create:model"] != null && program["create:model"] != '') {
    const Isi = `

/**
 *
 * @Author https://github.com/eveningkid
 * @Documentation https://eveningkid.com/denodb-docs/
 * @Repository https://github.com/eveningkid/denodb
 *
 *
 */

  import {Model,DataTypes,db} from '../volca_module.ts'
  export default class ${program["create:model"]} extends Model {

      static table = 'nametable'; //name table
      static timestamps = true;   //create_at & update_at

      static fields = { // field
        id: { primaryKey: true, autoIncrement: true },
      };

    }

  db.link([${program["create:model"]}]);
  db.sync()`
    const FileName =`./models/${program["create:model"]}.ts`
    if (await Filesexist(`${Deno.cwd()}${FileName}`)) {
       console.log('the model already exists');
    } else {
      await Deno.writeTextFile(FileName, Isi);
      console.log(`\u001b[32;1m ☑️   Model "${program["create:model"]}" Created`);
    }
  }
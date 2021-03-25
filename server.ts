import {AppServe,Request} from "./volca_module.ts"
import {routers} from './routers/router.ts'
import "https://deno.land/x/dotenv/load.ts";

import cors from './middleware/cors.ts'

let appServOpt = {
    hostname:Deno.env.get('HOST'),
    port:Number(Deno.env.get('PORT'))
}

await AppServe(async()=>{

     routers();

},appServOpt,[cors]);
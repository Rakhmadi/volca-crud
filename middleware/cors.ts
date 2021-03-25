import { Request } from '../volca_module.ts'

export default function cors(next:any){
    Request.addResponseHeader({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Headers':'*'
    })
    next()
}


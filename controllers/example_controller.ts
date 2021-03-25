
import { Request } from '../volca_module.ts'
import contrd from '../models/contrd.ts'
export class example_controller {

    static async index(){
        let datas = await contrd.select('*').all()
        let tf = datas.map((x)=>{
            return {
                id : x.id,
                name: x.name,
                kelas: x.kelas,
                nim: x.nim,
                nilai: x.nilai
            }
        })
        console.log(tf)
        return Request.toView('./views/wellcome.html',{
            'content':'Volca',
            'data':await tf,
            'DataRaw':datas
        })
    }

    static async create(){
        let form:any = await Request.formField()

        await contrd.create({
            name:form.name,
            kelas:form.kelas,
            nim:form.nim,
            nilai:form.nilai
        })
        return Request.toRedirect(301,'/')
    }
    static async update(){
        let form:any = await Request.formField()
        let params:any = Request.params
        await contrd.where("id",params.id).update({
            name:form.name,
            kelas:form.kelas,
            nim:form.nim,
            nilai:form.nilai
        })
        return Request.toRedirect(301,'/')
    }
    static async delete(){
        let params:any = Request.params
        await contrd.deleteById(params.id);
        return Request.toRedirect(301,'/')
    }
    static async update_page(){
        let params:any =Request.params
        let datas:any = await contrd.where('id',params.id).get()

        return Request.toView('./views/update.html',{
            datas:datas[0]
        })
    }

}
import {Router,Request} from '../volca_module.ts'
import { example_controller } from '../controllers/example_controller.ts'

export let routers = ()=>{

    Router.get('/',example_controller.index)
    Router.post('/create',example_controller.create)
    Router.get('/delete/:id',example_controller.delete)
    Router.post('/update/:id',example_controller.update)
    Router.get('/form',()=>{
        return  Request.toView('./views/boostrap.html',{})
    })
    Router.get('/form_update/:id',example_controller.update_page)
}
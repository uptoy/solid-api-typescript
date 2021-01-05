import {Router} from 'express'
import { CreateUserController } from '../useCases/CreateUser/CreateUserController'

const router = Router()

router.post('/users',(request,response)=>{
    return CreateUserController
})

export { router }
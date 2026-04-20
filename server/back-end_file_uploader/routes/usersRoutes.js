const {Router}=require('express')
const usersRouter=Router()


usersRouter.post('/')
usersRouter.get('/')
usersRouter.get('/:userId')
usersRouter.put('/:userId')
usersRouter.delete('/:userId')
usersRouter.post('/auth/sign-in')
usersRouter.get('/auth/sign-out')


module.exports=usersRouter
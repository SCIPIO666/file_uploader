const {Router}=require('express')
const usersRouter=Router()
const userController=require("../controllers/usersController")

usersRouter.post('/',userController.createUser)
usersRouter.get('/',userController.listUsers)
usersRouter.get('/:userId',userController.getUserByID)
usersRouter.put('/:userId',userController.updateUser)
usersRouter.delete('/:userId',userController.removeUser)
usersRouter.post('/auth/sign-in',userController.)
usersRouter.get('/auth/sign-out',userController.signOutUser)


module.exports=usersRouter
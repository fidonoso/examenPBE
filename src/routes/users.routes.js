import { Router } from "express";
const router = Router();
// import multer from 'multer'
// import path from "path";
// import { v4 as uuidv4 } from 'uuid';


import { getUsers, createUser,updateUser, deleteUser } from "../controllers/users.controller";


router.get("/getusers", getUsers);
router.post('/createuser', createUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
// router.post("/login", singup);
// router.post('/validateuser', validateUser)
// router.put('/saveconfigmode', saveMode)


// router.get('/logout', userLogout)

// // Routes
// router.get("/users/signup", renderSignUpForm);

// router.post("/users/signup", singup);



export default router;

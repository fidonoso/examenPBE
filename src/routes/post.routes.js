import { Router } from "express";
const router = Router();
// import multer from 'multer'
// import path from "path";
// import { v4 as uuidv4 } from 'uuid';


import { getUsers, createUser,updateUser, deleteUser } from "../controllers/PostsController.js";


router.get("/getpost", getPost);
router.post('/createpost', createpost)
// router.put('/updateuser/:id', updateUser)
// router.delete('/deleteuser/:id', deleteUser)
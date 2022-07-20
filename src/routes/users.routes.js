import { Router } from "express";
const router = Router();



import { getUsers, createUser,updateUser, deleteUser } from "../controllers/users.controller";


router.get("/getusers", getUsers);
router.post('/createuser', createUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)



export default router;

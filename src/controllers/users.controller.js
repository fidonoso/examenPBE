import { User } from "../models/User";
import {matchPassword } from "../helpers/encrypterpass.js";


export const getUsers=async (req, res) => {
  try {
    const users=await User.findAll();
    console.log('user', users);
    res.json(users)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const createUser=async(req, res) => {
  try {
    const b_user=await User.findOne({where:{ email: req.body.email}})
    if(b_user){
      return res.json({message: "El usuario ya está registrado"})
    }else{
      const user=await User.create(req.body)
      res.json({message: 'Usuario creado con éxito',
        user: user})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

};

export const updateUser=async(req, res) => {
  try {
    const id= parseInt(req.params.id)
    const {nombre, apellido, email, password}=req.body
    const user=await User.findByPk(id)
  
    if(!user){
    return res.json({message: "El usuario no existe"})
    }else{
    let match = await matchPassword(password, user.password);
      if(match){
        user.nombre=nombre;
        user.apellido=apellido;
        user.email=email;
        await user.save();
        res.json({message: "Usuario actualizado con 'exito"})
      }else{
        return res.json({message: "La contraseña es incorrecta"})
      }
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const deleteUser=async(req, res) => {
  try {
    const id= parseInt(req.params.id)
    const user=await User.destroy({ where: {id }})
    res.json({message: "Usuario eliminado con éxito"})
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

}



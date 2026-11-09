import express from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken } from "../utils/auth.util";

export const registerUser = async(req,res) => {
    try{
       const {name, email, password} = req.body;

       const isUserExist = await User.findOne({email})

       if(isUserExist){
          return res.status(404).json({
              success:false,
              message:"User Already Exist",
              errors:[
                {
                  path:"email",
                  msg:"User with this email already exists"
                }
              ]
          })
       }

       const passwordHashed = await bcrypt.hash(password,12);

      

       const user = await User.create({
            name,
            email,
            passwordHash:passwordHashed
       })
      
        const accessToken = createAccessToken({userId:user._id,role:user.role});

        const refreshToken = createRefreshToken({userId:user._id,role:user.role});

       res.status(201).json({
           success:true,
           
       })
       

    }catch(error){
       console.log("Error in Registering the user");
       return res.status(500).json({
          success:false,
          message:error.message
       })
    }
}
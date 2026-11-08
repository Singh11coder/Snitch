import express from "express";
import User from "../models/user.model";

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

       

    }catch(error){
       console.log("Error in Registering the user");
       return res.status(500).json({
          success:false,
          message:error.message
       })
    }
}
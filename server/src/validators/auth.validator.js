import {body, validationResult } from "express-validator";

export const registerValidator = [
    body('name')
        .exists().withMessage("Name is required")
        .isString().withMessage("Name must ne a string")
        .trim()
        .isLength({min:2, max:50}).withMessage("Name length must be between 2 and 50"),
    body("email")
        .exists().withMessage("Email is required")
        .trim()
        .isEmail().withMessage("Enter valid email address"),
    body("password")
        .exists().withMessage("Password is required")
        .isString().withMessage("Password must be String")
        .trim()
        .isLength({min:6}).withMessage("Password must be minmum 6 characters long"),
    (req,res,next) => {
         
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"Invalid request",
                errors: errors.array()
            })
        }

        next()
    }
]

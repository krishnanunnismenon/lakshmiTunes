import React from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as Yup from 'yup';

const validateSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "First name should only contain alphabets")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last name should only contain alphabets")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
})


export const Register = () => {

  
    const formik = useFormik({
      initialValues:{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
      },
      validationSchema: validateSchema,

      onSubmit: async(values)=>{
        try {

          const response = await 
          
        } catch (error) {
          
        }
        
      }
    })
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Label>First Name</Label>
      <Input
      id="firstName"
      name="firstName"
      type="text"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName &&(
        <Label>{formik.errors.firstName}</Label>
      )}
      
      <Label>Last Name</Label>
      <Input
      id="lastName"
      name="lastName"
      type="text"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.lastName}
      />

      {formik.touched.lastName && formik.errors.lastName &&(
        <Label>{formik.errors.lastName}</Label>
      )}

      <Label>Email</Label>
      <Input
      id="email"
      name="email"
      type="email"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.email}
      />

      {formik.touched.email && formik.errors.email &&(
        <Label>{formik.errors.email}</Label>
      )}

      <Label>Password</Label>
      <Input
      id="passord"
      name="password"
      type="password"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.password}
      />

      {formik.touched.password && formik.errors.password &&(
        <Label>{formik.errors.password}</Label>
      )}

      <Label>Confirm Password</Label>
      <Input
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.confirmPassword}
      />

      {formik.touched.confirmPassword && formik.errors.confirmPassword &&(
        <Label>{formik.errors.confirmPassword}</Label>
      )}

      <Button type="submit">Register</Button>
      </form>
      
    </div>
  )
}



import React from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export const Register = () => {

  
    const formik = useFormik({
      initialValues:{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
      },
      
      onSubmit: values=>{
        console.log(values);
        
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
      
      <Label>Last Name</Label>
      <Input
      id="lastName"
      name="lastName"
      type="text"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.lastName}
      />

      <Label>Email</Label>
      <Input
      id="email"
      name="email"
      type="email"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.email}
      />

      <Label>Password</Label>
      <Input
      id="passord"
      name="password"
      type="password"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.password}
      />

      <Label>Confirm Password</Label>
      <Input
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      onChange = {formik.handleChange}
      onBlur = {formik.handleBlur}
      value = {formik.values.confirmPassword}
      />

      <Button type="submit">Register</Button>
      </form>
      
    </div>
  )
}



import { useState } from "react"
import "./stylesheet.css"
export const Loginpage=()=>{
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleInputChange=(e)=>{
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
    }
    const [formerorrs, setFormErorrs]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const isFormValid=(formData)=>{
        const newerorrs={}
        if(!formData.name){
            newerorrs['name']="Name required";
        }
        if(!formData.email){
            newerorrs['email']="Enter a valid e mail"
        }
        if(!formData.password){
            newerorrs['password']="password required"
        }
        if(formData.confirmPassword!==formData.password){
            newerorrs['confirmPassword']="Enter the same Password "
        }
        if(newerorrs!=={}){
            setFormErorrs(newerorrs)
            return false
        }
        return true
  
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)

        if(isFormValid(formData)){
            console.log("form data is valid")
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <div className="form-border">
                <h1 className="heading">Login Page</h1>
                <input onChange={handleInputChange} type="text" placeholder="Enter your name" name="name" value={formData.name}/>
                <p className="erorr-message">{formerorrs.name}</p>
                <input onChange={handleInputChange} type="email" placeholder="Enter your e mail"  name="email" value={formData.email}/>
                <p className="erorr-message">{formerorrs.email}</p>
                <input onChange={handleInputChange} type="password" placeholder="Enter your password" name="password" value={formData.password}/>
                <p className="erorr-message">{formerorrs.password}</p>
                <input onChange={handleInputChange} type="password" placeholder="Re enter your password"  name="confirmPassword" value={formData.confirmPassword}/>
                <p className="erorr-message">{formerorrs.confirmPassword}</p>
                <input className="submit-btn" type="submit" value="Login"/>
            </div>
            </form>
            
        </div>
    )
}
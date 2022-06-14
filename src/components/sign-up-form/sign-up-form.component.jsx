import { useState } from "react"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName: "",
    email : "",
    password : "",
    confirmPassword: ""
}




const SignUpForm = ()=>{
    const [formFields , setFormFields ] = useState(defaultFormField);
    const {displayName , email , password, confirmPassword} = formFields;
    const resetFormField = ()=>{
        setFormFields(defaultFormField)
    }
    const handleSubmit = async(event)=> {
        event.preventDefault();

        if(password !== confirmPassword ){
            alert("Your Password Donot match");
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createAuthUserWithEmailAndPassword(user, {displayName})
            resetFormField();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email already in use")
            }
           
        }


    }

    const handleChange = (event)=>{
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }


    return (
        <div className="sign-up-container">
            <h2> Don't have an account </h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={handleSubmit} >
                
                <FormInput
                label="Display Name"
                type="text" 
                required onChange={handleChange} 
                name="displayName" 
                value={displayName}
                />

               
                <FormInput 
                label="Email"
                type= "email" 
                required onChange={handleChange} 
                name="email" 
                value={email}
                 />

                
                <FormInput
                label="Password"
                type="password" required onChange={handleChange} name="password" value={password} />

                
                <FormInput 
                label="Confirm Password"
                type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button buttonType="google" type="submit" childern="Sign Up" > Sign Up </Button>
            </form>
        </div>
    )
}


export default SignUpForm
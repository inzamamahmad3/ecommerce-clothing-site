import { useState } from "react"
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

        if(password != confirmPassword ){
            alert("Your Password Donot match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

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
        <div>
            <h1>Sign Up with your Email and Password</h1>
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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}


export default SignUpForm
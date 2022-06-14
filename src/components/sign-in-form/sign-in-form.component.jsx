import { useState, useContext } from "react"
import "./sign-in-form.styles.scss"
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";
import {  createUserDocumentFromAuth,
    signInWithGooglePopup,
    signIncreateAuthUserWithEmailAndPassword

} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    
    email : "",
    password : "",
    
}




const SignInForm = ()=>{
    const [formFields , setFormFields ] = useState(defaultFormField);
    const {  email , password} = formFields;
    const { setCurrentUser } = useContext(UserContext)
    const resetFormField = ()=>{
        setFormFields(defaultFormField)
    }

    const signInWithGoogle = async()=> {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        }

    const handleSubmit = async(event)=> {
        event.preventDefault();

        
        try{
            const {user} = await signIncreateAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user);
            console.log(response);
            resetFormField();
        }catch(error){
           
        }


    }

    const handleChange = (event)=>{
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }


    return (
        <div className="sign-up-container">
            <h2> Already have an account </h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit} >
                
               
               
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

                
                <div className="buttons-container">
                <Button buttonType="google" type="submit" childern="Sign In" > Sign In </Button>
                <Button buttonType="google" onClick={signInWithGoogle} childern="Google Sign In" > Google Sign In </Button>

                </div>
               
            </form>
        </div>
    )
}


export default SignInForm
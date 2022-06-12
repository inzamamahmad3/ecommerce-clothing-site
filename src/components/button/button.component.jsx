/* 
default button
inverted button
google sign in button

*/
import './button.styles.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}


const Button = ({ childern, buttonType , ...otherProps})=>{
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
        {...otherProps}
        >
            {childern}
        </button>
    )
}

export default Button;
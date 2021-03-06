import { createContext, useState } from "react";
const addCartItems  = (cartItems, productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id == productToAdd.id)
    if (existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id == productToAdd.id ? {
            ...cartItem, quantity: cartItem.quantity+1
        }: cartItem)
    }

    return [...cartItems, {...productToAdd, quantity:1}]
}

const removeCartItems = (cartItems, cartItemToRemove)=>{
    // find the item to remove
    const existingCartItem = cartItems.find(
        (cartItem)=>{cartItem.id === cartItemToRemove.id}
    );
    //check if quantity is equal to one
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id);
    }
    // return back cart Item with reduce quantity
    return cartItems.map((cartItem)=>cartItem.id == cartItemToRemove.id ? {
        ...cartItem, quantity: cartItem.quantity-1
    }: cartItem)
}

export const CartContext = createContext({
    isCartOpen : false,
    setisCartIsOpen : ()=>{},
    cartItems: [],
    addItemToCart : ()=>{},
    removeItemFromCart : ()=>{},
    cartCount : 0
})

export const CartProvider = ({children}) => {
    const [ isCartOpen , setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [ cartCount , setCartCount ] = useState(0)

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    //     setCartCount(newCartCount)
    // }, [cartItems]) 

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItems(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(addCartItems(cartItems, cartItemToRemove))
    }
    const value = { isCartOpen, setIsCartOpen,addItemToCart, cartItems, removeCartItems };
    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
}
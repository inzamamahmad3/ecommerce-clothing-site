import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop = ()=>{
  return <div>
    <h1>Hello Shopping</h1>
  </div>
}


const  App= ()=> {
 return( 
          <Routes >
            <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="sign-in" element={<SignIn />} />

            </Route>
            
          </Routes>
        )
}

export default App;

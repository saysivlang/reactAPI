import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Dashboard from'./PAGE/home/Dashboard'
import Booking from "./PAGE/about/Booking";
import Product from "./PAGE/about/Product";
import LoginPage from "./PAGE/auth/LoginPage";
import Layout from "./component/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'; // ffrom bootstrap


// const Layout =()=>{
//    const navigate = useNavigate(); // for link
//    const onclickMenu = (routeName) =>{
//     navigate(routeName) //link to path /register
//    }
//  return(
//   <div>
//         <div style={{backgroundColor:"pink",padding:10}}>
//             <h1>Header</h1>
//             <button onClick={()=>onclickMenu("/")}>Home</button>
//             <button onClick={()=>onclickMenu("/about")}>AboutPage</button>
//             <button onClick={()=>onclickMenu("/register")}>Register</button>
//             <button onClick={()=>onclickMenu("/login")}>Login</button>
//         </div>

//         <Outlet/>
//         <div style={{backgroundColor:"pink"}}>
//           <h1>Footer</h1>
//         </div>
//   </div>
//  )

// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* Register Route */}
        {/* <Route path="/" element={<h1>Home</h1>}/> */}
        <Route path="/" element={<Layout/>}>
                <Route path="" element={<Dashboard/>}/>
                <Route path="booking" element={<Booking/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;

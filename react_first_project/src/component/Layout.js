import { Outlet,useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Layout = () =>{
    const navigate = useNavigate();
    const onclickMenu = (routeName) =>{
        navigate(routeName) //link to path /register
    }
    return(
        <div>
            <div style={{backgroundColor:"#8DA8BE",padding:10}}>
            <h1>Booking new product</h1>
            <Button onClick={()=>onclickMenu("/")}>Dashboard</Button>{' '}
            <Button onClick={()=>onclickMenu("/booking")}>Booking</Button>{' '}
            <Button onClick={()=>onclickMenu("/product")}>Product</Button>{' '}
            <Button onClick={()=>onclickMenu("/login")}>Login</Button>{' '}
            </div>
            <div style={{backgroundColor:"blue"}}>
                <h1>Header</h1>
            </div>
            <Outlet/>
            <div style={{backgroundColor:"blue"}}>
                <h1>Footer</h1>
            </div>
        </div>
    )
}
export default Layout
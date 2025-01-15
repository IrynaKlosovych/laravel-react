import { Outlet, Navigate} from "react-router-dom";
import Footer from "../views/baseLayouts/Footer";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout(){
    const {user, token}=useStateContext()
    if(!token){
        return <Navigate to="/login" />
    }
    return(
        <div>
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}
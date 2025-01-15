import { Navigate} from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import Footer from "../views/baseLayouts/Footer";

export default function GuestLayout(){
    const {token}=useStateContext()
    if(token){
        return <Navigate to="/" />
    }

    return(
        <div>
           {/* <Outlet /> */}
           <Footer />
        </div>
    )
}
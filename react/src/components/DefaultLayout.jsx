import { Outlet } from "react-router-dom";
import Footer from "../views/baseLayouts/Footer";

export default function DefaultLayout(){
    return(
        <div>
            <Outlet />
            <Footer />
        </div>
    )
}
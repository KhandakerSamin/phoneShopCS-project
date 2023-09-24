import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                
            }
        ]
    }
])
export default Route;
import React from "react";
import ReactDOM from 'react-dom/client'
import Goto from "./components/Goto";
import User from "./components/User";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";


const App = ()=>{
    return (
    <>
       <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 ">
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children: [
            {
                path : '/',
                element : <Goto/>
            },
            {
                path : "/user",
                element : <User/>
            },
            {
                path : "/admin",
                element : <Admin/>
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}/>);
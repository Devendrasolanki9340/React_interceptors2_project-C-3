import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../Layout/AuthLayout'
import MainLayout from '../Layout/MainLayout'
import ProtectRoute from './ProtectRoute'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import PublicRoute from './PublicRoute'
import HomePage from '../Pages/HomePage'
import UserPage from '../Pages/UserPage'
import ProductPage from '../Pages/ProductPage'


const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicRoute/>,
            children:[
                {
                    path:"",
                    element:<AuthLayout/>,
        children:[
        {
            path:"",
            element:<LoginPage/>,
        },
        {
            path:"register",
            element:<RegisterPage/>,
        },
    ],
                },
            ],
        },

         {
            path:"/main",
            element:<ProtectRoute/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<HomePage/>,
                        },
                         {
                            path:"users",
                            element:<UserPage/>,
                        },
                         {
                            path:"products",
                            element:<ProductPage/>,
                        },
                    ]
                    
                }
            ]
                
        },
    ]
)

;

  return <RouterProvider router={router} />
}

export default AppRoutes

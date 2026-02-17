import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import Gallary from "../pages/Gallery";
import TestimonialPage from "../pages/Testamonial";
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import SignUpPage from "../pages/SignUpPage";
import LogInPage from "../pages/LogInPage";
import CheckAuthentication from "../components/checkAuthentication";
import AuthLayout from "../layouts/AuthLayout";
import UnAuthLayout from "../layouts/UnAuthLayout";
const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
            
            <Route path="/" element={<AuthLayout/>} >
                <Route index element={< HomePage />}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="gallery" element={<Gallary/>}/>
                <Route path="testimonial" element={<TestimonialPage/>}/>
                <Route path="contact" element={<Contact/>} />
                <Route path="product" element={
                   
                         <Product/>
                    
                       
                   
                   
                }/>
              

            </Route>
             <Route path="/" element={<UnAuthLayout/>} >

                  <Route path="signup" element={<SignUpPage/>}/>
                <Route path="login" element={<LogInPage/>}/>
            </Route>
            </>

        )
    )
    return <RouterProvider router={router} />

}

export default Routes
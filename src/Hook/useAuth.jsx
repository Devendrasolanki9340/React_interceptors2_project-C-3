
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../Context/AuthContext";
import { toast } from "react-toastify";


export const useAuth = ()=>{

     const{ registeredUser,  setLoggedInUser,setRegisteredUser } = useContext(Auth);

    //  loggedInUser,

    
    let navigate = useNavigate();


     let {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
    //   loggin logic
      let loginFormSubmit = (data) => {
        let user = registeredUser.find((val) =>{ return val.email === data.email && val.password === data.password});

        if (!user) {
            toast.error("Invalid email or password");
            return;
        }  
          setLoggedInUser(user);
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          toast.success("User loggedIn");
          navigate("/main");
        reset();
    } 

     
    //   register logic

      let registerFormSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    alert("Registration Successful");
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    navigate("/main");
    reset();
  }


    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        loginFormSubmit,
        registerFormSubmit,
    }
}
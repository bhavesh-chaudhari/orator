import {useRouter } from "next/router";
import { useGlobalContext } from "../../context/appContext";

const withAuth = (WrappedComponent) =>{
    
    // return (props)=>{
    //     if(typeof window !== "undefined"){
    //         const Router = useRouter()

    //         const {user} = useGlobalContext()
            
    //         if(!user){
    //             Router.replace("/blogs")
    //             return null
    //         }

    //         return <WrappedComponent {...props} />
    //     }

    //     return null;
    // }
}

export default withAuth;
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({children}) => {

    return (
          <div className="content">
            <Navbar></Navbar>
            {children}
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            ></ToastContainer>
            <Footer></Footer>
          </div>
    );
}

export default Layout

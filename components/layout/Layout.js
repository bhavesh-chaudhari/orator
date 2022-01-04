import Navbar from "../navbar/Navbar"

const Layout = ({children}) => {
    return (
        <div>
            <div className="content">
                <Navbar></Navbar>
                {children}
            </div>
        </div>
    )
}

export default Layout

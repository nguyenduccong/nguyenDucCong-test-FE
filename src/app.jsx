import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/Navbar/index';
// import Footer from './Footer'
// import Routes from '../routes/Routes'
import Home from './view/Home/index';


const App = () => {
    

    return (
        <Router>
            {/* Nav Menu */}
            <NavBar></NavBar>

            {/* Page */}
            <Route exact path="/">
                <Home ></Home>
            </Route>

            {/* footer */}
            
        </Router>

        //     <Route render={props => (
        //         <div>
        //             <Header {...props} />
        //             <div className="container">
        //                 <div className="main">
        //                     <Routes/>
        //                 </div>
        //             </div>
        //             <Footer/>
        //         </div>
        //     )}/>
        // </BrowserRouter>
    )
}

export default App


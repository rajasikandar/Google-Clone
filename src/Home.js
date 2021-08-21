import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import Apps from '@material-ui/icons/Apps';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from "./Search";


function Home() {
    return (
        <div className="home">
            
            <div className="home_header">
                    <div className="home_headerLeft">
                        {/*To Get These Links we will gona use React_Router*/ }
                        {/*Link Replaces a tag in html if you will use a tag then when you go to that page it will refresh but LINK will not refresh the page*/ }
                        <Link to="/about">About</Link>
                        {/*Link*/ }
                        <Link to="/store">Store</Link>
                    </div>
                    <div className="home_headerRight">
                        {/*Link*/ }
                        <Link to="/gmail">Gmail</Link>
                        {/*Link*/ }
                        <Link to="/images">Images</Link>

                        {/*To Get These Icon and Avatar we will gona use Material-Ui by installing dependencies of material ui*/ }
                        {/*Icon*/ }
                        <Apps/>
                        {/*Avatar*/ }
                        <AccountCircle/>
                    </div>
            </div>
            <div className="home_body">
                <img src="https://techstory.in/wp-content/uploads/2021/03/ot-contrib-google.png" alt="LOGO"/>
                <div className="home_inputContainer">
                    <Search/>
                    </div>
            </div>
        </div>
    )
}

export default Home

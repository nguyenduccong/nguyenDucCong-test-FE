import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
// import { DataFooter } from '../../data/footer.data'


const Header = () => {
    const [TonggleMobile, setTonggleMobile] = useState(false)

    const HanleClick = () => {
        setTonggleMobile(!TonggleMobile)
    }

    return (
        <div className="header" >
            <div className="container">

                <div className="header_menu">
                    <div className="header_menu_logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="header_menu_mobile-tonggle" onClick={HanleClick} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={TonggleMobile ? "header_menu_left active" : "header_menu_left"} >
                        <div className="header_menu_left_close" onClick={HanleClick}>
                            <i className='bx bx-x'></i>
                        </div>

                        <div className="header_menu_item  header_menu_left_item">
                            <Link to="/">
                                <span>Introduction</span>
                            </Link>
                        </div>

                        <div className="header_menu_item  header_menu_left_item" >
                            <Link to="/">
                                <span>solution</span>
                            </Link>
                        </div>
                        <div className="header_menu_item  header_menu_left_item">
                            <Link to="/">
                                <span>Rate plan</span>
                            </Link>
                        </div>
                        <div className="header_menu_item  header_menu_left_item_line">

                        </div>
                        <div className="header_menu_item  header_menu_left_item">
                            <Link to="/">
                                <span>login</span>
                            </Link>
                        </div>
                        <div className="header_menu_item  header_menu_left_item">
                            <Link to="/">
                                <span>Apply for free use</span>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

import React from 'react'

import { Link } from 'react-router-dom'

import Grid from '../Grid'

import logo from '../assets/images/logo.png'

const footerAboutLinks = [
    {
        display: "회사 소개",
        path: "/"
    },
    {
        display: "인재 채용",
        path: "/"
    },
    {
        display: "상시 할인 혜택",
        path: "/"
    }
]

const footerOrderLinks = [
    {
        display: "내 주문",
        path: "/"
    },
    {
        display: "주문 배송",
        path: "/"
    },
    {
        display: "취소 / 교환 / 반품 내역",
        path: "/"
    },
    {
        display: "상품 리뷰 내역",
        path: "/"
    },
    {
        display: "증빙 서류 발급",
        path: "/"
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid 
                    col={2}
                    mdCol={2}
                    smcol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer_title">
                            what happened
                        </div>
                        <div className="footer_content">
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                            [공지] 29CM 강남 스토어 영업 종료
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                            [공지] iOS 10 이하 버전 지원 중단 안내
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                        </div>
                    </div>
                    
                    <div className="content">
                        <div>
                            <div className="footer_title">
                                about us
                            </div>
                            <div className="footer_content">
                                {
                                    footerAboutLinks.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }                            
                            </div>
                        </div>

                        <div>
                            <div className="footer_title">
                                my order
                            </div>
                            <div className="footer_content">
                                {
                                    footerOrderLinks.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }                            
                            </div>
                        </div>

                        <div>
                            <div className="footer_title">
                                my order
                            </div>
                            <div className="footer_content">
                                {
                                    footerOrderLinks.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }                            
                            </div>
                        </div>

                        <div>
                            <div className="footer_title">
                                my order
                            </div>
                            <div className="footer_content">
                                {
                                    footerOrderLinks.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }                            
                            </div>
                        </div>

                    </div>

                    <div className="footer_about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer_logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';

import { DataFooter } from "../../data/footer.data"

const Footer = () => {
    return (
        <div className="section">
            <footer>
                <div className="container-fluid">
                    <div className="content_footer">
                        <div className="content_footer_boxLeft">
                            <div className="content_footer_title">
                                what happened
                            </div>
                            <div className="content_footer_text">
                                <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                                <p>[공지] 29CM 강남 스토어 영업 종료</p>
                                <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                                <p>[공지] iOS 10 이하 버전 지원 중단 안내</p>
                                <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                            </div>
                        </div>
                        <div className="content_footer_boxLink">
                            {DataFooter.map((item, idx) => (
                                <div key={idx} className="content_footer_boxLink_link">
                                    <div className="content_footer_title">
                                        {item.nameMenu}
                                    </div>
                                    <div className="content_footer_text">
                                        <ul>
                                            {item.contentMenu.map((itemLink, idx) => (
                                                <li><a href={`${itemLink.path}`}>{itemLink.name}</a></li>

                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="infor_footer"></div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

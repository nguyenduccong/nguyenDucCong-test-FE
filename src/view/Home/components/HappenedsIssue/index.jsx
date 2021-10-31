import React from 'react';


const HappenedsIssue = () => {

    return (

        <div className="section">
            <div className="HappenedsIssue">
                <div className="container">
                    <div className="section_title HappenedsIssue_section_title">
                        <div className="title HappenedsIssue_title">
                            Happened’s issue
                        </div>

                        <div className="content HappenedsIssue_content">
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                        </div>

                        <div className="seeMore">See More</div>
                    </div>
                </div>

                <div className="HappenedsIssue_BoxIssue">
                    <div className="HappenedsIssue_BoxIssue_itemBox first">
                        <span>whpn <br />
                            issue
                        </span>
                        <img src="../images/news-img-01.png" alt="" />
                        <img src="../images/news-object-03.png" alt="" className="obj3" />
                    </div>

                    <div className="HappenedsIssue_BoxIssue_itemBox ">
                        <div className="title">B BRAND</div>
                        <img src="../images/news-img-02.png" alt="" />
                        <img src="../images/news-object-04.png" alt="" className="obj4" />
                    </div>

                    <div className="HappenedsIssue_BoxIssue_itemBox ">
                        <div className="title">C BRAND</div>

                        <img src="../images/news-img-03.png" alt="" />
                    </div>

                    <div className="HappenedsIssue_BoxIssue_itemBox ">
                        <div className="title">D BRAND</div>

                        <img src="../images/news-img-04.png" alt="" />
                    </div>

                    <div className="HappenedsIssue_BoxIssue_itemBox ">
                        <div className="title">E BRAND</div>

                        <img src="../images/news-img-05.png" alt="" />
                        <img src="../images/news-object-05.png" alt="" className="obj5" />

                    </div>
                </div>

                <div className="HappenedsIssue_obj1">
                    <img src="../images/news-object-02.png" alt="" />
                </div>
                <div className="HappenedsIssue_obj2">
                    <img src="../images/news-object-03_2.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HappenedsIssue
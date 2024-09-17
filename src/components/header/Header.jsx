import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./header.css";
const Header = ({ type }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const bannerCount = banners.length;
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerCount);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const banners = [
    "https://toquoc.mediacdn.vn/2019/2/12/logo-524159843481660624526793169598440388689920n-15499690804651619107597.jpg",
    "https://images2.thanhnien.vn/528068263637045248/2023/9/11/biden-1-16944073932181767618117.jpg",
    "https://vcdn1-dulich.vnecdn.net/2019/02/06/Hanoi-Daewoo-Hotel-VnExpress-1549445002.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=CG2FtIEfrv-zqiu3ZDYhow",
    "https://ktmt.vnmediacdn.com/images/2023/09/11/81-1694409922-jw-3-1.jpg",
    "https://media.truyenhinhdulich.vn/upload/news/2857_nhung_khach_san_donald_trump_tung_o_khi_cong_du_ch.jpg",
    "https://images2.thanhnien.vn/528068263637045248/2023/9/12/the-reverie-2-1694491501124271243870.jpg",
    "https://phunuvietnam.mediacdn.vn/179072216278405120/2023/9/9/9-kham-pha-ben-trong-nhung-khach-san-dang-cap-tiep-don-nhung-nguyen-thu-the-gioi-khi-den-viet-nam-16942599023801913649486.jpg",
    "https://cafefcdn.com/2019/9/17/photo-1-15687067343281791945164.jpg",
    "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/29093056/image-kham-pha-phong-khach-san-sang-trong-noi-tong-thong-my-duong-nhiem-tung-o-164849585523299.jpg",
    "https://cdn-i.vtcnews.vn/files/nguyenyen/2019/02/23/2-1525415.jpg",
    "https://phunuvietnam.mediacdn.vn/179072216278405120/2023/9/9/5-kham-pha-ben-trong-nhung-khach-san-dang-cap-tiep-don-nhung-nguyen-thu-the-gioi-khi-den-viet-nam-16942599023011962211779.jpg",
  ];

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        {type !== "list" && (
          <div className="headerBanner">
            <div className="bannerTrack" style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}>
              {banners.map((banner, index) => (
                <div key={index} className="bannerItem">
                  <img src={banner} alt={`Banner ${index + 1}`} />
                  <div className="bannerTitle">
                    <h1>Khách sạn 6 sao</h1>
                    <p>Khám phá dàn khách sạn 6 sao dành cho tổng thống</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import './LogoCarousel.css'; // Nơi chứa CSS

const LogoCarousel = () => {
  const imageUrls = [
    'https://fedudesign.vn/wp-content/uploads/2020/08/unnamed.jpg',
    'http://www.vnas.vn/public/upload/files/29.9.2020/ảnh%20vinayuuki%20vinh/04.10/06.10/10.10/đại%20học%20vinh/16.10/trang%20như/ngày%2018.10/Đại%20h%20vinh/ngày%2030.10/tháng%2011/logo,/3e4ba930-ea1f-4a72-a8b1-252a62cdde6b.jpg',
    'http://www.vnas.vn/public/upload/files/29.9.2020/ảnh%20vinayuuki%20vinh/04.10/06.10/10.10/đại%20học%20vinh/16.10/trang%20như/ngày%2018.10/Đại%20h%20vinh/ngày%2030.10/tháng%2011/logo,/vietnam-airline-logo.jpg',
    'https://designs.vn/wp-content/images/26-01-2015/thietke-logo-hanghangkhong-36.jpg',
    'https://download.logo.wine/logo/Oman_Air/Oman_Air-Logo.wine.png',
    'http://www.vnas.vn/public/upload/files/29.9.2020/ảnh%20vinayuuki%20vinh/04.10/06.10/10.10/đại%20học%20vinh/16.10/trang%20như/ngày%2018.10/Đại%20h%20vinh/ngày%2030.10/tháng%2011/logo,/y-nghia-logo-vietjet.jpg',    'https://e7.pngegg.com/pngimages/778/480/png-clipart-doha-qatar-airways-airline-auckland-airport-skytrax-emirates-airline-text-logo.png',
    'https://logos-download.com/wp-content/uploads/2016/05/AirAsia_logo_logotype_circle.png',
    'https://i.pinimg.com/originals/67/6c/60/676c60b4d567f955866b857075925d55.jpg',
    'http://logos-download.com/wp-content/uploads/2016/03/Emirates_Airlines_logotype_emblem_logo_4.png',
    'https://i.pinimg.com/originals/35/f1/dc/35f1dc5b9125c1da37b61ac0f952b2c1.png',
    'https://www.logotypes101.com/logos/239/4E7E95AF771E3C24A5CAA6C77827B830/Bangkok_Airways.png',
    'https://logos-world.net/wp-content/uploads/2020/03/Air-France-Logo-1976-1990.jpg',
    'https://logos-world.net/wp-content/uploads/2020/11/United-Airlines-Logo-1954-1960.png',
    'https://vectorseek.com/wp-content/uploads/2023/10/Etihad-Airways-Abu-Dhabi-Logo-Vector.svg-.png',
    'http://www.ranklogos.com/wp-content/uploads/2012/04/american-airlines-logo-1.jpg',
    'https://i.pinimg.com/736x/2b/40/89/2b408945492440dc57c69125934686bc--corporate-logos-malaysia.jpg',
    'https://1000logos.net/wp-content/uploads/2020/03/Spirit-Airlines-Logo-2007.jpg',
    'https://designs.vn/wp-content/images/23-03-2014/Nhung%20-logo-noi-tieng-cua-30-hang-hang-khong-tren-toan-the-gioi.jpg',
    'https://png.pngtree.com/png-clipart/20200727/original/pngtree-air-force-learning-plan-logo-design-luxury-airline-transport-png-image_5349644.jpg',
    'https://static.wixstatic.com/media/9d8ed5_b51a481fd4b94e1fb36d99d4377455ee~mv2.jpg/v1/fill/w_980,h_613,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d8ed5_b51a481fd4b94e1fb36d99d4377455ee~mv2.jpg'
  ];

  return (
    <div className="logo-carousel">
      <div className="carousel-track">
        {imageUrls.concat(imageUrls).map((url, index) => (
          <img key={index} src={url} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

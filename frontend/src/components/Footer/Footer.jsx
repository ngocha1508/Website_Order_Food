import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <p className='logo-small'>FOOD ORDER</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+84-396-930-803</li>
                <li> hotro@datdoantructuyen.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© 2024. Công ty cổ phần Đặt Đồ Ăn Trực Tuyến. GPDKKD: 0405678912 do sở KH & ĐT TP.HCM cấp ngày 15/05/2015. GPMXH: 345/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 20/03/2022.
Địa chỉ: 456 Nguyễn Thị Minh Khai, P.Bến Thành, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô A1-2.3, Đường B2, Đ. B2, P.Hiệp Bình Chánh, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 39234567. Email: cskh@datdoantructuyen.com. Chịu trách nhiệm nội dung: Dương Ngọc Hà. Email: hotro@datdoantructuyen.com.</p>
    </div>
  )
}

export default Footer

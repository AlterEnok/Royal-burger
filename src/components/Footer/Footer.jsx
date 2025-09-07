import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Левая колонка */}
                <div className="footer-logo">
                    <img src={logo} alt="Royal Burger Logo" className="footer-logo-img" />
                    <p>
                        The best burgers in town! We cook with love and deliver fast. Enjoy freshness and taste in every bite.
                    </p>
                    <p className="footer-contact">
                        📞 +81 9876543210 <br />
                        📧 burger@gmail.com <br />
                        📍 Brooklyn, New York, NY, USA
                    </p>
                </div>



                {/* Ссылки */}
                <div className="footer-links">
                    <h3>Service</h3>
                    <ul>
                        <li><a href="#">Burger</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Hot Items</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>

                {/* Соцсети */}
                <div className="footer-links">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>

                {/* Подписка */}
                <div className="footer-subscribe">
                    <h3>Subscribe for Updates</h3>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Enter Email..." />
                        <button>➜</button>
                    </div>
                </div>
            </div>

            {/* Нижняя часть */}
            <div className="footer-bottom">
                <div className="footer-socials">
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaYoutube />
                </div>
                <p>© {new Date().getFullYear()} Royal Burger | All Rights Reserved | Design by NovaTeam</p>
            </div>
        </footer>
    );
}

export default Footer;

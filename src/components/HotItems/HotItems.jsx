import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // <-- импортируем
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HotItems.css";
import { CartContext } from "../CartContext/CartContext";

import classicBeef from "../../assets/classic-beef.png";
import cheeseBurger from "../../assets/cheese-burger.png";
import baconBbq from "../../assets/bacon-bbq.png";
import veggie from "../../assets/veggie.png";
import coke from "../../assets/coke.png";
import sprite from "../../assets/sprite.png";
import fanta from "../../assets/fanta.png";
import icedLatte from "../../assets/iced-latte.png";
import milkshake from "../../assets/milkshake.png";
import cartIcon from "../../assets/cart.png";

const products = [
    { id: 1, name: "Classic Beef Burger", price: 8.99, img: classicBeef },
    { id: 2, name: "Cheese Lover’s Burger", price: 9.49, img: cheeseBurger },
    { id: 3, name: "Bacon BBQ Burger", price: 10.99, img: baconBbq },
    { id: 4, name: "Veggie Delight Burger", price: 7.99, img: veggie },
    { id: 6, name: "Coca-Cola (0.5L)", price: 2.49, img: coke },
    { id: 7, name: "Sprite (0.5L)", price: 2.49, img: sprite },
    { id: 8, name: "Fanta (0.5L)", price: 2.49, img: fanta },
    { id: 9, name: "Iced Latte", price: 3.99, img: icedLatte },
    { id: 10, name: "Milkshake (Chocolate)", price: 4.49, img: milkshake },
];

function HotItems() {
    const { addToCart } = useContext(CartContext);

    // Анимации карточек
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="hot-items">
            <motion.h2
                className="hot-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                — HOT ITEMS —
            </motion.h2>

            <motion.p
                className="hot-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                LOCALLY SOURCED, ORGANIC INGREDIENTS FOR A FRESH AND ECO-FRIENDLY
                EXPERIENCE
            </motion.p>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {products.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <motion.div
                            className="product-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            <svg
                                className="card-bg"
                                viewBox="0 0 322 451"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient
                                        id="cardGradient"
                                        x1="161"
                                        y1="0"
                                        x2="161"
                                        y2="450.25"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FF8616" />
                                        <stop offset="1" stopColor="#99500D" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0 14C0 6.26802 6.26801 0 14 0H307.859C315.646 0 321.936 6.35362 321.859 14.1399L317.639 436.39C317.562 444.067 311.317 450.25 303.639 450.25H255.5C247.768 450.25 241.5 443.982 241.5 436.25V414C241.5 406.268 235.232 400 227.5 400H161H14C6.26801 400 0 393.732 0 386V14Z"
                                    fill="url(#cardGradient)"
                                />
                            </svg>

                            <button className="card-like">♡</button>

                            <img src={item.img} alt={item.name} className="product-img" />

                            <h3 className="product-name">{item.name}</h3>

                            <div className="card-footer">
                                <span className="price">${item.price.toFixed(2)}</span>
                                <button className="slider__cart-btn" onClick={() => addToCart(item)}>
                                    <img src={cartIcon} alt="Add to cart" />
                                </button>
                            </div>

                            <button className="arrow-btn">➜</button>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default HotItems;

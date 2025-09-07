import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import cartIcon from "../../assets/cart.png";
import { CartContext } from "../CartContext/CartContext";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const [cartFlash, setCartFlash] = useState(false);

    const { cartItems, subtotal, removeFromCart, increaseQty, decreaseQty } =
        useContext(CartContext);

    // следим за скроллом
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // отключаем скролл при открытых сайдбарах
    useEffect(() => {
        if (isCartOpen || isDesktopMenuOpen || isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isCartOpen, isDesktopMenuOpen, isMobileMenuOpen]);

    // мигание корзины при добавлении
    useEffect(() => {
        if (cartItems.length > 0) {
            setCartFlash(true);
            const timer = setTimeout(() => setCartFlash(false), 600);
            return () => clearTimeout(timer);
        }
    }, [cartItems]);

    return (
        <>
            <header className={`header ${isScrolled ? "scrolled" : ""}`}>
                <div className="container header__inner">
                    {/* Логотип */}
                    <div className="logo">
                        <img src={logo} alt="Company logo" />
                    </div>

                    {/* Навигация (только desktop) */}
                    <nav className="nav desktop-only">
                        <a href="#">Home</a>
                        <a href="#">Our outlets</a>
                        <a href="#">Order</a>
                        <a href="#">Contact</a>
                        <a href="#">
                            <img className="nav-icon" src={searchIcon} alt="Search" />
                        </a>
                    </nav>

                    {/* Корзина + бургеры */}
                    <div className="right-block">
                        <button
                            className={`cart-btn ${cartFlash ? "flash" : ""}`}
                            onClick={() => setIsCartOpen(true)}
                        >
                            <img className="cart-icon" src={cartIcon} alt="Cart" />
                            {cartItems.length > 0 && (
                                <span className="cart-badge">{cartItems.length}</span>
                            )}
                        </button>

                        {/* Бургер для мобилки */}
                        <button
                            className={`burger mobile-only ${isMobileMenuOpen ? "active" : ""}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <span></span>
                            <span></span>
                        </button>

                        {/* Бургер для desktop */}
                        <button
                            className={`burger desktop-only ${isDesktopMenuOpen ? "active" : ""}`}
                            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                            aria-label="Toggle desktop menu"
                        >
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Сайдбар корзины */}
            <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
                <div className="cart-header">
                    <h3>Shopping Cart</h3>
                    <button className="cart-close" onClick={() => setIsCartOpen(false)}>
                        ✕
                    </button>
                </div>
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <div className="empty-cart-icon">🛒</div>
                            <p>Your cart is empty</p>
                            <span>Add something delicious!</span>
                        </div>
                    ) : (
                        <ul className="cart-list">
                            {cartItems.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.img} alt={item.name} />
                                    <div className="cart-item-info">
                                        <h4>{item.name}</h4>
                                        <p>${item.price.toFixed(2)}</p>
                                        <div className="qty-controls">
                                            <button onClick={() => decreaseQty(item.id)}>-</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => increaseQty(item.id)}>+</button>
                                        </div>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn" disabled={cartItems.length === 0}>
                        Checkout
                    </button>
                </div>
            </div>

            {/* Сайдбар меню для desktop */}
            <div className={`desktop-menu ${isDesktopMenuOpen ? "open" : ""}`}>
                <div className="desktop-menu-header">
                    <h3>Menu</h3>
                    <button onClick={() => setIsDesktopMenuOpen(false)}>✕</button>
                </div>
                <ul className="desktop-menu-links">
                    <li><a href="#">🍔 Burgers</a></li>
                    <li><a href="#">🍟 Snacks</a></li>
                    <li><a href="#">🥤 Drinks</a></li>
                    <li><a href="#">🍰 Desserts</a></li>
                    <li><a href="#">⭐ Special offers</a></li>
                </ul>
            </div>

            {/* Сайдбар меню для mobile */}
            <nav className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Our outlets</a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Order</a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                <a href="#">
                    <img className="nav-icon" src={searchIcon} alt="Search" />
                </a>
            </nav>

            {isMobileMenuOpen && (
                <button
                    className="mobile-menu-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>
            )}

            {/* Overlay */}
            {(isCartOpen || isDesktopMenuOpen || isMobileMenuOpen) && (
                <div
                    className="cart-overlay"
                    onClick={() => {
                        setIsCartOpen(false);
                        setIsDesktopMenuOpen(false);
                        setIsMobileMenuOpen(false);
                    }}
                ></div>
            )}
        </>
    );
}

// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HotItems from "./components/HotItems/HotItems";
import Promo from "./components/Promo/Promo";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import { CartProvider } from "./components/CartContext/CartContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // время показа прелоадера
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // пока loading = true, показываем только прелоадер
    return <Preloader />;
  }

  // после завершения прелоадера рендерим всю страницу
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Hero />
        <HotItems />
        <Promo />
        <About />
        <HowItWorks />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

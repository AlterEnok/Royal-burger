import React, { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // время показа прелоадера (3 сек)
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader">
            <h1 className="preloader-text">
                {"ROYAL BURGER".split("").map((letter, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                        {letter}
                    </span>
                ))}
            </h1>
        </div>
    );
}

export default Preloader;

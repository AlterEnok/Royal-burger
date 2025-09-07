import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Добавление товара
    const addToCart = (product) => {
        setCartItems((prev) => {
            const index = prev.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                // Уже есть — увеличиваем количество
                const updated = [...prev];
                updated[index] = {
                    ...updated[index],
                    qty: updated[index].qty + 1,
                };
                return updated;
            }
            // Нового товара нет — добавляем
            return [...prev, { ...product, qty: 1 }];
        });
    };

    // Увеличить количество
    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // Уменьшить количество
    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    // Удалить товар
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Очистить корзину
    const clearCart = () => setCartItems([]);

    // Подсчёт суммы
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                clearCart,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

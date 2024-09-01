import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        const newCart = [...prevCart, { ...item, quantity: 1 }];
        return newCart;
      }
    });
  };

  const decrementQuantity = (itemToRemove) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === itemToRemove.id) {
            const updatedQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: Math.max(updatedQuantity, 0), // Garante que a quantidade não seja menor que zero
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove itens com quantidade zero ou negativa
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.id !== itemToRemove.id,
      );
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.id * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        decrementQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

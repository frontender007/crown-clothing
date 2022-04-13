import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);

  const toggleIsOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

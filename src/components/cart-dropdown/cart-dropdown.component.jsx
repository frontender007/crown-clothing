import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { setIsCartOpen } from "../../store/cart/cart.actions";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  // const setIsCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {!cartItems.length ? (
          <EmptyMessage>No items in your cart</EmptyMessage>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;

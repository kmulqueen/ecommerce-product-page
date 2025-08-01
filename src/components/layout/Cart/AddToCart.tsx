import { useState } from "react";
import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import Button from "../../utility/Button/Button";
import { useAppDispatch } from "../../../hooks/hooks";
import {
  addProductsToCart,
  type Product,
} from "../../../features/cart/cartSlice";

type AddToCartProps = {
  productName: string;
  price: number;
};

export default function AddToCart({ productName, price }: AddToCartProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);

  function handleUpdateQuantity(action: string) {
    if (action === "add") {
      setQuantity((prevState) => prevState + 1);
    } else {
      if (quantity !== 0) {
        setQuantity((prevState) => prevState - 1);
      }
    }
  }

  function handleAddToCart() {
    const product: Product = {
      productName: productName,
      quantity: quantity,
      price: price,
    };

    dispatch(addProductsToCart(product));
  }
  return (
    <Container
      as="section"
      className="grid gap-y-4 px-6 sm:grid-cols-2 sm:gap-x-2 sm:px-0 xl:grid-cols-[1fr_2fr]"
    >
      <h1 className="sr-only">Adjust quantity of items to add to cart</h1>
      <Container className="flex flex-row items-center justify-between rounded-[10px] bg-grey-50 p-4">
        <Button
          onClick={() => handleUpdateQuantity("remove")}
          aria-label="Decrease the quantity of this product in your cart."
        >
          <Icon name="minus" height={4} width={12} />
        </Button>
        <p className="text-preset-3-bold text-grey-950" aria-live="polite">
          <span className="sr-only">Your selected quantity is:</span>
          {quantity}
        </p>
        <Button
          onClick={() => handleUpdateQuantity("add")}
          aria-label="Increase the quantity of this product in your cart."
        >
          <Icon name="plus" height={12} width={12} />
        </Button>
      </Container>
      <Button
        className="flex flex-row items-center justify-center gap-4 rounded-[10px] bg-orange-500 py-4 text-preset-3-bold text-grey-950"
        aria-label={`Add ${quantity} of this product to your shopping cart.`}
        onClick={handleAddToCart}
      >
        <Icon
          name="cart"
          width={22}
          height={20}
          className="[&>path]:fill-grey-950"
        />{" "}
        Add To Cart
      </Button>
    </Container>
  );
}

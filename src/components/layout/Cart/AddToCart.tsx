import { useState } from "react";
import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import Button from "../../utility/Button/Button";

export default function AddToCart() {
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
  return (
    <Container as="section" className="grid px-6 gap-y-4">
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

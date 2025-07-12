import { useRef, useEffect } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import Container from "../../utility/Container/Container";
import Button from "../../utility/Button/Button";
import Icon from "../../utility/Icon/Icon";
import CartItem from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const items = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <Container
      as="dialog"
      ref={dialogRef}
      onCancel={onClose}
      className="z-10 m-0 mt-2 min-h-64 w-[90vw] max-w-[22.5rem] min-w-72 place-self-center rounded-lg border-none shadow-md outline-none sm:mt-[-1rem] sm:mr-8 sm:place-self-end"
    >
      <Container className="flex flex-row justify-between px-4 py-6">
        <h2 className="text-preset-3-bold text-grey-950">Cart</h2>
        <Button aria-label="Close shopping cart." onClick={onClose} autoFocus>
          <Icon name="close" height={14} width={14} />
        </Button>
      </Container>
      <hr className="border-grey-100" />

      {!items.length ? (
        <Container className="grid h-[calc(16rem-4.625rem)] py-6">
          <p className="place-self-center text-preset-3-bold text-grey-500">
            Your cart is empty.
          </p>
        </Container>
      ) : (
        <Container className="flex flex-col gap-6 px-4 sm:px-6 py-6">
          <Container as="ul" className="list-none">
            {items.map((item) => (
              <CartItem
                key={item.productName}
                productName={item.productName}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </Container>
          <Button className="grid w-full py-4 rounded-lg bg-orange-500 text-preset-3-bold text-grey-950">
            Checkout
          </Button>
        </Container>
      )}
    </Container>
  );
}

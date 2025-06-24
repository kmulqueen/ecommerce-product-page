import { useRef, useEffect } from "react";
import Container from "../../utility/Container/Container";

import type { Product } from "../../../types/product";
import Button from "../../utility/Button/Button";
import Icon from "../../utility/Icon/Icon";

type ShoppingCartProps = {
  items?: Product[];
  isOpen: boolean;
  onClose: () => void;
};

export default function ShoppingCart({
  items,
  isOpen,
  onClose,
}: ShoppingCartProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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
      className="z-10 m-0 mt-2 h-64 max-h-none w-[22.5rem] max-w-none place-self-center rounded-lg border-none outline-none"
    >
      <Container className="flex flex-row justify-between p-6">
        <h2 className="text-preset-3-bold text-grey-950">Cart</h2>
        <Button aria-label="Close shopping cart." onClick={onClose} autoFocus>
          <Icon name="close" height={14} width={14} />
        </Button>
      </Container>
      <hr className="border-grey-100" />

      {!items?.length ? (
        <Container className="grid h-[60%]">
          <p className="text-preset-3-bold text-grey-500 place-self-center">
            Your cart is empty.
          </p>
        </Container>
      ) : (
        <Container>
          <p className="text-preset-3-bold text-grey-500">
            Placeholder for item...
          </p>
          <Button className="bg-orange-500 text-preset-3-bold text-grey-950">
            Checkout
          </Button>
        </Container>
      )}
    </Container>
  );
}

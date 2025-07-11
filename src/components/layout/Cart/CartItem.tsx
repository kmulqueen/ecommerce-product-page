import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProductPicture from "../ProductPicture/ProductPicture";
import Button from "../../utility/Button/Button";
import {
  removeProductsFromCart,
  type Product,
} from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../hooks/hooks";

type CartItemProps = Product;

export default function CartItem({
  productName,
  price,
  quantity,
}: CartItemProps) {
  const dispatch = useAppDispatch();
  const totalPrice = quantity * price;

  function handleRemoveFromCart() {
    const product: Product = {
      productName,
      price,
      quantity,
    };

    dispatch(removeProductsFromCart(product));
  }
  return (
    <Container as="li" className="flex items-center justify-between">
      <ProductPicture
        name="product1Thumbnail"
        alt="White and brown shoes against an orange and tan background."
        className="h-fit rounded-sm"
        width={50}
        height={50}
      />
      <Container className="flex flex-col">
        <p className=" text-preset-3-regular text-grey-500">{productName}</p>
        <Container className="flex gap-2">
          <p className=" text-preset-3-regular text-grey-500">
            ${price.toFixed(2)} x {quantity}
          </p>
          <p className=" text-preset-3-bold text-grey-950">
            ${totalPrice.toFixed(2)}
          </p>
        </Container>
      </Container>
      <Button
        aria-label={`Delete ${quantity} ${productName} from cart.`}
        onClick={handleRemoveFromCart}
      >
        <Icon name="delete" width={14} height={16} />
      </Button>
    </Container>
  );
}

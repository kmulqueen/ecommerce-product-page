import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProductPicture from "../ProductPicture/ProductPicture";
import type { Product } from "../../../types/product";
import Button from "../../utility/Button/Button";

type CartItemProps = Product;

export default function CartItem({
  name,
  productPrice,
  quantity,
}: CartItemProps) {
  return (
    <Container as="li">
      <ProductPicture
        name="product1Thumbnail"
        alt="White and brown shoes against an orange and tan background."
      />
      <p>{name}</p>
      <p>
        ${productPrice} x {quantity}
      </p>
      <p>$TOTAL_PRICE</p>
      <Icon name="delete" />
      <Button>Checkout</Button>
    </Container>
  );
}

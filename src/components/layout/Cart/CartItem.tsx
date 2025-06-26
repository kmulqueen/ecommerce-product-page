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
  const totalPrice = (quantity * parseFloat(productPrice)).toFixed(2);
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
        <p className=" text-preset-3-regular text-grey-500">{name}</p>
        <Container className="flex gap-2">
          <p className=" text-preset-3-regular text-grey-500">
            ${productPrice} x {quantity}
          </p>
          <p className=" text-preset-3-bold text-grey-950">${totalPrice}</p>
        </Container>
      </Container>
      {/* // TODO - Add delete functionality to remove items from cart. */}
      <Button aria-label={`Delete ${quantity} ${name} from cart.`}>
        <Icon name="delete" width={14} height={16} />
      </Button>
    </Container>
  );
}

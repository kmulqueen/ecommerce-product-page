import Container from "../../utility/Container/Container";
import Discount from "./Discount";
import OriginalPrice from "./OriginalPrice";
import Price from "./Price";

type ProductPriceProps = {
  price: number;
  originalPrice: number;
  discount: string;
};

export default function ProductPrice({
  price,
  originalPrice,
  discount,
}: ProductPriceProps) {
  return (
    <Container
      as="section"
      className="mb-8 flex flex-row items-center justify-between px-6 sm:mb-6 sm:flex-col sm:items-start sm:gap-4 sm:px-0"
    >
      <Container className="flex flex-row items-center gap-4 sm:gap-6">
        <Price price={`$${price.toFixed(2)}`} />
        <Discount discount={discount} />
      </Container>
      <Container>
        <OriginalPrice originalPrice={`$${originalPrice.toFixed(2)}`} />
      </Container>
    </Container>
  );
}

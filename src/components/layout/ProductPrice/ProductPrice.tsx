import Container from "../../utility/Container/Container";
import Discount from "./Discount";
import OriginalPrice from "./OriginalPrice";
import Price from "./Price";

export default function ProductPrice() {
  return (
    <Container
      as="section"
      className="flex flex-row items-center justify-between px-6 mb-8"
    >
      <Container className="flex flex-row items-center gap-4">
        <Price price="$125.00" />
        <Discount discount="50%" />
      </Container>
      <Container>
        <OriginalPrice originalPrice="$250.00" />
      </Container>
    </Container>
  );
}

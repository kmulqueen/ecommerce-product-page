import Container from "../../utility/Container/Container";
import Discount from "./Discount";
import OriginalPrice from "./OriginalPrice";
import Price from "./Price";

export default function ProductPrice() {
  return (
    <Container
      as="section"
      className="mb-8 flex flex-row items-center justify-between px-6 sm:mb-6 sm:flex-col sm:items-start sm:gap-4 sm:px-0"
    >
      <Container className="flex flex-row items-center gap-4 sm:gap-6">
        <Price price="$125.00" />
        <Discount discount="50%" />
      </Container>
      <Container>
        <OriginalPrice originalPrice="$250.00" />
      </Container>
    </Container>
  );
}

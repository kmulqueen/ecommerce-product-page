import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProductPicture from "../ProductPicture/ProductPicture";
import Button from "../../utility/Button/Button";

export default function Carousel() {
  return (
    <Container className="relative">
      <ProductPicture name="product1" alt="some text" height={300} />
      <Button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <Icon
          name="previous"
          height={18}
          width={18}
          className="-translate-x-[1px]"
        />
      </Button>

      <Button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <Icon name="next" height={18} width={18} />
      </Button>
    </Container>
  );
}

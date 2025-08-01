import Container from "../../utility/Container/Container";
import Icon from "../../utility/Icon/Icon";
import ProductPicture from "../ProductPicture/ProductPicture";
import Button from "../../utility/Button/Button";

type CarouselProps = {
  className: string;
};

export default function Carousel({ className }: CarouselProps) {
  return (
    <Container as="section" className={`relative ${className}`}>
      <h1 className="sr-only">Product pictures carousel.</h1>
      <ProductPicture
        name="product1"
        alt="Brown and grey/white showes against an orange and light tan backdrop."
        className="h-[18.75rem] w-full object-cover sm:rounded-2xl"
      />
      <Button
        className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
        aria-label="Look at previous image for this product."
      >
        <Icon
          name="previous"
          height={18}
          width={18}
          className="-translate-x-[1px]"
        />
      </Button>

      <Button
        className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
        aria-label="Look at next image for this product."
      >
        <Icon name="next" height={18} width={18} />
      </Button>
    </Container>
  );
}

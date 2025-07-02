import Button from "../../utility/Button/Button";
import Container from "../../utility/Container/Container";
import ProductPicture, {
  type ProductPictureProps,
} from "../ProductPicture/ProductPicture";
import { pictures } from "../ProductPicture/ProductPicture";
import { type PictureName } from "../ProductPicture/ProductPicture";

const options = (Object.keys(pictures) as Array<PictureName>)
  .filter((key) => key.endsWith("Thumbnail"))
  .map((key) => ({
    name: key,
    alt: `Product thumbnail ${key}`,
  }));

type GalleryProps = {
  className: string;
  selectedPicture?: ProductPictureProps;
  pictureOptions?: ProductPictureProps[];
};

export default function Gallery({
  className,
  selectedPicture = {
    name: "product1",
    alt: "Brown and grey/white showes against an orange and light tan backdrop.",
  },
}: GalleryProps) {
  return (
    <Container
      as="section"
      className={`relative lg:flex lg:h-full lg:flex-col lg:gap-y-8 ${className}`}
    >
      <h1 className="sr-only">Product pictures gallery.</h1>
      <ProductPicture
        name={selectedPicture.name}
        alt={selectedPicture.alt}
        className="h-[18.75rem] w-full object-cover sm:rounded-2xl lg:h-fit"
      />
      <Container className="items-center justify-between lg:flex">
        {options.map((picture) => (
          <Button key={picture.name}>
            <ProductPicture
              name={picture.name}
              alt={picture.alt}
              className="h-[5.5rem] rounded-lg"
            />
          </Button>
        ))}
      </Container>
    </Container>
  );
}

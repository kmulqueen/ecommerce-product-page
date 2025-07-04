import Container from "../../utility/Container/Container";
import CompanyName from "./CompanyName";
import ProductDescription from "./ProductDescription";
import ProductTitle from "./ProductTitle";

type ProductInfoProps = {
  productName: string;
  company: string;
  description: string;
};

export default function ProductInfo({
  productName,
  company,
  description,
}: ProductInfoProps) {
  return (
    <Container
      as="section"
      className="mb-8 flex flex-col gap-4 px-6 pt-6 sm:mb-6 sm:gap-6 sm:px-0 sm:pt-12"
    >
      <h1 className="sr-only">Product Description</h1>
      <CompanyName companyName={company} />
      <ProductTitle title={productName} />
      <ProductDescription description={description} />
    </Container>
  );
}

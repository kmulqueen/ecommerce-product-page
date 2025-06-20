import Container from "../../utility/Container/Container";
import CompanyName from "./CompanyName";
import ProductDescription from "./ProductDescription";
import ProductTitle from "./ProductTitle";

export default function ProductInfo() {
  return (
    <Container as="section" className="flex flex-col gap-4 px-6 pt-6 mb-8">
      <CompanyName companyName="Sneaker Company" />
      <ProductTitle title="Fall Limited Edition Sneakers" />
      <ProductDescription
        description="These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer."
      />
    </Container>
  );
}

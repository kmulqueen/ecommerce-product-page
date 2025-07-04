import Attribution from "./components/layout/Attribution/Attribution";
import Carousel from "./components/layout/Carousel/Carousel";
import AddToCart from "./components/layout/Cart/AddToCart";
import Gallery from "./components/layout/Gallery/Gallery";
import Header from "./components/layout/Header/Header";
import ProductInfo from "./components/layout/ProductInfo/ProductInfo";
import ProductPrice from "./components/layout/ProductPrice/ProductPrice";
import Container from "./components/utility/Container/Container";
import type { ProductFull } from "./types/product";

function App() {
  //* Product data would be fetched from some API/DB. This is just for demo purposes.
  const product: ProductFull = {
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything theweather can offer.",
    productPrice: 125.0,
    originalPrice: 250.0,
    discount: "50%",
  };
  return (
    <>
      <Header />
      <Container
        as="main"
        className="sm:px-20 sm:py-12 lg:grid lg:grid-cols-2 lg:gap-x-32 xl:px-44"
      >
        <Container>
          <Carousel className="lg:hidden" />
          <Gallery className="hidden lg:block" />
        </Container>
        <Container>
          <ProductInfo
            productName={product.name}
            company={product.company}
            description={product.description}
          />
          <ProductPrice
            price={product.productPrice}
            originalPrice={product.originalPrice}
            discount={product.discount}
          />
          <AddToCart productName={product.name} price={product.productPrice} />
        </Container>
      </Container>
      <Attribution />
    </>
  );
}

export default App;

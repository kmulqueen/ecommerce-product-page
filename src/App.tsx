import Attribution from "./components/layout/Attribution/Attribution";
import Carousel from "./components/layout/Carousel/Carousel";
import AddToCart from "./components/layout/Cart/AddToCart";
import Gallery from "./components/layout/Gallery/Gallery";
import Header from "./components/layout/Header/Header";
import ProductInfo from "./components/layout/ProductInfo/ProductInfo";
import ProductPrice from "./components/layout/ProductPrice/ProductPrice";
import Container from "./components/utility/Container/Container";

function App() {
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
          <ProductInfo />
          <ProductPrice />
          <AddToCart />
        </Container>
      </Container>
      <Attribution />
    </>
  );
}

export default App;

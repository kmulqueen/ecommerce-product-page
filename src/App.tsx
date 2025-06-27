import Attribution from "./components/layout/Attribution/Attribution";
import Carousel from "./components/layout/Carousel/Carousel";
import AddToCart from "./components/layout/Cart/AddToCart";
import Header from "./components/layout/Header/Header";
import ProductInfo from "./components/layout/ProductInfo/ProductInfo";
import ProductPrice from "./components/layout/ProductPrice/ProductPrice";
import Container from "./components/utility/Container/Container";

function App() {
  return (
    <>
      <Header />
      <Container as="main" className="sm:px-20 sm:py-12">
        <Container>
          <Carousel />
        </Container>
        <Container>
          <ProductInfo />
        </Container>
        <ProductPrice />
        <AddToCart />
      </Container>
      <Attribution />
    </>
  );
}

export default App;

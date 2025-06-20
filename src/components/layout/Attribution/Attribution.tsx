import Container from "../../utility/Container/Container";

export default function Attribution() {
  return (
    <Container as="footer" className="text-center text-xs my-8">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-orange-500 hover:text-orange-300 focus:text-orange-300 focus-visible:text-orange-300 active:text-orange-300"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.github.com/kmulqueen"
        className="text-orange-500 hover:text-orange-300 focus:text-orange-300 focus-visible:text-orange-300 active:text-orange-300"
      >
        Kyle Mulqueen
      </a>
      .
    </Container>
  );
}

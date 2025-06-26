import Container from "../Container/Container";

type BadgeProps = {
  numItems: number;
  screenReaderText: string;
};

export default function Badge({ numItems, screenReaderText }: BadgeProps) {
  return (
    <Container className="absolute top-[-0.75rem] left-2 grid place-content-center rounded-2xl bg-orange-500 px-2.5">
      <p className="text-white text-sm" aria-live="polite">
        {numItems}
        <span className="sr-only">{screenReaderText}</span>
      </p>
    </Container>
  );
}

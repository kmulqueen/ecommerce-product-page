type PriceProps = {
  price: string;
};

export default function Price({ price }: PriceProps) {
  return (
    <>
      <span className="sr-only">Current price is:</span>
      <h1 className="text-preset-2 text-grey-950">{price}</h1>
    </>
  );
}

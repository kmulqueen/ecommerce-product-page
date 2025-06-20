type DiscountProps = {
  discount: string;
};

export default function Discount({ discount }: DiscountProps) {
  return (
    <p className="rounded-[6px] bg-grey-950 px-4 py-1 text-preset-3-bold text-white">
      <span className="sr-only">Discount of: </span>
      {discount}
    </p>
  );
}

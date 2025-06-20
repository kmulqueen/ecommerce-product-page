type OriginalPriceProps = {
  originalPrice: string;
};

export default function OriginalPrice({ originalPrice }: OriginalPriceProps) {
  return (
    <p className="text-preset-3-bold text-grey-500 line-through">
      <span className="sr-only">Original price was:</span> {originalPrice}
    </p>
  );
}

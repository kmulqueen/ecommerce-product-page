type ProductDescriptionProps = {
  description: string;
};

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <p className="text-preset-4 text-grey-500 sm:text-preset-3-regular">
      {description}
    </p>
  );
}

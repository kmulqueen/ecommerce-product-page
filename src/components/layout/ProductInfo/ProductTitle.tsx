type ProductTitleProps = {
  title: string;
};

export default function ProductTitle({ title }: ProductTitleProps) {
  return <h1 className="text-preset-2 text-grey-950">{title}</h1>;
}

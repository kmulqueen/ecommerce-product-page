type CompanyNameProps = {
  companyName: string;
};

export default function CompanyName({ companyName }: CompanyNameProps) {
  return (
    <p className="text-preset-6 text-grey-500 uppercase sm:text-preset-5">
      {companyName}
    </p>
  );
}

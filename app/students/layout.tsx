export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="py-5">
        {children}
      </div>
    </section>
  );
}

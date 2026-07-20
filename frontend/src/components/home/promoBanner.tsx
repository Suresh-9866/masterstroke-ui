export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="relative rounded-3xl overflow-hidden shadow-xl">

        <img
          src="/images/ad2.jpg"
          alt="Promo"
          className="
            w-full
            h-56
            md:h-72
            lg:h-96
            object-cover
          "
        />

      </div>
    </section>
  );
}
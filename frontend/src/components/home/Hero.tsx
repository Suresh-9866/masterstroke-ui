import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <img
            src="/images/ad1.jpg"
            alt="Businesses"
            className="
              w-full
              h-72
              md:h-96
              lg:h-[500px]
              object-cover
              rounded-3xl
              shadow-2xl
            "
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center text-center">

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
            Get Started
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-9">
            Empowering Local Businesses.
            <br />
            Rewarding Every Customer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-12">

            <Link
              href="/login"
              className="
                bg-[#008080]
                text-white
                px-12
                py-4
                rounded-2xl
                text-lg
                font-semibold
                shadow-lg
                hover:bg-[#0F4C81]
                hover:scale-105
                transition
              "
            >
              Log In
            </Link>

            <button
              className="
                border-2
                border-[#008080]
                text-[#008080]
                px-12
                py-4
                rounded-2xl
                text-lg
                font-semibold
                hover:bg-teal-50
                hover:scale-105
                transition
              "
            >
              Sign Up
            </button>

          </div>

          {/* Divider */}
          <div className="flex items-center w-full max-w-md gap-4 my-12">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="text-gray-500">
              or continue with
            </span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-8">

            <button
              className="
                bg-white
                p-4
                rounded-full
                shadow-lg
                hover:scale-110
                transition
              "
            >
              <img
                src="/images/google.jpg"
                alt="Google"
                className="w-8 h-8"
              />
            </button>

            <button
              className="
                bg-white
                p-4
                rounded-full
                shadow-lg
                hover:scale-110
                transition
              "
            >
              <img
                src="/images/fb.jpg"
                alt="Facebook"
                className="w-8 h-8"
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
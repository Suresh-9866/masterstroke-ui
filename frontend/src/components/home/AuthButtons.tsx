import Link from "next/link";

export default function AuthButtons() {
  return (
    <section className="flex justify-center gap-6 py-10">

      <Link href="/login">
        <button
          className="
            border-2
            border-[#0F4C81]
            px-10
            py-3
            rounded-lg
            text-[#0F4C81]
            font-semibold
            hover:bg-[#0F4C81]
            hover:text-white
            hover:scale-105
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Login
        </button>
      </Link>

      <button
        className="
          bg-gradient-to-r
          from-[#0F4C81]
          to-[#008080]
          text-white
          px-10
          py-3
          rounded-lg
          font-semibold
          hover:shadow-xl
          hover:scale-105
          transition-all
          duration-300
          cursor-pointer
        "
      >
        Sign Up
      </button>

    </section>
  );
}
import Link from "next/link";
import {
  Star,
  Info,
  Gift,
  Users,
  House,
  BookOpen,
} from "lucide-react";

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-[#F5FAFC] flex flex-col">

      {/* Header */}

    <header className="bg-gradient-to-r from-[#0F4C81] to-[#008080] shadow-lg">
     <div className="max-w-7xl mx-auto px-8 py-5">

    <Link
      href="/categories"
      className="flex items-center gap-5"
    >
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0F4C81] text-3xl font-bold shadow-md">
        W
      </div>

      <div>
        <h1 className="text-5xl font-bold text-white">
          WINGS
        </h1>

        <p className="text-cyan-100 text-lg">
          Business Discovery Platform
        </p>
      </div>
    </Link>

     </div>
    </header>

      {/* Content */}

      <section className="flex-1 max-w-7xl mx-auto w-full px-10 py-12">

        <div className="bg-white rounded-2xl border border-cyan-100 shadow-xl overflow-hidden">

          {/* Business Info */}

          <div className="p-8 flex flex-col md:flex-row gap-8 items-start">

            {/* Logo */}

            <div className="w-40 h-40 rounded-xl overflow-hidden border border-cyan-200 shadow-md">

              <img
                src="/images/logo.jpeg"
                alt="Hundreds Fitness Logo"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Details */}

            <div className="flex-1">

              <h2 className="text-5xl font-bold text-[#0F4C81]">
                Hundreds Fitness
              </h2>

              <p className="text-xl text-[#008080] mt-2">
                Health & Fitness
              </p>

              <p className="text-gray-600 mt-2 text-lg">
                Gandhi Nagar, Katpadi
              </p>

              <div className="flex items-center gap-2 mt-5">

                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="text-gray-300" />

                <span className="ml-2 text-gray-600">
                  4.0 (120 Reviews)
                </span>

              </div>

            </div>

          </div>

          {/* Gallery */}

          <div className="border-t border-cyan-100 p-8">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Large Image */}

              <div className="md:col-span-2">

                <img
                  src="/images/gym1.jpeg"
                  alt="Gym Main"
                  className="w-full h-[400px] rounded-xl object-cover"
                />

              </div>

              {/* Side Images */}

              <div className="flex flex-col gap-5">

                <img
                  src="/images/gym2.jpg"
                  alt="Gym Interior"
                  className="w-full h-[190px] rounded-xl object-cover"
                />

                <img
                  src="/images/gym3.jpg"
                  alt="Workout Session"
                  className="w-full h-[190px] rounded-xl object-cover"
                />

              </div>

            </div>

          </div>

          {/* About */}

          <div className="border-t border-cyan-100 p-8">

            <div className="flex items-center gap-3 mb-5">

              <Info
                size={28}
                className="text-[#0F4C81]"
              />

              <h3 className="text-3xl font-bold text-[#0F4C81]">
                ABOUT
              </h3>

            </div>

            <p className="text-gray-700 leading-8 text-lg">
              Hundreds Fitness is one of the leading fitness centers in
              Gandhi Nagar, Katpadi. The gym provides state-of-the-art
              equipment, certified trainers, cardio zones, strength
              training programs, personal coaching sessions, weight
              management guidance, and group fitness activities.

              <br /><br />

              With a strong focus on health, motivation, and member
              satisfaction, Hundreds Fitness helps individuals achieve
              their fitness goals in a professional and encouraging
              environment.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
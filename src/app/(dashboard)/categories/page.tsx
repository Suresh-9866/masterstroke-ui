import Link from "next/link";

import {
  Search,
  Handshake,
  Cross,
  Plane,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  HeartHandshake,
  Armchair,
  House,
  Wrench,
  HardHat,
  Gift,
  Users,
  BookOpen,
} from "lucide-react";

const categories = [
  { name: "B2B", icon: Handshake },
  { name: "Doctors", icon: Cross },
  { name: "Travel", icon: Plane },
  { name: "Beauty", icon: Sparkles },
  { name: "Education", icon: GraduationCap },
  { name: "Consultants", icon: BriefcaseBusiness },
  { name: "Rent & Hire", icon: MapPin },
  { name: "Wedding", icon: HeartHandshake },
  { name: "Interior", icon: Armchair },
  { name: "Home Services", icon: House },
  { name: "Repair", icon: Wrench },
  { name: "Contractors", icon: HardHat },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#F5FAFC] flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0F4C81] to-[#008080] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#0F4C81] text-3xl font-bold shadow-md">
            W
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              WINGS
            </h1>

            <p className="text-cyan-100 text-sm md:text-lg">
              Business Discovery Platform
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-5 md:px-10 py-10">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex bg-white rounded-xl overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search ..."
              className="
                flex-1
                px-5
                py-4
                outline-none
                text-gray-700
              "
            />

            <button
              className="
                bg-[#008080]
                text-white
                px-6
                flex
                items-center
                justify-center
                hover:bg-[#0F4C81]
                transition
              "
            >
              <Search size={22} />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            gap-6
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href="/business"
                key={category.name}
              >
                <div
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    flex
                    flex-col
                    items-center
                    text-center
                    h-full
                    cursor-pointer
                  "
                >
                  <div
                    className="
                      w-20
                      h-20
                      md:w-24
                      md:h-24
                      rounded-2xl
                      bg-[#EAF8F8]
                      flex
                      items-center
                      justify-center
                      mb-4
                    "
                  >
                    <Icon
                      size={40}
                      className="text-[#008080]"
                    />
                  </div>

                  <p
                    className="
                      text-[#0F4C81]
                      font-medium
                      text-sm
                      md:text-base
                    "
                  >
                    {category.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Promotional Banner */}
        <div className="mt-14">
        <div className="mt-14">
  <div className="overflow-hidden rounded-3xl shadow-lg">
    <img
      src="/images/ad3.jpg"
      alt="Promotional Banner"
      className="
        w-full
        h-auto
        object-cover
        transition-transform
        duration-300
        hover:scale-105
      "
    />
  </div>
</div>
      </div>
      </section>

    </main>
  );
}
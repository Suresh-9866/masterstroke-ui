export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-[#0F4C81] to-[#008080] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo1.jpeg"
            alt="WINGS Logo"
            className="w-14 h-14 rounded-lg object-cover bg-white p-1"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            WINGS
          </h1>
        </div>
      </div>
    </header>
  );
}
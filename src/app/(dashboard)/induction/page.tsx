"use client";

import {
  Copy,
  UserPlus,
  Gift,
  Star,
  BadgeCheck,
} from "lucide-react";

import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function InductionPage() {
  return (
    <main className="min-h-screen bg-[#F5FAFC] pb-24">

      {/* Header */}
      <header className="bg-gradient-to-r from-[#0F4C81] to-[#008080] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold">
            Refer & Earn
          </h1>

          <p className="text-cyan-100 mt-2">
            Invite your friends and earn rewards.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Banner */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid md:grid-cols-2 items-center">

            <div className="p-10">

              <h2 className="text-5xl font-bold text-[#0F4C81]">
                Refer a friend
              </h2>

              <h3 className="text-4xl font-bold text-[#008080] mt-3">
                Earn 100 Points!
              </h3>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Invite your friends to join and you both
                get 100 reward points when they sign up
                and complete their first submission.
              </p>

            </div>

            <div className="h-full">
              <img
                src="/images/ind1.jpg"
                alt="Refer Banner"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* Referral Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Code */}
            <div>

              <p className="text-gray-500 mb-3">
                Your Referral Code
              </p>

              <div
                className="
                  border
                  rounded-xl
                  p-5
                  flex
                  justify-between
                  items-center
                "
              >
                <span className="text-4xl font-bold text-[#008080]">
                  REF12345
                </span>

                <Copy
                  size={26}
                  className="text-[#008080] cursor-pointer"
                />
              </div>

            </div>

            {/* Link */}
            <div>

              <p className="text-gray-500 mb-3">
                Share your link
              </p>

              <div className="flex gap-4">

                <input
                  value="https://www.wings.com/invite/REF12345"
                  readOnly
                  className="
                    flex-1
                    border
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <button
                  className="
                    bg-[#008080]
                    text-white
                    px-8
                    rounded-xl
                    font-semibold
                    hover:bg-[#0F4C81]
                    transition
                  "
                >
                  Copy
                </button>

              </div>

            </div>

          </div>

          {/* Divider */}
          <div className="flex items-center gap-5 my-10">

            <div className="flex-1 h-[1px] bg-gray-300" />

            <p className="text-gray-500">
              or share via
            </p>

            <div className="flex-1 h-[1px] bg-gray-300" />

          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-12">

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <FaWhatsapp
                  size={40}
                  className="text-green-600"
                />
              </div>

              <p className="mt-3 text-sm">
                WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <FaFacebook
                  size={38}
                  className="text-blue-600"
                />
              </div>

              <p className="mt-3 text-sm">
                Facebook
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mx-auto">
                <FaTwitter
                  size={38}
                  className="text-sky-500"
                />
              </div>

              <p className="mt-3 text-sm">
                Twitter
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto">
                <FaInstagram
                  size={38}
                  className="text-pink-500"
                />
              </div>

              <p className="mt-3 text-sm">
                Instagram
              </p>
            </div>

          </div>
        </div>

        <h2 className="text-5xl font-bold text-[#0F4C81] mt-14 mb-8">
           How it Works
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-10">

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">

      {/* Step 1 */}
      <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mx-auto">
        <UserPlus
          size={32}
          className="text-[#008080]"
        />
      </div>

      <h3 className="mt-4 font-semibold text-[#0F4C81]">
        Invite
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Share your referral code or link
        with your friends.
      </p>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex justify-center text-4xl text-gray-400">
      →
      </div>

      {/* Step 2 */}
      <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mx-auto">
        <BadgeCheck
          size={32}
          className="text-[#008080]"
        />
      </div>

      <h3 className="mt-4 font-semibold text-[#0F4C81]">
        They Sign Up
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Your friend registers and
        completes their first submission.
      </p>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex justify-center text-4xl text-gray-400">
        →
      </div>

      {/* Step 3 */}
      <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mx-auto">
        <Gift
          size={32}
          className="text-[#008080]"
        />
      </div>

      <h3 className="mt-4 font-semibold text-[#0F4C81]">
        They Earn
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Your friend receives
        100 reward points.
      </p>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex justify-center text-4xl text-gray-400">
        →
      </div>

      {/* Step 4 */}
      <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mx-auto">
        <Star
          size={32}
          className="text-[#008080]"
        />
      </div>

      <h3 className="mt-4 font-semibold text-[#0F4C81]">
        You Earn
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        You also receive
        100 reward points
        as a thank you.
      </p>
      </div>

      </div>

      </div>

        {/* Activity */}
        <h2 className="text-5xl font-bold text-[#0F4C81] mt-16 mb-10">
          Your Referral Activity
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              number: "12",
              title: "Friends Invited",
            },
            {
              number: "8",
              title: "Joined",
            },
            {
              number: "6",
              title: "Rewards Earned",
            },
            {
              number: "800",
              title: "Points Earned",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-10
                text-center
              "
            >
              <h3 className="text-5xl font-bold text-[#008080]">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14">
        <img
          src="/images/ind2.jpg"
          alt="Invite More Banner"
          className="
          w-full
          rounded-3xl
          shadow-lg
          object-cover
          "
        />
        </div>

      </section>

    </main>
  );
}
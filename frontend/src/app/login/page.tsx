"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === "admin" &&
      password === "wings123"
    ) {
      router.push("/categories");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <main className="min-h-screen bg-[#F5FAFC] flex items-center justify-center">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-4xl font-bold text-center text-[#0F4C81] mb-2">
          WINGS
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Business Discovery Platform
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:border-[#00B7C2]
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:border-[#00B7C2]
            "
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="
              w-full
              bg-gradient-to-r
              from-[#0F4C81]
              to-[#008080]
              text-white
              py-3
              rounded-lg
              font-semibold
              hover:opacity-90
            "
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}
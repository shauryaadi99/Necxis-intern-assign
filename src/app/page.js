"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, provider } from "./utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { Typography, Button } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center transition-transform hover:scale-[1.015] duration-300">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
            <a
              href="https://www.necxis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600"
              >
                <path
                  d="M5.6305 0L0 0L0 2.32804L14.956 20H20V0L14.956 0V12.8571L5.6305 0Z"
                  fill="#5271FF"
                />
                <path
                  d="M5.6305 12.8571H0L0 20H5.6305V12.8571Z"
                  fill="#5271FF"
                />
              </svg>
            </a>
          </div>
        </div>
        <Typography
          variant="h4"
          className="mb-4 font-bold text-gray-800 tracking-tight"
        >
          Welcome to the Dashboard
        </Typography>
        <Typography
          variant="body1"
          className="mb-6 text-gray-600 leading-relaxed"
        >
          Sign in to access analytics, user stats, and settings.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignIn}
          fullWidth
          className="mt-8 !bg-blue-600 !hover:bg-blue-700 !text-white !rounded-xl !py-3 !font-semibold !text-base transition-all duration-200"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

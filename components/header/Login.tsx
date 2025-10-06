"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React from "react";

function Login() {
  const { isSignedIn, user } = useUser();
  console.log(user, isSignedIn);

  return (
    <div className={`${isSignedIn && "mt-2"}`}>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-sm text-text-light cursor-pointer">
            Login
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Login;

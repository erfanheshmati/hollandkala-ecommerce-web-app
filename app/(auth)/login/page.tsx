"use client";

import Link from "next/link";
import LoginForm from "./login-form";
import OtpForm from "./otp-form";
import { useState } from "react";

export default function LoginPage() {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <div className="flex flex-col gap-8 w-full sm:min-w-md sm:max-w-md md:max-w-lg sm:border border-[#2B2B2B]/22 rounded-3xl sm:p-10">
      {/* Header */}
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="text-xl text-[#000000]/44 pl-16">خوش آمدید به</div>
        <Link href="/" className="text-5xl font-bold text-primary">
          هلندکالا
        </Link>
      </div>

      {/* Form */}
      {showOtpForm ? (
        <OtpForm phoneNumber={phoneNumber} emailAddress={emailAddress} />
      ) : (
        <LoginForm
          onFormSubmit={(phone, email) => {
            setPhoneNumber(phone);
            setEmailAddress(email);
            setShowOtpForm(true);
          }}
        />
      )}
    </div>
  );
}

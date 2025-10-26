"use client";

import Link from "next/link";
import { useState } from "react";

interface LoginFormProps {
  onFormSubmit: (phone: string, email: string) => void;
}

export default function LoginForm({ onFormSubmit }: LoginFormProps) {
  const [phoneInput, setPhoneInput] = useState(true);
  const [emailInput, setEmailInput] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(phone, email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <p className="text-md md:text-lg text-secondary mb-4">
        جهت ورود به ازاد هلندکالا شماره تلفن یا ایمیل خود را وارد کنید
      </p>

      {/* Inputs */}
      <div className="flex flex-col gap-2 w-full mb-14">
        {phoneInput && (
          <input
            type="number"
            placeholder="شماره تلفن خود را وارد کنید"
            className="input text-center text-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        )}
        {emailInput && (
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="input text-center text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full mb-4">
        <button type="submit" className="btn-primary text-xl font-medium">
          ورود
        </button>
        {phoneInput && (
          <button
            onClick={() => {
              setPhoneInput(false);
              setEmailInput(true);
            }}
            className="btn-secondary text-xl font-medium"
          >
            ورود با ایمیل
          </button>
        )}
        {emailInput && (
          <button
            onClick={() => {
              setPhoneInput(true);
              setEmailInput(false);
            }}
            className="btn-secondary text-xl font-medium"
          >
            ورود با شماره تلفن
          </button>
        )}
      </div>

      {/* Privacy Policy */}
      <div className="text-sm text-black/50 text-center">
        ورود شما به معنای پذیرش شرایط{" "}
        <Link href="#" className="text-primary font-bold hover:underline">
          هلندکالا
        </Link>{" "}
        و{" "}
        <Link href="#" className="text-primary font-bold hover:underline">
          قوانین حریم‌خصوصی{" "}
        </Link>
        است
      </div>
    </form>
  );
}

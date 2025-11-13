"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface LoginFormProps {
  onFormSubmit: (phone: string, email: string) => void;
}

export default function LoginForm({ onFormSubmit }: LoginFormProps) {
  const t = useTranslations();
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
      <p className="text-md text-foreground mb-4">
        {t('auth.loginDescription')}
      </p>

      {/* Inputs */}
      <div className="flex flex-col gap-2 w-full mb-14">
        {phoneInput && (
          <input
            type="number"
            placeholder={t('authPlaceholders.phone')}
            className="input text-center text-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        )}
        {emailInput && (
          <input
            type="email"
            placeholder={t('authPlaceholders.email')}
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
          {t('auth.login')}
        </button>
        {phoneInput && (
          <button
            onClick={() => {
              setPhoneInput(false);
              setEmailInput(true);
            }}
            className="btn-secondary text-xl font-medium"
          >
            {t('auth.loginWithEmail')}
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
            {t('auth.loginWithPhone')}
          </button>
        )}
      </div>

      {/* Privacy Policy */}
      <div className="text-sm text-black/50 text-center">
        {t('auth.acceptTerms')}{" "}
        <Link href="#" className="text-primary font-bold hover:underline">
          {t('auth.brandName')}
        </Link>{" "}
        {t('auth.and')}{" "}
        <Link href="#" className="text-primary font-bold hover:underline">
          {t('auth.privacyPolicy')}{" "}
        </Link>
      </div>
    </form>
  );
}


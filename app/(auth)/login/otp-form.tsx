"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface OtpFormProps {
  phoneNumber: string;
  emailAddress: string;
}

export default function OtpForm({ phoneNumber, emailAddress }: OtpFormProps) {
  const router = useRouter();
  const [otpCode, setOtpCode] = useState("");
  const [timer, setTimer] = useState("1:20");
  const [isTimerActive, setIsTimerActive] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (startTime = 80) => {
    setIsTimerActive(true);
    setTimer("1:20");
    let timeLeft = startTime;

    intervalRef.current = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      setTimer(`${minutes}:${seconds.toString().padStart(2, "0")}`);

      if (timeLeft <= 0) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsTimerActive(false);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleResend = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startTimer();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <p className="text-md md:text-lg text-secondary mb-4 text-center">
        کد ارسال شده به{" "}
        {phoneNumber ? (
          <>
            شماره تلفن <span className="text-primary">{phoneNumber}</span>
          </>
        ) : (
          <>
            ایمیل <span className="text-primary">{emailAddress}</span>
          </>
        )}{" "}
        وارد نمایید
      </p>

      {/* OTP Input */}
      <div className="flex flex-col gap-2 w-full mb-10">
        <input
          type="number"
          placeholder="کد ارسال شده را وارد نمایید"
          className="input text-center text-lg"
          maxLength={6}
          value={otpCode}
          onChange={(e) => setOtpCode(e.target.value)}
          required
        />
      </div>

      {/* Resend Code */}
      <div className="flex items-center justify-center gap-1 mb-10">
        <button
          type="button"
          onClick={handleResend}
          disabled={isTimerActive}
          className={`text-lg font-medium text-[#2B2B2B]/33 ${
            isTimerActive
              ? "cursor-not-allowed"
              : "hover:text-[#2b2b2b] cursor-pointer effect"
          }`}
        >
          ارسال مجدد کد:
        </button>
        <div className="text-primary text-lg font-medium">{timer}</div>
      </div>

      {/* Button */}
      <div className="flex flex-col gap-4 w-full mb-4">
        <button
          type="submit"
          className="btn-primary text-xl font-medium"
          disabled={!otpCode}
        >
          ورود
        </button>
      </div>
    </form>
  );
}

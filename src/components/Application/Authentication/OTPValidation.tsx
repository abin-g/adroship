"use client";

import { useState, useEffect } from "react";

export default function OTPValidation() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);

    // Handle OTP input
    const handleChange = (value: string, index: number) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                const next = document.getElementById(`otp-${index + 1}`);
                next?.focus();
            }
        }
    };

    // Handle Backspace to clear all
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            // clear all OTP inputs
            setOtp(["", "", "", "", "", ""]);
            const first = document.getElementById("otp-0");
            first?.focus();
        }
    };

    // Countdown effect
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer((t) => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleResend = () => {
        setTimer(60);
        setOtp(["", "", "", "", "", ""]);
        const first = document.getElementById("otp-0");
        first?.focus();
        // 🔔 API call for resend goes here
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">OTP Verification</h1>
                <p className="text-sm text-gray-600 mt-1">
                    Enter the 6-digit OTP sent to your registered mobile number.
                </p>
            </div>

            <div className="flex justify-between gap-2 mb-6">
                {otp.map((digit, idx) => (
                    <input
                        key={idx}
                        id={`otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none"
                    />
                ))}
            </div>

            <button className="w-full bg-green-500 text-white font-medium py-2.5 rounded-lg mb-4 transition-colors duration-200 hover:bg-green-600 shadow">
                Verify OTP
            </button>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                <span>Didn’t receive OTP?</span>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleResend}
                        disabled={timer > 0}
                        className={`font-semibold ${timer > 0
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-green-600 hover:underline"
                            }`}
                    >
                        Resend
                    </button>
                    <span className="text-gray-500">
                        {timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : ""}
                    </span>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
                <p>© 2025 Adro Ship Pvt. Ltd. All rights reserved.</p>
                <p>Use of this platform is subject to our Terms & Privacy Policy.</p>
            </div>
        </div>
    );
}

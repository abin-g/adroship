"use client";

import { useState } from "react";
import { HiShieldCheck, HiInformationCircle } from "react-icons/hi";

type Field = {
    name: string;
    placeholder: string;
    type: string;
    colSpan?: number;
};

type Step = {
    title: string;
    description: string;
    fields: Field[];
};

export default function CreateProfile() {
    const [step, setStep] = useState(1);

    const [form, setForm] = useState<Record<string, string>>({
        companyName: "",
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        bankAccount: "",
        ifsc: "",
        accountHolder: "",
        aadhaar: "",
        pan: "",
    });

    const steps: Step[] = [
        {
            title: "Create Profile",
            description: "Please fill in your company and personal details to continue.",
            fields: [
                { name: "companyName", placeholder: "Company Name", type: "text", colSpan: 2 },
                { name: "name", placeholder: "Your Name", type: "text", colSpan: 1 },
                { name: "email", placeholder: "Email Address", type: "email", colSpan: 1 },
                { name: "address", placeholder: "Company Address", type: "text", colSpan: 2 },
                { name: "city", placeholder: "Company City", type: "text", colSpan: 1 },
                { name: "state", placeholder: "Company State", type: "text", colSpan: 1 },
            ],
        },
        {
            title: "Bank Details",
            description: "Enter your bank account information for verification.",
            fields: [
                { name: "bankAccount", placeholder: "Bank Account Number", type: "text", colSpan: 2 },
                { name: "ifsc", placeholder: "IFSC Code", type: "text", colSpan: 2 },
                { name: "accountHolder", placeholder: "Account Holder Name", type: "text", colSpan: 2 },
            ],
        },
        {
            title: "KYC Verification",
            description: "Provide Aadhaar and PAN details for verification.",
            fields: [
                { name: "aadhaar", placeholder: "Aadhaar Number", type: "text", colSpan: 2 },
                { name: "pan", placeholder: "PAN Number", type: "text", colSpan: 2 },
            ],
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        console.log("Final Form Data:", form);
        alert("Form submitted!");
    };

    const currentStep = steps[step - 1];

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

            <div className="text-sm font-medium text-green-600 mb-4">
                Step {step} of {steps.length}
            </div>

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{currentStep.title}</h1>
                <p className="text-sm text-gray-600 mt-1">{currentStep.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {currentStep.fields.map((field) => (
                    <input
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={form[field.name] || ""}
                        onChange={handleChange}
                        className={`p-3 border border-gray-400 rounded-lg text-sm focus:none outline-none col-span-${field.colSpan || 2}`}
                    />
                ))}

            </div>

            {(step === 2 || step === 3) && (
                <div className="mt-6 p-5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-4">
                    <div className="flex items-start gap-3">
                        <HiShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p>
                            All the details you provide will be securely captured and used strictly for verification purposes only.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <HiInformationCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p>
                            We do not share your information with any third party without your consent.
                        </p>
                    </div>
                </div>
            )}

            <div className="mt-6 flex gap-4">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="w-1/2 bg-gray-300 rounded-lg text-gray-700 text-sm font-medium py-2 hover:bg-gray-400"
                    >
                        Back
                    </button>
                )}
                {step < steps.length ? (
                    <button
                        onClick={nextStep}
                        className={`${step > 1 ? "w-1/2" : "w-full"
                            } bg-green-500 text-white rounded-lg text-sm font-medium py-2 hover:bg-green-600 shadow`}
                    >
                        Verify & Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="w-1/2 bg-green-600 text-white rounded-lg text-sm font-medium py-2 hover:bg-green-700 shadow"
                    >
                        Submit
                    </button>
                )}
            </div>

        </div>
    );
}

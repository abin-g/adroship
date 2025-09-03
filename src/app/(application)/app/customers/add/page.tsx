"use client";

import { useState } from "react";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import {
    TextField,
    SelectField,
    PhoneField,
} from "@/components/Forms/FormFields";


type FieldOption = { value: string; label: string };

type FieldConfig =
    | {
        type: "text" | "email" | "phone";
        name: string;
        label: string;
        required?: boolean;
    }
    | {
        type: "select";
        name: string;
        label: string;
        required?: boolean;
        options: FieldOption[];
    }
    | {
        type: "file";
        name: string;
        label: string;
    };

type TabType = "personal" | "kyc" | "company";

interface UserFormData {
    firstName?: string;
    lastName?: string;
    role?: string;
    email?: string;
    phone?: string;
    kycType?: string;
    kycNumber?: string;
    documents?: FileList;
    companyName?: string;
    gstNumber?: string;
    address?: string;
    city?: string;
    state?: string;
    status?: string;
    kycStatus?: string;
}

const formSchema: Record<TabType, FieldConfig[]> = {
    personal: [
        { type: "text", name: "firstName", label: "First Name", required: true },
        { type: "text", name: "lastName", label: "Last Name", required: true },
        {
            type: "select",
            name: "role",
            label: "Role",
            required: true,
            options: [
                { value: "admin", label: "Admin" },
                { value: "sales", label: "Sales" },
                { value: "operations", label: "Operations" },
                { value: "finance", label: "Finance" },
                { value: "customer-support", label: "Customer Support" },
                { value: "accounts", label: "Accounts" },
            ],
        },
        { type: "email", name: "email", label: "Email", required: true },
        { type: "phone", name: "phone", label: "Contact Number", required: true },
        {
            type: "select",
            name: "status",
            label: "User Status",
            options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
            ],
        },
        {
            type: "select",
            name: "kycStatus",
            label: "KYC Status",
            options: [
                { value: "pending", label: "Pending" },
                { value: "verified", label: "Verified" },
                { value: "rejected", label: "Rejected" },
            ],
        }
    ],
    kyc: [
        {
            type: "select",
            name: "kycType",
            label: "KYC Type",
            options: [
                { value: "aadhaar", label: "Aadhaar" },
                { value: "pan", label: "PAN" },
                { value: "passport", label: "Passport" },
            ],
        },
        { type: "text", name: "kycNumber", label: "KYC Number" },
        { type: "file", name: "documents", label: "KYC Documents" },
    ],
    company: [
        { type: "text", name: "companyName", label: "Company Name" },
        { type: "text", name: "gstNumber", label: "GST Number" },
        { type: "text", name: "address", label: "Address" },
        { type: "text", name: "city", label: "City" },
        {
            type: "select",
            name: "state",
            label: "State",
            options: [
                { value: "TN", label: "Tamil Nadu" },
                { value: "KA", label: "Karnataka" },
                { value: "KL", label: "Kerala" },
                { value: "AP", label: "Andhra Pradesh" },
                { value: "MH", label: "Maharashtra" },
                { value: "DL", label: "Delhi" },
                { value: "RJ", label: "Rajasthan" },
            ],
        },
    ],
};


const AddUser = () => {
    const [activeTab, setActiveTab] = useState<TabType>("personal");

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<UserFormData>({
        defaultValues: { status: "active", kycStatus: "pending" },
    });

    const onSubmit = (data: UserFormData) => {
        console.log("User Data:", {
            ...data,
            documents: data.documents
                ? Array.from(data.documents).map((f: File) => f.name)
                : [],
        });
    };


    const renderField = (field: FieldConfig) => {
        switch (field.type) {
            case "text":
            case "email":
                return (
                    <TextField
                        key={field.name}
                        type={field.type}
                        label={field.label}
                        required={field.required}
                        error={(errors as FieldErrors<UserFormData>)[field.name as keyof UserFormData]?.message}
                        {...register(field.name as keyof UserFormData, field.required ? { required: `${field.label} is required` } : {})}
                    />
                );
            case "phone":
                return (
                    <PhoneField
                        key={field.name}
                        label={field.label}
                        required={field.required}
                        error={(errors as FieldErrors<UserFormData>)[field.name as keyof UserFormData]?.message}
                        {...register(field.name as keyof UserFormData, {
                            required: field.required ? `${field.label} is required` : false,
                            pattern: field.required
                                ? {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit phone number",
                                }
                                : undefined,
                        })}
                    />
                );
            case "select":
                return (
                    <Controller
                        key={field.name}
                        name={field.name as keyof UserFormData}
                        control={control}
                        rules={field.required ? { required: `${field.label} is required` } : {}}
                        render={({ field: controllerField }) => {
                            const selectedOption = field.options.find(
                                (opt) => opt.value === controllerField.value
                            ) ?? null;

                            return (
                                <SelectField
                                    label={field.label}
                                    options={field.options}
                                    required={field.required}
                                    error={
                                        (errors as FieldErrors<UserFormData>)[
                                            field.name as keyof UserFormData
                                        ]?.message
                                    }
                                    value={selectedOption}
                                    onChange={(newValue: unknown, _actionMeta: any) =>
                                        controllerField.onChange(
                                            (newValue as FieldOption | null)?.value ?? ""
                                        )
                                    }
                                />
                            );
                        }}
                    />
                );

            case "file":
                return (
                    <div key={field.name} className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.label}
                        </label>
                        <Controller
                            name={field.name as keyof UserFormData}
                            control={control}
                            render={({ field: controllerField }) => (
                                <>
                                    <div
                                        className="flex items-center justify-center w-full"
                                    >
                                        <label
                                            htmlFor={field.name}
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed 
                                           border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    className="w-8 h-8 mb-3 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6H16a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                    ></path>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500">
                                                    <span className="font-semibold">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    PDF, PNG, JPG (Max 5MB)
                                                </p>
                                            </div>
                                            <input
                                                id={field.name}
                                                type="file"
                                                multiple
                                                className="hidden"
                                                onChange={(e) =>
                                                    controllerField.onChange(
                                                        e.target.files as FileList
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>

                                    {controllerField.value && (
                                        <ul className="mt-3 space-y-2">
                                            {(Array.from(controllerField.value as FileList) as File[]).map(
                                                (file: File, idx: number) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center justify-between p-2 text-sm bg-gray-100 rounded-md"
                                                    >
                                                        <span className="text-gray-700 truncate max-w-[70%]">
                                                            {file.name}
                                                        </span>
                                                        <span className="text-gray-500 text-xs">
                                                            {(file.size / 1024).toFixed(1)} KB
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </>
                            )}
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        Add Customer
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage and monitor all user accounts, their roles, and
                        authentication status.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>

                <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition">
                    Manage User
                </button>
            </div>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px">
                    {(["personal", "kyc", "company"] as TabType[]).map((tab) => (
                        <li key={tab} className="me-2">
                            <button
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab
                                    ? "text-green-600 border-green-600"
                                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                    }`}
                            >
                                {tab === "personal"
                                    ? "Personal Details"
                                    : tab === "kyc"
                                        ? "KYC Details"
                                        : "Company Details"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow mt-6 space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formSchema[activeTab].map((field) => renderField(field))}
                </div>

                <div className="flex justify-end pt-6 gap-4">
                    {activeTab === "personal" ? (
                        <>
                            <button
                                type="button"
                                onClick={handleSubmit((data) => {
                                    console.log("Send Invite Data:", data);
                                    // 👉 handle invite API here
                                })}
                                className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg shadow hover:bg-gray-600 transition"
                            >
                                Send Invite
                            </button>

                            <button
                                type="button"
                                onClick={handleSubmit((data) => {
                                    console.log("Saved Personal Data:", data);
                                    setActiveTab("kyc"); // 👉 go to next tab
                                })}
                                className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                            >
                                Save & Next
                            </button>
                        </>
                    ) : (
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    )}
                </div>

            </form>
        </div>
    );
};

export default AddUser;

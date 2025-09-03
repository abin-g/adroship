"use client";

import React from "react";
import Select, { Props as ReactSelectProps } from "react-select";

interface BaseFieldProps {
    label: string;
    required?: boolean;
    error?: string;
}

interface TextFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseFieldProps { }

export const TextField: React.FC<TextFieldProps> = ({
    label,
    required,
    error,
    ...props
}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props}
                placeholder={props.placeholder || "Enter " + label.toLowerCase()}
                autoComplete="off"
                spellCheck={false}
                required={required}
                className={`w-full rounded-md border p-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none ${error
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-green-500"
                    } ${props.className || ""}`}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

interface SelectFieldProps extends ReactSelectProps, BaseFieldProps { }

export const SelectField: React.FC<SelectFieldProps> = ({
    label,
    required,
    error,
    ...props
}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <Select
                {...props}
                classNamePrefix="react-select"
                isClearable
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: error
                            ? "#EF4444"
                            : state.isFocused
                                ? "#22C55E"
                                : "#D1D5DB",
                        boxShadow: state.isFocused
                            ? error
                                ? "0 0 0 1px #EF4444"
                                : "0 0 0 1px #22C55E"
                            : "none",
                        "&:hover": {
                            borderColor: error
                                ? "#EF4444"
                                : "#22C55E",
                        },
                        borderRadius: "0.5rem",
                        minHeight: "2.5rem",
                    }),
                }}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

interface CheckboxFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseFieldProps { }

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
    label,
    required,
    error,
    ...props
}) => {
    return (
        <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                <input
                    {...props}
                    type="checkbox"
                    autoComplete="off"
                    required={required}
                    className={`h-4 w-4 rounded-md ${error ? "border-red-500 text-red-600" : "border-gray-300 text-green-600"
                        } focus:ring-0`}
                />
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

interface PhoneFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseFieldProps {
    prefix?: string;
}

export const PhoneField: React.FC<PhoneFieldProps> = ({
    label,
    prefix = "+91",
    required,
    error,
    ...props
}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-100 text-gray-600 text-sm">
                    {prefix}
                </span>
                <input
                    {...props}
                    type="tel"
                    autoComplete="off"
                    spellCheck={false}
                    required={required}
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    className={`w-full rounded-r-md border p-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none ${error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-green-500"
                        } ${props.className || ""}`}
                />
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

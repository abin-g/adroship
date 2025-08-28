"use client";

import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    SelectField,
    CheckboxField,
    PhoneField,
} from "@/components/Forms/FormFields";
import { FaFileInvoice } from "react-icons/fa";

interface InvoiceFormData {
    invoiceNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    department: string;
    amount: number;
    dueDate: string;
    status: string;
    gstApplicable: boolean;
}

const InvoicePage = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<InvoiceFormData>();

    const onSubmit = (data: InvoiceFormData) => {
        console.log("Invoice Data:", data);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <FaFileInvoice size={28} />
                        </span>
                        Create Invoice
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Generate and manage invoices for customers with payment details.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>

                <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition">
                    Manage Invoices
                </button>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <TextField
                    label="Invoice Number"
                    required
                    error={errors.invoiceNumber?.message}
                    {...register("invoiceNumber", { required: "Invoice number is required" })}
                />

                <TextField
                    label="Customer Name"
                    required
                    error={errors.customerName?.message}
                    {...register("customerName", { required: "Customer name is required" })}
                />

                <TextField
                    label="Customer Email"
                    type="email"
                    required
                    error={errors.customerEmail?.message}
                    {...register("customerEmail", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                    })}
                />

                <PhoneField
                    label="Customer Phone"
                    required
                    error={errors.customerPhone?.message}
                    {...register("customerPhone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit phone number",
                        },
                    })}
                />

                <Controller
                    name="department"
                    control={control}
                    rules={{ required: "Department is required" }}
                    render={({ field }) => (
                        <SelectField
                            label="Department"
                            required
                            error={errors.department?.message}
                            options={[
                                { value: "sales", label: "Sales" },
                                { value: "operations", label: "Operations" },
                                { value: "logistics", label: "Logistics" },
                                { value: "accounts", label: "Accounts" },
                            ]}
                            {...field}
                            onChange={(val: any) => field.onChange(val.value)}
                        />
                    )}
                />

                <TextField
                    label="Invoice Amount (₹)"
                    type="number"
                    required
                    error={errors.amount?.message}
                    {...register("amount", {
                        required: "Invoice amount is required",
                        min: { value: 1, message: "Amount must be greater than 0" },
                    })}
                />

                <TextField
                    label="Due Date"
                    type="date"
                    required
                    error={errors.dueDate?.message}
                    {...register("dueDate", { required: "Due date is required" })}
                />

                <Controller
                    name="status"
                    control={control}
                    rules={{ required: "Status is required" }}
                    render={({ field }) => (
                        <SelectField
                            label="Status"
                            required
                            error={errors.status?.message}
                            options={[
                                { value: "pending", label: "Pending" },
                                { value: "paid", label: "Paid" },
                                { value: "overdue", label: "Overdue" },
                            ]}
                            {...field}
                            onChange={(val: any) => field.onChange(val.value)}
                        />
                    )}
                />

                <div className="col-span-2">
                    <CheckboxField
                        label="GST Applicable"
                        {...register("gstApplicable")}
                    />
                </div>

                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                    >
                        Create Invoice
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InvoicePage;
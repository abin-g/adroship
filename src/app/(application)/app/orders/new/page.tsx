"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    SelectField,
    CheckboxField,
    PhoneField,
} from "@/components/Forms/FormFields";
import { PiShippingContainerDuotone } from "react-icons/pi";

interface OrderFormData {
    // Step 1
    buyerName: string;
    buyerEmail?: string;
    buyerPhone: string;
    receiverName: string;
    receiverPhone: string;
    receiverAddress: string;

    // Step 2
    orderId: string;
    productName: string;
    quantity?: number;
    value?: number;
    paymentMode: string;
    pickupAddress: string;
    pickupContact?: string;

    // Step 3
    weight?: number;
    length?: number;
    width?: number;
    height?: number;
    fragile?: boolean;
    insurance?: boolean;
    specialInstructions?: string;
}

const steps = [
    { number: 1, title: "Buyer / Receiver", description: "Customer & delivery details" },
    { number: 2, title: "Order Info", description: "Order & pickup details" },
    { number: 3, title: "Package & Extras", description: "Weight, size & options" },
];

const Stepper = ({ currentStep }: { currentStep: number }) => (
    <ol className="flex flex-col sm:flex-row sm:space-x-8 w-full mb-8">
        {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;
            return (
                <li
                    key={step.number}
                    className={`flex items-center space-x-3 mb-4 sm:mb-0 ${isActive ? "text-green-600" : isCompleted ? "text-gray-700" : "text-gray-400"
                        }`}
                >
                    <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 shrink-0 ${isActive
                            ? "border-green-600 bg-green-50"
                            : isCompleted
                                ? "border-green-600 bg-green-600 text-white"
                                : "border-gray-400"
                            }`}
                    >
                        {step.number}
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">{step.title}</h3>
                        <p className="text-sm">{step.description}</p>
                    </span>
                </li>
            );
        })}
    </ol>
);

export default function CreateOrder() {
    const [step, setStep] = useState(1);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<OrderFormData>();

    const onSubmit = (data: OrderFormData) => console.log("Order Data -->", data);

    const handleNext = () => setStep((s) => Math.min(s + 1, steps.length));
    const handleBack = () => setStep((s) => Math.max(s - 1, 1));

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <h1 className="text-3xl font-bold flex items-center gap-3 text-gray-900">
                    <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                        <PiShippingContainerDuotone size={28} />
                    </span>
                    Create Order
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Fill in the details step by step to create a new order.
                </p>
                <div className="w-40 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700" />
            </div>

            <div className="mx-auto bg-white p-6">
                <Stepper currentStep={step} />

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* STEP 1 - Buyer & Receiver */}
                    {step === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                label="Buyer Name"
                                required
                                error={errors.buyerName?.message}
                                {...register("buyerName", { required: "Buyer Name is required" })}
                            />
                            <TextField
                                label="Buyer Email"
                                type="email"
                                error={errors.buyerEmail?.message}
                                {...register("buyerEmail", {
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" },
                                })}
                            />
                            <PhoneField
                                label="Buyer Phone"
                                required
                                error={errors.buyerPhone?.message}
                                {...register("buyerPhone", { required: "Phone is required" })}
                            />
                            <TextField
                                label="Receiver Name"
                                required
                                error={errors.receiverName?.message}
                                {...register("receiverName", { required: "Receiver Name is required" })}
                            />
                            <PhoneField
                                label="Receiver Phone"
                                required
                                error={errors.receiverPhone?.message}
                                {...register("receiverPhone", { required: "Receiver Phone is required" })}
                            />
                            <TextField
                                label="Receiver Address"
                                required
                                error={errors.receiverAddress?.message}
                                {...register("receiverAddress", { required: "Receiver Address is required" })}
                            />
                        </div>
                    )}

                    {/* STEP 2 - Order Info */}
                    {step === 2 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                label="Order ID"
                                required
                                error={errors.orderId?.message}
                                {...register("orderId", { required: "Order ID is required" })}
                            />
                            <TextField
                                label="Product Name"
                                required
                                error={errors.productName?.message}
                                {...register("productName", { required: "Product Name is required" })}
                            />
                            <TextField
                                label="Quantity"
                                type="number"
                                error={errors.quantity?.message}
                                {...register("quantity", { min: { value: 1, message: "Must be at least 1" } })}
                            />
                            <TextField
                                label="Order Value"
                                type="number"
                                error={errors.value?.message}
                                {...register("value")}
                            />
                            <Controller
                                name="paymentMode"
                                control={control}
                                rules={{ required: "Payment Mode is required" }}
                                render={({ field }) => (
                                    <SelectField
                                        label="Payment Mode"
                                        required
                                        error={errors.paymentMode?.message}
                                        options={[
                                            { value: "prepaid", label: "Prepaid" },
                                            { value: "cod", label: "Cash on Delivery" },
                                        ]}
                                        {...field}
                                        onChange={(val: any) => field.onChange(val?.value)}
                                    />
                                )}
                            />
                            <TextField
                                label="Pickup Address"
                                required
                                error={errors.pickupAddress?.message}
                                {...register("pickupAddress", { required: "Pickup Address is required" })}
                            />
                            <PhoneField
                                label="Pickup Contact"
                                error={errors.pickupContact?.message}
                                {...register("pickupContact")}
                            />
                        </div>
                    )}

                    {/* STEP 3 - Package & Extras */}
                    {step === 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField label="Weight (kg)" type="number" {...register("weight")} />
                            <TextField label="Length (cm)" type="number" {...register("length")} />
                            <TextField label="Width (cm)" type="number" {...register("width")} />
                            <TextField label="Height (cm)" type="number" {...register("height")} />
                            <CheckboxField label="Fragile Item" {...register("fragile")} />
                            <CheckboxField label="Insurance Required" {...register("insurance")} />
                            <TextField label="Special Instructions" {...register("specialInstructions")} />
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-end gap-3 pt-4">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition"
                            >
                                Back
                            </button>
                        )}
                        {step < steps.length ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                            >
                                Submit Order
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

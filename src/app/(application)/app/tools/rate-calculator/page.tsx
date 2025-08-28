"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import {
    TextField,
    SelectField,
} from "@/components/Forms/FormFields";

interface ShippingFormData {
    origin: string;
    destination: string;
    weight: number;
    length: number;
    width: number;
    height: number;
    mode: string;
}

const RateCalculator = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ShippingFormData>();

    const [cost, setCost] = useState<number | null>(null);

    const calculateRate = (data: ShippingFormData) => {
        const { weight, length, width, height, mode } = data;

        // Volumetric weight formula
        const volumetricWeight = (length * width * height) / 5000;
        const chargeableWeight = Math.max(weight, volumetricWeight);

        // Base rate per kg
        let ratePerKg = mode === "express" ? 80 : 50;

        let totalCost = chargeableWeight * ratePerKg;

        // Fuel surcharge 10%
        totalCost += totalCost * 0.1;

        // GST 18%
        totalCost += totalCost * 0.18;

        setCost(totalCost);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <FaShippingFast size={28} />
                        </span>
                        Logistics Rate Calculator
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Estimate shipping costs based on package weight, dimensions, and delivery mode.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(calculateRate)}
                className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <TextField
                    label="Origin"
                    required
                    error={errors.origin?.message}
                    {...register("origin", { required: "Origin is required" })}
                />

                <TextField
                    label="Destination"
                    required
                    error={errors.destination?.message}
                    {...register("destination", { required: "Destination is required" })}
                />

                <TextField
                    label="Weight (kg)"
                    type="number"
                    required
                    error={errors.weight?.message}
                    {...register("weight", { required: "Weight is required", valueAsNumber: true })}
                />

                <TextField
                    label="Length (cm)"
                    type="number"
                    required
                    error={errors.length?.message}
                    {...register("length", { required: "Length is required", valueAsNumber: true })}
                />

                <TextField
                    label="Width (cm)"
                    type="number"
                    required
                    error={errors.width?.message}
                    {...register("width", { required: "Width is required", valueAsNumber: true })}
                />

                <TextField
                    label="Height (cm)"
                    type="number"
                    required
                    error={errors.height?.message}
                    {...register("height", { required: "Height is required", valueAsNumber: true })}
                />

                <Controller
                    name="mode"
                    control={control}
                    rules={{ required: "Shipping Mode is required" }}
                    render={({ field }) => (
                        <SelectField
                            label="Shipping Mode"
                            required
                            error={errors.mode?.message}
                            options={[
                                { value: "standard", label: "Standard" },
                                { value: "express", label: "Express" },
                            ]}
                            {...field}
                            onChange={(val: any) => field.onChange(val.value)}
                        />
                    )}
                />

                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                    >
                        Calculate Rate
                    </button>
                </div>
            </form>

            {cost !== null && (
                <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        Estimated Shipping Cost
                    </h2>
                    <p className="text-lg">
                        Total Shipping Cost:{" "}
                        <span className="font-bold text-green-600">₹{cost.toFixed(2)}</span>
                    </p>
                    <p className="text-gray-600 text-sm mt-2">(Includes fuel surcharge and GST)</p>
                </div>
            )}
        </div>
    );
};

export default RateCalculator;

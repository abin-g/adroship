"use client";

import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    SelectField,
    CheckboxField,
    PhoneField,
} from "@/components/Forms/FormFields";
import { RiUserShared2Line } from "react-icons/ri";

interface UserFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    department: string;
    password: string;
    confirmPassword: string;
    twoFA: boolean;
}

const AddUser = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm<UserFormData>();

    const onSubmit = (data: UserFormData) => {
        console.log("User Data:", data);
    };

    const password = watch("password");

    console.log("errors", errors)

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <RiUserShared2Line size={28} />
                        </span>
                        Add Users
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage and monitor all user accounts, their roles, and authentication status.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>

                <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition">
                    Manage User
                </button>
            </div>


            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <TextField
                    label="First Name"
                    required
                    error={errors.firstName?.message as string}
                    {...register("firstName", { required: "First Name is required" })}
                />

                <TextField
                    label="Last Name"
                    required
                    error={errors.lastName?.message}
                    {...register("lastName", { required: "Last Name is required" })}
                />

                <Controller
                    name="role"
                    control={control}
                    rules={{ required: "Role is required" }}
                    render={({ field }: { field: any }) => (
                        <SelectField
                            label="Role"
                            required
                            error={errors.role?.message}
                            options={[
                                { value: "admin", label: "Admin" },
                                { value: "manager", label: "Manager" },
                                { value: "user", label: "User" },
                            ]}
                            {...field}
                            onChange={(val: { value: string }) => field.onChange(val.value)}
                        />
                    )}
                />

                <TextField
                    label="Email"
                    type="email"
                    required
                    error={errors.email?.message}
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                    })}
                />

                <PhoneField
                    label="Contact Number"
                    required
                    error={errors.phone?.message}
                    {...register("phone", {
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
                    render={({ field }: { field: any }) => (
                        <SelectField
                            label="Department"
                            required
                            error={errors.department?.message}
                            options={[
                                { value: "sales", label: "Sales" },
                                { value: "operations", label: "Operations" },
                                { value: "logistics", label: "Logistics" },
                                { value: "warehouse", label: "Warehouse" },
                                { value: "customer-support", label: "Customer Support" },
                                { value: "accounts", label: "Accounts" },
                            ]}
                            {...field}
                            onChange={(val: { value: string }) => field.onChange(val?.value)}
                        />
                    )}
                />


                <TextField
                    label="Password"
                    type="password"
                    required
                    error={errors.password?.message}
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                    })}
                />

                <TextField
                    label="Confirm Password"
                    type="password"
                    required
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (val: any) =>
                            val === password || "Passwords do not match",
                    })}
                />

                <div className="col-span-2">
                    <CheckboxField
                        label="Enable Two-Factor Authentication (2FA)"
                        error={errors.twoFA?.message}
                        {...register("twoFA")}
                    />
                </div>

                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                    >
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
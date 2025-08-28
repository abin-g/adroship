"use client";

import { useState, useRef, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const RangePicker = () => {

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative inline-block text-sm">

            <div
                className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 cursor-pointer hover:border-green-500 transition"
                onClick={() => setOpen(!open)}
            >
                <FiCalendar className="mr-2 text-green-600" size={18} />
                <span className="font-medium">
                    {range[0].startDate.toLocaleDateString()} →{" "}
                    {range[0].endDate.toLocaleDateString()}
                </span>
            </div>

            {open && (
                <div className="absolute -left-50 mt-2 z-50 bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden">
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => {
                            const selection = item.selection;
                            setRange([{
                                startDate: selection.startDate || new Date(),
                                endDate: selection.endDate || new Date(),
                                key: "selection"
                            }]);
                        }}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        rangeColors={["#16a34a"]}
                    />
                    <div className="flex justify-end gap-2 p-3 border-t bg-gray-50">
                        <button
                            className="px-4 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-1.5 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                            onClick={() => setOpen(false)}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RangePicker;
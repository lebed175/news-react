import { useState } from "react"

export const useFilters = (inititalState) => {
    const [filters, setFilters] = useState(inititalState)

    const changeFilter = (key, value) => {
        setFilters((prev) => {
            return {
                ...prev,
                [key]: value,
            };
        });
    };

    return { filters, changeFilter }
}
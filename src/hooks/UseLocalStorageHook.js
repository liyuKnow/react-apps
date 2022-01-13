import { useState, useEffect } from 'react';

export default function useLocalStorageHook(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        }

        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }

    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
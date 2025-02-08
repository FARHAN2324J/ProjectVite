import { createContext, useState } from 'react';

export const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <HeartContext.Provider value={{ count, incrementCount }}>
            {children}
        </HeartContext.Provider>
    );
};

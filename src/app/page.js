'use client';

import { useState } from 'react';
import { Binomial } from '@/components/binomial';
import { AllResults } from '@/components/allResults';

export default function Home() {
    const [results, setResults] = useState([]);

    const handleCalculate = (newResults) => {
        setResults(newResults);
    };

    return (
        <div className='bg-primary h-screen text-center text-white pt-5'>
            <h1 className='text-3xl font-bold'>Distribuição Binomial</h1>
            <Binomial onCalculate={handleCalculate} results={results} />
            <AllResults results={results} />
        </div>
    );
}

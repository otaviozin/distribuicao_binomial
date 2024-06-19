'use client';

import { useState } from 'react';
import { Binomial } from '@/components/binomial';
import { AllResults } from '@/components/allResults';
import { Intervals } from '@/components/intervals';

export default function Home() {
    const [results, setResults] = useState([]);
    const [resMean, setResMean] = useState(0);
    const [resVariance, setResVariance] = useState(0);
    const [resStandardDeviation, setResStandardDeviation] = useState(0);
    const [resCoefficientVariation, setResCoefficientVariation] = useState(0);

    const handleCalculate = (newResults, resMean, resVariance, resStandardDeviation, resCoefficientVariation) => {
        setResults(newResults);
        setResMean(resMean);
        setResVariance(resVariance);
        setResStandardDeviation(resStandardDeviation);
        setResCoefficientVariation(resCoefficientVariation);
    };

    return (
        <div className='bg-primary h-full lg:h-screen text-center text-white py-8'>
            <h1 className='text-3xl font-bold'>Distribuição Binomial</h1>
            <div className='lg:grid grid-cols-3'>
                <Binomial onCalculate={handleCalculate} results={results} />
                <Intervals results={results} />
                <AllResults
                    results={results}
                    resMean={resMean}
                    resVariance={resVariance}
                    resStandardDeviation={resStandardDeviation}
                    resCoefficientVariation={resCoefficientVariation}
                />
            </div>
        </div>
    );
}

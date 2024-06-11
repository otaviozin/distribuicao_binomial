import { useState, useEffect } from 'react';
import {
    calculateBinomialDistribution,
    calculateCoefficientVariation,
    calculateMean,
    calculateStandardDeviation,
    calculateVariance,
} from '@/utils/calcs';
import { preventNegativeValues } from '@/utils/keyConfigs';

export const Binomial = ({ onCalculate, results }) => {
    const [inputs, setInputs] = useState({ n: '', p: '', x: '', option: '=' });
    const [sumResult, setSumResult] = useState(0);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const calculate = () => {
        const { n, p, x } = inputs;
        if (x == '') {
            setInputs({
                ...inputs,
                x: 0,
            });
        }
        const results = calculateBinomialDistribution(Number(n), Number(p));
        const resMean = calculateMean(Number(n), Number(p));
        const resVariance = calculateVariance(Number(n), Number(p));
        const resStandardDeviation = calculateStandardDeviation(Number(n), Number(p));
        const resCoefficientVariation = calculateCoefficientVariation(Number(n), Number(p));
        onCalculate(results, resMean, resVariance, resStandardDeviation, resCoefficientVariation);
    };

    useEffect(() => {
        const handleOptionChange = () => {
            const xValue = Number(inputs.x);
            if (inputs.option === '>=') {
                const sum = results.reduce((acc, value, index) => {
                    if (index >= xValue) {
                        return acc + value;
                    }
                    return acc;
                }, 0);
                console.log('Soma dos valores >= X:', sum);
                setSumResult(sum);
            } else if (inputs.option === '<=') {
                const sum = results.reduce((acc, value, index) => {
                    if (index <= xValue) {
                        return acc + value;
                    }
                    return acc;
                }, 0);
                console.log('Soma dos valores <= X:', sum);
                setSumResult(sum);
            } else if (inputs.option === '>') {
                const sum = results.reduce((acc, value, index) => {
                    if (index > xValue) {
                        return acc + value;
                    }
                    return acc;
                }, 0);
                console.log('Soma dos valores > X:', sum);
                setSumResult(sum);
            } else if (inputs.option === '<') {
                const sum = results.reduce((acc, value, index) => {
                    if (index < xValue) {
                        return acc + value;
                    }
                    return acc;
                }, 0);
                console.log('Soma dos valores < X:', sum);
                setSumResult(sum);
            } else {
                setSumResult(results[Number(inputs.x)] || 0);
            }
        };

        handleOptionChange();
    }, [inputs.option, inputs.x, results]);

    return (
        <div className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow h-96'>
            <div className='pt-5'>
                <label>
                    N:
                    <input
                        className='rounded-full py-1 border border-black pl-3 ml-1'
                        min='0'
                        onKeyDown={preventNegativeValues}
                        type='number'
                        name='n'
                        value={inputs.n}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    P:
                    <input
                        className='rounded-full py-1 border border-black pl-3 ml-1'
                        min='0'
                        onKeyDown={preventNegativeValues}
                        step='0.01'
                        type='number'
                        name='p'
                        value={inputs.p}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    X:
                    <input
                        className='rounded-full py-1 border border-black pl-3 ml-1'
                        min='0'
                        onKeyDown={preventNegativeValues}
                        type='number'
                        name='x'
                        value={inputs.x}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button className='bg-[#181848] w-fit px-2 py-1 rounded-md border-2 border-black' onClick={calculate}>
                Calcular
            </button>
            <div>
                {results.map(
                    (value, index) =>
                        index == inputs.x && (
                            <div
                                key={index}
                                className='bg-white text-black w-fit px-3 py-1 rounded-md border-2 border-black flex gap-2'
                            >
                                <p>X</p>
                                <select
                                    className='border border-black rounded-md text-center'
                                    value={inputs.option}
                                    name='option'
                                    onChange={handleChange}
                                >
                                    <option>=</option>
                                    <option>&gt;=</option>
                                    <option>&lt;=</option>
                                    <option>&gt;</option>
                                    <option>&lt;</option>
                                </select>
                                <p>{inputs.x} -&gt; </p>
                                <p key={index}> {sumResult.toFixed(2)}%</p>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

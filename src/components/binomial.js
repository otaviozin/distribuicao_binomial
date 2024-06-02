import { useState } from 'react';
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

    return (
        <div className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow h-96'>
            <div className='pt-5'>
                <label>
                    N:
                    <input
                        className='rounded-full py-1 border border-black pl-3 ml-1'
                        min='0'
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
                                className='bg-white text-black w-fit px-3 py-1 rounded-md border-2 border-black flex gap-4'
                            >
                                <p>X</p>
                                <select
                                    className='border border-black rounded-md'
                                    value={inputs.option}
                                    onChange={handleChange}
                                >
                                    <option>=</option>
                                    <option>&gt;=</option>
                                    <option>=&gt;</option>
                                </select>
                                <p key={index}> {value.toFixed(3)}%</p>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

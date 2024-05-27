import { useState } from 'react';
import { calculateBinomialDistribution } from '@/utils/calcs';
import { preventNegativeValues } from '@/utils/keyConfigs';

export const Binomial = ({ onCalculate, results }) => {
    const [inputs, setInputs] = useState({ n: '', p: '', x: '' });

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
        onCalculate(results);
    };

    return (
        <div className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow'>
            <div className='pt-5'>
                <label>
                    n:
                    <input
                        className='rounded-full py-1 border border-black pl-3'
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
                    p:
                    <input
                        className='rounded-full py-1 border border-black pl-3'
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
                    x:
                    <input
                        className='rounded-full py-1 border border-black pl-3'
                        min='0'
                        onKeyDown={preventNegativeValues}
                        type='number'
                        name='x'
                        value={inputs.x}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button
                className='bg-[#181848] w-fit px-2 py-1 rounded-md border-2 border-black'
                onClick={calculate}
            >
                Calcular
            </button>
            <ul>
                {results.map(
                    (value, index) =>
                        index == inputs.x && (
                            <li key={index}>
                                X = {index} =&gt; {value.toFixed(3)}%
                            </li>
                        )
                )}
            </ul>
        </div>
    );
};

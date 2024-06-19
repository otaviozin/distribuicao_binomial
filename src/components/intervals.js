import React, { useState } from 'react';
import { preventNegativeValues } from '@/utils/keyConfigs';

export const Intervals = ({ results }) => {
    const [lowerValue, setLowerValue] = useState('');
    const [lowerOption, setLowerOption] = useState('<');
    const [upperValue, setUpperValue] = useState('');
    const [upperOption, setUpperOption] = useState('<');
    const [sumResult, setSumResult] = useState();
    const [showPopup, setShowPopup] = useState(false);

    const calcIntervalSum = (e) => {
        e.preventDefault();
        const lowerIndex = parseInt(lowerValue);
        let upperIndex = parseInt(upperValue);

        if (upperIndex > results.length - 1) {
            upperIndex = results.length - 1;
            setUpperValue(upperIndex.toString());
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
        }

        if (
            isNaN(lowerIndex) ||
            isNaN(upperIndex) ||
            lowerIndex === upperIndex ||
            lowerIndex < 0 ||
            upperIndex >= results.length
        ) {
            setSumResult(0);
            return;
        }

        let filteredResults;
        if (lowerOption === '<' && upperOption === '<') {
            filteredResults = results.slice(lowerIndex + 1, upperIndex);
        } else if (lowerOption === '<=' && upperOption === '<') {
            filteredResults = results.slice(lowerIndex, upperIndex);
        } else if (lowerOption === '<' && upperOption === '<=') {
            filteredResults = results.slice(lowerIndex + 1, upperIndex + 1);
        } else if (lowerOption === '<=' && upperOption === '<=') {
            filteredResults = results.slice(lowerIndex, upperIndex + 1);
        }
        const soma = filteredResults.reduce((acc, curr) => acc + curr, 0);
        setSumResult(soma);
    };

    return (
        <div>
            <form
                onSubmit={calcIntervalSum}
                className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow h-96'
            >
                <h1 className='text-2xl font-bold'>Intervalos</h1>
                <div className='flex gap-2 text-black text-center'>
                    <input
                        className='rounded-full py-1 border border-black pl-3 w-16'
                        value={lowerValue}
                        onChange={(e) => setLowerValue(e.target.value)}
                        onKeyDown={preventNegativeValues}
                        min='0'
                        step='1'
                        type='number'
                        name='lowerValue'
                    />
                    <select
                        className='border border-black rounded-md text-center'
                        value={lowerOption}
                        onChange={(e) => setLowerOption(e.target.value)}
                        name='lowerOption'
                    >
                        <option>&lt;</option>
                        <option>&lt;=</option>
                    </select>
                    <input
                        className='rounded-full py-1 border border-black text-center w-16'
                        value='X'
                        type='text'
                        disabled
                    />
                    <select
                        className='border border-black rounded-md text-center'
                        value={upperOption}
                        onChange={(e) => setUpperOption(e.target.value)}
                        name='upperOption'
                    >
                        <option>&lt;</option>
                        <option>&lt;=</option>
                    </select>
                    <input
                        className='rounded-full py-1 border border-black pl-3 w-16'
                        value={upperValue}
                        onChange={(e) => setUpperValue(e.target.value)}
                        onKeyDown={preventNegativeValues}
                        min='0'
                        step='1'
                        type='number'
                        name='upperValue'
                    />
                </div>
                <button className='bg-[#181848] w-fit px-2 py-1 rounded-md border-2 border-black'>Calcular</button>
                {sumResult !== undefined && (
                    <div className='bg-white text-black w-fit px-3 py-1 rounded-md border-2 border-black flex gap-2 mt-5'>
                        <p>X</p>
                        <p>-&gt;</p>
                        <p>{sumResult.toFixed(2)}%</p>
                    </div>
                )}
            </form>
            {showPopup && (
                <div className='popup fixed top-20 left-1/2 transform -translate-x-1/2 bg-secondary border border-black p-4 rounded z-10 custom-shadow'>
                    O valor máximo do intervalo foi ajustado para o tamanho do N.
                </div>
            )}
        </div>
    );
};

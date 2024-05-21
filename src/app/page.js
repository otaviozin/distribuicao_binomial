'use client'
import { useState } from 'react';
import { binomialDistribution } from 'simple-statistics';

export default function Home(){

	const [calc, setCalc] = useState([]);

	const calcular = () => {
		const res = binomialDistribution(5, 0.6);
		const calculos = res.map(value => value * 100);
		setCalc(calculos);
	}

    return(
        <div>
			<h1>Distribuição Binomial</h1>
			<button onClick={calcular}>Executar</button>
			<ul>
                {calc.map((value, index) => (
                    <li key={index}>X = {index} =&gt; {value.toFixed(3)}%</li>
                ))}
            </ul>
		</div>
    );
}

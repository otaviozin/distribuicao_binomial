'use client';
import { useState } from 'react';
import { calculateBinomialDistribution } from '@/utils/calcs';
import { preventNegativeValues } from '@/utils/keyConfigs';

export default function Home() {
    const [inputs, setInputs] = useState({
        n: '',
        p: '',
        x: 0
    });
    const [calc, setCalc] = useState([]);

    // Função para lidar com mudanças nos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    // Função para calcular a distribuição binomial
    const calculate = () => {
        const { n, p } = inputs;
        // Converta n e p para números antes de passar para a função
        const response = calculateBinomialDistribution(Number(n), Number(p));
        setCalc(response);
    };


    return (
        <div>
            <h1>Distribuição Binomial</h1>
            {/* Inputs para receber valores de n e p */}
            <div>
                <label>
                    n:
                    <input
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
                    p:
                    <input
                        min='0'
                        onKeyDown={preventNegativeValues}
                        type='number'
                        name='p'
                        step='0.01'
                        value={inputs.p}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    x:
                    <input
                        min='0'
                        onKeyDown={preventNegativeValues}
                        type='number'
                        name='x'
                        value={inputs.x}
                        onChange={handleChange}
                    />
                </label>
            </div>
            {/* Botão para executar o cálculo */}
            <button onClick={calculate}>Executar</button>
            {/* Renderizando os resultados */}
            <ul>
                {calc.map((value, index) => index == inputs.x && (
                    <section>
                        <p>Resultado do X</p>
                        <li key={index}>
                            X = {index} =&gt; {value.toFixed(3)}%
                        </li>
                    </section>
                ))}
            </ul>
        </div>
    );
}

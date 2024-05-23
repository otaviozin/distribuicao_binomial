'use client';
import { useState } from 'react';
import { calcularBinomialDistribution } from '../utils/calcs'; // Ajuste o caminho conforme necessário

export default function Home() {
    // Estados para armazenar os valores dos inputs
    const [inputs, setInputs] = useState({
        n: '',
        p: '',
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
    const calcular = () => {
        const { n, p } = inputs;
        // Converta n e p para números antes de passar para a função
        const calculos = calcularBinomialDistribution(Number(n), Number(p));
        setCalc(calculos);
    };

    return (
        <div>
            <h1>Distribuição Binomial</h1>
            {/* Inputs para receber valores de n e p */}
            <div>
                <label>
                    n:
                    <input
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
                        type='number'
                        name='p'
                        step='0.01'
                        value={inputs.p}
                        onChange={handleChange}
                    />
                </label>
            </div>
            {/* Botão para executar o cálculo */}
            <button onClick={calcular}>Executar</button>
            {/* Renderizando os resultados */}
            <ul>
                {calc.map((value, index) => (
                    <li key={index}>
                        X = {index} =&gt; {value.toFixed(3)}%
                    </li>
                ))}
            </ul>
        </div>
    );
}

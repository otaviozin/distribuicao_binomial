// calculations.js
import { binomialDistribution } from 'simple-statistics';

// Função para calcular a distribuição binomial
export const calcularBinomialDistribution = (n, p) => {
    const res = binomialDistribution(n, p);
    return res.map(value => value * 100);
};

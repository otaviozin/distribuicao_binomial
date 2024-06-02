import { binomialDistribution } from 'simple-statistics';

// Regra de arredondamento
export const roundRule = (value) => {
    const numberToString = value.toString();
    const thirdDecimal = parseInt(numberToString.charAt(numberToString.indexOf('.') + 3));

    if (thirdDecimal > 4) {
        // Arredonda para cima a segunda casa decimal
        value = Math.ceil(value * 100) / 100;
    } else {
        // Arredonda para baixo a segunda casa decimal
        value = Math.floor(value * 100) / 100;
    }

    // Retorna o valor com duas casas decimais
    return value.toFixed(3);
};

// Distribuição Binomial
export const calculateBinomialDistribution = (n, p) => {
    const res = binomialDistribution(n, p);
    return res.map((value) => value * 100);
};

// Média
export const calculateMean = (n, p) => {
    const mean = n * p;
    return mean.toFixed(3);
};

// Variância
export const calculateVariance = (n, p) => {
    const variance = n * p * (1 - p);
    return variance.toFixed(3);
};

// Desvio Padrão
export const calculateStandardDeviation = (n, p) => {
    const variance = calculateVariance(n, p);
    const resStandardDeviation = Math.sqrt(variance);
    const resRounded = roundRule(resStandardDeviation);

    return resRounded;
};

// Coeficiente de Variação
export const calculateCoefficientVariation = (n, p) => {
    const coefficientVariation = (100 * calculateStandardDeviation(n, p)) / calculateMean(n, p);
    const roundedCoefficient = roundRule(coefficientVariation);

    return roundedCoefficient;
};

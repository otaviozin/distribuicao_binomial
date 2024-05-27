import { binomialDistribution } from 'simple-statistics';

export const calculateBinomialDistribution = (n, p) => {
    const res = binomialDistribution(n, p);
    console.log(res);
    return res.map((value) => value * 100);
};

export const AllResults = ({ results, resMean, resVariance, resStandardDeviation, resCoefficientVariation }) => {
    return (
        <div className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow h-96'>
            <h1 className='text-2xl font-bold'>Outros</h1>
            <div className='border-2 rounded overflow-auto'>
                <table>
                    <thead>
                        <tr className='border-b-2'>
                            <th className='border-r-2 px-3'>X</th>
                            <th className='border-r-2 px-3'>=</th>
                            <th className='px-3'>Resultado</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {results &&
                            Array.isArray(results) &&
                            results.map((result, index) => (
                                <tr key={index} className='border-b'>
                                    <td className='border-r-2 px-3'>{index}</td>
                                    <td className='border-r-2 px-3'>=</td>
                                    <td>{result.toFixed(2)}%</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div className='border-2 rounded'>
                <table>
                    <tbody className='text-left'>
                        <tr className='border-b'>
                            <td className='border-r-2 px-3'>Média</td>
                            <td className='px-2'>{resMean}</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='border-r-2 px-3'>Variância</td>
                            <td className='px-2'>{resVariance}</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='border-r-2 px-3'>Desvio padrão</td>
                            <td className='px-2'>{resStandardDeviation}</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='border-r-2 px-3'>Coeficiente de variação</td>
                            <td className='px-2'>{resCoefficientVariation}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

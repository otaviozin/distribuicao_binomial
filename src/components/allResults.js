export const AllResults = ({ results }) => {
    return (
        <div className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow h-80'>
            <h1 className='text-2xl font-bold'>Todos os X</h1>
            <div className='border-2 rounded overflow-auto'>
                <table>
                    <thead>
                        <tr className='border-b-2'>
                            <th className='border-r-2 px-3'>X</th>
                            <th className='border-r-2 px-3'>=</th>
                            <th className='px-3'>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results &&
                            Array.isArray(results) &&
                            results.map((result, index) => (
                                <tr className='text-center border-b'>
                                    <td className='border-r-2 px-3'>{index}</td>
                                    <td className='border-r-2 px-3'>=</td>
                                    <td>{result.toFixed(2)}%</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

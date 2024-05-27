export const AllResults = ({ results }) => {
    return (
        <div className='bg-secondary mx-5 mt-5 rounded-lg border border-black flex flex-col gap-5 items-center py-5 custom-shadow'>
            <h1 className='text-2xl font-bold'>Resultados por X</h1>
            <ul className='h-56 overflow-auto text-left'>
                {results &&
                    Array.isArray(results) &&
                    results.map((result, index) => (
                        <li className='text-lg' key={index}>
                            X = {index} =&gt; {result.toFixed(2)}%
                        </li>
                    ))}
            </ul>
        </div>
    );
};

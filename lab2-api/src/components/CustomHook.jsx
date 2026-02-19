import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';
import { useIds } from '../hooks/useIds';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { ids, loading, error } = useIds();
    const { data, hasError, isLoading } = useFetch(ids, counter-1);
    
    console.log(data)
    if (loading) return <Loading/>
    return (
        <>
            <h1>Virtual Met Museum</h1>
            <hr/>
            { isLoading ? <Loading/> : (
                <Card id={counter} name={data.title} sprites={[
                    data.primaryImageSmall
                    ]} author={data.artistDisplayName}
                />
            )}
            <div>
                <button className='btn btn-primary' onClick={ () => decrement() }>Anterior</button>
                <button className='btn btn-primary' onClick={ () => increment() }>Siguiente</button>
            </div>
        </>
    )
}
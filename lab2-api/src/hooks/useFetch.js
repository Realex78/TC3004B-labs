import { useEffect, useState } from "react";

export const useFetch = (ids, index) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        setState({...state, isLoading: true});
        
        if (ids == null) return;
        const resp = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[index]}`);
        const data = await resp.json();
        
        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
    }, [ids, index])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
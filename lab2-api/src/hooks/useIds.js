import { useEffect, useState } from "react";

export const useIds = () => {
    const [state, setState] = useState({
        ids: null,
        loading: true,
        error: null
    })

    const getIds = async () => {
        setState({ids: null, loading: true, error: null});

        const resp = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=t&dateEnd=1956");
        const json = await resp.json();
        
        setState({
            ids: json.objectIDs,
            loading: false,
            error: null,
        });
    }

    useEffect(() => {
        getIds();
    }, [])

    return {
        ids: state.ids,
        loading: state.loading,
        error: state.error,
    };
}
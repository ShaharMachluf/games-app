import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        apiClient
        .get<FetchResponse<T>>(endpoint,{ 
        signal: controller.signal, ...requestConfig})
        .then(results => setData(results.data.results))
        .catch(err => {
            if (err instanceof CanceledError) {
                return;
            }
            setError(err.message)
        })
        
        return () => controller.abort();
    }, [])

    return {data, error}
}

export default useData;
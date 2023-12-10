import axios from "axios";
import { useEffect, useState } from "react"



const useAxiosFetch = (dataUrl:string)=>{
    const [data, setData]= useState<any[]>([]);
    const [fetchError, setFetchError] = useState<string|null>(null);
    const [isLoading, setIsLoading] = useState(false);
 
    const newAbortSignal= (timeoutMs:number) =>{
        const abortController = new AbortController();
        setTimeout(() => abortController.abort(), timeoutMs || 0);
        return abortController.signal;
      }

    useEffect(() =>{
        let isMounted = true;
       const source = axios.CancelToken.source();
        const fetchData = async  (url:string) =>{
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    signal: newAbortSignal(5000)
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error:any) {
                if (isMounted){
                    setFetchError(error.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);
        const cleanUp = () => {
            isMounted = false;
            
            source.cancel();
        }
        return cleanUp;
    }, [dataUrl]);
    return {data, fetchError, isLoading};
    }

export  {useAxiosFetch};
    


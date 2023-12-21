import axios from "axios";
import exp from "constants";
import { useEffect, useState } from "react";
export interface idata{
    dataUrl: string,
    payload:any
}
const useAxiosSave =({dataUrl, payload}:idata)=> {
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
    
        const persistData =async ({dataUrl, payload}:idata) => {
            setIsLoading(true);
            try {
                const response= await axios.post(dataUrl, payload, {
                    signal: newAbortSignal(5000)
                });
            if(isMounted){
                setData(response.data);
                setFetchError(null);
            }
                
            } catch (error:any) {
                if(isMounted){
                    setFetchError(error.message);
                    setData([]);
                }
                
            } finally{
                isMounted && setIsLoading(false);
            }

            persistData({dataUrl, payload});

            const cleanUp = () => {
                isMounted=false;
            }
            return cleanUp;
            
        }
    
      }, [dataUrl]);
return {data, fetchError, isLoading};
}

export {useAxiosSave};
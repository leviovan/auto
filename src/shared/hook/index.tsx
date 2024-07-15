import { Dispatch, StateUpdater, useEffect, useState } from "preact/hooks";


type ApiResponse<T> = {
  data: T|null;
  isLoading: boolean;
  error: string | null;
  setData: Dispatch<StateUpdater<T | null>>
};

const useFetch = <T,>(url:string):ApiResponse<T> => {
  const [data, setData] = useState<T|null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
      fetch(url)
      .then(response => {
        if (!response.ok) { 

          throw Error('could not fetch the data for that resource');
        } 
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  }, [url])

  
  return { data, isLoading, error,setData };
}

export default useFetch;
import { useState, useEffect } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    try {
      fetch(url, { cache: 'no-cache' })
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError };
}

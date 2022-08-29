import { useEffect , useState } from "react";
import axios from "axios";

function useAxios(url) {
  const [state, setState] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (params) => {
      try {
        const req = await axios.get(params);
        console.log(req);
        setState(req.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return {state, error, loading}
}

export default useAxios;

import { useAsyncFn } from "react-use";
import { useEffect } from "react";

export default function useFetch(asyncFn, callback) {
  // useAsyncFn will return state and a callback that handles
  // race conditions, and will only update its state if component is still mounted.
  const [fetchState, fetchFn] = useAsyncFn(asyncFn);

  useEffect(() => callback && callback(fetchState), [fetchState]);

  return [fetchState, fetchFn];
}

import { useAsyncFn } from "react-use";
import { useEffect } from "react";

export default function useFetch(asyncFn, callbacks = {}) {
  // useAsyncFn will return state and a callback that handles
  // race conditions, and will only update its state if component is still mounted.
  const [fetchState, fetchFn] = useAsyncFn(asyncFn);

  useEffect(() => {
    //onLoad
    if (callbacks.onLoad && fetchState.loading) {
      return callbacks.onLoad();
    }

    //onError
    if (callbacks.onError && fetchState.error && !fetchState.loading) {
      return callbacks.onError();
    }

    //onSuccess
    if (callbacks.onSuccess && fetchState.value && !fetchState.loading) {
      return callbacks.onSuccess();
    }
  }, [fetchState]);

  return [fetchState, fetchFn];
}

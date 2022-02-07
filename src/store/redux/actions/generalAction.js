import { loadingTypes } from "../types";

export const setLoading = (isLoading) => ({
  type: loadingTypes.SET_LOADING,
  isLoading,
});

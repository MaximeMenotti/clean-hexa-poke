import { Http } from "../../core/repositories/Http";

export const HttpFetch: Http = {
  get: async function <T>(path: string): Promise<T> {
    const data = fetch(path).then((response) => response.json());
    return data as T;
  },

  post: async function <T>(
    path: string,
    params?: Record<string, any> | undefined,
    config?: any
  ): Promise<T> {
    throw new Error("Function not implemented.");
  },
  put: async function <T>(
    path: string,
    params?: Record<string, any> | undefined,
    config?: any
  ): Promise<T> {
    throw new Error("Function not implemented.");
  },
  delete: async function <T>(
    path: string,
    params?: any,
    config?: any
  ): Promise<any> {
    throw new Error("Function not implemented.");
  },
};

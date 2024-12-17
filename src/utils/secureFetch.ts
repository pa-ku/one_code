const FETCH_TIMEOUT = 5000; 

interface FetchConfig {
  timeout?: number;
  headers?: Record<string, string>;
}

export async function secureFetch(
  url: string, 
  options: RequestInit = {}, 
  config: FetchConfig = {}
): Promise<Response> {
  const controller = new AbortController();
  const timeout = config.timeout || FETCH_TIMEOUT;
  
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...options.headers,
        ...config.headers
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}
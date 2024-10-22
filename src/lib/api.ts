type HttpMethod = 'GET' | 'POST' | 'PATCH';

async function request<T>(
  path: string,
  method: HttpMethod,
  body?: any,
  init?: RequestInit,
): Promise<{ data: T }> {
  try {
    if (!path.startsWith('/')) {
      throw new Error('path must start with `/`');
    }

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...init,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${path}`,
      options,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`${method} request failed:`, error);
    throw error;
  }
}

export async function get<T>(
  path: string,
  init?: RequestInit,
): Promise<{ data: T }> {
  return request<T>(path, 'GET', undefined, init);
}

export async function post<T>(
  path: string,
  body = {},
  init?: RequestInit,
): Promise<{ data: T }> {
  return request<T>(path, 'POST', body, init);
}

export async function patch<T>(
  path: string,
  body = {},
  init?: RequestInit,
): Promise<{ data: T }> {
  return request<T>(path, 'PATCH', body, init);
}

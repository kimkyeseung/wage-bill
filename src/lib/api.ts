type HttpMethod = 'GET' | 'POST' | 'PATCH';

async function request<T>(
  path: string,
  method: HttpMethod,
  body?: Record<string, unknown> | string | FormData,
  init?: RequestInit,
): Promise<{ data: T }> {
  try {
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

    const response = await fetch(`${path}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`${method} request failed:`, error);
    throw error;
  }
}

function buildUrlWithQueryParams(path: string, params: Record<string, any>) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
}

export async function get<T>(
  path: string,
  params?: { year?: number; month?: number },
  init?: RequestInit,
): Promise<{ data: T }> {
  try {
    const url = params
      ? buildUrlWithQueryParams(path, params)
      : `${process.env.NEXT_PUBLIC_API_URL}${path}`;

    return request<T>(url, 'GET', undefined, init);
  } catch (error) {
    console.error(error);
    return { data: [] as T };
  }
}

export async function post<T>(
  path: string,
  body = {},
  init?: RequestInit,
): Promise<{ data: T }> {
  return request<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    'POST',
    body,
    init,
  );
}

export async function patch<T>(
  path: string,
  body = {},
  init?: RequestInit,
): Promise<{ data: T }> {
  return request<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    'PATCH',
    body,
    init,
  );
}

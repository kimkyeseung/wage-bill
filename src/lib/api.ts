export async function get(path: string, init?: RequestInit) {
  try {
    if (!path.startsWith('/')) {
      throw 'path must start with `/`';
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${path}`,
      init,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
}

export async function post(path: string, body = {}) {
  try {
    if (!path.startsWith('/')) {
      throw 'path must start with `/`';
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
console.log(response, JSON.stringify(body))
    // if (!response.ok) {
    //   throw new Error(`Error: ${response.status}`);
    // }

    return await response.json();
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
}

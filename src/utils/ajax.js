const Ajax = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const res = await response.json();
    if (res) alert()
  } catch (err) {
    console.log(err);
  }
};

export default Ajax;
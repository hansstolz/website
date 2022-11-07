

async function postData<T>(data: T) {
  // 👇️ const response: Response
  const response = await fetch(
    " https://q9g7mobsv9.execute-api.eu-central-1.amazonaws.com/contact",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  try {
    return  response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
    } else {
      console.log("unexpected error: ", error);
    }

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
  }
  return null;
}

export default postData;

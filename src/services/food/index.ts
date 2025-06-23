/* eslint-disable @typescript-eslint/no-explicit-any */
export const addFood = async (payload: { name: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/food`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};


export const getFood = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/categories`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

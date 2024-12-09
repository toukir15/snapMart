export const getCategories = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["categories"],
      },
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MzM2NTU1OTAsImV4cCI6MTczNDI2MDM5MH0.2wQUBf8jALe7IlaAGCYUCh_iRA3jWHJqPdBD0a5Ab5w`, // Replace YOUR_ACCESS_TOKEN with the actual token
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `http://localhost:5000/api/v1/category`,
      fetchOption
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `Failed to fetch products: ${errorData.message || res.status}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

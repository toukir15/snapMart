export const getProducts = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["products"],
      },
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MzM2NTU1OTAsImV4cCI6MTczNDI2MDM5MH0.2wQUBf8jALe7IlaAGCYUCh_iRA3jWHJqPdBD0a5Ab5w`, // Replace YOUR_ACCESS_TOKEN with the actual token
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `http://localhost:5000/api/v1/product`,
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
    throw error; // Re-throwing to let the calling function handle it
  }
};

export const getProduct = async (id: string) => {
  const fetchOption = {
    next: {
      tags: ["product"],
    },
    headers: {
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MzM2MzkxOTgsImV4cCI6MTczNDI0Mzk5OH0.tzoS5hekFmSF7vOmZBOVVaS8l3xIimMLUByw06H5HI4`, // Replace YOUR_ACCESS_TOKEN with the actual token
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(
    `http://localhost:5000/api/v1/product/${id}`,
    fetchOption
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return await res.json();
};

export const getFlashSaleProducts = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["flash_sale"],
      },
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MzM2NTU1OTAsImV4cCI6MTczNDI2MDM5MH0.2wQUBf8jALe7IlaAGCYUCh_iRA3jWHJqPdBD0a5Ab5w`, // Replace with your actual token
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `http://localhost:5000/api/v1/product/flash-sale`,
      fetchOption
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `Failed to fetch flash sale products: ${errorData.message || res.status}`
      );
    }

    const data = await res.json(); // Parse the JSON body once
    console.log("Flash Sale Products:", data); // Log the parsed data
    return data; // Return the data
  } catch (error) {
    console.error("Error fetching flash sale products:", error);
    throw error; // Re-throw the error for the calling function to handle it
  }
};

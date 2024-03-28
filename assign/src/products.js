// Sample agriculture products array
const agricultureProducts = [
    {
      title: "Wheat Seeds",
      imgSrc:
        "https://media.istockphoto.com/id/1188375216/photo/wheat-ears-grains-and-bowl-of-flour-on-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=3c1nEPcpJtKf2xkOGW6ADAiS-QOm1Qvp1Womf4gh_WQ=",
      summary: "High-quality wheat seeds for optimal yield.",
      price: 10,
      category: "seeds",
    },
    {
      title: "Organic Fertilizer",
      imgSrc:
        "https://media.istockphoto.com/id/967945790/photo/organic-manure.jpg?s=1024x1024&w=is&k=20&c=neEyn2dNmybscoF_r8zWp1Jl_wVJEgPgvyZa2iMxZeU=",
      summary: "Natural organic fertilizer for healthy crops.",
      price: 20,
      category: "fertilizers",
    },
    {
      title: "Tomato Seeds",
      imgSrc:
        "https://media.istockphoto.com/id/1320269431/photo/tomato-seed-collection.webp?s=1024x1024&w=is&k=20&c=4uSQMx_1Q7a4MA4J5aq3ECOpKOX9sjqsbFuztK1MK38=",
      summary: "Fresh tomato seeds for your farm.",
      price: 15,
      category: "seeds",
    },
    {
      title: "Corn Seeds",
      imgSrc:
        "https://media.istockphoto.com/id/184375979/photo/corn.jpg?s=1024x1024&w=is&k=20&c=DA7pFpTjkhxrvzlZfpZqPOTeP1-3zUIyLin8vnl-O2o=",
      summary: "High-yield corn seeds for your fields.",
      price: 12,
      category: "seeds",
    },
    {
      title: "Nitrogen Fertilizer",
      imgSrc:
        "https://media.istockphoto.com/id/967945790/photo/organic-manure.jpg?s=1024x1024&w=is&k=20&c=neEyn2dNmybscoF_r8zWp1Jl_wVJEgPgvyZa2iMxZeU=",
      summary: "Nitrogen-rich fertilizer for lush greenery.",
      price: 25,
      category: "fertilizers",
    },
    {
      title: "Potato Seeds",
      imgSrc: "https://media.istockphoto.com/id/483518364/photo/sprouting-seed-potatoes-ready-for-planting-background.jpg?s=1024x1024&w=is&k=20&c=5qjZ0UD9tVcfZdBY-C-Hy5NBnJfPloErVfnIPatTF1Y=",
      summary: "Healthy potato seeds for your farm.",
      price: 18,
      category: "seeds",
    },
  ];
  
  // Filter function to get products based on category
  const filterProductsByCategory = (products, category) => {
    if (category === "all") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };
  
  // Exporting all products and filter function
  export const allProducts = agricultureProducts; // All products
  export const seedsProducts = filterProductsByCategory(
    agricultureProducts,
    "seeds"
  );
  export const fertilizersProducts = filterProductsByCategory(
    agricultureProducts,
    "fertilizers"
  );
  export const cropsProducts = filterProductsByCategory(
    agricultureProducts,
    "crops"
  );
  
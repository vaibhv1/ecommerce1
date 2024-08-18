const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data.map(product => ({
    ...product,
    price: parseFloat(product.price)
  }));
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const data = await response.json();
  return {
    ...data,
    price: parseFloat(data.price)
  };
};
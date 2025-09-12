export const getData = async () => {
  const response = await fetch("http://localhost:5501/products");
  const data = await response.json();
  console.log(data);
};

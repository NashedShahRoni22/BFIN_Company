export const generateInvoiceId = () => {
  const characters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const length = 10;

  return Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }).join("");
};

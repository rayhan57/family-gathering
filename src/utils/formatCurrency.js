export const formatToCurrency = (value) => {
  return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatToRupiah = (value) => {
  return "Rp " + value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatToNumber = (value) => {
  return value?.replace(/Rp\s/g, "");
};

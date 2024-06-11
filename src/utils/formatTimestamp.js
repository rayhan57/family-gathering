export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}.${minutes}.${seconds}`;
};

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("id-ID", options);
  return formatter.format(date);
};

export const formatTime = (inputTime) => {
  return inputTime.replace(":", ".");
};

export const openWhatsApp = () => {
  const phoneNumber = "918328687566"; // one place only
  const message = "Hi, I want to enroll in the course";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

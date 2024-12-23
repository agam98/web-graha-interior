export const handleError = (error) => {
  const message = error.message || 'An unexpected error occurred';
  console.error(message);
  return message;
};
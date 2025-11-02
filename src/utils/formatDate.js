export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
};
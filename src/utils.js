export const getNewsImagePath = (item, options) => {
  let size = (options && options.size) ? options.size : null;
  let defaultValue = './img/defaultImage.jpg';
  let value = (size === 'large') ? item.images.large : item.images.small;
  let alternative = (size === 'large') ? item.images.small : item.images.large;
  return (value) ? value : (alternative) ? alternative : defaultValue;
}

export const getItemToSend = (formData) => ({
  id: formData.id,
  original: formData.original,
  name: formData.name,
  preview: formData.preview,
  newsLayout: formData.newsLayout,
  images: {
    small: formData.smallImage,
    large: formData.largeImage,
  }
});


export const getDateString = (timestamp) => {
  let date = new Date(+timestamp);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const dateObj = {
    year: `${date.getFullYear()}`,
    month: month < 10 ? `0${month}` : `${month}`,
    day: day < 10 ? `0${day}` : `${day}`,
    hours: hours < 10 ? `0${hours}` : `${hours}`,
    minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
  };

  let calendarDate = `${dateObj.day}.${dateObj.month}.${dateObj.year}`;
  let time = `${dateObj.hours}:${dateObj.minutes}`;
  return `${calendarDate}  ${time}`;
}

// export const getTimestampOfDate = (dateStrig, timeString) => {
//   let date = dateStrig.split('.');
//   let time = timeString.split(':');
//   return +(new Date(+date[2], +date[1] - 1, +date[0], +time[0], +time[1]))
// }
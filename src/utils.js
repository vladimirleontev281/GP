export const getNewsImagePath = (item, options) => {
  let size = (options && options.size) ? options.size : null;
  let defaultValue = './img/defaultImage.jpg';
  let value = (size === 'large') ? item.images.large : item.images.small;
  let alternative = (size === 'large') ? item.images.small : item.images.large;
  return (value) ? value : (alternative) ? alternative : defaultValue;
}

export const getItemToSend = (formData) => ({
  id: formData.id,
  owner: formData.owner,
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

export const getPathname = (postfix, path) => {
  return postfix ?
    path ? path.split(postfix)[1] : window.location.pathname.split(postfix)[1]
  : path ? path : window.location.pathname;
}

export const getPostfix = routs => {
  const pathname = window.location.pathname;
  if (pathname === '/') return '';
  const pathArr = pathname.split('/').filter(item => item !== '');
  const routsNames = Object.keys(routs).map(item => routs[item].substr(1));
  const postfixArr = pathArr.filter(item => !routsNames.includes(item));
  const postfix = postfixArr.length ? postfix.join('/') : '';
  return postfix;
};

// export const getTimestampOfDate = (dateStrig, timeString) => {
//   let date = dateStrig.split('.');
//   let time = timeString.split(':');
//   return +(new Date(+date[2], +date[1] - 1, +date[0], +time[0], +time[1]))
// }
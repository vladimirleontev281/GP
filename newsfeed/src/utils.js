export const getNewsImagePath = (item, options) => {
  let size = (options && options.size) ? options.size : null;
  let defaultValue = '/img/defaultImage.jpg';
  let value = (size === 'large') ? item.images.large : item.images.small;
  let alternative = (size === 'large') ? item.images.small : item.images.large;
  return (value) ? value : (alternative) ? alternative : defaultValue;
}
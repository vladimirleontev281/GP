export const getNewsImagePath = (item, options) => {
  let size = (options && options.size) ? options.size : null;
  let defaultValue = '/img/defaultImage.jpg';
  let value = (size === 'large') ? item.images.large : item.images.small;
  let alternative = (size === 'large') ? item.images.small : item.images.large;
  return (value) ? value : (alternative) ? alternative : defaultValue;
}

export const getNewItem = (formData) => {
  return {
    id: formData.id,
    original: formData.original,
    name: formData.name,
    preview: formData.preview,
    newsLayout: formData.newsLayout,
    images: {
      small: formData.smallImage,
      large: formData.largeImage,
    }
  };
}
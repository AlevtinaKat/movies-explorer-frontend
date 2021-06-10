const BASE_URL = "https://api.nomoreparties.co";
const getFullImageUrl = (card) => {
  if (!card.image) {
    return "";
  }
  if (!card.image.url && card.image.includes(BASE_URL)) {
    return card.image;
  }
  return `${BASE_URL}${card.image.url}`;
};

const getFullThumbnailUrl = (card) => {
  if (!card.image || !card.image.formats || !card.image.formats.thumbnail) {
    return "";
  }
  return `${BASE_URL}${card.image.formats.thumbnail.url}`;
};

export { getFullImageUrl, getFullThumbnailUrl };

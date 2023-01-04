function httpGet(theUrl) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

const Image = () => {
  const json = httpGet('https://dog.ceo/api/breeds/image/random');
  const array = JSON.parse(json);
  const url = array.message;
  return url;
};

export default Image;

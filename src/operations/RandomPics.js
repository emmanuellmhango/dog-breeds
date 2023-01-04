function httpGet(theUrl) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

const Images = (breedName, subBreed) => {
	const json = httpGet(`https://dog.ceo/api/breed/${breedName}/${subBreed}/images`);
  const array = JSON.parse(json);
  const url = array.message;
  return url.length;
};

export default Images;

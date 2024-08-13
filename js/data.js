
const DESCRIPTIONS = ['PRS', 'Gibson', 'Fender', 'ESP', 'Ibanez']

function getArrayOfID() {
	const result = [];
	for (let i = 0; i < 5; i++) {
		result.push(i + 1);
		
	}
	return result;
}

const arrayOfID = getArrayOfID();


const getArrayOfImages = () => {
	const images = [];
	for (let i = 0; i < arrayOfID.length; i++) {
		images.push({
			id: arrayOfID[i],
			url: `url(./assets/images/${arrayOfID[i]}.jpg)`,
			alt: `${DESCRIPTIONS[i]}`
		})
	}
	return images;
}

const arrayOfImages = getArrayOfImages();


export { arrayOfImages }

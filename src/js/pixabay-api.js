export default function getImages(inputValue) {
    const KEY = '42523874-92f67aed3babfb2c9b36364a5';
    const basicURL = 'https://pixabay.com/api/';

    const query = inputValue.trim();
    const imageType = 'photo';
    const orientationImage = 'horizontal';
    const safesearch = 'true';

    const link = `${basicURL}?key=${KEY}&q=${query}&image_type=${imageType}&orientation=${orientationImage}&safesearch=${safesearch}`;


    return fetch(link)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        });
}
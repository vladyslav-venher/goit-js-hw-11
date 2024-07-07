const API_KEY = "44822102-6d1d7649cda1a595bd957c97f";

export function fetchImages(query) {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(URL).then(res => {
        
        console.log(res);

        if (!res.ok) {
            throw new Error(res.status)
        }

        return res.json();
    })
}
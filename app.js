console.log('Movies Catalog app');

let movies = [];

let lastId = 0;

const adverts = [
    'Nowy film: Zielona Mila, w kinach od 22 września!',
    'Zapraszamy do kin już od 23 czerwca!',
    'Festiwal filmowy już od poniedziałku w kinie Burleska!',
    'Filmowy wieczór z kinem Adriatyk już dziś!',
    'Brakujące ogniwo to nowy film Scorsese, nie możesz go przegapić!'
];

let currentAdvert = adverts[0];
updateAdvertsUi();

startAdverts();

function addMovie() {
    const movieToAdd = document.querySelector('#movieName').value;
    let movie = {
        name: movieToAdd,
        id: lastId
    };
    movies.push(movie);
    lastId++;
    console.log(movies);

    updateFavouritesListUi();
}

function updateFavouritesListUi() {
    const fvListElem = document.getElementById('favouritesList');
    fvListElem.innerHTML = '';

    movies.forEach(function(movie) {
        const movieElem = document.createElement('div');
        const nameElem = document.createElement('span');
        nameElem.innerText = movie.name;

        const removeElem = document.createElement('button');
        removeElem.innerText = 'Usuń';
        removeElem.id = movie.id;
        removeElem.style.setProperty('float', 'right');
        movieElem.classList.add('mc-margin-20');
        
        removeElem.addEventListener('click', removeMovie)
        
        movieElem.appendChild(removeElem);
        movieElem.appendChild(nameElem);
        fvListElem.appendChild(movieElem);
    });
}

function removeMovie(event) {
    const idToDelete = Number(event.target.id);
    movies = movies.filter(movie => movie.id !== idToDelete);

    updateFavouritesListUi();
};

function startAdverts() {
    setInterval(function() {
        const randomId = parseInt(Math.random() * (adverts.length-1));
        currentAdvert = adverts[randomId];

        updateAdvertsUi();
    }, 1500);
}

function updateAdvertsUi() {
    const advertsElem = document.querySelector('#adverts');
    advertsElem.innerText = currentAdvert;
}


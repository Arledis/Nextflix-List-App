document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const netflixSeriesListItem = createNetflixSeriesListItem(event.target);
  const netflixSeriesList = document.querySelector('#netflix-series-list');
  netflixSeriesList.appendChild(netflixSeriesListItem);

  event.target.reset();
}

const createNetflixSeriesListItem = function(form) {
  const netflixSeriesListItem = document.createElement('li');
  netflixSeriesListItem.classList.add('netflix-series-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  netflixSeriesListItem.appendChild(title);

  const season = document.createElement('h3');
  season.textContent = form.season.value;
  netflixSeriesListItem.appendChild(season);

  const year = document.createElement('h3');
  year.textContent = form.year.value;
  netflixSeriesListItem.appendChild(year);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  netflixSeriesListItem.appendChild(category);

  const options = document.createElement('p');
  options.textContent = form.options.value;
  netflixSeriesListItem.appendChild(options);

  return netflixSeriesListItem;
}

const handleDeleteAllClick = function (event) {
  const netflixSeriesList = document.querySelector('#netflix-series-list');
  netflixSeriesList.innerHTML = '';
}

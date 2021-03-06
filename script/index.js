
const isNavHidden = document.querySelector('#isNavHidden');
isNavHidden.hidden = true;

function displayMenu() {
  (!isNavHidden.hidden) 
  ? isNavHidden.hidden = true 
  : isNavHidden.hidden = false;
}

const recentAdded = document.querySelector('.added');
recentAdded.hidden = true;

function displayRecentAdded() {
  (!recentAdded.hidden) 
  ? recentAdded.hidden = true 
  : recentAdded.hidden = false;
}

const ongoingSeries = document.querySelector('.ongoing');
ongoingSeries.hidden = true;

function displayOngoingSeries() {
  (!ongoingSeries.hidden) 
  ? ongoingSeries.hidden = true 
  : ongoingSeries.hidden = false;
}

const genres = document.querySelector('#genres');
genres.hidden = true;

// token test
function displayGenres() {
  (!genres.hidden) 
  ? genres.hidden = true 
  : genres.hidden = false;
}
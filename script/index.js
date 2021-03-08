
const isNavHidden = document.querySelector('#isNavHidden');
isNavHidden.hidden = true;

function handler() {
  (!isNavHidden.hidden) 
  ? isNavHidden.hidden = true 
  : isNavHidden.hidden = false;
}

const recentAdded = document.querySelector('.recent-added');
recentAdded.hidden = true;

function displayRecentAdded() {
  (!recentAdded.hidden) 
  ? recentAdded.hidden = true 
  : recentAdded.hidden = false;
}

const ongoingSeries = document.querySelector('.ongoing-series');
ongoingSeries.hidden = true;

function displayOngoingSeries() {
  (!ongoingSeries.hidden) 
  ? ongoingSeries.hidden = true 
  : ongoingSeries.hidden = false;
}

const genres = document.querySelector('.genres');
genres.hidden = true;

function displayGenres() {
  (!genres.hidden) 
  ? genres.hidden = true 
  : genres.hidden = false;
}

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

function displayGenres() {
  (!genres.hidden) 
  ? genres.hidden = true 
  : genres.hidden = false;
}

/* Search Input */

const animeList = document.querySelectorAll('.recent-release img[title]');
const titles = [];

for (let obj of animeList) {
  titles.push(obj.attributes.title.value);
}

const linkList = document.querySelectorAll('.recent-release a[href]');
const links = [];

for (let obj of linkList) {
  links.push(obj.attributes[0].nodeValue);
}

const hrefLink = links.map(link => `<a href="${link}" target="_blank">`);

const titleAndLink = titles.map((title, src) => ({ name: title, link: hrefLink[src] }));
console.log(titleAndLink);

/* ...  */

document.querySelector('#search').addEventListener('input', (e) => {
  let arrSuggestion = [];
  if (e.target.value) {
    arrSuggestion = titles.filter(title => title.toLowerCase().includes(e.target.value));
    arrSuggestion = arrSuggestion.map(title => `<li>${title}</li>`);
  }
  showTitleSuggestion(arrSuggestion);
});

const outputSuggestion = document.querySelector('.outputSuggestion');
outputSuggestion.hidden = true;

function showTitleSuggestion(arr) {
  const html = !arr.length ? '' : arr.join('');
  document.querySelector('.searchAnime ul').innerHTML = html;
  outputSuggestion.style.display = 'block';
}

//your code here
let bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  // Remove articles from band names
  const bandNamesWithoutArticles = bandNames.map((name) => {
    const words = name.split(' ');
    const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  });

  // Sort band names in lexicographic order
  const sortedBandNames = bandNamesWithoutArticles.sort((a, b) => a.localeCompare(b));

  // Display band names in ul with li tags
  const bandList = document.getElementById('band');

  sortedBandNames.forEach((name) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

sortBandNames(bandNames);

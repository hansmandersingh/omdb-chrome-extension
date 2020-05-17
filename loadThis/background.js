chrome.contextMenus.create({
  'title': 'Search IMDB for "%s"',
  'contexts': ['selection'],
  'onclick': (context) => {
    const movieName = context.selectionText;
    const newLine = "\r\n"

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=e7468b07`)
      .then(data => data.json())
      .then(json => {

        let message = `Title : ${json.Title}`;

        
        message += newLine;
        message += `Year : ${json.Year}`;
        message += newLine;
        message += `Runtime : ${json.Runtime}`;
        message += newLine;
        message += `Genre : ${json.Genre}`;
        message += newLine;
        message += `Actors : ${json.Actors}`;
        message += newLine;
        message += `IMDb Rating : ${json.imdbRating}`;
        alert(message);
      })
  }
});
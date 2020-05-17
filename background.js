chrome.contextMenus.create({
  'title': 'Search IMDB for "%s"',
  'contexts': ['selection'],
  'onclick': (context) => {
    const movieName = context.selectionText;
    const newLine = "\r\n"

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=e7468b07`)
      .then(data => data.json())
      .then(json => {
        
      })
    
  }
});
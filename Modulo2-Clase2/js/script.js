const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  
  for(const key in book){
    console.log(key);
    console.log(book[key]);
  }
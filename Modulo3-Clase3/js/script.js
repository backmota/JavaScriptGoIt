const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "En la orilla de aguas tranquilas",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "El sueño de un hombre divertido",
    author: "Fiódor Dostoyevski",
    rating: 7.75,
  },
];

for (const book of books) {
  
  console.log(book.title);
  // Autor
  console.log(book.author);
  // Valoración
  console.log(book.rating);
}


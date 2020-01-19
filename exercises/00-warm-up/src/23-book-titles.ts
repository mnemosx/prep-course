export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = books => {
  let titles = [];
  for (var i = 0; i < books.length; i++) {
    if (books[i].title) {
      titles.push(books[i].title);
    }
  }
  return titles;
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']

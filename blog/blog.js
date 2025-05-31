const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '*****'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '****'
  },
  {
	id: 3,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
  }
];

// Get reference to the container grid
const bookGrid = document.querySelector('#book-grid');

// Loop through each article and create elements
articles.forEach((item) => {
  // Create the outer container div
  const bookEntry = document.createElement('div');
  bookEntry.classList.add('bookentry');

  // Create the misc section (left column)
  const miscDiv = document.createElement('div');
  miscDiv.classList.add('misc');
  miscDiv.innerHTML = `
    <h3>${item.date}</h3>
    <p>${item.ages}</p>
    <h4>${item.genre}</h4>
    <p>${item.stars}</p>
  `;

  // Create the book section (center column)
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  bookDiv.innerHTML = `
    <h2>${item.title}</h2>
    <img src="${item.imgSrc}" alt="${item.imgAlt}">
    <p>${item.description}</p>
  `;

  // Append both columns to the entry
  bookEntry.appendChild(miscDiv);
  bookEntry.appendChild(bookDiv);

  // Insert the entry into the grid before the filters (if filters exist)
  const filters = document.querySelector('.filters');
  if (filters) {
    bookGrid.appendChild(bookEntry);
  } else {
    bookGrid.appendChild(bookEntry);
  }
});

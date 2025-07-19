// elder-teo.js

fetch('articles.json')
  .then(response => response.json())
  .then(articles => {
    const bookGrid = document.querySelector('#book-grid');
    const searchInput = document.querySelector('#search');
    const yearFilter = document.querySelector('#year-filter');

    // Function to extract unique years from articles
    function getUniqueYears(articles) {
      const years = articles.map(item => {
        const dateParts = item.date.split(' ');
        return dateParts[dateParts.length - 1]; // Assumes date ends with year
      });
      return Array.from(new Set(years)).sort((a, b) => b - a); // sorted descending
    }

    // Populate year filter options
    const uniqueYears = getUniqueYears(articles);
    uniqueYears.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    // Function to display articles
    function displayArticles(filteredArticles) {
      // Clear current entries
      const entries = bookGrid.querySelectorAll('.bookentry');
      entries.forEach(entry => entry.remove());

      if (filteredArticles.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No emails match your filters.';
    message.style.gridColumn = '1 / -1';
    message.style.textAlign = 'center';
    bookGrid.appendChild(message);
    return;
   }

      filteredArticles.forEach(item => {
        const bookEntry = document.createElement('div');
        bookEntry.classList.add('bookentry');

        const miscDiv = document.createElement('div');
        miscDiv.classList.add('misc');
        miscDiv.innerHTML = `<h3>${item.date}</h3>`;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
          <h2>${item.title}</h2>
          <p>${item.description}...</p>
          <a href="email.html?id=${item.id}">Read More</a>
          ${item.imgSrc ? `<img src="${item.imgSrc}" alt="${item.imgAlt}">` : ''}
        `;

        bookEntry.appendChild(miscDiv);
        bookEntry.appendChild(bookDiv);

        bookGrid.appendChild(bookEntry);
      });
    }

    // ✅ Initial display
    displayArticles(articles);

    // ✅ Filter function
    function filterArticles() {
      const query = searchInput.value.toLowerCase();
      const selectedYear = yearFilter.value;

      const filtered = articles.filter(item => {
        const matchesSearch =
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.fullContent.toLowerCase().includes(query) ||
          item.fullContent1?.toLowerCase().includes(query); // Optional chaining for fullContent1

        const itemYear = item.date.split(' ').pop();
        const matchesYear = selectedYear === '' || itemYear === selectedYear;

        return matchesSearch && matchesYear;
      });

      displayArticles(filtered);
    }

    // ✅ Event listeners
    searchInput.addEventListener('input', filterArticles);
    yearFilter.addEventListener('change', filterArticles);
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
    const bookGrid = document.querySelector('#book-grid');
    bookGrid.innerHTML = '<p>Error loading emails.</p>';
  });

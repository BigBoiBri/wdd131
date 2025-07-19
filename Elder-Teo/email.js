// email.js

// Function to get email id from URL query parameters
function getEmailIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

// Main logic
fetch('articles.json')
  .then(response => response.json())
  .then(articles => {
    const emailId = getEmailIdFromURL();
    const email = articles.find(e => e.id === emailId);

    const container = document.querySelector('#email-container');

    if (!email) {
      container.innerHTML = '<p>Email not found.</p>';
      return;
    }

    // Format fullContent line breaks back into real <br> tags for HTML
    const formattedContent = email.fullContent.replace(/\\n/g, '<br>');
    const formattedContent1 = email.fullContent1 ? email.fullContent1.replace(/\\n/g, '<br>') : '';

    // Generate HTML
    container.innerHTML = `
      <h2>${email.title}</h2>
      <p><strong>Date:</strong> ${email.date}</p>
      <p>${formattedContent}</p>
      <div class="images">
        ${email.images.map(img => `<img src="${img}" alt="Email image">`).join('')}
      </div>
      <p>${formattedContent1}</p>
    `;
  })
  .catch(error => {
    console.error('Error fetching email data:', error);
    const container = document.querySelector('#email-container');
    container.innerHTML = '<p>Error loading email data.</p>';
  });

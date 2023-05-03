const sections = document.querySelectorAll('main section');
sections.forEach(section => {
  if (section.id !== 'home') {
    section.style.display = 'none';
  }
});

// Add event listeners to the tab links
const tabs = document.querySelectorAll('nav a');
tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    event.preventDefault();

    // Get the ID of the clicked tab
    const tabId = event.target.getAttribute('href').slice(1);

    // Hide all sections and show the section for the active tab
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
  });
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
const data = Object.fromEntries(formData.entries());
  fetch('http://127.0.0.1:3000/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .catch(error => {
    console.error(error);
    alert('There was an error sending your message. Please try again later.');
  });
});
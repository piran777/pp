
const sections = document.querySelectorAll('main section');
const fadeContainer = document.getElementById('fade-container');
fadeContainer.classList.add('fade-in');

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

    // Get the current active section
    const currentSection = document.querySelector('main section.active');

    // Remove the "active" class from the current section
    currentSection.classList.remove('active');

    // Apply fade-out animation to the current section
    currentSection.style.opacity = '0';
    currentSection.style.transition = 'opacity 0.5s ease';

    // Set a timeout to hide the current section after the animation ends
    setTimeout(() => {
      currentSection.style.display = 'none';

      // Show the section for the active tab
      const activeSection = document.getElementById(tabId);
      activeSection.style.display = 'block';

      // Apply fade-in animation to the active section
      activeSection.style.opacity = '0';
      activeSection.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        activeSection.style.opacity = '1';
        activeSection.classList.add('active');
      }, 50);
    }, 500);
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
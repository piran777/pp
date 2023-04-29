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
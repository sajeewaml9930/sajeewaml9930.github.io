// NavigationBar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    navbarPlaceholder.innerHTML = data;
  })
  .catch(error => console.error('Error fetching navbar.html:', error));

// Footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    footerPlaceholder.innerHTML = data;
  })
  .catch(error => console.error('Error fetching footer.html:', error));

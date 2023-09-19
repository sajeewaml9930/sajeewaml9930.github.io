// NavigationBar Placeholder
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    navbarPlaceholder.innerHTML = data;
  })
  .catch(error => console.error('Error fetching navbar.html:', error));

// Footer Placeholder
fetch('footer.html')
.then(response => response.text())
.then(data => {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  footerPlaceholder.innerHTML = data;
})
.catch(error => console.error('Error fetching footer.html:', error));

//NavigationBar Show and Hide

$(document).ready(function() {
  console.log('Window Height is: ' + $(window).height());
  console.log('Document Height is: ' + $(document).height());
  
  //previousScroll
  var previousScroll = 0;
  $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();

          //showing when scroll down
          if (currentScroll > previousScroll) {
              window.setTimeout(hidenav, 10); 
          } 
          //show when scrolling value 0
          else if(currentScroll == 0) {
              window.setTimeout(showNav, 10);
          }

          //scrolling down
          function hidenav() {
              $("#navigation").addClass("navbar-color");
          }

          //not scrolling and placed in the top
          function showNav() {
              $("#navigation").removeClass("navbar-color");
          }
  })
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the <h3> element by its id
  var aboutLink = document.getElementById("about_link");
  var interestsLink = document.getElementById("interests_link");
  var portfolioLink = document.getElementById("portfolio_link");
  var approachLink = document.getElementById("approach_link");
  var contactLink = document.getElementById("contact_link");

  // Add a click event listener to the <h3> element
  aboutLink.addEventListener("click", function () {
    // Scroll to the element with the id "about_section" smoothly
    document.getElementById("about_section").scrollIntoView({
      behavior: "smooth",
    });
  });

  interestsLink.addEventListener("click", function () {
    // Scroll to the element with the id "interests_section" smoothly
    document.getElementById("interests_section").scrollIntoView({
      behavior: "smooth",
    });
  });

  portfolioLink.addEventListener("click", function () {
    // Scroll to the element with the id "portfolio_section" smoothly
    document.getElementById("portfolio_section").scrollIntoView({
      behavior: "smooth",
    });
  });

  approachLink.addEventListener("click", function () {
    // Scroll to the element with the id "approach_section" smoothly
    document.getElementById("approach_section").scrollIntoView({
      behavior: "smooth",
    });
  });

  contactLink.addEventListener("click", function () {
    // Scroll to the element with the id "contact_section" smoothly
    document.getElementById("contact_section").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Optional: You can do the same for the label element if needed
  /*  var aboutLabel = document.getElementsByClassName("colorOverride1");
  aboutLabel.addEventListener("click", function() {
      document.getElementById("about_section").scrollIntoView({
          behavior: "smooth"
      });
  }); */
});

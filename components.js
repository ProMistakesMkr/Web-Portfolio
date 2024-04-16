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

/* TEST AREA */

const largeSpacers = document.querySelector(".large_spacers");
const skinnySpacers = document.querySelector(".skinny_spacers");
const circularSection = document.querySelector(".circular-section");
const image = circularSection.querySelector("img");

// Get reference to the image inside the skinny spacers
const imageInsideSkinny = document.querySelector(".skinny_spacers img");

// Add event listener for mouse hover on skinny spacers
skinnySpacers.addEventListener("mouseenter", function () {
  // Add a class to trigger CSS animation
  skinnySpacers.classList.add("spin-animation");
});

skinnySpacers.addEventListener("mouseleave", function () {
  // Remove the class to stop the animation
  skinnySpacers.classList.remove("spin-animation");
});

/**/

// Get the element with the class "largespaceranimation"
const largespaceranimation = document.querySelector('.largespaceranimation');
/* const aboutsectionmodify = document.querySelector('#about_section'); */

// Add event listeners for mouse enter and mouse leave events
largespaceranimation.addEventListener('mouseenter', function() {
  // Change the dimensions smoothly on mouse enter
  largespaceranimation.classList.add('large_spacers_override');
  largespaceranimation.classList.add('about_section_override');
});

largespaceranimation.addEventListener('mouseleave', function() {
  // Reset the dimensions on mouse leave
  largespaceranimation.classList.remove('large_spacers_override');
  largespaceranimation.classList.remove('about_section_override');
});

/* TEST AREA END */

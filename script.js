$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the animation for elements with the specified class
    function animateElements(className) {
        $(className).each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass("in-viewport");
            }
        });
    }

    // Attach the scroll event listener for each class and call the animation function
    animateElements(".animate-on-scroll1");
    animateElements(".animate-on-scroll2");
    animateElements(".animate-on-scroll3");
    animateElements(".animate-on-scroll4");
    animateElements(".animate-on-scroll5");
    animateElements(".animate-on-scroll6");
    animateElements(".animate-on-scrollL");
    animateElements(".animate-on-scrollB");
    animateElements(".animate-on-scrollb");
    animateElements(".animate-on-scrollt1");
    animateElements(".animate-on-scrollt2");
    animateElements(".animate-on-scrollpl");
    animateElements(".animate-on-scrollpt");
    animateElements(".reveal");
    animateElements(".anima");
    animateElements(".animata");
    animateElements(".reveal1")

    
    // Attach the scroll event listener
    $(window).on("scroll", function() {
        animateElements(".animate-on-scroll1");
        animateElements(".animate-on-scroll2");
        animateElements(".animate-on-scroll3");
        animateElements(".animate-on-scroll4");
        animateElements(".animate-on-scroll5");
        animateElements(".animate-on-scroll6");
        animateElements(".animate-on-scrollL");
        animateElements(".animate-on-scrollB");
        animateElements(".animate-on-scrollb");
        animateElements(".animate-on-scrollt1");
        animateElements(".animate-on-scrollt2");
        animateElements(".animate-on-scrollpl");
        animateElements(".animate-on-scrollpt");
        animateElements(".reveal");
        animateElements(".anima");
        animateElements(".animata");
        animateElements(".reveal1")

    });
});
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var element = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      element.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Call the function to animate the numbers with your desired targets and durations
  animateValue("gsdp", 0, 132, 2000); // GSDP value in billions
  animateValue("growthRate", 0, 11, 2000); // Growth rate in percentage
  animateValue("perCapitaIncome", 0, 3705, 2000); // Per capita income value
  animateValue("fdiInflows", 0, 7.82, 2000); // FDI inflows value in billions



  $(document).ready(function () {
    $("#read-more-link").click(function (e) {
        e.preventDefault();
        $(".more-content").slideToggle(); // Toggle the visibility of the more content

        // Toggle the text of the "Read More" link
        if ($(this).text() === "Read More") {
            $(this).text("Hide Content");
        } else {
            $(this).text("Read More");
        }
    });
});



// Function to split text into individual letters and wrap them in span tags
function textTOLetter() {
  let h1 = document.querySelector("#main h1"); // Select the h1 element inside the #main element

  let h1text = h1.textContent; // Get the text content of the h1 element

  let h1textArray = h1text.split(""); // Split the text content into an array of individual letters

  let clutter = ""; // Initialize an empty string to store the new HTML content

  // Loop through each letter and wrap it in a span tag with a class based on its position
  h1textArray.forEach(function (letter, idx) {
    clutter += `<span class = "${idx > (Math.floor(h1textArray.length / 2)-1) ? "r" : "l"}">${letter}</span>`;
  });

  h1.innerHTML = clutter; // Set the innerHTML of the h1 element to the new HTML content
}

textTOLetter(); // Call the function to apply the changes

// Animate the letters with the class 'l' (left side)
gsap.from("h1 .l", {
    y:80,
    opacity:0,
    duration: 0.6,
    delay:0.5,
    stagger: 0.15,
    // ...existing code...
});

// Animate the letters with the class 'r' (right side)
gsap.from("h1 .r", {
    y:80,
    opacity:0,
    duration: 0.5,
    delay:0.5,
    stagger: -0.15,
    // ...existing code...
});
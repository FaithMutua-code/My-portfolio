const circles = document.querySelectorAll('.circle'); // Use querySelectorAll to get all circles
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots"); // Get the number of dots
  var marked = elem.getAttribute("data-percent"); // Get the percentage
  var percent = Math.floor(dots * marked / 100); // Calculate how many dots to fill
  var points = ""; // Initialize points variable
  var rotate = 360 / dots; // Calculate the rotation angle for each dot

  // Loop to generate the dots
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  
  // Insert the points into the circle
  elem.innerHTML = points;
});


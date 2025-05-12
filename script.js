const markerColorInput = document.getElementById("markerColor");
const saveColorBtn = document.getElementById("saveColor");
const markers = document.querySelectorAll(".water-marker");

// Load saved color
const savedColor = localStorage.getItem("markerColor");
if (savedColor) {
  markerColorInput.value = savedColor;
  markers.forEach(marker => marker.style.borderColor = savedColor);
}

// Save color preference
saveColorBtn.addEventListener("click", () => {
  const selectedColor = markerColorInput.value;
  localStorage.setItem("markerColor", selectedColor);
  markers.forEach(marker => marker.style.borderColor = selectedColor);
});

// Trigger animation on click
markers.forEach(marker => {
  marker.addEventListener("click", () => {
    marker.classList.add("animate");
    setTimeout(() => marker.classList.remove("animate"), 600);
  });
});

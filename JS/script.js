//function auto slideshow
const imageBox = document.getElementById("slideshow-box");

const images = ["img/jepang.jpg", "img/bali.jpg", "img/singapura.jpg"];
let current = 0;

function showNextImage() {
  imageBox.classList.add("fade-out");

  setTimeout(() => {
    imageBox.style.backgroundImage = `url('${images[current]}')`;

    imageBox.classList.remove("fade-out");

    current = (current + 1) % images.length;
  }, 1000);
}

showNextImage();
setInterval(showNextImage, 3000);

// function validation
function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const interest = document.getElementById("interest");

  let isValid = true;

  [name, email, interest].forEach((el) => el.classList.remove("error"));

  if (name.value.trim() === "") {
    name.classList.add("error");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("error");
    isValid = false;
  }

  if (interest.value === "") {
    interest.classList.add("error");
    isValid = false;
  }

  if (!isValid) {
    alert("Please complete all required fields correctly.");
  }

  return isValid;
}

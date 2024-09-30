const icon = document.querySelector("#icon");
const formContainer = document.querySelector("#form-part");
const imageContainer = document.querySelector("#image-part");
const loginButton = document.querySelector("#login");
const inputText = document.querySelector("#input-text");
const inputPassword = document.querySelector("#input-password");
const enrollBox = document.querySelector("#enroll-box");
const enrollButton = document.querySelector("#enroll-button");

// When the login button is clicked
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Check if both fields are filled
  if (validateForm()) {
    hideFormAndImage()
      .then(() => showIcon())
      .then(() => hideIcon())
      .then(() => expandImage())
      .then(() => resetToNormal())
      // .then(() => window.location.reload())
      .catch((err) => console.log("Error:", err));
  } else {
    alert("fill in both fields!");
  }
});

// Function to validate if both input fields are filled
const validateForm = () => {
  if (inputText.value.trim() === "" || inputPassword.value.trim() === "") {
    return false;
  }
  return true;
};

// Function to hide the form and image containers
const hideFormAndImage = () => {
  return new Promise((resolve) => {
    formContainer.style.visibility = "hidden";
    formContainer.style.transform = "scale(0)";
    setTimeout(() => {
      imageContainer.style.visibility = "hidden";
      imageContainer.style.transform = "scale(0)";
      resolve();
    }, 1000);
  });
};

// Function to show the icon
const showIcon = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      icon.style.visibility = "visible";
      formContainer.style.transform = "scale(1)";
      imageContainer.style.transform = "scale(1)";
      icon.style.transform = "scale(1)";
      icon.style.transform = "rotate(270deg)";
      icon.classList.add("move-to-center");
      resolve();
    }, 1200);
  });
};

// Function to hide the icon
const hideIcon = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      icon.style.opacity = "0";
      setTimeout(() => {
        icon.style.visibility = "hidden";
        resolve();
      }, 1000);
    }, 1200);
  });
};

// Function to expand the image container
const expandImage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      imageContainer.style.visibility = "visible";
      imageContainer.classList.add("expand-image");
      setTimeout(() => {
        imageContainer.classList.remove("expand-image");
      }, 1000);
      resolve();
    }, 800);
  });
};

// Function to reset everything back to the normal state
const resetToNormal = () => {
  setTimeout(() => {
    imageContainer.style.visibility = "visible";
    imageContainer.style.transform = "scale(1)";
  }, 1500);

  setTimeout(() => {
    formContainer.style.visibility = "visible";
    formContainer.style.transform = "scale(1)";
  }, 1600);

  icon.style.visibility = "visible";
  icon.style.opacity = "1";
  icon.classList.remove("move-to-center"); 
};

// function to mouseover on enroll

enrollButton.addEventListener("mouseover", () => {
  enrollBox.style.display = "block";
});

enrollButton.addEventListener("mouseout", () => {
  enrollBox.style.display = "none";
});

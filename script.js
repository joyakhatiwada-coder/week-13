
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
======================================== */

// PART 1: TIME-BASED GREETING

let userName = prompt("What is your name?");

let currentHour = new Date().getHours();

if (currentHour < 12) {

    console.log("Good morning, " + userName + "!");

} else if (currentHour < 18) {

    console.log("Good afternoon, " + userName + "!");

} else {

    console.log("Good evening, " + userName + "!");

}


// PART 2: AGE AND DAYS LIVED VERIFICATION

let birthYear = Number(prompt("What year were you born?"));

let currentYear = new Date().getFullYear();

if (
    Number.isInteger(birthYear) &&
    birthYear > 0 &&
    birthYear <= currentYear
) {

    let age = currentYear - birthYear;

    let daysLived = age * 365;

    console.log(
        "You have lived for approximately " + daysLived + " days!"
    );

    if (age >= 18) {

        console.log("You are an adult.");

    } else {

        console.log("You are a minor.");

    }

} else {

    console.log("Please enter a valid birth year.");

}


/* ========================================
   WEEK 11: DOM & DYNAMIC EVENT HANDLING
   DARK MODE TOGGLE
======================================== */

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "Light Mode";

        } else {

            themeButton.textContent = "Toggle Dark Mode";

        }

    });

}


/* ========================================
   WEEK 12: ARRAYS AND LOOPS
   HOBBY LIST
======================================== */

// Step 1: Create an array of hobbies

let hobbies = [
    "Web Development",
    "Programming",
    "Learning New Technologies",
    "Reading",
    "Creative Activities"
];


// Step 2: Select the hobby list

let hobbyList = document.querySelector("#hobby-list");


// Step 3: Display hobbies using a for loop

if (hobbyList) {

    for (let i = 0; i < hobbies.length; i++) {

        let hobbyItem = document.createElement("li");

        hobbyItem.textContent = hobbies[i];

        hobbyList.appendChild(hobbyItem);

    }

}


/* ========================================
   WEEK 12: FIVE-PHOTO IMAGE GALLERY
======================================== */

// Step 1: Create an array of five images

let photos = [
    "first.jpg",
    "second.jpg",
    "third.jpg",
    "fourth.jpg",
    "fifth.jpg"
];


// Step 2: Create a second array of descriptions
// Each description matches the same-index image

let photoDescriptions = [

    "A beautiful first memory.",

    "Exploring new places and experiences.",

    "Enjoying nature and peaceful moments.",

    "Capturing special moments along the journey.",

    "Creating memories to remember."

];


// Step 3: Start from the first photo

let currentIndex = 0;


// Step 4: Select gallery HTML elements

let galleryImage = document.querySelector("#gallery-image");

let photoCounter = document.querySelector("#photo-counter");

let photoDescription = document.querySelector("#photo-description");

let previousButton = document.querySelector("#previous-photo");

let nextButton = document.querySelector("#next-photo");


// Step 5: Display the current photo and description

function showPhoto() {

    if (
        galleryImage &&
        photoCounter &&
        photoDescription
    ) {

        // Display the image

        galleryImage.src = photos[currentIndex];

        galleryImage.alt =
            "Gallery photo " + (currentIndex + 1);


        // Display the photo number

        photoCounter.textContent =
            "Photo " + (currentIndex + 1) +
            " of " + photos.length;


        // Week 13: Synchronize image and description

        photoDescription.textContent =
            photoDescriptions[currentIndex];

    }

}


// Step 6: Next Photo Button

if (nextButton) {

    nextButton.addEventListener("click", function() {

        currentIndex++;

        // Return to the first photo after the last photo

        if (currentIndex >= photos.length) {

            currentIndex = 0;

        }

        showPhoto();

    });

}


// Step 7: Previous Photo Button

if (previousButton) {

    previousButton.addEventListener("click", function() {

        currentIndex--;

        // Go to the last photo when moving backward
        // from the first photo

        if (currentIndex < 0) {

            currentIndex = photos.length - 1;

        }

        showPhoto();

    });

}


// Step 8: Handle image loading errors

if (galleryImage) {

    galleryImage.addEventListener("error", function() {

        console.error(
            "Unable to load image: " + photos[currentIndex]
        );

        if (photoDescription) {

            photoDescription.textContent =
                "Sorry, this photo could not be loaded.";

        }

    });

}


// Step 9: Display the first photo when the page loads

if (
    galleryImage &&
    photoCounter &&
    photoDescription &&
    photos.length === photoDescriptions.length &&
    photos.length > 0
) {

    showPhoto();

}

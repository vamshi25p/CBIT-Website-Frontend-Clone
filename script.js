    const images = ["naac.png", "Swayam.jpg", "orie.png","ece.png"]; // Add more image URLs as needed
    let currentImageIndex = 0;

    const imageElement = document.querySelector('.image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Function to update the displayed image
    const updateImage = () => {
        imageElement.src = images[currentImageIndex];
    };

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });
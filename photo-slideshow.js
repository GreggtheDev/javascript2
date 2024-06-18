// Declare the main object 'photoSlideShow'
let photoSlideShow = {
    // Property 'photoList' is an array of photos
    photoList: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6'],
    // Property 'currentPhotoIndex' is the index of the current photo, starting at 0
    currentPhotoIndex: 0,
    // Method 'nextPhoto' changes the current photo to the next photo
    nextPhoto: function() {
        // If the current photo is not the last photo
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            // Increment the current photo index
            this.currentPhotoIndex++;
        } else {
            // If the current photo is the last photo, log the end of the slideshow
            console.log('End of the slideshow');
        }
    },
    // Method 'prevPhoto' changes the current photo to the previous photo
    prevPhoto: function() {
        // If the current photo is not the first photo
        if(this.currentPhotoIndex > 0) {
            // Decrement the current photo index
            this.currentPhotoIndex--;
        } else {
            // If the current photo is the first photo, log the beginning of the slideshow
            console.log('Start of the slideshow');
        }
    },
    // Method 'getCurrentPhoto' returns the current photo
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    }
};

// Outputs the current photo
console.log(photoSlideShow.getCurrentPhoto());
// Changes the current photo to the next photo
photoSlideShow.nextPhoto();
// Changes the current photo to the next photo
photoSlideShow.nextPhoto();
// Changes the current photo to the previous photo
photoSlideShow.prevPhoto();
console.log(this.photoList[this.currentPhotoIndex]);
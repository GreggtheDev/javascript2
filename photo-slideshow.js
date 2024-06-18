let photoSlideshow = {// Declaration of main object
    photoList: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6'],// Property with array of photos
    currentPhotoIndex: 0,// Property with the index of the current photo
    nextPhoto: function() {// Method for changing the current photo to the next photo
        if(this.currrentPhotoIndex < this.photoList.length - 1) {// If the current photo is not the last photo
            this.currentPhotoIndex++;// Increment the current photo index
        } else {// If the current photo is the last photo
            console.log('End of the slideshow');// Log the end of the slideshow
        }
    },
    prevPhoto: function() {// Method for changing the current photo to the previous photo
        if(this.currrentPhotoIndex > 0) {// If the current photo is not the first photo
            this.currentPhotoIndex--;// Decrement the current photo index
        } else {// If the current photo is the first photo
            console.log('Start of the slideshow');// Log the beginning of the slideshow
        }
    },
    getCurrrentPhoto: function() {// Method for getting the current photo
        return this.photoList[this.currentPhotoIndex];// Return the current photo
    }
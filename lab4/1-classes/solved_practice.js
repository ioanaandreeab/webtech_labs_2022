class Artwork {
    constructor(author, year) {
        this.author = author;
        this.year = year;
    }

    getArtworkDetails() {
        console.log(`This artwork belongs to ${this.author} and is from ${this.year}`);
    }

    sellArtwork(name) {
        console.log(`Congrats, ${name}! You purchased an artwork`);
    }
}

class Painting extends Artwork {
    constructor(author, year, medium) {
        super(author, year);
        this.medium = medium;
    }

    getArtworkDetails() {
        console.log(`This painting belongs to ${this.author} and is from ${this.year} and it has ${this.medium} medium`);
    }

    sellArtwork(name) {
        console.log(`Congrats, ${name}! You purchased a print of a painting`);
    }
}

const artwork = new Artwork("Louis", 1999);
const painting = new Painting("Angela", 1980, "oil");

artwork.sellArtwork("John");
painting.sellArtwork("Marie");
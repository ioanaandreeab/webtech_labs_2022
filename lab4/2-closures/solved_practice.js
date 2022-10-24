const playVideo = () => {
    const cache = {};
    return function(minute) {
        if(cache[minute]) {
            return cache[minute];
        } else {
            // cache[minute] = Math.random() * 100;
            cache[minute] = Math.random() * (100 - 20 + 1) + 20;
            return cache[minute];
        }
    }
    
};

const MediaPlayer = playVideo();
console.log(MediaPlayer(2));
console.log(MediaPlayer(2));
console.log(MediaPlayer(4));
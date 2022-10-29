window.onload = () => {
    const form = document.getElementById("add-song");

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const idField = document.getElementById("id");
        const artistField = document.getElementById("artist");
        const songTitleField = document.getElementById("song");
        const durationField = document.querySelector('#duration');

        const id = idField.value;
        const artist = artistField.value;
        const songTitle = songTitleField.value;
        const duration = durationField.value;

        const song = {id, artist, songTitle, duration};

        fetch('http://localhost:8080/api/addSong', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(song),
        }).then((response) => response.json()).then((newlyAddedSong) => {
            const songsList = document.getElementById("songs");
            const songText = `${newlyAddedSong.artist} - ${newlyAddedSong.songTitle}`;
            const songItem = document.createElement("li");
            songItem.innerHTML = songText;
            songsList.appendChild(songItem);
            
            // reset fields
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    form.onsubmit = formSubmitHandler;

    fetch("http://localhost:8080/api/getAllSongs")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(song => {
            const list = document.getElementById("songs");
            const listItem = document.createElement("li");
            listItem.innerHTML = `${song.artist} - ${song.songTitle}`;
            list.appendChild(listItem);
        });
    });
};
function configurarvideo(id) {
    const video = document.getElementById(id)
    

    document.querySelector(`[PE-play=${id}]`).onclick = e => video.play()
    document.querySelector(`[PE-pause=${id}]`).onclick = e => video.pause()

}

  configurarvideo('Video1')
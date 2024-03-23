document.getElementById('yes').addEventListener("click", function() {
    document.getElementById('title').innerText = "Anda benar!";
    document.getElementById('images').src = "./src/assets/mahasiswa.png";
    document.getElementById('answer').innerText = "Anda adalah seorang mahasiswa";
    document.getElementById('mybutton').style.visibility = "hidden";
    document.getElementById('card').style.backgroundColor = "#6FD240";
    // document.getElementById('card-answer').style.backgroundColor = "#FEEEE2";
    
})

document.getElementById('no').addEventListener("click", function() {
    document.getElementById('title').innerText = "Anda berbohong!";
    document.getElementById('images').src = "./src/assets/teknisi.png";
    document.getElementById('answer').innerText = "Anda adalah seorang Teknisi";
    document.getElementById('mybutton').style.visibility = "hidden";
    document.getElementById('card').style.backgroundColor = "#E12E2E";
    // document.getElementById('card-answer').style.backgroundColor = "#FEEEE2";
})
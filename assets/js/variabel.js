
let inputJudul = document.getElementById("inputJudul");
let inputUriGambar = document.getElementById("uriGambar");
let inputSinopsis = document.getElementById("sinopsis");


inputJudul.value = "Spongebob the movie"
inputUriGambar.value = "https://i.ytimg.com/vi/HfiH_526qhY/maxresdefault.jpg"
inputSinopsis.value = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum amet perferendis, 
quasi odio qui laborum ad dolor ratione ipsum ? `


let tampilJudul = document.getElementById("tampilJudul");
let tampilUriGambar = document.getElementById("tampilImage");
let tampilSinopsis = document.getElementById("tampilSinopsis");

let isi = document.getElementById("isi");

let data = [];
let demo = tampilan.card.map((e, i) => {
    return data = ` <div class="movie" id="card">
                        <div class="image" id="tampilImage">
                            <img src='${e.uriGambar}'/>
                        </div>
                        <div class='kontent'>
                                <div class='judul' id='tampilJudul' >${e.judul}</div>
                                <div class="sinopsis" id="tampilSinopsis">
                                   <p>${e.sinopsis}</p>
                                </div>
                        <span class="Hapus" id="hapus"><i class="fa fa-trash-o" onclick="hapus()"></i>
                        </span>
                    </div>
                    </div>`
});

let errorJudul = document.getElementById("errorJudul");
let errorUri = document.getElementById("errorUri");
let errorSinopsis = document.getElementById("errorSinopsis");

isi.innerHTML = demo;




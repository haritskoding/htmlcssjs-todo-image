
function objekBaru() {
    if (inputJudul.value === '' && inputUriGambar.value === '' && inputSinopsis.value === '') {
        errorJudul.innerHTML = "Maaf input judul diisi"
        errorUri.innerHTML = "Maaf input Uri gambar  diisi berupa url gambar"
        errorSinopsis.innerHTML = "Maaf input Sinopsis diisi"

    } else if (inputJudul.value === '') {
        alert("Maaf input judul diisi");
        errorJudul.innerHTML = "Maaf input judul diisi"
    } else if (inputUriGambar.value === '') {
        alert("Maaf form gambar harus diisi");
        errorJudul.innerHTML = "";
        errorUri.innerHTML = "Maaf input Uri gambar  diisi berupa url gambar"
    }
    else if (inputSinopsis.value === '') {
        alert("Maaf input sinopsis diisi");
        errorJudul.innerHTML = "";
        errorSinopsis.innerHTML = "";
        errorSinopsis.innerHTML = "Maaf input Sinopsis diisi"
    } else {
        // document.getElementById("myUL").appendChild(li);
        alert(inputJudul.value + " gambar: " + inputUriGambar.value)
        if (tampilan.card.length === 0) {
            console.log('aris tegu');
        } else {
            const divBaru = document.createElement("div");
            divBaru.classList.add("movie");
            divBaru.setAttribute("id", "card")

            isi.appendChild(divBaru);

            const divGambar = document.createElement("div");
            divGambar.setAttribute("id", "tampilImage");
            divGambar.classList.add("image");

            const frameImage = document.createElement("img");
            // frameImage.src = document.createTextNode(inputUriGambar);
            frameImage.setAttribute("src", inputUriGambar.value)
            frameImage.setAttribute("alt", inputUriGambar.value)

            const divKontent = document.createElement("div");
            divKontent.classList.add("kontent");


            const divJudul = document.createElement("div");
            divJudul.classList.add("judul");
            divJudul.setAttribute("id", "tampilJudul")

            const divSinopsis = document.createElement("div");
            divSinopsis.classList.add("sinopsis");
            divSinopsis.setAttribute("id", "tampilSinopsis");

            const span = document.createElement("SPAN");
            span.classList.add("Hapus");
            span.setAttribute("id", "hapus");
            span.setAttribute("onclick", "hapus()");

            const i = document.createElement("I");
            i.classList.add("fa");
            i.classList.add("fa-trash-o");

            // i.setAttribute("onclick", "hapusKontent()");

            var isiJudul = document.createTextNode(inputJudul.value);
            var isiSinopsis = document.createTextNode(inputSinopsis.value);
            var uriGambar = document.createTextNode(inputUriGambar.value)

            divBaru.appendChild(divGambar);
            divBaru.appendChild(divKontent);
            divBaru.appendChild(span);

            divGambar.appendChild(frameImage);

            divKontent.appendChild(divJudul);
            divKontent.appendChild(divSinopsis);

            divJudul.appendChild(isiJudul);
            divSinopsis.appendChild(isiSinopsis);

            divKontent.appendChild(span);

            span.appendChild(i);
        }

    }
}


let Hapus = document.getElementsByClassName("Hapus");


const hapus = async () => {
    let i = 0;
    for (i = 0; i < Hapus.length; i++) {
        Hapus[i].onclick = await function () {
            var div = this.parentElement;
            var baru = div.parentElement;
            baru.style.display = "none";
        }

    }
    alert('kalau tidak bisa  klik lagi .....')
}

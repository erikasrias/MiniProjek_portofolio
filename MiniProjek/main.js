const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const modal = document.getElementById("myProfile");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "flex";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('massageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validasi input
    if (!name || !email) {
        alert("Nama dan email tidak boleh kosong.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Format email tidak valid.");
        return;
    }

    // Simulasi pengiriman (ganti dengan fetch/axios ke server sungguhan)
    simulateFormSubmit(name, email)
        .then(() => {
            alert(`Halo ${name}, pesan Anda berhasil terkirim!`);
            this.reset();
        });
        // .catch((err) => {
        //     alert(`Terjadi kesalahan: ${err.message}. Silakan coba lagi nanti.`);
        // });
});

function simulateFormSubmit(name, email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2;
            if (isSuccess) {
                resolve();
            } else {
                reject(new Error("Server tidak merespons"));
            }
        }, 500); // Simulasi delay jaringan
    });
}

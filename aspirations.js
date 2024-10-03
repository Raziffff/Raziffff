document.addEventListener("DOMContentLoaded", function() {
    
    const aspirasiData = [
        { nama: "Anonym", aspirasi: "Sebaiknya di beberapa kampus cabang fasilitasnya dimeratakan lagi." },
        { nama: "Anonym", aspirasi: "Di beberapa ruangan kampus, AC tidak berfungsi dengan baik." },
        { nama: "Anonym", aspirasi: "Kantin kampus perlu menyediakan lebih banyak pilihan makanan sehat." },
        { nama: "Anonym", aspirasi: "Perpustakaan kampus memerlukan lebih banyak ruang untuk belajar kelompok." }
    ];

    function tampilkanAspirasi() {
        const aspirationsList = document.getElementById("aspirationsList");

        aspirasiData.forEach(aspirasi => {
            const aspirationElement = document.createElement("div");
            aspirationElement.classList.add("aspiration");
            aspirationElement.innerHTML = `
                <h2>${aspirasi.nama} - ${aspirasi.npm}</h2>
                <p>${aspirasi.aspirasi}</p>
            `;
            aspirationsList.appendChild(aspirationElement);
        });
    }

    
    tampilkanAspirasi();
});



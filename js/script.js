
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let birthDate = document.getElementById('Tanggal Lahir').value;
    let message = document.getElementById('message').value;

    if (name === '' || birthDate === '' || message === '') {
        alert('Semua bidang harus diisi!');
        return false;
    }

    
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) {
        alert('Format tanggal lahir harus yyyy-mm-dd!');
        return false;
    }

    alert('Form berhasil dikirim! Anda akan diarahkan ke Proyek 2.');
    document.getElementById('project-2-details').scrollIntoView({
        behavior: 'smooth'
    });
});


document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.querySelector('.portfolio-overlay').style.display = 'block';
    });

    item.addEventListener('mouseout', function () {
        this.querySelector('.portfolio-overlay').style.display = 'none';
    });
});


function tambahBarisKeTabel(nama, tanggalLahir, pesan) {
    const tabel = document.getElementById('project-table').getElementsByTagName('tbody')[0];

    
    const barisBaru = tabel.insertRow();

  
    const selNama = barisBaru.insertCell(0);
    const selTanggalLahir = barisBaru.insertCell(1);
    const selPesan = barisBaru.insertCell(2);

    selNama.textContent = nama;
    selTanggalLahir.textContent = tanggalLahir;
    selPesan.textContent = pesan;
}

document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let nama = document.getElementById('name').value;
    let tanggalLahir = document.getElementById('Tanggal Lahir').value;
    let pesan = document.getElementById('message').value;

    if (nama === '' || tanggalLahir === '' || pesan === '') {
        alert('Semua bidang harus diisi!');
        return false;
    }

   
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(tanggalLahir)) {
        alert('Format tanggal lahir harus yyyy-mm-dd!');
        return false;
    }


    tambahBarisKeTabel(nama, tanggalLahir, pesan);

 
    alert('Form berhasil dikirim! Anda akan diarahkan ke Proyek 2.');
    document.getElementById('project-2-details').scrollIntoView({
        behavior: 'smooth'
    });

    document.getElementById('messageForm').reset();
});
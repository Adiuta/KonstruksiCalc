// subDropdown.js

function updateSubDropdown(selectedOption) {
  var subDropdown = document.getElementById("subDropdown");

  // Reset subDropdown
  subDropdown.innerHTML = '<option value=" ">Pilih sub pekerjaan</option>';

  // Menyesuaikan opsi subDropdown berdasarkan pilihan di mainDropdown
  if (selectedOption === "Tanah") {
    // Opsi subDropdown untuk Pekerjaan Tanah
    subDropdown.innerHTML += '<option value="UrugPasir">Urug Pasir</option>';
    subDropdown.innerHTML += '<option value="UrugSirtu">Urug Sirtu</option>';
  } else if (selectedOption === "Pondasi") {
    // Opsi subDropdown untuk Pekerjaan Pondasi
    subDropdown.innerHTML += '<option value="BatuKosong">Batu Kosong</option>';
    subDropdown.innerHTML += '<option value="PondasiBatuKali">Pondasi Batu Kali</option>';
  } else if (selectedOption === "Beton") {
    // Opsi subDropdown untuk Pekerjaan Beton
    subDropdown.innerHTML += '<option value="BetonCor">Beton Cor</option>';
    subDropdown.innerHTML += '<option value="Batako">Pembuatan Batako</option>';
  }
  // Tambahkan kondisi untuk jenis pekerjaan lainnya jika diperlukan
}

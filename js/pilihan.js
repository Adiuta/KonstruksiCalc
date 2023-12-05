// subDropdown.js

function updateSubDropdown(selectedOption) {
  var subDropdown = document.getElementById("subDropdown");

  // Reset subDropdown
  subDropdown.innerHTML = '<option value=" ">Pilih sub pekerjaan</option>';

  // Menyesuaikan opsi subDropdown berdasarkan pilihan di mainDropdown
  // Opsi subDropdown untuk Pekerjaan Tanah
  if (selectedOption === "Tanah") {
    subDropdown.innerHTML += '<option value="UrugPasir">Urugan Pasir</option>';
    subDropdown.innerHTML += '<option value="UrugSirtu">Urugan Sirtu</option>';
    subDropdown.innerHTML += '<option value="UrugTanah">Urugan Tanah</option>';

    // Opsi subDropdown untuk Pekerjaan Pondasi
  } else if (selectedOption === "Pondasi") {
    subDropdown.innerHTML += '<option value="Kosong">Batu Kosong</option>';
    subDropdown.innerHTML += '<option value="batu3">Pondasi Batu Kali 1Pc :3Ps</option>';
    subDropdown.innerHTML += '<option value="batu4">Pondasi Batu Kali 1Pc :4Ps</option>';
    subDropdown.innerHTML += '<option value="batu5">Pondasi Batu Kali 1Pc :5Ps</option>';
    subDropdown.innerHTML += '<option value="batu6">Pondasi Batu Kali 1Pc :6Ps</option>';
    subDropdown.innerHTML += '<option value="batu8">Pondasi Batu Kali 1Pc :8Ps</option>';

    // Opsi subDropdown untuk Pekerjaan Beton1
  } else if (selectedOption === "Beton") {
    subDropdown.innerHTML += '<option value="mpa1">Membuat beton mutu fc 1,8 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa7">Membuat beton mutu fc 7,4 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa9">Membuat beton mutu fc 9,8 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa12">Membuat beton mutu fc 12,2 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa14">Membuat beton mutu fc 14,5 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa16">Membuat beton mutu fc 16,9 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa19">Membuat beton mutu fc 19,3 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa21">Membuat beton mutu fc 21,7 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa24">Membuat beton mutu fc 24,0 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa26">Membuat beton mutu fc 26,4 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa28">Membuat beton mutu fc 28,8 Mpa</option>';
    subDropdown.innerHTML += '<option value="mpa31">Membuat beton mutu fc 31,2 Mpa</option>';

  // Opsi subDropdown untuk Pekerjaan Bekisting
} else if (selectedOption === "Bekisting") {
   subDropdown.innerHTML += '<option value="bkstpondasi">Pemasangan bekisting pondasi</option>';
   subDropdown.innerHTML += '<option value="bkstsloof">Pemasangan bekisting sloof</option>';
   subDropdown.innerHTML += '<option value="bkstkolom">Pemasangan bekisting kolom</option>';
   subDropdown.innerHTML += '<option value="bkstbalok">Pemasangan bekisting balok</option>';
   subDropdown.innerHTML += '<option value="bkstlantai">Pemasangan bekisting lantai</option>';
   subDropdown.innerHTML += '<option value="bkstdinding">Pemasangan bekisting dinding</option>';
   subDropdown.innerHTML += '<option value="bksttangga">Pemasangan bekisting tangga</option>';

  // Opsi subDropdown untuk Pekerjaan Besi
} else if (selectedOption === "Besi") {
   subDropdown.innerHTML += '<option value="besipolos">Pembesian dengan besi polos</option>';
   subDropdown.innerHTML += '<option value="besiulir">Pembesian dengan besi ulir</option>';
   subDropdown.innerHTML += '<option value="wiremesh">Pembesian dengan wiremesh</option>';

  // Opsi subDropdown untuk Pekerjaan Baja
} else if (selectedOption === "Baja") {
   subDropdown.innerHTML += '<option value="iwf">Pemasangan rangka kuda kuda IWF</option>';
   subDropdown.innerHTML += '<option value="c75">Pemasangan rangka kuda kuda baja ringan C-75</option>';
  

  // Opsi subDropdown untuk Pekerjaan Kayu
} else if (selectedOption === "Kayu") {
   subDropdown.innerHTML += '<option value="kusen">Kusen pintu/jendela kayu</option>';
   subDropdown.innerHTML += '<option value="rangka">Rangka pintu/jendela kayu</option>';
   subDropdown.innerHTML += '<option value="klamp">Daun pintu klamp</option>';
   subDropdown.innerHTML += '<option value="panel">Daun pintu panel</option>';
   subDropdown.innerHTML += '<option value="pintuply">Daun pintu plywood</option>';
   subDropdown.innerHTML += '<option value="jalusi">Daun pintu/jendela jalusi</option>';
   subDropdown.innerHTML += '<option value="lis15">List kayu 1/5 cm</option>';
  
  // Opsi subDropdown untuk Pekerjaan Dinding
} else if (selectedOption === "Dinding") {
   subDropdown.innerHTML += '<option value="bata2">Pemasangan bata merah (5x11x22) cm 1Pc : 2Ps</option>';
   subDropdown.innerHTML += '<option value="bata3">Pemasangan bata merah (5x11x22) cm 1Pc : 3Ps</option>';
   subDropdown.innerHTML += '<option value="bata4">Pemasangan bata merah (5x11x22) cm 1Pc : 4Ps</option>';
   subDropdown.innerHTML += '<option value="bata5">Pemasangan bata merah (5x11x22) cm 1Pc : 5Ps</option>';
   subDropdown.innerHTML += '<option value="bata6">Pemasangan bata merah (5x11x22) cm 1Pc : 6Ps</option>';
   subDropdown.innerHTML += '<option value="setbata2">Pemasangan bata merah tebal 1/2 bata 1Pc : 2Ps</option>';
   subDropdown.innerHTML += '<option value="setbata3">Pemasangan bata merah tebal 1/2 bata 1Pc : 3Ps</option>';
   subDropdown.innerHTML += '<option value="setbata4">Pemasangan bata merah tebal 1/2 bata 1Pc : 4Ps</option>';
   subDropdown.innerHTML += '<option value="setbata5">Pemasangan bata merah tebal 1/2 bata 1Pc : 5Ps</option>';
   subDropdown.innerHTML += '<option value="setbata6">Pemasangan bata merah tebal 1/2 bata 1Pc : 6Ps</option>';
   subDropdown.innerHTML += '<option value="setbata8">Pemasangan bata merah tebal 1/2 bata 1Pc : 8Ps</option>';
   subDropdown.innerHTML += '<option value="batako6">Pemasangan batako 1Pc : 6Ps</option>';

  // Opsi subDropdown untuk Pekerjaan Plesteran
} else if (selectedOption === "Plesteran") {
   subDropdown.innerHTML += '<option value="plester2">Plesteran 1Pc : 2Ps, Tebal 15mm</option>';
   subDropdown.innerHTML += '<option value="plester4">Plesteran 1Pc : 4Ps, Tebal 15mm</option>';
   subDropdown.innerHTML += '<option value="plester5">Plesteran 1Pc : 5Ps, Tebal 15mm</option>';
   subDropdown.innerHTML += '<option value="plester6">Plesteran 1Pc : 6Ps, Tebal 15mm</option>';
   subDropdown.innerHTML += '<option value="plester8">Plesteran 1Pc : 8Ps, Tebal 15mm</option>';
   subDropdown.innerHTML += '<option value="ciptat2">Plesteran ciprat 1Pc : 2Ps</option>';
   subDropdown.innerHTML += '<option value="siarbata">Plesteran siar pasangan batu bata merah</option>';
   subDropdown.innerHTML += '<option value="siarbatu2">Plesteran siar batu kali 1Pc : 2Ps</option>';
   subDropdown.innerHTML += '<option value="aciansemen">Acian dengan semen</option>';
   subDropdown.innerHTML += '<option value="acianmill">Acian dengan semen dan mill</option>';
   subDropdown.innerHTML += '<option value="plespepalihan">Plesteran pepalihan</option>';

  // Opsi subDropdown untuk Pekerjaan Keramik
} else if (selectedOption === "Keramik") {
   subDropdown.innerHTML += '<option value="keramik20">Keramik lantai 20x20 cm</option>';
   subDropdown.innerHTML += '<option value="keramik30">Keramik lantai 30x30 cm</option>';
   subDropdown.innerHTML += '<option value="keramik40">Keramik lantai 40x40 cm</option>';
   subDropdown.innerHTML += '<option value="plint20">Plint keramik 10x20 cm</option>';
   subDropdown.innerHTML += '<option value="plint30">Plint keramik 10x30 cm</option>';
   subDropdown.innerHTML += '<option value="plint40">Plint keramik 10x40 cm</option>';
   subDropdown.innerHTML += '<option value="Granit60">Granit lantai 60x60 cm</option>';
   subDropdown.innerHTML += '<option value="plint60">Plint granit 10x60 cm</option>';
   subDropdown.innerHTML += '<option value="dinding25">Keramik dinding 20x25 cm</option>';
   subDropdown.innerHTML += '<option value="dinding40">Keramik dinding 25x40 cm</option>';
   subDropdown.innerHTML += '<option value="Marmer100">Marmer lantai 100x100 cm</option>';
   subDropdown.innerHTML += '<option value="dinding100">Marmrer dinding 100x100 cm</option>';
   
  // Opsi subDropdown untuk Pekerjaan Plafond
} else if (selectedOption === "Plafond") {
   subDropdown.innerHTML += '<option value="tripleks">Pemasangan Plafond Tripleks/Plywood</option>';
   subDropdown.innerHTML += '<option value="calsiboard">Pemasangan Plafond Calsiboard</option>';
   subDropdown.innerHTML += '<option value="gypsum">Pemasangan Plafond Gypsum</option>';
   subDropdown.innerHTML += '<option value="gedeg">Pemasangan Plafond Gedeg</option>';
   subDropdown.innerHTML += '<option value="lambriziring">Pemasangan Plafond Lat Kayu/ Lambriziring</option>';
   subDropdown.innerHTML += '<option value="Calsiboard">Pemasangan Plafond Calsiboard</option>';
   subDropdown.innerHTML += '<option value="liskayu15">Pemasangan List Kayu Profil 1/5 cm</option>';
   subDropdown.innerHTML += '<option value="liskayu35">Pemasangan List Kayu Profil 3/5 cm</option>';
   subDropdown.innerHTML += '<option value="lisgypdatar">Pemasangan List Gypsum Datar</option>';
   subDropdown.innerHTML += '<option value="lisgypsiku">Pemasangan List Gypsum Siku</option>';
  
  // Opsi subDropdown untuk Pekerjaan Atap
} else if (selectedOption === "Atap") {
 subDropdown.innerHTML += '<option value="plentong">Pemasangan Atap Genteng Plentong Kecil</option>';
 subDropdown.innerHTML += '<option value="kodok">Pemasangan Atap Genteng Kodok</option>';
 subDropdown.innerHTML += '<option value="glazur">Pemasangan Atap Genteng Kodok Glazur</option>';
 subDropdown.innerHTML += '<option value="beton">Pemasangan Atap Genteng Beton</option>';
 subDropdown.innerHTML += '<option value="metalp">Pemasangan Atap Genteng Metal Atap Pelana</option>';
 subDropdown.innerHTML += '<option value="metalj">Pemasangan Atap Genteng Metal Atap Jurai</option>';
 subDropdown.innerHTML += '<option value="bubunganplentong">Pemasangan Bubungan Genteng Plentong</option>';

  // Opsi subDropdown untuk Pekerjaan Kunci
  // Opsi subDropdown untuk Pekerjaan Pengecatan
  // Opsi subDropdown untuk Pekerjaan Listrik
  // Opsi subDropdown untuk Pekerjaan Style Bali
  // Opsi subDropdown untuk Pekerjaan Pipa
}
}

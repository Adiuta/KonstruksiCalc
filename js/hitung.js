document.addEventListener("DOMContentLoaded", function () {
  const hitungButton = document.getElementById("hitungButton");

  hitungButton.addEventListener("click", function () {
    const itemSelect = document.getElementById("mainDropdown");
    const subItemSelect = document.getElementById("subDropdown");
    const volumeInput = document.getElementById("volume");

    const item = itemSelect.value;
    const subItem = subItemSelect.value;
    const volume = parseFloat(volumeInput.value);

    if (isNaN(volume)) {
      alert("Harap masukkan angka yang valid.");
      return;
    }

    const materialOptions = {
      // Definisi pekerjaan tanah
      Tanah: {
        UrugPasir: { materials: ["Pasir Urug"], rasioBahan: [1.2], satuan: ["M³"] },
        UrugSirtu: { materials: ["Sirtu"], rasioBahan: [1.2], satuan: ["M³"] },
        UrugTanah: { materials: ["Tanah Urug"], rasioBahan: [1.2], satuan: ["M³"] },
      },
      // Definisi pekerjaan pondasi
      Pondasi: {
        BatuKosong: {
          materials: ["Batu Kali", "Pasir Pasang"],
          rasioBahan: [1.2, 0.432],
          satuan: ["M³", "M³"],
        },
        PondasiBatuKali: {
          materials: ["Batu Kali", "Semen", "Pasir Pasang"],
          rasioBahan: [1.2, 202, 0.485],
          satuan: ["M³", "Kg", "M³"],
        },
        // Tambahkan sub pekerjaan pondasi lainnya jika diperlukan
      },
      // ... Definisi jenis pekerjaan lainnya jika diperlukan
    };

    const jumlahBahan = [];
    const satuanBahan = "M³"; // Default satuan

    if (materialOptions[item] && materialOptions[item][subItem]) {
      const rasioBahan = materialOptions[item][subItem].rasioBahan;
      const satuan = materialOptions[item][subItem].satuan;

      for (let i = 0; i < rasioBahan.length; i++) {
        jumlahBahan.push(volume * rasioBahan[i]);
      }

      const hasilElemen = document.getElementById("hasil");
      hasilElemen.innerHTML = "";

      const tabelHasil = document.createElement("table");
      tabelHasil.innerHTML = `
                <tr>
                    <th>Material</th>
                    <th>Jumlah</th>
                    <th>Satuan</th>
                </tr>
            `;

      const materials = materialOptions[item][subItem].materials;
      for (let i = 0; i < materials.length; i++) {
        const row = document.createElement("tr");
        const materialCell = document.createElement("td");
        const jumlahCell = document.createElement("td");
        const satuanCell = document.createElement("td");
        materialCell.textContent = materials[i];
        jumlahCell.textContent = `${jumlahBahan[i].toFixed(2)}`;
        satuanCell.textContent = satuan[i] || satuanBahan;

        row.appendChild(materialCell);
        row.appendChild(jumlahCell);
        row.appendChild(satuanCell);
        tabelHasil.appendChild(row);
      }

      hasilElemen.appendChild(tabelHasil);
    }
  });
});

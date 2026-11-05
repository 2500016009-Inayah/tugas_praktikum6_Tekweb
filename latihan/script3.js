// Latihan 3: Manipulasi DOM Dasar

// Tombol mengubah warna latar belakang
let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";

btnBackground.onclick = function () {
  document.body.style.backgroundColor = "#e8f4fc";
};

// Tombol mengubah warna teks
let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";

btnTextColor.onclick = function () {
  document.body.style.color = "#2c3e50";
};

// Tombol memperbesar font
let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";

btnIncreaseFont.onclick = function () {
  let currentSize = parseInt(getComputedStyle(document.body).fontSize);

  document.body.style.fontSize = currentSize + 2 + "px";
};

// Tombol memperkecil font
let btnDecreaseFont = document.createElement("button");
btnDecreaseFont.textContent = "Perkecil Font";

btnDecreaseFont.onclick = function () {
  let currentSize = parseInt(getComputedStyle(document.body).fontSize);

  document.body.style.fontSize = currentSize - 2 + "px";
};

// Menambahkan semua tombol ke halaman
let outputDiv = document.getElementById("output3");

outputDiv.appendChild(btnBackground);
outputDiv.appendChild(document.createElement("br"));
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(document.createElement("br"));
outputDiv.appendChild(btnIncreaseFont);
outputDiv.appendChild(document.createElement("br"));
outputDiv.appendChild(btnDecreaseFont);

/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
    roman_numerals_1.js,roman_numerals_2.js,roman_numerals_4.js --> bisa dieksekusi --> hasilnya benar
    roman_numerals_3.js --> bisa dieksekusi --> hasilnya masih salah.
    cara mem-verifikasinya adalah dengan menulis ulang kode tersebut, dan melihat hasil drive codenya.

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
    ada bugs pada roman_numerals_3.js
    cara mem-verifikasinya adalah dengan dengan menulis ulang kode tersebut, dan melihat hasil drive codenya.
    solusi ini hanya bisa menjalankan hingga drive-code ke-3.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
    roman_numerals_1.js --> semuanya clear
    roman_numerals_2.js --> penggunaan typeOf, penggunaan String(+num) dan penggunaan while tanpa kurung kurawal, baru saya lihat.
    roman_numerals_3.js --> penggunaan tanda '+', sebelum decimalValue juga baru saya lihat
    roman_numerals_4.js --> clear

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
    roman_numerals_1.js dan roman_numerals_4.js --> clear
    roman_numerals_2.js dan roman_numerals_3.js perlu console.log yang banyakm karena ada beberapa sintaks yang baru saya lihat.

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
    bisa namun perlu lebih membiasakan diri menggunakan sintaks-sintaks tersebut.

6. Adakah struktur data baru? Apa saja, tolong sebutkan
    ***** SKIP *****

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
    menurut saya roman_numerals_1.js dan roman_numerals_4.js mirip, hanya berbeda saat mencari librarynya, yang roman_numerals_4.js menggunakan modulus.
    pada roman_numerals_2.js menggunakan library array yang berbeda dan lebih banyak, idenya diakhir ditambahkan dengan romawi terbesar.
    sayangnya, dengan cara ini jika drive codenya memunculkan num yang lebih besar maka perlu penambahan library array yg juga cukup banyak.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
    saya akan memilih nomor 4, karena paling mudah untuk dimengerti dan juga jumlah barisnya paling sedikit.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
    dampak dari pola pada performa aplikasinya adalah, semakin ringkas codenya semakin cepat performa aplikasinya.
    jadi yang paling ringkas, dan memiliki performa terbaik adalah roman_numerals_4.js

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
    dampak dari pola suatu code, tidak bergantung singkat atau panjangnya suatu code.
    namun alangkah baiknya apabila suatu code diberikan comment penjelasan.
    code yang terlalu panjang dan tidak bersifat dinamis, akan sulit dilakukan penambahan dan maintenance.
*/

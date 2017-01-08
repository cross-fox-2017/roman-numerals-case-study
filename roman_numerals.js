/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
   untuk solution 1 ,2 dan 4 bisa dieksekusi dan hasilnya sesuai namun case 3 tidak memberikan hasil yang tepat
   dan jika diinput nilai lebih dari >=1000 akan looping forever. dapat diverifikasi dengan console.log (fungsi dalam solusi(nilai input))
2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
    solution 3 mengandung bugs yaitu hasil yang dikeluarkan bukan nilai yang tepat
    namun nilai itu sendiri lalu me looping nilai2 setelahnya , dapat diverifikasi dengan debug menggunakan console loh
3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
   membuat array dengan new Array() dan juga typeof
4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
   solution 1,2,4 dapat dipahami namun solution 3 khususnya pada if (decimalValue[index] <= 1453 && decimalValue[+index + 1] > numCopy)  , sulit dipahami
5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
  ya penerapan while khusunya dapat sangat berguna di projek2 lainnya
6. Adakah struktur data baru? Apa saja, tolong sebutkan
    struktur baru belum ada, namun penerapan while disini sangat menarik untuk digunakan
7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
    yang dapat saya pelajari bahwa pemecahan masalah bukan hanya dapat dilakukan dengan 1 cara dan 1 cara pun dapat diterapkan secara berbeda,
    saya juga sadar dari solution 4 khususnya bahwa pemecahan masalah dapat dilakukan dengan sangat efisien.
    perbedaan yang terlihat jelas adalah soal efisiensi code dari solusi 1 (yang kurang efisien )dengan solusi 2 dan 4
8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
    menurut saya cara yang saya pilih adalah solusi 4 karena solusi ini lebih mudah dimengerti dan sangat efisien dan menurut saya penggunaan while disini sangat menarik
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
    dampaknya paling terlihat di solusi 3 yaitu jika masih terdapat bug maka saat dijalankan akan mengalami stuck.dapat diukur dari kecepatan running pada saat program dijalankan
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
    dapat dilihat secara jelas jika ada bug pada codingan yang efisien seperti code 4 akan lebih mudah ditemukan bug nya daripada
    code di solusi ke 3 , karena itu makin efisien suatu code maka akan semakin mudah untuk di maintenance

*/

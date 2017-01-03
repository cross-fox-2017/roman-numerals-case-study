/*
Please answer the questions below :
1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Jawab: Tidak semua solusi bisa di eksekusi dengan benar. Caranya testing functionnya, ternyata ada satu solusi yang output pada console-nya tidak sesuai.

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Jawab: Solusi ke-3 tidak sesuai dengan output yang diharapkan.
Caranya dengan debugging: console.log(to_roman(1453) == "MCDLIII")
Ternyata output-nya tidak sesuai (tidak menghasilkan nilai TRUE)

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Jawab: Ada, pada Solution ke-2 ada operator typeof, selama ini sih belum pernah digunakan.

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Jawab: Ada yang belum mengerti.
Pada solusi ke-2, yaitu:
while (i--)
roman_num = (key[+digits.pop() + (i*10)] || "") + roman_num;
Pada solusi ke-3, yaitu:
caranya agar input yang bernilai ribuan terbaca sehingga keluar ouput yang diharapkan.

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Jawab: Bisa dicoba nanti.

6. Adakah struktur data baru? Apa saja, tolong sebutkan.
Jawab: Tidak ada yang baru, sudah dipelajari contohnya data Array.

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Jawab: Ya, beragam persepektif dari setiap solution.
Solusi pertama bisa dimengerti tapi masih kurang efisien dibandingkan solusi ke-4.
Solusi ke-2 dan ke-3 masih belum efektif.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solusi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Jawab: Menurut kami solusi ke-4 adalah solusi yang terbaik, karena simpel, efektif, dan mudah dimengerti.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Jawab: Dampaknya jika code solusinya masih ada yang bug akan mengganggu performa aplikasi.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Jawab: Untuk maintenance code pola yang efektif seperti solusi ke-4 akan memudahkan developer, karena code yang baik tidak perlu menggunakan komentar dalam setiap baris code.
*/

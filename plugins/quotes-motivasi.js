let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${motivasi.getRandom()}”`, author, ['MOTIVASI', ` `], m)

handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-motivasi/
const motivasi = [
"Betapapun sulitnya hidup, selalu ada sesuatu yang dapat kamu lakukan dan berhasil.  - Stephen Hawking",
"Hidup bukan tentang menemukan dirimu sendiri. Hidup adalah bagaimana membangun dirimu.  - George Bernard Shaw",
"Cintai hidup yang Anda jalani. Jalani hidup yang Anda cintai.  - Bob Marley",
"Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan.  - Winston Churchill",
"Jangan khawatir tentang kegagalan, khawatirkan tentang peluang yang kamu lewatkan ketika kamu bahkan tidak mencoba.  - Jack Canfield",
"Tidak ada rahasia sukses. Itu adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.  - Colin Powell",
"Orang sukses melakukan apa yang orang tidak sukses tidak mau lakukan. Jangan berharap itu lebih mudah; berharaplah Anda lebih baik.  - Jim Rohn",
"Dalam hidup ini kita tidak bisa melakukan hal-hal besar. Kita hanya bisa melakukan hal-hal kecil dengan cinta yang besar.  - Bunda Teresa",
"Menang bukanlah segalanya, tetapi keinginan untuk menang adalah segalanya.  - Vince Lombardi",
"Tiga hal penting dalam hidup: kesehatanmu, misimu, dan orang yang kamu cintai.  - Naval Ravikant",
"Jangan takut hidup. Percayalah bahwa hidup itu layak dijalani dan keyakinan Anda akan membantu menciptakan fakta.â€ - William James",
"Saat kita berusaha untuk menjadi lebih baik dari kita, segala sesuatu di sekitar kita juga menjadi lebih baik.  - Paulo Coelho",
"Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanya sementara.  - Shah Rukh Khan",
"Hitunglah umurmu dengan teman, bukan tahun. Hitunglah hidupmu dengan senyum, bukan air mata.  - John Lennon",
"Semua kehidupan adalah eksperimen. Makin banyak eksperimen yang kamu buat, makin baik.  - Ralph Waldo Emerson",
"Satu-satunya perjalanan yang mustahil adalah perjalanan yang tidak pernah Anda mulai.  - Tony Robbins",
"Sukses bukanlah akhir; kegagalan tidak fatal: Yang terpenting adalah keberanian untuk melanjutkan.  - Winston S. Churchill",
"Banyak dari kegagalan hidup adalah orang-orang yang tidak menyadari betapa dekatnya mereka dengan kesuksesan ketika mereka menyerah.  - Thomas A. Edison",
"Kamu punya otak di kepalamu. Kamu punya kaki di sepatumu. Kamu bisa mengarahkan dirimu sendiri ke arah mana pun yang kamu pilih.  - Dr. Seuss",
"Jalan menuju sukses dan jalan menuju kegagalan hampir persis sama.  - Colin R. Davis",
"Sebarkan cinta ke mana pun kamu pergi. Jangan biarkan orang lain mendatangimu tanpa pergi dengan lebih bahagia.  - Bunda Teresa",
"Ketika kamu mencapai ujung tali, ikat simpul di dalamnya dan bertahanlah.  - Franklin D. Roosevelt",
"Kebahagiaan adalah ketika apa yang Anda pikirkan, apa yang Anda katakan, dan apa yang Anda lakukan selaras.  - Mahatma Gandhi",
"Jangan menilai setiap hari dengan panen yang kamu tuai, tetapi dengan benih yang kamu tanam.  - Robert Louis Stevenson",
"Masa depan adalah milik mereka yang percaya pada keindahan impian mereka.  - Eleanor Roosevelt",
"Hidup adalah petualangan yang berani atau tidak sama sekali.  - Helen Keller",
"Cara untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.  - Walt Disney",
"Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain. Jangan terjebak oleh hidup dengan hasil pemikiran orang lain.  - Steve Jobs",
"Jika kehidupan dapat diprediksi, maka kehidupan akan berhenti, dan tanpa rasa.  - Eleanor Roosevelt",
"Jika kamu menetapkan tujuan sangat tinggi dan kamu gagal, maka kamu akan gagal di atas kesuksesan orang lain.  - James Cameron",
"Katakan kepadaku dan aku lupa. Ajari aku dan aku ingat. Libatkan aku dan aku belajar.  - Benjamin Franklin",
"Hal-hal terbaik dan terindah di dunia tidak dapat dilihat atau bahkan disentuh - semuanya harus dirasakan dengan hati.  - Helen Keller",
"Pada saat-saat merasakan kegelapan, kita harus fokus untuk melihat cahaya.  - Aristoteles",
"Siapa pun yang bahagia akan membuat orang lain juga bahagia.  - Anne Frank",
"Kamu akan menghadapi banyak kekalahan dalam hidup, tapi jangan pernah membiarkan dirimu dikalahkan.  - Maya Angelou",
"Tujuan hidup kita adalah menjadi bahagia.  - Dalai Lama",
"Pergi dengan percaya diri ke arah impianmu! Jalani hidup yang telah kamu bayangkan.  - Henry David Thoreau",
"Hidup yang berharga adalah hidup yang dapat memberikan kehidupannya kepada orang lain.  - Albert Einstein",
"Setiap orang berpikir untuk mengubah dunia, tapi tidak ada yang berpikir untuk mengubah dirinya sendiri.  - Leo Tolstoy",
"Hidup bukanlah tentang mendapatkan dan memiliki; ini tentang memberi dan menjadi. - Kevin Kruse",
"Kemuliaan terbesar dalam hidup tidak terletak saat tidak pernah jatuh, tetapi bagaimana bangkit setiap kali kita jatuh.  - Nelson Mandela",
"Rahasia sukses adalah melakukan hal umum dengan tidak biasa dengan baik.  - John D. Rockefeller Jr.",
"Saya menemukan bahwa makin keras saya bekerja, makin banyak keberuntungan yang tampaknya saya miliki.  - Thomas Jefferson",
"Saya tidak pernah  tentang sukses, saya bekerja untuk itu.  - Estee Lauder",
"Sukses tampaknya terkait dengan tindakan. Orang-orang sukses terus bergerak. Mereka membuat kesalahan, tetapi tidak berhenti.  - Conrad Hilton",
"Teruslah Mengocok Patrick.  - Spongebob Squarepants",
"Jangan Berharap Dulu Ntar Malah Jelek Kalo Berharap Mulu mah, Mendingan Berusaha , Yangga Yangga ?.' - Odo Kentang",
"Jalani Hidup Seperti Tai, Yang Keluar Dengan Ihklas, Terbawa Arus, Dan Sampai Ke Tempat Tujuan - Barqah Xiex",
"Lakukan lebih banyak untuk dunia daripada untuk dirimu",
"Keraguan membunuh lebih banyak mimpi daripada kegagalan",
"Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan",
"Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
"Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
"Tidak ada kata terlambat untuk menjadi dirimu yang seharusnya",
"Disiplin adalah jembatan antara tujuan dan pencapaian",
"Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
"Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
"Keberanian adalah penolakan terhadap rasa takut, penguasaan rasa takut, bukan ketiadaan rasa takut",
"Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu",
"Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
"Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat",
"Sukses adalah tempat persiapan dan kesempatan bertemu",
"Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20",
"Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu",
"Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan",
"Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat",
"Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain",
"Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya",
"Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
"Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
"Jika saya punya waktu enam jam untuk menebang pohon, saya akan menghabiskan empat jam pertama mengasah kapak",
"Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu",
"Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
"Lebih baik gagal dalam orisinalitas daripada berhasil meniru",
"Ada tiga cara untuk mencapai kesuksesan tertinggi: Cara pertama adalah bersikap baik. Cara kedua adalah bersikap baik. Cara ketiga adalah menjadi baik",
"Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan",
"Jangan biarkan kemarin menyita terlalu banyak hari ini",
"Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya",
"Betapapun sulitnya hidup, selalu ada sesuatu yang dapat kamu lakukan dan berhasil.  - Stephen Hawking",
"Hidup bukan tentang menemukan dirimu sendiri. Hidup adalah bagaimana membangun dirimu.  - George Bernard Shaw",
"Cintai hidup yang Anda jalani. Jalani hidup yang Anda cintai.  - Bob Marley",
"Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan.  - Winston Churchill",
"Jangan khawatir tentang kegagalan, khawatirkan tentang peluang yang kamu lewatkan ketika kamu bahkan tidak mencoba.  - Jack Canfield",
"Tidak ada rahasia sukses. Itu adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.  - Colin Powell",
"Orang sukses melakukan apa yang orang tidak sukses tidak mau lakukan. Jangan berharap itu lebih mudah; berharaplah Anda lebih baik.  - Jim Rohn",
"Dalam hidup ini kita tidak bisa melakukan hal-hal besar. Kita hanya bisa melakukan hal-hal kecil dengan cinta yang besar.  - Bunda Teresa",
"Menang bukanlah segalanya, tetapi keinginan untuk menang adalah segalanya.  - Vince Lombardi",
"Tiga hal penting dalam hidup: kesehatanmu, misimu, dan orang yang kamu cintai.  - Naval Ravikant",
"Jangan takut hidup. Percayalah bahwa hidup itu layak dijalani dan keyakinan Anda akan membantu menciptakan fakta.â€ - William James",
"Saat kita berusaha untuk menjadi lebih baik dari kita, segala sesuatu di sekitar kita juga menjadi lebih baik.  - Paulo Coelho",
"Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanya sementara.  - Shah Rukh Khan",
"Hitunglah umurmu dengan teman, bukan tahun. Hitunglah hidupmu dengan senyum, bukan air mata.  - John Lennon",
"Semua kehidupan adalah eksperimen. Makin banyak eksperimen yang kamu buat, makin baik.  - Ralph Waldo Emerson",
"Satu-satunya perjalanan yang mustahil adalah perjalanan yang tidak pernah Anda mulai.  - Tony Robbins",
"Sukses bukanlah akhir; kegagalan tidak fatal: Yang terpenting adalah keberanian untuk melanjutkan.  - Winston S. Churchill",
"Banyak dari kegagalan hidup adalah orang-orang yang tidak menyadari betapa dekatnya mereka dengan kesuksesan ketika mereka menyerah.  - Thomas A. Edison",
"Kamu punya otak di kepalamu. Kamu punya kaki di sepatumu. Kamu bisa mengarahkan dirimu sendiri ke arah mana pun yang kamu pilih.  - Dr. Seuss",
"Jalan menuju sukses dan jalan menuju kegagalan hampir persis sama.  - Colin R. Davis",
"Sebarkan cinta ke mana pun kamu pergi. Jangan biarkan orang lain mendatangimu tanpa pergi dengan lebih bahagia.  - Bunda Teresa",
"Ketika kamu mencapai ujung tali, ikat simpul di dalamnya dan bertahanlah.  - Franklin D. Roosevelt",
"Kebahagiaan adalah ketika apa yang Anda pikirkan, apa yang Anda katakan, dan apa yang Anda lakukan selaras.  - Mahatma Gandhi",
"Jangan menilai setiap hari dengan panen yang kamu tuai, tetapi dengan benih yang kamu tanam.  - Robert Louis Stevenson",
"Masa depan adalah milik mereka yang percaya pada keindahan impian mereka.  - Eleanor Roosevelt",
"Hidup adalah petualangan yang berani atau tidak sama sekali.  - Helen Keller",
"Cara untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.  - Walt Disney",
"Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain. Jangan terjebak oleh hidup dengan hasil pemikiran orang lain.  - Steve Jobs",
"Jika kehidupan dapat diprediksi, maka kehidupan akan berhenti, dan tanpa rasa.  - Eleanor Roosevelt",
"Jika kamu menetapkan tujuan sangat tinggi dan kamu gagal, maka kamu akan gagal di atas kesuksesan orang lain.  - James Cameron",
"Katakan kepadaku dan aku lupa. Ajari aku dan aku ingat. Libatkan aku dan aku belajar.  - Benjamin Franklin",
"Hal-hal terbaik dan terindah di dunia tidak dapat dilihat atau bahkan disentuh - semuanya harus dirasakan dengan hati.  - Helen Keller",
"Pada saat-saat merasakan kegelapan, kita harus fokus untuk melihat cahaya.  - Aristoteles",
"Siapa pun yang bahagia akan membuat orang lain juga bahagia.  - Anne Frank",
"Kamu akan menghadapi banyak kekalahan dalam hidup, tapi jangan pernah membiarkan dirimu dikalahkan.  - Maya Angelou",
"Tujuan hidup kita adalah menjadi bahagia.  - Dalai Lama",
"Pergi dengan percaya diri ke arah impianmu! Jalani hidup yang telah kamu bayangkan.  - Henry David Thoreau",
"Hidup yang berharga adalah hidup yang dapat memberikan kehidupannya kepada orang lain.  - Albert Einstein",
"Setiap orang berpikir untuk mengubah dunia, tapi tidak ada yang berpikir untuk mengubah dirinya sendiri.  - Leo Tolstoy",
"Hidup bukanlah tentang mendapatkan dan memiliki; ini tentang memberi dan menjadi. - Kevin Kruse",
"Kemuliaan terbesar dalam hidup tidak terletak saat tidak pernah jatuh, tetapi bagaimana bangkit setiap kali kita jatuh.  - Nelson Mandela",
"Rahasia sukses adalah melakukan hal umum dengan tidak biasa dengan baik.  - John D. Rockefeller Jr.",
"Saya menemukan bahwa makin keras saya bekerja, makin banyak keberuntungan yang tampaknya saya miliki.  - Thomas Jefferson",
"Saya tidak pernah  tentang sukses, saya bekerja untuk itu.  - Estee Lauder",
"Sukses tampaknya terkait dengan tindakan. Orang-orang sukses terus bergerak. Mereka membuat kesalahan, tetapi tidak berhenti.  - Conrad Hilton",
"Teruslah Mengocok Patrick.  - Spongebob Squarepants",
"Jangan Berharap Dulu Ntar Malah Jelek Kalo Berharap Mulu mah, Mendingan Berusaha , Yangga Yangga ?.' - Odo Kentang"
]
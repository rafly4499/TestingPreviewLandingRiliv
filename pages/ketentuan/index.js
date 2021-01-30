import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import { Fragment } from "react";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";

import KonselingHeaderPage from "../../components/page/koseling/header-page/header-page.component";

const KetentuanPage = () => {
	return (
		<Fragment>
			<RilivHeader>
				<KonselingHeaderPage />
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>

			<RilivNavbar
				currentPage="ketentuan"
				urlCTA="https://riliv.page.link/home2"
				textCTA="Coba Aplikasi Sekarang"
			/>

			<div
				className="container-fluid bg-riliv-level-1 py-5 bg-header"
				style={{
					backgroundImage: "url('img-ketentuan/syarat-ketentuan-header.svg')",
				}}
			>
				<div className="container py-5 px-2">
					<br />
					<br />
					<h1 className="font-weight-bolder text-white text-center">
						SYARAT DAN KETENTUAN <br />
						PENGGUNAAN APLIKASI RILIV
					</h1>
					<br />
					<br />
				</div>
			</div>

			<div className="container py-5 px-lg-5 px-3 mt-3 mb-3">
				<p className="text-gray-5 paragraph-riliv">
					Dengan mengunduh, mengakses atau menggunakan aplikasi mobile Riliv
					(Selanjutnya disebut sebagai
					<strong>"Aplikasi"</strong>), Anda setuju untuk terikat dengan Syarat
					dan Ketentuan Penggunaan Aplikasi Riliv ini (Selanjutnya disebut
					sebagai <strong>"Syarat dan Ketentuan"</strong>). Syarat & Ketentuan
					ini mempengaruhi hak dan kewajiban hukum Anda. Apabila Anda tidak
					setuju untuk terikat oleh semua Syarat & Ketentuan ini, anda dapat
					menghapus aplikasi dan/atau membatalkan akun anda dan/atau tidak
					menggunakan layanan yang terdapat dalam aplikasi.
				</p>
				<br />
				<p className="text-gray-5 paragraph-riliv">
					Sebagai pengguna, anda harus menggunakan Layanan sesuai dengan
					persyaratan yang dinyatakan dalam Syarat dan Ketentuan. Syarat dan
					Ketentuan ini merupakan perjanjian yang sah antara Anda dengan PT
					RILIV PSIKOLOGI INDONESIA (Selanjutnya disebut sebagai “Kami”).
					Terkait adanya perbaikan pada aplikasi dan/atau perubahan layanan,
					anda perlu memahami bahwa kami berhak untuk memodifikasi, memperbarui,
					atau mengganti Syarat dan Ketentuan serta Kebijakan Privasi. Syarat
					dan Ketentuan serta Kebijakan Privasi yang baru akan berlaku secara
					efektif setelah berhasil diposting di situs web (www.riliv.co) dan
					aplikasi kami. Kami akan menghubungi anda melalui Email dan Layanan
					kami apabila terdapat pembaruan Syarat Ketentuan dan Kebijakan
					Privasi. Apabila anda tetap menggunakan Layanan setelah adanya
					pembaruan Syarat dan Ketentuan serta Kebijakan Privasi, anda dianggap
					telah memberikan persetujuan yang sah dan tidak dapat dibatalkan.
				</p>
			</div>

			<div
				id="accordion"
				className="container py-1 px-lg-5 px-3 mt-3 mb-3 text-gray-5 mb-5 pb-2"
			>
				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseKetentuanUmum"
						role="button"
						aria-expanded="true"
						aria-controls="collapseKetentuanUmum"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Ketentuan Umum</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: `24px`,
									width: `24px`,
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: `2px` }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseKetentuanUmum"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Aplikasi ini berfungsi sebagai sarana untuk menyediakan konten
								maupun menghubungkan Anda dengan penyedia layanan terkait
								kesehatan mental.
							</li>
							<li className="mb-1">
								Aplikasi ini memiliki beberapa layanan yang dapat anda gunakan.
								Jenis layanan tersebut adalah:
								<ol
									type="I"
									className=""
									style={{ listStylePosition: "outside" }}
								>
									<li>Meditasi dan Lelap</li>
									<li>Konseling</li>
									<li>Layanan lain yang dapat bertambah dari waktu ke waktu</li>
								</ol>
							</li>
							<li className="mb-1">
								Dalam layanan konseling, kami akan menghubungkan anda dengan
								Expert Reliever kami.
								<strong>“Expert Reliever”</strong> adalah konselor/psikolog
								profesional dan berlisensi, yakni memiliki Surat Izin Praktik
								Psikologi yang aktif dari Himpunan Psikologi Indonesia (HIMPSI).
							</li>
							<li className="mb-1">
								Anda menyetujui bahwa seluruh percakapan anda dengan Expert
								Reliever akan disimpan secara otomatis dan akan digunakan untuk
								kepentingan legal serta peningkatan pelayanan kami. Kerahasiaan
								percakapan anda terjamin dan tidak akan disebarluaskan.
							</li>
							<li className="mb-1">
								Anda menyetujui bahwa anda menyatakan dan menjamin diri anda
								sebagai subjek hukum yang dapat melakukan perjanjian dan dapat
								mengikatkan diri terhadap itu sesuai dengan peraturan
								perundang-undangan yang berlaku, bahwa anda berusia minimal 18
								tahun (tujuh belas tahun).
							</li>
							<li className="mb-1">
								<strong>“Pihak Ketiga”</strong> adalah setiap orang atau badan
								hukum yang mengadakan kerjasama bisnis dengan kami.
							</li>
							<li className="mb-1">
								Kami dapat menggunakan pihak ketiga dalam memproses pembayaran
								anda untuk layanan. Kami tidak bertanggung jawab atas kegagalan
								sistem yang dapat terjadi pada pihak ketiga yang berpengaruh
								pada pembayaran Anda.
							</li>
							<li className="mb-1">
								Apabila terjadi masalah pada pihak ketiga dan mengganggu proses
								bisnis kami, kami akan mengupayakan agar Anda mendapatkan akses
								dan/atau layanan yang optimal.
							</li>
							<li className="mb-1">
								Dengan memasukkan alamat email Anda ke Aplikasi, menandakan
								bahwa Anda setuju untuk menerima komunikasi dari kami secara
								elektronik. Kami akan berkomunikasi dengan Anda melalui e-mail
								atau melalui Layanan kami.
							</li>
							<li className="mb-1">
								Anda akan merahasiakan dan tidak akan menyalahgunakan informasi
								yang Anda terima dari penggunaan Aplikasi. Anda akan menggunakan
								Aplikasi dengan hormat dan tidak akan melakukan perilaku atau
								aktivitas tidak sah, mengancam, atau melecehkan saat menggunakan
								Layanan.
							</li>
							<li className="mb-1">
								Anda mengetahui dan setuju bahwa setiap informasi dalam bentuk
								apapun, termasuk namun tidak terbatas pada video, audio, gambar
								atau tulisan yang ada dalam Aplikasi memiliki hak atas kekayaan
								intelektual (termasuk namun tidak terbatas kepada hak atas merek
								dan hak cipta) masing-masing. Anda tidak diperbolehkan untuk
								menggunakan, mengubah, memfasilitasi, menyebarluaskan dan/atau
								memutilasi hak atas kekayaan intelektual tersebut tanpa izin
								dari pemilik hak atas kekayaan intelektual tersebut sebagaimana
								diatur dalam peraturan perundang-undangan yang berlaku.
							</li>
							<li className="mb-1">
								Anda setuju bahwa semua perjanjian, pemberitahuan, pengungkapan
								dan komunikasi lainnya yang kami sediakan untuk Anda secara
								elektronik memenuhi segala persyaratan hukum yang dibuat secara
								tertulis dan memiliki kekuatan hukum yang sama.
							</li>
							<li className="mb-1">
								Perlu dipahami bahwa kami merupakan perusahaan teknologi dan
								Kami bukanlah biro psikologi atau label rekaman.
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseKetentuanPenggunaanAplikasi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseKetentuanPenggunaanAplikasi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Ketentuan Penggunaan Aplikasi
							</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: `24px`,
									width: `24px`,
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseKetentuanPenggunaanAplikasi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Proses pendaftaran mewajibkan Anda untuk memberikan informasi
								pribadi yang akurat, terkini, dan lengkap, yang mungkin kami
								minta dari Anda dari waktu ke waktu, termasuk tetapi tidak
								terbatas pada alamat email, nama, gender, tanggal lahir, dan
								lain-lain kepada kami. Apabila terdapat perubahan apa pun dalam
								informasi Anda, harap memberitahu Aplikasi secepatnya.
							</li>
							<li className="mb-1">
								Kami dapat meminta informasi atau dokumentasi tambahan kapan pun
								untuk memverifikasi identitas, umur, dan/atau memverifikasi
								detail bank atau debit, kredit, fasilitas prabayar Anda, maupun
								jenis akun pembayaran lainnya yang didaftarkan kepada kami. Anda
								menyetujui bahwa Anda akan memberikan informasi dan/atau
								dokumentasi dengan cepat kepada kami sesuai permintaan. Jika
								Anda tidak memberikan informasi dan/atau dokumentasi dengan
								cepat, kami dapat, tanpa tanggung jawab kepada Anda, membatasi
								penggunaan Anda atas Layanan atau menangguhkan atau menutup akun
								Anda.
							</li>
							<li className="mb-1">
								Hanya Anda yang dapat menggunakan akun Anda sendiri, dan Anda
								berusaha untuk tidak memberikan wewenang kepada pihak lain untuk
								menggunakan identitas atau akun Anda. Anda tidak boleh
								mengalihkan atau memindahkan akun Anda ke pihak lain. Anda harus
								menjaga agar kata sandi akun dan identifikasi apa pun yang kami
								berikan kepada Anda tetap aman dan rahasia.
							</li>
							<li className="mb-1">
								Pengguna diwajibkan untuk merahasiakan kata sandi untuk mencegah
								penyalahgunaan secara tidak sah. Kami akan menganggap semua
								kegiatan yang dilakukan dengan password pengguna sebagai
								kegiatan yang telah dilakukan oleh pemegang kata sandi atau
								dirinya sendiri. Pengguna bebas untuk berhenti menggunakan
								layanan ini dengan mengakhiri akun mereka. Kami berhak
								menangguhkan atau menghapus akun tanpa memberikan pemberitahuan
								terlebih dahulu kepada pengguna jika mereka melanggar Syarat dan
								Ketentuan.
							</li>
							<li className="mb-1">
								Semua data pribadi yang diberikan kepada kami akan dikumpulkan,
								ditangani, disimpan, dan diproses sesuai dengan Kebijakan
								Privasi Riliv. Dengan menerima Syarat dan Ketentuan ini, Anda
								juga setuju untuk memberikan izin sesuai yang dibutuhkan di
								bawah Kebijakan Privasi kami.
							</li>
							<li className="mb-1">
								Anda bertanggung jawab sepenuhnya untuk menjaga agar nama
								pengguna dan kata sandi Anda di Aplikasi dan Layanan tetap aman.
								Anda dianjurkan untuk mengubah kata sandi secara berkala. Kami
								tidak akan bertanggung jawab atas pengungkapan atau penggunaan
								tidak sah apa pun dari nama pengguna atau kata sandi Anda,
								termasuk yang disebabkan oleh kecerobohan dan/atau kelalaian
								Anda.
							</li>
							<li className="mb-1">
								Penggunaan nama pengguna atau kata sandi apa pun di Aplikasi
								akan dianggap sebagai penggunaan Layanan. Informasi, data, atau
								komunikasi apa pun yang dipublikasikan, dikirimkan, atau
								diterbitkan selama periode Anda masuk dengan nama pengguna dan
								kata sandi (baik secara sah maupun tidak sah) akan dianggap
								dipublikasikan, dikirimkan, atau diterbitkan oleh Anda. Anda
								akan bertanggung jawab sepenuhnya atas pengiriman,
								pemberitahuan, atau komunikasi apa pun dan setuju untuk
								mengganti rugi dan membebaskan Kami dari kerugian, kerusakan,
								pengeluaran, dan/atau tanggung jawab atas tindakan yang
								disebabkan oleh penggunaan nama pengguna dan kata sandi Anda di
								Aplikasi, kecuali Anda dapat menunjukkan bahwa penggunaan
								tersebut tidak disebabkan oleh tindakan, kecerobohan, kelalaian,
								dan/atau kelengahan Anda.
							</li>
							<li className="mb-1">
								Hak pengguna untuk menggunakan layanan akan berakhir ketika akun
								Anda telah dihapus untuk alasan apapun. Akun tersebut tidak
								dapat dikembalikan bahkan jika Pengguna tidak sengaja menghapus
								akun mereka. Setiap akun di Layanan untuk penggunaan eksklusif
								dan milik semata-mata untuk pemilik akun. Pengguna tidak dapat
								mentransfer atau meminjamkan account mereka ke pihak ketiga atau
								mewariskan kepada pihak ketiga.
							</li>
							<li className="mb-1">
								Kami menyimpan informasi pribadi Anda selama informasi tersebut
								berhubungan dengan tujuan-tujuan yang dibutuhkan untuk
								kepentingan pelayanan Kami kepada Anda. Kerahasiaan informasi
								pribadi Anda tentunya dianggap rahasia dan tidak akan
								disebarluaskan kecuali apabila telah mendapat persetujuan oleh
								Anda berdasarkan Kebijakan Privasi ini atau diwajibkan oleh
								peraturan perundang-undangan yang berlaku.
							</li>
							<li className="mb-1">
								Kami sangat menghargai privasi Pengguna dan berusaha untuk
								melindunginya sesuai dengan
								<a href="" className="paragraph-riliv">
									<u>Kebijakan Privasi Riliv.</u>
								</a>
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseLayananAplikasi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseLayananAplikasi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Layanan Aplikasi</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseLayananAplikasi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Sehubungan dengan penyebutan jenis-jenis layanan yang telah
							disebutkan dalam klausula j pada bagian Ketentuan Umum dalam
							Syarat dan Ketentuan ini bahwa terdapat layanan Meditasi dan Lelap
							serta Konseling, maka akan dijabarkan sebagai berikut:
						</p>
						<ol className="px-5" type="I">
							<li className="font-weight-bold">
								Meditasi dan Lelap
								<br />
								<p className="font-weight-normal">
									Layanan Meditasi dan Lelap merupakan layanan berupa konten
									yang tersedia secara online untuk membantu Anda dalam
									melakukan meditasi dan membantu tidur lebih nyenyak. Konten
									yang tersedia dalam layanan ini berupa audio yang terdiri dari
									suara, musik, dan/atau ambience yang dirancang sedemikian
									rupa. Kami memegang hak atas kekayaan intelektual dari seluruh
									konten dalam layanan ini. Dalam layanan ini, Anda dapat
									memilih topik meditasi atau lelap sesuai yang Anda inginkan.
								</p>
							</li>
							<li className="font-weight-bold">
								Konseling
								<br />
								<p className="font-weight-normal">
									Layanan Konseling merupakan layanan online yang menghubungkan
									Anda sebagai Pengguna kepada Expert Reliever. Anda dan Expert
									Reliever dapat berkonsultasi dan berkomunikasi secara langsung
									melalui Aplikasi Android. Untuk pengguna iOS, dapat
									berkomunikasi dan berkonsultasi dengan Expert Reliever melalui
									Line@ Kami. Dalam layanan ini, anda dapat mengunggah dan
									mengirimkan konten apapun yang ingin anda bicarakan kepada
									Reliever sepanjang tidak melanggar Syarat dan Ketentuan Kami
									dan/atau peraturan perundang-undangan yang berlaku. Hubungan
									konseling yang dilakukan hanyalah sebatas antara pengguna dan
									Expert Reliever dengan tujuan untuk melakukan sesi konseling.
									Anda akan mendapatkan umpan balik dari Expert Reliever serta
									mendapatkan rekomendasi terkait keluhan yang disampaikan.
								</p>
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseLaranganAplikasi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseLaranganAplikasi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Larangan Aplikasi</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseLaranganAplikasi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Pengguna dilarang untuk menggunakan layanan untuk tindakan lain
								yang tidak memiliki kaitan apapun akan permasalahan konseling
								ataupun meditasi.
							</li>
							<li className="mb-1">
								Pengguna tidak diperbolehkan untuk mendaftar lebih dari sekali
								dan mendaftar untuk orang lain, maupun mendaftar atas nama orang
								lain selain untuk diri mereka sendiri.
							</li>
							<li className="mb-1">
								Layanan konseling tidak diperuntukkan sebagai fasilitas tanya
								jawab, belajar, mengerjakan tugas, wawancara, biro jodoh,
								berkenalan, interview, peta, usul, permintaan, menggunakan
								Aplikasi sebagai media penyebaran iklan atau materi apapun yang
								tidak diinginkan oleh pihak ketiga, mengirimkan surat berantai,
								atau membuat skema piramida, serta mempublikasikan konten lebih
								dari sekali (spamming) dan hal lain di luar permasalahan
								psikologis.
							</li>
							<li className="mb-1">
								Apabila pengguna memanfaatkan layanan konseling tidak sesuai
								dengan tujuan layanan, maka Expert Reliever berhak untuk tidak
								merespon pengguna. Kami memiliki diskresi penuh untuk menentukan
								apakah tindakan pengguna telah sesuai dengan tujuan layanan dan
								memberikan penalti yang sesuai.
							</li>
							<li className="mb-1">
								Pengguna tidak boleh mengungkapkan informasi rahasia melalui
								Layanan, termasuk, tanpa batasan, informasi kartu debit atau
								informasi kartu kredit orang lain atau nomor identitas nasional,
								nomor telepon non-publik atau alamat email non-publik.
							</li>
							<li className="mb-1">
								Pengguna dilarang keras memfitnah, mengikuti, mengganggu,
								menyalahgunakan, melecehkan, mengancam, memberikan informasi
								yang salah, palsu, atau menyesatkan, mencemarkan, meniru,
								mengintimidasi atau tindakan lainnya termasuk untuk ajakan bunuh
								diri kepada pengguna lain di luar peruntukkan konseling masalah
								kepada Expert Reliever.
							</li>
							<li className="mb-1">
								Pengguna tidak boleh menggunakan Layanan untuk tujuan ilegal
								atau tidak sah yang melanggar hukum, putusan pengadilan,
								Yurisprudensi atau tindakan administratif yang mengikat secara
								hukum. Anda setuju untuk mematuhi semua hukum, peraturan dan
								ketentuan yang berlaku untuk penggunaan Layanan tersebut.
							</li>
							<li className="mb-1">
								Pengguna tidak boleh berpartisipasi dalam kegiatan yang
								melanggar hak kekayaan intelektual, seperti hak cipta, merek
								dagang dan hak paten, ketenaran, privasi, dan semua hak-hak lain
								dari Kami dan/atau pihak ketiga yang diberikan oleh
								undang-undang atau kontrak.
							</li>
							<li className="mb-1">
								Pengguna tidak dapat mengubah, memodifikasi, mengadaptasi atau
								mengubah Layanan atau mengubah, memodifikasi atau mengubah situs
								web lain sehingga dapat palsu menyiratkan bahwa hal ini terkait
								dengan Layanan atau Aplikasi.
							</li>
							<li className="mb-1">
								Pengguna dilarang mengakses API <em>private</em> dari Aplikasi
								dengan cara selain yang diizinkan oleh Kami.
							</li>
							<li className="mb-1">
								Pengguna tidak boleh mengganggu atau mengacaukan Layanan atau
								server atau jaringan yang terhubung dengan Layanan, termasuk
								dengan mengirimkan setiap <em>worm</em>, virus,
								<em>trojan horse</em>, atau teknologi pemrograman komputer lain,
								properti apa pun dari Pelanggan lain, Penyedia Layanan, dan
								pihak ketiga mana pun, termasuk pengguna lain di Aplikasi dan
								Layanan, termasuk tidak terbatas pada <em>spyware, malware</em>,
								menggunakan proxy yang menganonimkan, atau kode lainnya yang
								bersifat merusak atau mengganggu. Anda tidak dapat menyuntikkan
								konten atau kode atau mengubah atau mengganggu dengan cara
								apapun pada halaman Aplikasi maupun situs web Kami.
							</li>
							<li className="mb-1">
								Pengguna tidak dapat melakukan langkah-langkah teknis lainnya
								yang dengan sengaja mengakibatkan cacat dari Layanan; dengan
								demikian membuat pertanyaan yang tidak beralasan dan/atau klaim
								yang tidak sepantasnya seperti berulang kali mengajukan
								pertanyaan yang sama di luar kebutuhan, dan mengganggu operasi
								Kami.
							</li>
							<li className="mb-1">
								Pengguna tidak boleh melakukan kegiatan lain yang membantu atau
								mendorong aktivitas apapun yang disebutkan di atas atau kegiatan
								lain yang dianggap tidak pantas.
							</li>
							<li className="mb-1">
								Pengguna dilarang menolak secara tidak wajar terkait dengan
								informasi yang akan anda berikan kepada Kami untuk bekerjasama
								dalam penyelidikan yang dilakukan oleh Kami atau memberikan
								konfirmasi mengenai identitas Anda atau informasi lain yang
								diminta.
							</li>
							<li className="mb-1">
								Pengguna dilarang mengambil tindakan apa pun yang memaksakan
								beban berat yang tidak wajar atau tidak proporsional ke
								infrastruktur kami atau tindakan lain yang dapat mengakibatkan
								risiko atau masalah material untuk infrastruktur Kami.
							</li>
							<li className="mb-1">
								Pengguna dilarang untuk menyebarkan atau mempromosikan materi
								tidak senonoh, pornografi, atau menyinggung dan/atau materi lain
								yang bertentangan dengan kebijakan publik dan/atau hukum atau
								peraturan perundang-undangan yang berlaku
							</li>
							<li className="mb-1">
								Pengguna dilarang menggunakan Aplikasi, akun anda, atau Layanan
								untuk melakukan perbuatan yang mengakibatkan atau dapat
								mengakibatkan keluhan, perselisihan, penalti, tuntutan, denda,
								dan tanggung jawab lain kepada Kami, pihak ketiga, atau pengguna
								lain, termasuk melakukan perbuatan yang diakibatkan oleh
								perbuatan Anda atau kelalaian Anda, termasuk melakukan apapun
								yang dapat menyebabkan kami kehilangan layanan apapun dari
								penyedia layanan internet, pemroses pembayaran, atau penyedia
								kami lainnya
							</li>
							<li className="mb-1">
								Apabila kami memiliki alasan kuat atas dugaan adanya perbuatan
								yang terbukti memenuhi unsur-unsur ketentuan tersebut di atas,
								maka kami dapat, tanpa pemberitahuan dan/atau tanggung jawab
								terhadap Anda, melakukan tindakan sebagai berikut:
								<ul style={{ listStyleType: "disc" }}>
									<li>
										Melaporkan aktivitas mencurigakan atau ilegal apa pun ke
										otoritas yang relevan
									</li>
									<li>
										Membatalkan atau menolak transaksi dalam bentuk apapun
									</li>
									<li>Menangguhkan (suspending) atau menutup akun Anda</li>
									<li>
										Menerapkan kebijaksanaan tunggal kami dalam rangka prosedur
										pencegahan dan deteksi serta menolak pelaksanaan transaksi
										jika kami mengetahui adanya dasar untuk menduga bahwa akun
										Anda digunakan atau mungkin digunakan untuk tujuan yang
										ilegal, tidak sah, atau penipuan; atau
									</li>
									<li>
										Mengambil langkah lebih lanjut sesuai yang dianggap perlu
										oleh Kami, sesuai kebijaksanaan tunggal kami, termasuk
										mengambil langkah hukum terhadap Anda dan akun Anda
									</li>
								</ul>
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePembayaran"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePembayaran"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Pembayaran</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapsePembayaran"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Agar dapat mengakses layanan secara lengkap, Anda perlu
								berlangganan pada paket layanan. Dengan berlangganan, berarti
								bahwa Anda bersedia untuk melakukan pembayaran.
							</li>
							<li className="mb-1">
								Anda memahami dan menyetujui bahwa Kami dapat mengubah atau
								memperbarui biaya paket layanan dari waktu ke waktu.
							</li>
							<li className="mb-1">
								Metode pembayaran yang tersedia pada Aplikasi yaitu Transfer
								Bank dan GO-PAY.
							</li>
							<li className="mb-1">
								Apabila Anda mengalami masalah pada pembayaran, Anda dapat
								mengajukan keluhan mengenai pembayaran kepada Kami.
							</li>
							<li className="mb-1">
								Anda menyetujui dan memahami bahwa batas waktu pengajuan keluhan
								maksimal 7 (tujuh) hari kalender setelah pembayaran selesai.
							</li>
							<li className="mb-1">
								Anda menyetujui bahwa apabila anda mengajukan keluhan mengenai
								pembayaran Anda setelah 7 (tujuh) hari kalender setelah
								pembayaran selesai, Kami tidak dapat bertanggung jawab atas
								keluhan tersebut.
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseKetentuanTransaksi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseKetentuanTransaksi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Ketentuan Transaksi</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseKetentuanTransaksi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="I">
							<li className="mb-2 font-weight-bold">
								Layanan Meditasi dan Lelap
								<br />
								<ol className="px-4 font-weight-normal" type="a">
									<li className="mb-1">
										Kami menyediakan 2 jenis konten pada meditasi dan lelap,
										yaitu reguler dan premium.
									</li>
									<li className="mb-1">
										Konten reguler dapat Anda akses secara gratis namun hanya
										terbatas pada konten tertentu. Kami dapat memberikan konten
										reguler ini untuk Anda terkait dengan penawaran promosi
										tertentu pada waktu tertentu.
									</li>
									<li className="mb-1">
										Untuk berlangganan pada konten premium, Anda akan dikenakan
										biaya sesuai dengan paket yang telah Anda pilih. Detail
										mengenai paket dan biayanya dapat anda lihat pada situs web
										atau Aplikasi Kami.
									</li>
									<li className="mb-1">
										Tidak ada pengembalian uang atau permintaan pembatalan
										transaksi setelah masa langganan berakhir.
									</li>
								</ol>
							</li>
							<li className="mb-2 font-weight-bold">
								Layanan Konseling
								<ol className="px-4 font-weight-normal" type="a">
									<li className="mb-1">
										Anda dapat melakukan konseling dengan Expert Reliever
										melalui text ataupun call. Konseling melalui text berarti
										Anda dan Expert Reliever melakukan percakapan dengan
										mengirim pesan secara tertulis (chat). Konseling melalui
										call berarti Anda dan Expert Reliever melakukan percakapan
										dengan berbicara melalui telepon.
									</li>
									<li className="mb-1">
										Aktivitas konseling dihitung berdasarkan sesi. 1 kali sesi
										konseling berdurasi 1 jam dari percakapan dimulai hingga
										percakapan diakhiri, baik oleh anda ataupun Expert Reliever.
									</li>
									<li className="mb-1">
										Anda akan dikenakan biaya sesuai dengan paket konseling yang
										telah Anda pilih. Detail mengenai paket konseling dan
										biayanya dapat anda lihat pada situs web atau Aplikasi Kami.
									</li>
									<li className="mb-1">
										Anda memahami bahwa setelah pembayaran Anda terkonfirmasi,
										Expert Reliever akan menghubungi Anda dalam 1x24 jam.
									</li>
									<li className="mb-1">
										Anda wajib memberikan informasi yang benar dan akurat
										mengenai kondisi yang sedang dialami dan menjawab semua
										pertanyaan yang berhubungan dengan itu jujur ​​dan utuh.
									</li>
									<li className="mb-1">
										Sebelum mengambil kesimpulan, Anda harus membaca dengan
										seksama, setiap pesan konseling.
									</li>
									<li className="mb-1">
										Setelah sesi konseling, Anda perlu mengisi form feedback
										yang diberikan oleh Expert Reliever.
									</li>
									<li className="mb-1">
										Tidak ada pengembalian uang atau permintaan pembatalan
										transaksi setelah sesi konseling berakhir atau selesai
										dilakukan.
									</li>
									<li className="mb-1">
										Untuk beberapa gangguan psikologi yang memerlukan tatap muka
										secara langsung dan/atau memerlukan diagnosis dari psikolog,
										Expert Reliever dapat memberikan rujukan sebagai referensi
										Anda. Kami tidak bertanggung jawab atas keakuratan detail
										mengenai nama, lokasi praktek, pengalaman, hasil konsultasi
										dengan psikolog yang direkomendasikan.
									</li>
								</ol>
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseKetentuanKuponPromosi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseKetentuanKuponPromosi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Ketentuan Kupon Promosi</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseKetentuanKuponPromosi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Kami dapat memberikan program promosi kepada Anda berupa kupon
								potongan untuk setiap pembelian dengan jumlah nominal tertentu
								dan/atau pada waktu yang tertentu. Apabila dalam kondisi
								tertentu kupon potongan tersebut tidak dapat digunakan karena
								produk yang dipesan tidak tersedia baik sebagian maupun
								seluruhnya maka Kami akan memberikan kupon pengganti kepada Anda
								yang dapat Anda digunakan pada transaksi berikutnya.
							</li>
							<li className="mb-1">
								Kami berhak, tanpa pemberitahuan sebelumnya, membatalkan
								penggunaan kupon oleh Anda jika ditemukan indikasi kecurangan
								atau pelanggaran yang dilakukan oleh Anda atas Syarat dan
								Ketentuan ini dan ketentuan hukum yang berlaku di wilayah negara
								Indonesia. Atas pembatalan tersebut, Kami tidak akan memberikan
								ganti rugi dalam bentuk apa pun.
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseHakKekayaanIntelektual"
						role="button"
						aria-expanded="true"
						aria-controls="collapseHakKekayaanIntelektual"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Hak Kekayaan Intelektual</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseHakKekayaanIntelektual"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami memberikan Pengguna hak yang tidak dapat dipindahtangankan,
							hak lisensi tidak berulang, lisensi non-eksklusif untuk
							menggunakan konten yang disediakan hanya untuk tujuan menggunakan
							Layanan. Kami akan tetap menjadi pemegang semua hak kekayaan
							intelektual serta semua hak lainnya dalam konten yang dapat
							digunakan Pengguna, dan hak tersebut tidak akan ditransfer ke
							Pengguna. Pengguna tidak akan menggunakan Konten di luar lingkup
							tujuan penggunaan dari Konten dalam Layanan (termasuk namun tidak
							terbatas pada menyalin, transmisi, reproduksi, modifikasi). Jika
							Pengguna ingin mem-backup seluruh atau sebagian dari isi Konten
							yang Dikirim, mereka akan perlu melakukannya sendiri. Kami tidak
							akan melakukan back up salah satu Isi Konten yang Dikirim.
						</p>
						<p className="paragraph-riliv">
							Seluruh hak atas kekayaan intelektual yang terdapat dalam Aplikasi
							berdasarkan hukum negara Republik Indonesia, termasuk dalam hal
							ini adalah kepemilikan hak kekayaan intelektual atas seluruh
							konten termasuk audio meditasi dan lelap, source code Aplikasi,
							dan hak kekayaan intelektual terkait Aplikasi. Untuk itu, Anda
							dilarang untuk melakukan pelanggaran atas hak kekayaan intelektual
							yang terdapat pada Aplikasi ini, termasuk melakukan modifikasi,
							karya turunan, mengadaptasi, menduplikasi, menyalin, menjual,
							membuat ulang, meretas, menjual, dan/atau mengeksploitasi Aplikasi
							termasuk penggunaan Aplikasi atas akses yang tidak sah,
							meluncurkan program otomatis atau script, atau segala program
							apapun yang mungkin menghambat operasi dan/atau kinerja Aplikasi,
							atau dengan cara apapun memperbanyak atau menghindari struktur
							navigasi atau presentasi dari Aplikasi atau isinya. Kami memiliki
							hak sepenuhnya untuk melakukan tindakan hukum terhadap setiap
							pelanggaran yang dilakukan oleh Anda terkait dengan hak kekayaan
							intelektual terkait Aplikasi.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseUpayaPengamanan"
						role="button"
						aria-expanded="true"
						aria-controls="collapseUpayaPengamanan"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Upaya Pengamanan</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseUpayaPengamanan"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami berkomitmen untuk memastikan bahwa informasi yang Anda
							berikan kepada Kami aman dan tidak dapat digunakan oleh pihak lain
							yang tidak dapat dipertanggungjawabkan. Dengan menggunakan
							Aplikasi, Anda mengizinkan Kami untuk melakukan segala tindakan
							yang Kami anggap perlu untuk melindungi informasi Anda yang Kami
							kumpulkan secara online untuk mencegah akses yang terbukti tidak
							sah. Namun demikian, mohon diperhatikan bahwa Kami tidak dapat
							menjamin sepenuhnya keamanan tersebut dan tidak bertanggung jawab
							atas setiap kerugian, termasuk namun tidak terbatas atas
							kehilangan data yang terjadi dari insiden di luar kendali Kami.
							Oleh karena itu, Kami sangat menyarankan agar Anda selalu
							memperbarui Aplikasi serta tidak mengungkapkan kata sandi anda
							kepada pihak manapun
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseMitraBisnis"
						role="button"
						aria-expanded="true"
						aria-controls="collapseMitraBisnis"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Mitra Bisnis (Pihak Ketiga)
							</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseMitraBisnis"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Para mitra bisnis menanggung semua tanggung jawab mengenai isi
							dan/atau jasa tersebut ditawarkan. Selanjutnya, isi dan layanan
							tersebut dapat diatur oleh ketentuan eksplisit dan kondisi lain
							yang ditetapkan sesuai dengan mitra bisnis. Kami memiliki hak
							untuk menyetujui, menolak atau menghentikan iklan atau konten atau
							layanan lain dari aplikasi kami yang bersifat negatif atau
							bertentangan dengan filosofi kami.
						</p>
						<p className="paragraph-riliv">
							KORESPONDENSI DAN BISNIS ANDA TRANSAKSI DENGAN PIHAK KETIGA
							MELALUI LAYANAN ADALAH HANYA ANTARA ANDA DAN PIHAK KETIGA.
						</p>
						<p className="paragraph-riliv">
							Anda dapat memilih, atas kebijakan Anda sendiri secara mutlak dan
							menanggung risiko, untuk menggunakan aplikasi yang menghubungkan
							profil Anda pada layanan dengan layanan pihak ketiga dan pihak
							tersebut dapat berinteraksi dengan, terhubung ke atau mengumpulkan
							dan / atau menarik informasi dari dan profil Anda.
						</p>
						<p className="paragraph-riliv">
							Dengan menggunakan layanan pihak ketiga seperti, Anda mengakui dan
							menyetujui hal-hal berikut:
						</p>
						<ol className="px-5" type="I">
							<li className="mb-1">
								Jika Anda membagikan informasi tentang Anda pada kami, Anda
								menyetujui bahwa informasi tentang profil Anda akan dibagikan
								pada pihak ketiga;
							</li>
							<li className="mb-1">
								Penggunaan layanan pihak ketiga dapat menyebabkan informasi
								identitas pribadi diungkapkan kepada publik dan / atau
								berhubungan dengan Anda, bahkan saat Kami tidak memberikan
								informasi tersebut; dan
							</li>
							<li className="mb-1">
								Penggunaan Aplikasi adalah pilihan Anda sendiri dan Anda
								bertanggung jawab atas risiko yang dapat terjadi, dan Anda
								menyetujui bahwa Kami tidak bertanggung jawab untuk kegiatan
								yang berkaitan dengan layanan pihak ketiga.
							</li>
							<li className="mb-1">
								Terdapat tautan-tautan ke situs-situs lain yang dioperasikan
								oleh pihak ketiga, termasuk tetapi tidak terbatas pada,
								situs-situs pihak ketiga yang mungkin menampilkan merek dagang
								Kami. Tautan-tautan ini tersedia untuk kemudahan Anda dan hanya
								digunakan untuk memberikan akses ke situs-situs pihak ketiga ini
								dan tidak untuk tujuan lain.
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseTanggungJawabPengguna"
						role="button"
						aria-expanded="true"
						aria-controls="collapseTanggungJawabPengguna"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Tanggung Jawab Pengguna</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseTanggungJawabPengguna"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami mensyaratkan penggunanya sebagai pengguna aplikasi Riliv,
							pengguna wajib dan akan menanggung seluruh tanggung jawab atas
							tindakan yang dilakukan dan hasil mereka pada layanan ini. Oleh
							karena itu, dalam mengunduh dan menggunakan Aplikasi, maka
							dibutuhkan kecakapan pengguna sebagai subjek hukum Indonesia
							sesuai dengan ketentuan peraturan perundang-undangan. Apabila
							setiap Pengguna yang diketahui dan terbukti secara sah dan secara
							hukum dapat dibuktikan melalui putusan Pengadilan Negeri setempat
							berada di bawah pengampuan, maka anda perlu bimbingan saudara
							kandung Anda dalam mengoperasikan Layanan Kami.
						</p>
						<p className="paragraph-riliv">
							Kami akan mengambil langkah yang sesuai apabila pengguna
							menggunakan layanan ini dengan cara yang melanggar Syarat dan
							Ketentuan. Namun, Kami tidak dapat bertanggung jawab untuk
							pemulihan dari pelanggaran tersebut terhadap Pengguna atau orang
							lain. Kerugian atau kerusakan yang diderita atau biaya yang
							disebabkan oleh pelanggaran Syarat dan ketentuan baik secara
							langsung atau tidak langsung, wajib untuk dikompensasi oleh
							pengguna kepada Kami atas permintaan.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseDisclaimers"
						role="button"
						aria-expanded="true"
						aria-controls="collapseDisclaimers"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Disclaimers</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseDisclaimers"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-3 font-weight-bold" type="I">
							<li className="mb-1">
								Disclaimer Tanggung Jawab Medis
								<br />
								<br />
								<p className="paragraph-riliv font-weight-normal">
									Kami tidak menawarkan atau memberikan terapi, hypnosis
									termasuk diagnosa atau layanan medis lainnya dalam bentuk
									apapun. Posisi kami hanyalah sebatas sebagai pihak perantara
									yang menyediakan jasa atau layanan atau aplikasi yang menjadi
									fasilitas untuk pengguna dalam menangani kesehatan mental,
									yakni penghubung antara pengguna dan expert reliever serta
									menyediakan konten untuk membantu meditasi dan tidur lebih
									nyenyak.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Aplikasi ini tidak dimaksudkan untuk memberikan diagnosis,
									termasuk informasi mengenai obat atau perawatan untuk anda.
									rekomendasi yang anda dapatkan melalui konseling hanya
									bertujuan sebagai informasi semata dan bukan ditujukan untuk
									menjadi pengganti rekomendasi medis, diagnosis, terapi,
									perawatan atau layanan medis lainnya. anda tidak harus
									bertindak berdasarkan informasi ini tanpa mencari rekomendasi
									medis professional. anda tetap disarankan untuk waspada dan
									memahami secara penuh konseling anda.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Kami tidak bertanggung jawab atas setiap tindakan, kelalaian
									atau informasi dari expert reliever. kami tidak membuat
									pernyataan atau jaminan apapun mengenai ketersediaan atau
									kemampuan atau kapabilitas medis dari expert reliever untuk
									melakukan konseling. kami tidak membuat pernyataan atau
									jaminan apapun bahwa anda akan mendapatkan informasi yang
									membantu.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Dalam kaitannya dengan layanan meditasi dan lelap, meskipun
									terdapat bukti pihak ketiga dari penelitian bahwa hal tersebut
									dapat membantu dalam proses pencegahan dan pemulihan untuk
									beragam kondisi serta dalam meningkatkan beberapa masalah
									kinerja dan hubungan, Kami tidak membuat klaim, pernyataan
									atau jaminan bahwa layanan meditasi dan lelap dapat memberikan
									manfaat terapis.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Jika Anda berpikir untuk melakukan perbuatan bunuh diri atau
									mempertimbangkan untuk mengambil tindakan yang dapat
									membahayakan diri Anda atau orang lain, atau jika Anda merasa
									bahwa orang lain mungkin dalam bahaya, atau jika Anda memiliki
									keadaan medis darurat, Anda harus segera menghubungi nomor
									layanan darurat dan memberitahukan otoritas terkait
									sebagaimana kami informasikan dalam layanan kami.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									ANDA MENGAKUI, MENGKONFIRMASI DAN SEPAKAT BAHWA APLIKASI INI
									TIDAK DIRANCANG UNTUK DIGUNAKAN DALAM KASUS DIAGNOSIS GANGGUAN
									PSIKOLOGIS YANG AKUT.
								</p>
							</li>
							<li className="mb-1">
								Disclaimer Konseling dengan Expert Reliever
								<br />
								<br />
								<p className="paragraph-riliv font-weight-normal">
									ANDA SETUJU, MENGKONFIRMASI DAN MENGAKUI BAHWA ANDA MENYADARI
									SECARA PENUH BAHWA KONSELING DENGAN EXPERT RELIEVER BUKANLAH
									PENGGANTI SESI TATAP MUKA LENGKAP OLEH PROFESIONAL. ANDA TIDAK
									DAPAT MENGANDALKAN ATAU MEMBUAT KEPUTUSAN KESEHATAN ATAU
									KESEJAHTERAAN MURNI PADA KONSELING MELALUI APLIKASI INI. ANDA
									DISARANKAN UNTUK TIDAK PERNAH MENGABAIKAN, MENGHINDARI, ATAU
									TERLAMBAT DALAM MEMPEROLEH PEMERIKSAAN LENGKAP DARI PSIKOLOG
									PROFESIONAL.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Expert Reliever telah berkomitmen untuk memberikan upaya
									maksimal dalam memberikan rekomendasi pada permasalahan dan
									melindungi informasi pribadi Anda. Kami melakukan penelitian
									dan verifikasi dokumen terhadap Expert Reliever untuk
									memastikan kualifikasinya. Namun kami tidak dapat menjamin
									verifikasi lisensi medis, kredensial, kompetensi atau latar
									belakang dari setiap Expert Reliever.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Ketika Anda melakukan konseling dengan Expert Reliever, maka
									hubungan Anda hanyalah sebatas pengguna dengan penyedia
									layanan konseling. Expert Reliever memiliki lisensi dan
									kualifikasi mereka sendiri dan menyatakan keahlian mereka
									sendiri dalam bidang yang mereka pilih. Kami tidak terlibat
									dalam hal apapun dengan konten dari hubungan atau bagian dari
									Expert Reliever dan kami tidak memvalidasi atau terlibat dalam
									hal tersebut. Seluruh unggahan dan konten yang dikirim oleh
									Expert Reliever merupakan bentuk assessment terhadap gangguan
									psikologis yang dialami, bukan untuk dijadikan rujukan dalam
									mendiagnosa gangguan psikologis Anda.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Ketepatan serta keakuratan Expert Reliever dalam memberikan
									rekomendasi psikologisnya akan bergantung pada informasi yang
									diberikan oleh Anda. Kami tidak bertanggung jawab atas setiap
									isi dan/atau pernyataan-pernyataan dalam percakapan yang
									dilakukan oleh Anda dengan Dokter menggunakan fitur video
									call, voice call, serta chat yang diunggah pada Aplikasi, hal
									tersebut ialah percakapan dan interaksi pribadi antara Anda
									dengan Expert Reliever dan jelas di luar kendali kami, maka
									apabila di kemudian hari muncul permasalahan hukum mengenai
									isi dan/atau pernyataan-pernyataan dari percakapan dan
									interaksi antara Anda dengan Expert Reliever dalam fitur-fitur
									tersebut, sepenuhnya menjadi tanggung jawab Anda dan Anda
									membebaskan Kami dari segala tuntutan, dakwaan dan akibat
									hukum yang ada.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Dalam penggunaan fitur Konseling pada Aplikasi, Anda memahami
									bahwa Aplikasi hanya merupakan sarana untuk memudahkan
									pencarian atas Layanan, yang bertujuan untuk memberi
									kenyamanan dan kemudahan kepada Anda dalam berinteraksi dengan
									Expert Reliever. Setiap isi dan/atau pernyataan-pernyataan
									dalam percakapan yang dilakukan oleh Anda dengan Expert
									Reliever dalam setiap sesi Konseling, hal tersebut merupakan
									percakapan pribadi antara Anda dengan Expert Reliever dan hal
									tersebut berada di luar kuasa kendali kami, maka apabila di
									kemudian hari muncul permasalahan hukum mengenai isi dan/atau
									pernyataan-pernyataan dari percakapan antara Anda dengan
									Expert Reliever dalam fitur Konseling tersebut, sepenuhnya
									menjadi tanggung jawab Anda dan Anda membebaskan Kami dari
									segala tuntutan, dakwaan dan akibat hukum yang ada.
								</p>
								<p className="paragraph-riliv font-weight-normal">
									Layanan ini tidak digunakan dalam kondisi darurat, termasuk
									pada penanganan kondisi psikolgis apapun yang dialami oleh
									pengguna yang memerlukan pemeriksaan langsung yang dilakukan
									oleh Psikolog. Layanan ini tidak akan digunakan untuk
									memperoleh dispensasi pengobatan dari dokter (psikiater) dalam
									bentuk apa pun
								</p>
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePembatasanTanggungJawab"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePembatasanTanggungJawab"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Pembatasan Tanggung Jawab</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapsePembatasanTanggungJawab"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Pelanggaran Syarat dan Ketentuan dapat mengakibatkan penghentian
								akun Anda pada Aplikasi. Anda mengerti dan setuju bahwa Kami
								tidak dapat dan tidak akan bertanggung jawab atas konten yang
								dipasang pada Layanan dan Anda menggunakan Layanan dengan resiko
								Anda sendiri. Jika Anda melanggar Syarat Penggunaan, atau
								membuat risiko atau membuat cacat hukum untuk Kami, kami dapat
								berhenti memberikan semua atau hanya sebagian dari Layanan untuk
								Anda.
							</li>
							<li className="mb-1">
								Kami tidak bertanggung jawab atas cedera, kematian, kerusakan
								atau kerugian langsung maupun tidak langsung, materiil maupun
								immateriil yang disebabkan oleh interaksi antara para Penyedia
								Layanan dengan Anda melalui Aplikasi. Kami juga tidak
								bertanggung jawab atas kesalahan atau tindakan apapun yang
								dilakukan oleh para Penyedia Layanan selama pelaksanaan Layanan
								yang secara langsung atau tidak langsung berhubungan dengan:
								<br />
								<ul className="px-3" style={{ listStyleType: "disc" }}>
									<li>layanan</li>
									<li>konten;</li>
									<li>konten pengguna;</li>
									<li>
										penggunaan, ketidakmampuan untuk menggunakan, atau kinerja
										layanan;
									</li>
									<li>
										tindakan yang diambil sehubungan dengan penyelidikan oleh
										Kami atau penegak hukum berwenang tentang Anda atau
										penggunaan pihak lain dari layanan;
									</li>
									<li>
										tindakan yang diambil sehubungan dengan hak cipta atau
										pemilik properti intelektual lainnya;
									</li>
									<li>
										setiap kesalahan atau kelalaian dalam operasi layanan ini;
										atau
									</li>
									<li>
										kerusakan pada komputer setiap pengguna, perangkat mobile,
										atau peralatan lain atau teknologi termasuk, tanpa batasan,
										kerusakan dari setiap pelanggaran keamanan atau dari virus
										apapun, bug, gangguan, penipuan, kesalahan, kelalaian,
										gangguan, cacat, penundaan pengoperasian atau transmisi,
										garis komputer atau kegagalan jaringan atau kerusakan teknis
										atau lainnya, termasuk, tanpa batasan, ganti rugi atas
										kehilangan keuntungan, kehilangan goodwill, kehilangan data,
										penghentian kerja, keakuratan hasil, atau kegagalan komputer
										atau kerusakan, bahkan jika mendatang atau bahkan jika Kami
										telah diberitahukan atau seharusnya tahu dari kemungkinan
										kerusakan tersebut, baik dalam tindakan kontrak, kelalaian,
										kewajiban yang ketat atau gugatan (termasuk, tanpa batasan,
										baik yang disebabkan secara keseluruhan atau sebagian oleh
										kelalaian, force majeure, kegagalan telekomunikasi, atau
										pencurian atau perusakan layanan).
									</li>
								</ul>
							</li>
							<li className="mb-1">
								Dengan mengakses layanan ini, Anda memahami bahwa Anda akan
								membebaskan hak yang berhubungan dengan klaim baik yang tidak
								diketahui atau tak terduga, dan sesuai dengan pengabaian
								tersebut, Anda mengakui bahwa Anda telah membaca dan memahami,
								dan dengan ini secara tegas melepaskan kami dari tanggung jawab.
							</li>
							<li className="mb-1">
								Kami tidak akan bertanggung jawab kepada Anda atas kerugian atau
								kerusakan apapun (termasuk, tanpa batasan, untuk setiap kerugian
								langsung, tidak langsung, ekonomi, teladan, khusus, menghukum,
								insidental atau konsekuensial atau kerusakan).
							</li>
							<li className="mb-1">
								Anda setuju bahwa dalam hal Anda dikenakan kerusakan, kerugian
								atau cedera yang timbul dari Aplikasi atau kelalaian, kerusakan,
								jika ada, menyebabkan hal yang tidak dapat diperbaiki atau tidak
								cukup, tidak akan memberikan Anda hak untuk mengeksploitasi
								situs web, layanan, properti, produk atau konten lainnya yang
								dimiliki atau dikendalikan oleh pihak Kami, dan Anda tidak akan
								memiliki hak untuk melarang atau menahan pengembangan, produksi,
								distribusi, iklan, pameran atau eksploitasi situs web, properti,
								produk, layanan, atau konten lainnya yang dimiliki atau
								dikendalikan oleh Kami.
							</li>
							<li className="mb-1">
								Kami tidak bertanggung jawab atas tindakan, isi, informasi, atau
								data pihak ketiga, dan Anda melepaskan kami dari segala tuntutan
								dan kerusakan, yang diketahui dan tidak diketahui, yang timbul
								dari atau dengan cara apapun yang terhubung dengan klaim Anda
								memiliki terhadap pihak ketiga tersebut.
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePenolakanJaminan"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePenolakanJaminan"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Penolakan Jaminan</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapsePenolakanJaminan"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv px-2">
							Kami tidak secara tersurat maupun tersirat menjamin bahwa Layanan
							(termasuk konten) bebas dari de facto atau cacat hukum (termasuk
							namun tidak terbatas pada stabilitas, keandalan, akurasi,
							integritas, efektivitas, kesesuaian untuk tujuan tertentu,
							kesalahan yang berhubungan dengan keamanan, kesalahan , bug, atau
							pelanggaran hak). Selain itu, Kami tidak mewakili atau menjamin
							bahwa kerusakan tersebut akan diperbaiki. Kami juga tidak menjamin
							bahwa setiap konten atau informasi pada layanan tersebut akurat,
							lengkap atau berguna. Kami tidak bertanggung jawab untuk
							menyediakan layanan tanpa cacat tersebut.
						</p>
						<p className="paragraph-riliv px-2">
							Anda mengakui bahwa penggunaan layanan merupakan sepenuhnya risiko
							Anda. Dengan mengakses atau menggunakan layanan, Anda mewakili dan
							menjamin bahwa kegiatan Anda mematuhi hukum di setiap yurisdiksi
							di mana Anda mengakses layanan. Kami tidak mendukung konten dan
							secara khusus melepaskan tanggung jawab atau kewajiban jaminan
							untuk setiap orang atau badan atas kerugian, kerusakan (aktual,
							konsekuensial, menghukum atau sebaliknya), cedera, klaim atau
							penyebab lain dari jenis atau karakter apapun berdasarkan atau
							yang dihasilkan dari konten apapun.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseGantiRugi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseGantiRugi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Ganti Rugi</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseGantiRugi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<ol className="px-2" type="a">
							<li className="mb-1">
								Kami dan/atau pemberi lisensi, afiliasi, dan masing-masing
								anggota, direktur, komisaris, karyawan, (dalam hal ini dapat
								disebut dengan “Penerima Ganti Rugi”) tidak akan bertanggung
								jawab kepada Anda atas kerugian, biaya, pengeluaran (termasuk
								biaya dan pengeluaran hukum), kerusakan, penalti, atau jumlah
								pembayaran apa pun atau bagaimana pun yang disebabkan seluruh
								tindakan, secara langsung atau tidak langsung, terkait:
								<ul className="px-3" style={{ listStyleType: "disc" }}>
									<li>
										Akses, penggunaan, dan/atau ketidakmampuan apa pun untuk
										menggunakan Aplikasi atau Layanan;
									</li>
									<li>
										ketergantungan terhadap data atau informasi apa pun yang
										tersedia melalui Aplikasi dan/atau Layanan;
									</li>
									<li>
										kegagalan, kesalahan, kelalaian, gangguan, penundaan sistem,
										server, atau koneksi apa pun dalam pengiriman, virus
										komputer atau kode, program agen atau macros yang berbahaya,
										menghancurkan, atau merusak lainnya; dan
									</li>
									<li>
										penggunaan apapun atas atau akses ke situs web atau halaman
										web lain apa pun yang tertaut ke Aplikasi; bahkan jika kami,
										atau karyawan kami mungkin sudah disarankan atau
										mengantisipasi kemungkinan yang sama.
									</li>
								</ul>
							</li>
							<li className="mb-1">
								Anda setuju untuk membela (atas permintaan Kami), untuk
								mengganti kerugian dan tidak menuntut Kami dari dan terhadap
								setiap klaim, kewajiban, kerusakan, kerugian, dan biaya,
								termasuk tanpa batasan, biaya pengacara dan biaya, yang timbul
								dari atau dengan cara apapun berhubungan dengan salah satu dari
								berikut:
								<ul className="px-3" style={{ listStyleType: "disc" }}>
									<li>Konten atau akses Anda ke atau penggunaan Layanan;</li>
									<li>
										pelanggaran atau dugaan pelanggaran Syarat dan Ketentuan
										ini;
									</li>
									<li>
										pelanggaran Anda terhadap pihak ketiga, termasuk tanpa
										batasan, hak kekayaan intelektual, publisitas, kerahasiaan,
										properti atau hak privasi;
									</li>
									<li>
										pelanggaran Anda terhadap undang-undang, aturan, peraturan,
										kode, undang-undang, peraturan atau perintah dari setiap
										pejabat pemerintah dan kuasi-pemerintah, termasuk, tanpa
										batasan, semua pihak berwenang, administratif dan
										legislatif; atau
									</li>
									<li>kesalahan lainnya yang Anda lakukan.</li>
								</ul>
							</li>
						</ol>
						<p className="paragraph-riliv">
							Anda akan bekerja sama seperti yang dipersyaratkan penuh oleh Kami
							dalam membela klaim. Kami memiliki hak untuk mempertahankan diri
							dan mengontrol setiap hal mengenai penggantian rugi oleh Anda, dan
							Anda tidak akan dalam hal apapun menyelesaikan klaim tanpa
							persetujuan tertulis dari Kami.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePenghentian"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePenghentian"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Penghentian</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapsePenghentian"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami berhak untuk mengubah atau menghentikan Layanan atau akses
							Anda ke Layanan untuk alasan apapun, tanpa pemberitahuan, setiap
							saat, dan tanpa kewajiban kepada Anda.
						</p>
						<ol className="px-2" type="a">
							<li className="mb-1">
								Anda dapat menonaktifkan akun Anda melalui menu deaktifasi akun
								di pengaturan. Apabila kami menghentikan akses Anda ke Layanan
								atau Anda menggunakan bentuk rinci untuk menonaktifkan akun
								Anda, maka seluruh data Anda akan hilang dan tidak lagi dapat
								diakses melalui akun Anda.
							</li>
							<li className="mb-1">
								Setelah pengakhiran, semua lisensi dan hak-hak lain yang
								diberikan kepada Anda dalam Syarat dan Ketentuan ini akan segera
								berhenti.
							</li>
							<li className="mb-1">
								Kami berhak, atas kebijakan kami, untuk mengubah Syarat dan
								Ketentuan
								<strong>("Pembaharuan Persyaratan")</strong> dari waktu ke
								waktu. Anda setuju bahwa kami mengirimkan pemberitahuan tentang
								Pembaharuan Persyaratan dengan unggahan di halaman depan Layanan
								atau melalui e-mail, dan bahwa penggunaan Layanan setelah
								tanggal efektif persyaratan diperbarui merupakan bukti
								perjanjian Anda mematuhi pembaruan Syarat dan Ketentuan kami.
								Oleh karena itu, Anda harus mengetahui Persyaratan Penggunaan
								dan Pembaruan Persyaratan sebelum menggunakan Layanan. Pembaruan
								Persyaratan akan efektif pada saat anda membuka Aplikasi.
								Pembaruan Syarat dan Ketentuan akan berlaku untuk penggunaan
								Layanan sejak saat itu.
							</li>
							<li className="mb-1">
								Kami berhak untuk menolak akses ke layanan kepada siapa pun
								untuk alasan apapun setiap saat selama hal tersebut terbukti
								melanggar Syarat dan Ketentuan.
							</li>
							<li className="mb-1">
								Kami berhak untuk memaksa penyitaan user apapun untuk alasan
								apapun apabila terbukti melanggar Syarat dan Ketentuan.
							</li>
							<li className="mb-1">
								Kami dapat, tapi tidak memiliki kewajiban untuk, menghapus,
								mengedit, blok, dan atau memonitor Konten dalam layanan sesuai
								dengan kondisi dan diskresi kami.
							</li>
							<li className="mb-1">
								Anda bertanggung jawab untuk interaksi Anda dengan pengguna lain
								dari Layanan, baik online atau offline. Anda setuju bahwa Kami
								tidak bertanggung jawab atas tindakan Anda.
							</li>
							<li className="mb-1">
								Anda setuju bahwa Anda bertanggung jawab untuk semua biaya data
								Anda dikenakan melalui penggunaan Layanan.
							</li>
							<li className="mb-1">
								Kami melarang crawling, scraping, caching atau mengakses konten
								apapun pada Layanan melalui cara ilegal yang melanggar Syarat
								dan Ketentuan kami.
							</li>
						</ol>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseHukumYuridiksi"
						role="button"
						aria-expanded="true"
						aria-controls="collapseHukumYuridiksi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Hukum dan Yuridiksi Pengadilan
							</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapseHukumYuridiksi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv px-2">
							Syarat dan Ketentuan ini diatur oleh hukum Indonesia. Jika ada
							ketentuan dari Syarat Penggunaan yang dianggap melanggar hukum,
							batal, atau untuk alasan apapun tidak dapat dilaksanakan oleh
							arbitrase (BANI) atau oleh pengadilan yang berwenang, maka
							ketentuan tersebut akan dianggap dapat dipisahkan dari Syarat dan
							Ketentuan ini dan tidak akan mempengaruhi keabsahan dan
							keberlakuan ketentuan yang tersisa. Sengketa yang timbul dari
							Layanan atau sengketa antara Pengguna dan Kami terkait dengan
							Layanan akan diatur di bawah yurisdiksi eksklusif pengadilan
							negeri Indonesia.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePenyelesaianSengketa"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePenyelesaianSengketa"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Penyelesaian Sengketa</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div
					className="collapse"
					id="collapsePenyelesaianSengketa"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv px-2">
							Anda menyetujui bahwa setiap sengketa atau klaim (termasuk klaim
							terhadap kerugian personal) sehubungan dengan penggunaan situs
							kami tunduk pada yurisdiksi eksklusif hukum Indonesia dan akan
							diadili sesuai dengan hukum Negara Indonesia. Perjanjian ini juga
							berlaku untuk setiap orang yang mengklaim atas nama anda.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePenutup"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePenutup"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Penutup</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
						<hr
							className="border-gray-1 m-0 p-0"
							style={{ borderWidth: "2px" }}
						/>
					</button>
				</p>

				<div className="collapse" id="collapsePenutup" data-parent="#accordion">
					<div className="card card-body border-0">
						<p className="paragraph-riliv px-2">
							Harap berhati-hati terhadap segala bentuk penipuan, pemerasan,
							pemalsuan identitas dan tindak kejahatan lain yang dilakukan oleh
							orang atau pihak yang mengatasnamakan Riliv atau PT. Riliv
							Psikologi Indonesia.
						</p>
					</div>
				</div>
			</div>
			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default KetentuanPage;

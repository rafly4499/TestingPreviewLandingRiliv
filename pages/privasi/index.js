import { Fragment } from "react";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import KonselingHeaderPage from "../../components/page/koseling/header-page/header-page.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";

const PrivasiPage = () => {
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
				currentPage="privasi"
				urlCTA="https://riliv.page.link/home2"
				textCTA="Coba Aplikasi Sekarang"
			/>

			<div
				className="container-fluid bg-riliv-level-1 py-5 bg-header"
				style={{
					backgroundImage: `url('./img-privasi/kebijakan-publik-header.svg')`,
				}}
			>
				<div className="container py-5 px-2">
					<br />
					<br />
					<h1 className="font-weight-bolder text-white text-center">
						KEBIJAKAN PRIVASI
					</h1>
					<br />
					<br />
				</div>
			</div>

			<div className="container py-5 px-lg-5 px-3 mt-3 mb-3">
				<p className="text-gray-5 paragraph-riliv">
					Kebijakan Privasi berikut ini menginformasikan mengenai hak privasi
					Anda mengenai informasi personal anda yang kami gunakan. Kami tidak
					menggunakan atau membagikan informasi Anda dengan pihak manapun
					terkecuali telah dijelaskan lebih lanjut dalam Kebijakan Privasi. Kami
					menggunakan Informasi Pribadi hanya untuk meningkatkan Layanan Riliv.
					Dengan mengunduh dan menggunakan aplikasi ini, Anda setuju atas
					koleksi dan penggunaan informasi sesuai dengan kebijakan ini dan
					setuju untuk terikat oleh ketentuan Syarat dan ketentuan kami.
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
						href="#collapsePengumpulanPenggunaanInformasi"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePengumpulanPenggunaanInformasi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Pengumpulan dan Penggunaan Informasi
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
					id="collapsePengumpulanPenggunaanInformasi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0  text-gray-5">
						<p className="paragraph-riliv">
							Dalam menggunakan layanan kami, kami akan meminta Anda untuk
							memberikan informasi pribadi tertentu yang dapat digunakan untuk
							menghubungi atau mengenali Anda, seperti alamat surat elektronik
							dan nomor telepon. Kami juga akan mengumpulkan data pribadi yang
							sensitif mengenai masalah kesehatan saat Anda menggunakan Layanan
							Riliv. Kami dapat melengkapi informasi yang Anda berikan dengan
							informasi lain yang kami peroleh dari hubungan dengan organisasi
							lain untuk tujuan kesehatan Anda.
						</p>
						<br />
						<p className="paragraph-riliv">
							Jenis Informasi pribadi yang kami kumpulkan hanyalah informasi
							yang berkaitan dengan kesehatan Anda seperti usia, riwayat medis
							dan informasi lain yang berkaitan. Kami tidak akan pernah meminta
							Identitas asli Anda dengan alasan apapun dan tidak akan
							mengumpulkan informasi data dari perangkat seluler Anda yang
							menyebabkan terbukanya Identitas Anda. Layanan Riliv dilakukan
							secara anonim sepenuhnya. Kami sangat menghargai dan menjaga
							kerahasiaan identitas asli Anda. Kami juga akan melindungi
							informasi pribadi Anda dan tidak akan memberikannya kepada pihak
							lain bahkan kepada Expert Reliever, tanpa persetujuan Anda.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePengumpulanPenggunaanKonten"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePengumpulanPenggunaanKonten"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Pengumpulan dan Penggunaan Konten
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
					id="collapsePengumpulanPenggunaanKonten"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Pada sesi konseling Anda dengan Expert Reliever, Anda memberikan
							Konten yang dikirim berupa informasi pribadi Anda dan menerima
							umpan balik dari Expert Reliever, yaitu Konten yang diterima,
							berupa informasi. Kami menjaga dan merahasiakan Konten yang
							dikirim dan Konten yang diterima, untuk memastikan kenyamanan sesi
							Konseling Anda. Segala tindakan mengenai Konten yang dikirim dan
							Konten yang diterima dengan tujuan untuk meningkatkan pelayanan
							kesehatan dan edukasi akan membutuhkan konsen Anda. Konten
							tersebut tidak akan kami berikan kepada pihak ketiga tanpa izin
							Anda.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePerangkatInformasiLogData"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePerangkatInformasiLogData"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Perangkat Informasi dan Log Data
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
					id="collapsePerangkatInformasiLogData"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami mengumpulkan identifikasi elektronik atau log data melalui
							perangkat mobile Anda setiap penggunaan Layanan kami. Informasi
							yang dikumpulkan termasuk informasi seperti Internet Protocol
							("IP") alamat, jenis OS, informasi browser yang termasuk jenis dan
							bahasa pengaturan, pengenal perangkat atau pengenal aplikasi
							mobile, halaman Layanan kami yang telah Anda kunjungi, waktu dan
							tanggal kunjungan Anda, waktu yang dihabiskan pada halaman
							tersebut dan statistik lainnya. Informasi ini diperlukan untuk
							mengoptimalkan layanan kami dan mencegah penggunaan informasi
							pribadi yang tidak sah atau penipuan atau penyalahgunaan Layanan.
							Informasi yang dikumpulkan akan disimpan pada Server Riliv dan
							hanya untuk penggunaan Riliv untuk tujuan yang dijelaskan dalam
							Kebijakan Privasi.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseCookies"
						role="button"
						aria-expanded="true"
						aria-controls="collapseCookies"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Cookies</h2>
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

				<div className="collapse" id="collapseCookies" data-parent="#accordion">
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Cookie adalah file dengan sejumlah data kecil, yang mungkin
							termasuk pengenal unik anonim. Kami menggunakan "cookies" untuk
							mengumpulkan informasi. Anda dapat menginstruksikan browser Anda
							untuk menolak semua cookie atau untuk menunjukkan bila ada cookie
							yang sedang dikirim. Riliv memanfaatkan cookie dan teknologi
							serupa untuk membantu kami menjaga sesi Anda ketika Anda
							menggunakan Layanan Riliv; untuk meningkatkan keamanan; untuk
							membantu memahami bagaimana Anda menggunakan Layanan kami dan
							meningkatkannya; untuk melacak Bahasa Pengguna dan pengunaan
							Google Analytics ketika Anda mengakses aplikasi; Cookies tidak
							memungkinkan Riliv untuk mendapatkan akses ke informasi lain di
							dalam perangkat Anda maupun menyimpan cookie dalam aplikasi Anda.
							Dengan terus menggunakan Riliv, Anda setuju untuk kami menggunakan
							cookies dan teknologi serupa sesuai dengan Kebijakan Privasi ini.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePenyediaJasa"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePenyediaJasa"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Penyedia Jasa</h2>
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
					id="collapsePenyediaJasa"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Untuk memfasilitasi dan menyediakan Anda dengan Layanan kami,
							Riliv dapat menggunakan penyedia layanan pihak ketiga, untuk,
							untuk memberikan layanan atas nama kami, untuk melakukan layanan
							Service-terkait atau untuk membantu kami dalam menganalisis
							bagaimana Layanan kami digunakan. Kami selektif memilih penyedia
							layanan mitra, dan secara konsisten melakukan evaluasi terhadap
							penerapan yang tepat, administrasi informasi aman dan sistem
							kontrol organisasi. Mereka diwajibkan untuk mematuhi hukum dan
							peraturan yang berlaku. Informasi pribadi yang dapat diakses hanya
							terbatas untuk jumlah yang diperlukan.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseKeamanan"
						role="button"
						aria-expanded="true"
						aria-controls="collapseKeamanan"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Keamanan</h2>
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
					id="collapseKeamanan"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami selalu menjaga dengan erat Informasi Pribadi Anda. Keamanan
							Informasi Pribadi Anda sangatlah penting, namun patut diperhatikan
							bahwa tidak ada metode transmisi elektronik melalui Internet, atau
							metode penyimpanan data adalah 100% aman. Walaupun kami bertujuan
							untuk menggunakan cara-cara yang dapat legal dan etis untuk
							melindungi informasi pribadi Anda, kami tidak dapat menjamin
							keamanan mutlak. Untuk membantu melindungi privasi dan kerahasiaan
							informasi Anda, kami juga meminta kerjasama Anda. Setiap informasi
							pribadi yang sengaja Anda ungkapkan maka Anda bertanggung jawab
							penuh atas hal tersebut. Apabila hal Anda mencurigai adanya
							penyalahgunaan account Anda atau pelanggaran keamanan lainnya,
							Anda dapat memberitahukan kami.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseTautanSitusLain"
						role="button"
						aria-expanded="true"
						aria-controls="collapseTautanSitusLain"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Tautan Untuk Situs Lain</h2>
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
					id="collapseTautanSitusLain"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Layanan kami dapat memuat link ke situs lain yang tidak
							dioperasikan oleh kami. Jika Anda dengan sengaja mengklik link
							pihak ketiga, Anda akan diarahkan ke situs pihak ketiga. Kami
							sangat menyarankan Anda untuk meninjau Kebijakan Privasi setiap
							situs yang Anda kunjungi. Riliv tidak memiliki kontrol atas, dan
							tidak bertanggung jawab atas isi, kebijakan privasi atau praktek
							dari situs pihak ketiga atau jasa.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapsePerubahanKebijakanPrivasi"
						role="button"
						aria-expanded="true"
						aria-controls="collapsePerubahanKebijakanPrivasi"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">
								Perubahan Kebijakan Privasi
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
					id="collapsePerubahanKebijakanPrivasi"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Kami dapat mengubah Kebijakan Privasi sewaktu-waktu karena
							berbagai alasan, termasuk untuk meningkatkannya, untuk
							mencerminkan perubahan Layanan kami, dan untuk mematuhi hukum yang
							berlaku. Kami akan memberitahu Anda tentang perubahan melalui
							Layanan kami. Perubahan terhadap Kebijakan Privasi ini efektif
							ketika dimuat di halaman ini. Kami menyarankan Anda untuk meninjau
							perubahan Kebijakan Privasi kami dengan hati-hati. Jika Anda
							setuju dengan perubahan, maka Anda dapat terus menggunakan Layanan
							kami. Sebaliknya jika Anda tidak setuju dengan perubahan layanan
							kami dan Anda tidak ingin menggunakan Layanan kami, maka Anda
							bebas untuk berhenti menggunakan Riliv. Apabila Anda tetap
							menggunakan Layanan kami setelah perubahan Kebijakan Privasi, maka
							Anda menyatakan setuju dan menerima perubahan Kebijakan Privasi.
						</p>
					</div>
				</div>

				<p>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href="#collapseHubungiKami"
						role="button"
						aria-expanded="true"
						aria-controls="collapseHubungiKami"
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h4 font-weight-bold">Hubungi Kami</h2>
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
					id="collapseHubungiKami"
					data-parent="#accordion"
				>
					<div className="card card-body border-0">
						<p className="paragraph-riliv">
							Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini,
							silahkan hubungi kami info@riliv.co atau Anda dapat menghubungi
							hotline Riliv di nomor telepon +62 882 3583 2600
						</p>
					</div>
				</div>
			</div>

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default PrivasiPage;

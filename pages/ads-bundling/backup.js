import { useRouter } from "next/router";
import BodyContainer from "../../components/body-container/body-container.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import CardKenapaSection from "../../components/page/homepage/card-kenapa-section/card-kenapa-section.component";
import HeaderRilivForCompany from "../../components/page/riliv-for-company/header-page/header-page.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import {
	ResponsiveText_H1,
	ResponsiveText_H2,
} from "../../components/responsive-text/responsive-text.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import CentangHijauList from "../../components/centang-hijau-list";
import AdsBundlingPriceBox from "../../components/page/ads-bundling/price-box";
import MediaImages from "../../components/media-images/media-images.component";
import AdsBundlingHeaderSetup from "../../components/page/ads-bundling/header-setup";
import AdsBundlingHeaderList from "../../components/page/ads-bundling/header-list";
import { AdsBundlingButton } from "../../components/page/ads-bundling/button";
import MasalahSelesaiCard from "../../components/page/koseling/masalah-selesai/masalah-selesai.component";

const AdsBundlingPage = () => {
    const router = useRouter();
    const { no_versi, type_campaign } = router.query;
	return (
		<div>
			<RilivHeader
				customTitle="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
				customDescription="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
			>
				<HeaderRilivForCompany
					customTitle="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
					customDescription="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
				/>
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<RilivNavbar hideMenu currentPage="Promo" center/>


			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>

			{/* HEADER SECTION */}
			<div
				className="container-fluid px-0"
				style={{ position: "relative", overflow: "hidden" }}
			>
				<AdsBundlingHeaderSetup />
				<BodyContainer>
					<div className="d-lg-flex d-block py-rlv-3-mobile py-lg-rlv-3-desktop align-items-center">
						<div
							className="mr-lg-rlv-1-mobile mr-0 mb-rlv-3-mobile mb-lg-0 text-center text-lg-left d-none d-lg-block"
							style={{ maxWidth: "409px" }}
						>
							<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Versi {no_versi}, Campaign {type_campaign}{" "}
								<span style={{ textDecoration: "underline" }}>
									bahagia dan tenang?
								</span>
							</h1>
							<AdsBundlingButton
								link="https://bit.ly/Konseling-Realtime"
								textLink="Lihat Solusi"
							/>
						</div>
						<div className="mr-lg-rlv-1-mobile mr-0 mb-rlv-3-mobile mb-lg-0 text-center text-lg-left d-block d-lg-none">
							<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Apakah kamu juga ingin mendapatkan kehidupan yang{" "}
								<span style={{ textDecoration: "underline" }}>
									bahagia dan tenang?
								</span>
							</h1>
							<AdsBundlingButton
								link="https://bit.ly/Konseling-Realtime"
								textLink="Lihat Solusi"
							/>
						</div>
						<div
							className="bg-white py-rlv-1-mobile py-lg-rlv-1-desktop px-rlv-C"
							style={{ borderRadius: "10px" }}
						>
							<h2 className="h4 mb-rlv-A">
								Di sini, kamu akan mendapatkan solusi tepat.{" "}
								<span className="font-weight-semibold">
									SPESIAL hanya untuk yang Ingin menemukan kembali senyum
									bahagia
								</span>
							</h2>
							<h2 className="h5 font-weight-semibold mb-rlv-C">
								Sebelumnya, apakah ini yang kamu rasakan?
							</h2>
							<AdsBundlingHeaderList />
							<p className="mb-0">
								Akhirnya sering muncul pertanyaan,{" "}
								<span className="font-weight-semibold">
									“Aku harus gimana?”
								</span>
							</p>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* PADAHAL UDAH SECTION */}
			<div className="bg-gray--1">
				<BodyContainer>
					<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
						<h1 className="text-center mb-rlv-C font-weight-semibold">
							Padahal udah melakukan beberapa hal?
						</h1>
						<ol className="h4">
							<li className="mb-rlv-B">
								Cerita ke temen tapi malah dibilang berlebihan? Kurang beriman?
								Dibanding-bandingin dengan masalah lain? Malah disebar?
							</li>
							<li className="mb-rlv-B">
								Udah coba cari hiburan, tapi tetep aja sedih
							</li>
							<li className="mb-rlv-B">
								Coba cari-cari tau jalan keluarnya, tapi masih aja gak nemu
								solusi tepat
							</li>
							<li className="mb-rlv-B">
								Mencoba melakukan yang terbaik, tapi rasanya ada aja masalah
								yang datang?
							</li>
							<li className="mb-rlv-B">
								Memendam perasaan mencoba baik-baik aja nyatanya semakin gak
								baik-baik aja?
							</li>
						</ol>
					</div>
				</BodyContainer>
			</div>

			{/* MAU SAMPAI KAPAN SECTION */}
			<div className="bg-riliv-level-5 py-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<h1 className="text-center mb-rlv-C font-weight-semibold">
						MAU SAMPAI KAPAN KAYA GINI?
					</h1>
					<ul className="h4" type="-">
						<li className="my-rlv-B">
							Kamu bisa mengalami depresi berat dan rentan mengalami penuaan
							dini pada otak serta gangguan fungsi otak :(
						</li>
						<li className="my-rlv-B">
							Untuk tingkat yang lebih parah, bisa muncul ide atau percobaan
							untuk mengakhiri hidup
						</li>
						<li className="my-rlv-B">
							Depresi akan mempengaruhi sistem kekebalan tubuh dan
							kebiasaan-kebiasaan sehari-hari yang berkaitan dengan depresi.
							Misalnya, kurang aktivitas fisik dan menurunnya nafsu makan.{" "}
						</li>
						<li className="my-rlv-B">
							Orang yang mengalami kecemasan, atau anxiety, berisiko mengalami
							gangguan fisik yang berkaitan dengan tekanan darah. Umumnya
							tekanan darah tinggi.
						</li>
						<li className="my-rlv-B">
							dan hal-hal lain yang berdampak negatif pada diri kamu
						</li>
					</ul>
				</BodyContainer>
			</div>

			{/* LAYAK MENDAPATKAN KEBAHAGIAAN */}
			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
				<BodyContainer>
					{/* Smile Photo */}
					<div className="d-flex justify-content-center">
						<div
							className="d-lg-flex d-block justify-content-center"
							style={{ maxWidth: "640px" }}
						>
							<div className="d-flex justify-content-center">
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_1.png" style={{ width: "100%" }} />
								</div>
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_2.png" style={{ width: "100%" }} />
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_3.png" style={{ width: "100%" }} />
								</div>
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_4.jpg" style={{ width: "100%" }} />
								</div>
							</div>
						</div>
					</div>
					{/* Smilie Photo End */}
					<h1 className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center">
						“Kalau kamu siap untuk punya cara menemukan kebahagiaanmu dan
						menemukan solusi dari setiap permasalahan saat ini, <br />
						<span className="font-weight-semibold">
							kamu ada di tempat yang tepat”
						</span>
					</h1>

					<div className="text-center">
						<AdsBundlingButton
							link="https://bit.ly/Konseling-Realtime"
							textLink="Lihat Solusi"
						/>
					</div>

					<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop">
						<img
							src="/img-ads/tempat_tepat.png"
							width="100%"
							height="auto"
							style={{ borderRadius: "8px" }}
						/>
					</div>
				</BodyContainer>
			</div>

			{/* RILIV YANG KAMU PERLUKAN */}
			<div className="bg-gray--1 py-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<h1 className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center">
						Karna itu, Riliv yang kamu perlukan!
					</h1>
					<ol className="h4">
						<li className="mb-rlv-B">
							Tim Riliv setiap minggunya melakukan riset tentang user dengan
							metode ilmiah untuk mendapatkan cara paling efektif dalam memberi
							pelayanan terbaik
						</li>
						<li className="mb-rlv-B">
							Semua psikolog, teregistrasi, tersertifikasi di Himpunan Psikologi
							Indonesia, berpengalaman dan dengan senang hati membantumu hingga
							menemukan akar permasalahan dan menemukan apa yang daapat kamu
							lakukan
						</li>
						<li className="mb-rlv-B">
							Dipandu oleh pakar meditasi ahli yang sudah teruji klinis tanpa
							perlu diragukan lagi
						</li>
						<li className="mb-rlv-B">
							Sudah 5 tahun kami berfokus pada kesehatan mental dan telah
							membantu RATUSAN RIBU masalah pribadi
						</li>
					</ol>
					<h3 className="text-center py-rlv-C">
						Kami menghadirkan kumpulan layanan terapi online untuk kesehatan
						mental yang lebih baik berupa teks online dan meditasi online
					</h3>
					<div className="text-center">
						<AdsBundlingButton
							dynamic
							link="https://bit.ly/Konseling-Realtime"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			{/* JADI APA SOLUSINYA */}
			<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<div
						className="d-flex justify-content-center mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ borderRadius: "8px" }}
					>
						<img
							src="/img-ads/konselingmeditasi.png"
							width="100%"
							height="100%"
						/>
					</div>
					<div>
						<h3 className="mb-rlv-C">
							Konseling Online Dengan Psikolog Profesional di Riliv:
						</h3>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Sangat berpengalaman, memiliki izin praktek psikolog, ramah
							</span>
						</CentangHijauList>

						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Mendengarkan tanpa menghakimi
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Memberikan sudut pandang baru untuk setiap permasalahan, hingga
								membantumu untuk menemukan akar dari permasalahan
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Fleksibel, jadwal psikolog dengan kamu dapat disesuaikan
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								raktis dan mudah, 75% lebih hemat dari konseling tatap muka dan
								bebas memilih paket sesuai kebutuhan
							</span>
						</CentangHijauList>
					</div>
				</BodyContainer>
			</div>

			{/* PSIKOLOG BERLISENSI */}
			<div className="py-lg-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<div className="row align-items-start">
						<div className="col-12 col-lg-6">
							<ResponsiveImage
								key="KonselingHeader"
								w_desktop="100%"
								w_tablet="450px"
								w_mobile="100%"
								imgAlt="Riliv Konseling"
								imgSrc="/img-konseling/mask_group_63.png"
							/>
						</div>
						<div className="col-12 col-lg-6">
							<div className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center text-lg-left">
								<ResponsiveText_H1
									classDesktop="font-weight-bold"
									classMobile="font-weight-semibold"
								>
									Psikolog Berlisensi Kami Siap Membantumu
								</ResponsiveText_H1>
							</div>
							<p className="h5 mb-lg-rlv-C text-lg-left text-center">
								Semua psikolog kami telah memiliki izin dan sertifikat resmi
								untuk melakukan konseling dengan Anda. Biaya yang akan Anda
								keluarkan untuk konseling merupakan bentuk apresiasi terhadap
								psikolog kami yang telah lulus sertifikasi.
							</p>
							<ol className="h5" style={{ marginLeft: "-12px" }}>
								<li className="mb-rlv-B">
									Semua psikolog kami telah berlisensi, berpengalaman dan
									profesional yang dapat membantumu untuk melewati masa sulit
									atau memberikan perubahan positif di hidup.
								</li>
								<li className="mb-rlv-B">
									Mereka akan dengan senang hati membantu walau kamu bingung
									akan bercerita mulai darimana. Semua sesi konseling dilakukan
									secara personal dan sesuai kode etik psikologi.
								</li>
								<li className="mb-rlv-B">
									Ramah, tanpa menghakimi, rahasia terjamin
								</li>
								<li className="mb-rlv-B">
									Expertise di berbagai bidang; apa yang kamu butuhkan. SEMUA
									ADA
								</li>
							</ol>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* MASALAH YANG KAMI SELESAIKAN */}
			<div className="container-fluid py-rlv-5-mobile py-lg-rlv-5-desktop bg-riliv-level-1">
				<BodyContainer>
					<div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
						<ResponsiveText_H2
							classMobile="font-weight-semibold text-white"
							classDesktop="font-weight-bold text-white"
						>
							Masalah Yang Kami Selesaikan
						</ResponsiveText_H2>
					</div>
					<div className="row">
						<MasalahSelesaiCard
							imgSrc="/img-konseling/depresi_section_3_sedih.png"
							imgAlt="Hubungan asmara dan keluarga"
							Description="Hubungan asmara dan keluarga"
						/>
						<MasalahSelesaiCard
							imgSrc="/img-konseling/depresi_section_3_makan.png"
							imgAlt="Karir dan akademik"
							Description="Karir dan Akademik"
						/>
						<MasalahSelesaiCard
							imgSrc="/img-konseling/depresi_section_3_konsentrasi.png"
							imgAlt="Kecanduan"
							Description="Kecanduan"
						/>
						<MasalahSelesaiCard
							imgSrc="/img-konseling/depresi-section-1.png"
							imgAlt="Gangguan Psikologis"
							Description="Gangguan Psikologis"
						/>
					</div>
					<div className="text-center">
						<AdsBundlingButton
							dynamic
							link="https://bit.ly/Konseling-Realtime"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			{/* MEDITASI MENGAJAKMU SECTION */}
			<div className="my-rlv-3-mobile my-lg-rlv-3-desktop">
				<BodyContainer>
					<div
						className="d-flex justify-content-center bg-riliv-level-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ borderRadius: "8px" }}
					>
						<img
							src="/img-ads/meditasi.png"
							style={{ width: "70%", height: "100%" }}
						/>
					</div>
					<div className="row align-items-center mb-rlv-C">
						<div className="col-12 col-lg-6 order-2 order-lg-1 text-lg-left text-center">
							<img
								src="/img-ads/meditasidea.png"
								style={{ width: "70%", borderRadius: "12px", height: "100%" }}
							/>
						</div>
						<div className="col-12 col-lg-6 order-1 mb-rlv-C mb-lg-0 order-lg-2 text-lg-left text-center">
							<h3>
								Meditasi Riliv mengajakmu untuk duduk tenang dengan posisi
								senyaman mungkin. Kami akan memandumu untuk mengatur nafas dan
								memfokuskan pikiran.
							</h3>
						</div>
					</div>
					<div className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center">
						<h2 className="font-weight-semibold mb-rlv-C">
							Duduk, Dengar, Damai
						</h2>
						<div className="d-flex justify-content-center">
							<p className="h5 mb-rlv-C" style={{ maxWidth: "750px" }}>
								HANYA 3 teknik sederhana ini yang kami ajarkan di aplikasi kami
								dan telah digunakan lebih dari 300.000 orang se Indonesia untuk
								lebih tenang, kalem, dan hilangkan overthinking.
								<br />
								Tanpa efek samping, tanpa ribet, tanpa effort.
							</p>
						</div>
						<AdsBundlingButton
							dynamic
							link="https://bit.ly/Konseling-Realtime"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
						<div className="d-flex justify-content-center">
							<p
								className="h3 my-rlv-C text-center"
								style={{ maxWidth: "600px" }}
							>
								“Membantu klien menurunkan stress rata-rata sebesar 41% hanya
								dalam satu bulan?”{" "}
							</p>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* MANFAAT MEDITASI RILIV */}
			<div className="pb-rlv-3-mobile pb-lg-rlv-3-desktop">
				<BodyContainer>
					<div>
						<h3 className="mb-rlv-C">Manfaat Meditasi di Riliv:</h3>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Menjadi lebih tenang karena dapat mengurangi tekanan emosional
								dan stress. Dilakukan dengan teknik mengumpulkan kesadaran penuh
								dan fokus dalam kondisi fisik yang rileks.{" "}
							</span>
						</CentangHijauList>

						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								TERBUKTI! Setelah 10 hari penggunaan, 94% pengguna Hening merasa
								lebih damai dan tingkat stres berkurang sebesar 45,6%
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Tidak perlu lama, cukup 10 menit dalam sehari
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Meningkatkan kepuasan hidup
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Menjadi lebih mindful dan membantu meningkatkan kreativitas
								serta fokus
							</span>
						</CentangHijauList>
						<CentangHijauList>
							<span className="pb-rlv-A d-block h4">
								Coba ratusan konten meditasi untuk setiap permasalahan seperti;
								kecemasan, overthinking, susah tidur, kesedihan, dan lain-lain{" "}
							</span>
						</CentangHijauList>
					</div>
					<div className="text-center">
						<AdsBundlingButton
							dynamic
							link="https://bit.ly/Konseling-Realtime"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			{/* MASIH RAGU SECTION */}
			<div className="py-rlv-3-mobile py-lg-rlv-3-desktop bg-riliv-level-5">
				<BodyContainer>
					<h1 className="font-weight-semibold text-center mb-rlv-C">
						MASIH RAGU?
					</h1>
					<h4 className="text-center">
						Mereka telah membuktikan dan mendapatkan hasil nyata yang TERBUKTI
						efektif, cepat, dengan harga terjangkau namun
						<br />
						SEJUTA MANFAAT DIJANGKAU
					</h4>
					<div className="d-flex justify-content-center">
						<h2
							className="text-center my-rlv-C font-weight-semibold"
							style={{ maxWidth: "660px" }}
						>
							Udah Lebih Dari 300.000 Orang Memilih Konseling dan Meditasi di
							Riliv
						</h2>
					</div>
					<div className="my-rlv-C d-none d-lg-block">
						<img src="/img-ads/testimoni2.png" width="100%" />
					</div>
					<div className="my-rlv-C d-block d-lg-none">
						<img
							src="/img-ads/testimoni_cht1.png"
							width="100%"
							className="mb-rlv-B"
							style={{ borderRadius: "8px" }}
						/>
						<img
							src="/img-ads/testimoni_cht2.png"
							width="100%"
							className="mb-rlv-B"
							style={{ borderRadius: "8px" }}
						/>
						<img
							src="/img-ads/testimoni_cht3.png"
							width="100%"
							className="mb-rlv-B"
							style={{ borderRadius: "8px" }}
						/>
						<img
							src="/img-ads/testimoni_cht4.png"
							width="100%"
							className="mb-rlv-B"
							style={{ borderRadius: "8px" }}
						/>
						<img
							src="/img-ads/testimoni_cht5.png"
							width="100%"
							className="mb-rlv-B"
							style={{ borderRadius: "8px" }}
						/>
						<img
							src="/img-ads/testimoni_cht6.png"
							width="100%"
							className="mb-rlv-B"
							style={{ borderRadius: "8px" }}
						/>
					</div>

					{/* TESTI COWOK */}
					<div
						className="d-lg-flex d-block align-items-center p-rlv-2-mobile bg-white mt-rlv-1-mobile mt-lg-rlv-1-desktop mb-rlv-C"
						style={{ borderRadius: "8px" }}
					>
						<div className="my-lg-0 mb-rlv-C text-center">
							<img
								src="/img-ads/persontesti1.png"
								width="200px"
								style={{ borderRadius: "100px" }}
							/>
						</div>
						<div className="text-lg-left text-center ml-lg-rlv-C ml-0">
							<p className="h5">
								“Gak perlu habisin waktu di jalan, karena konselingnya bisa
								dilakuin online. Yang paling aku suka psikolognya yang ramah.
								Beliau berusaha memahami kondisiku dan mencari tau letak masalah
								yang harus diperbaiki dengan tepat. Bener-bener pake teknik
								psikolog”
							</p>
						</div>
					</div>

					{/* TESTI CEWEK */}
					<div
						className="d-lg-flex d-block align-items-center p-rlv-2-mobile bg-white mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ borderRadius: "8px" }}
					>
						<div className="my-lg-0 mb-rlv-C text-center order-2">
							<img
								src="/img-ads/smile_4.jpg"
								width="200px"
								style={{ borderRadius: "100px" }}
							/>
						</div>
						<div className="text-lg-right text-center mr-lg-rlv-C mr-0 order-1">
							<p className="h5">
								”Enak banget lega, gak curhat sama bot tapi langsung dari
								psikolog profesional. Real time! Udah jelas berlisensi dan
								bener-bener ngasih aku solusi pasti. Gak menghakimi dan super
								ramah!”
							</p>
						</div>
					</div>
					<div className="text-center">
						<AdsBundlingButton
							dynamic
							link="https://bit.ly/Konseling-Realtime"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			{/* SUDAH SAATNYA SECTION */}
			<div className="my-rlv-3-mobile my-lg-rlv-3-desktop">
				<BodyContainer>
					<h2 className="text-center font-weight-semibold mb-rlv-C">
						Saatnya kamu merubah hidupmu untuk
					</h2>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">Menjadi lebih baik</span>
					</CentangHijauList>

					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							Lebih bijak dan tepat dalam menanggapi suatu masalah
						</span>
					</CentangHijauList>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							Lebih tenang, tidak mudah sensitif, dan tepat dalam memelihara
							kesehatan mental yang baik
						</span>
					</CentangHijauList>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							dan yang terpenting, MENDAPATKAN HIDUP YANG TENANG DAN BAHAGIA
						</span>
					</CentangHijauList>
					<h2 className="font-weight-semibold text-center h2 mt-rlv-C">
						bersama Aplikasi Kesehatan Mental No. 1 di Indonesia
					</h2>
				</BodyContainer>
			</div>

			{/* KENAPA RILIV SECTION */}
			<div
				className="bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("/img-home/background-kenapa.png")' }}
			>
				<BodyContainer key="body6">
					<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
						<h2 className="text-white mb-lg-rlv-5-mobile mb-rlv-5-mobile text-center font-weight-semibold">
							Kualitas kami dibuktikan dengan angka bukan sekadar kata
						</h2>
						<div className="row px-rlv-B">
							<CardKenapaSection
								imgSrc="/img-home/group_12344.png"
								imgAlt="user sehat mental"
								imgWidth="65px"
								textTitle="+200.000"
								textDescription="User lebih sehat mental dengan Riliv"
							/>
							<CardKenapaSection
								imgSrc="/img-home/group_12260.png"
								imgAlt="Himpunan Psikologi Indonesia"
								imgWidth="65px"
								textTitle="100%"
								textDescription="Psikolog Riliv memiliki lisensi resmi Himpunan Psikologi Indonesia"
							/>
							<CardKenapaSection
								imgSrc="/img-home/group_12259.png"
								imgAlt="Sehat Mental Meditasi Riliv"
								imgWidth="65px"
								textTitle="94%"
								textDescription="Pengguna lebih sehat mental dengan meditasi Riliv"
							/>
							<CardKenapaSection
								imgSrc="/img-home/surface1.png"
								imgAlt="90% tingkat kepuasan konseling online riliv"
								imgWidth="77px"
								textTitle="90%"
								textDescription="Tingkat kepuasan konseling online Riliv"
							/>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* TESTIMONI SECTION */}
			{/* <div className="py-rlv-4-mobile py-lg-rlv-4-desktop bg-riliv-level-5">
				<BodyContainer>
					<h1 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center font-weight-semibold">
						Udah Lebih Dari 100.000 Orang Memilih{" "}
						<br className="d-none d-lg-block" /> Konseling dan Meditasi di Riliv
					</h1>
					<div className="row">
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_1.png" style={{ width: "100%" }} />
						</div>
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_2.png" style={{ width: "100%" }} />
						</div>
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_3.png" style={{ width: "100%" }} />
						</div>
					</div>
				</BodyContainer>
			</div> */}

			{/* MENGAPA HARUS RILIV SECTION */}
			<div className="my-rlv-3-mobile my-lg-rlv-3-desktop">
				<BodyContainer>
					<h1 className="font-weight-semibold text-center mb-rlv-C">
						Mengapa harus Riliv?
					</h1>
					<h5 className="text-center mb-rlv-C">
						Riliv memberikan kemudahan untuk menenangkan diri dan mendapatkan
						solusi atas masalah kesehatan mentalmu di mana dan kapan saja,
						lengkap dan nggak ribet.
					</h5>
					<div className="row text-center mb-rlv-B">
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Konseling</h3>
							<h5>
								Selesaikan masalah dengan berbagai solusi terpercaya dari yang
								ahli.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Cerita Lelap</h3>
							<h5>
								Tak perlu overthingking lagi, kamu bisa tidur lelap hari ini.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">
								Belajar Meditasi
							</h3>
							<h5>Panduan yang mudah membuatmu lebih fokus dalam bekerja.</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Nuansa Lelap</h3>
							<h5>
								Hadirkan ketenangan dalam tidurmu, singkirkan beban pikiran.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">
								Meditasi Darurat
							</h3>
							<h5>
								Menjadi tenang dengan segera karena cemas bisa datang tiba-tiba.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Mood Tracker</h3>
							<h5>Memantau dan mengelola emosimu semudah menggeser jari.</h5>
						</div>
					</div>
					<div className="text-center">
						<AdsBundlingButton
							dynamic
							link="https://bit.ly/Konseling-Realtime"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			{/* KONSELING ONLINE SECTION */}
			<BodyContainer>
				<div id="lihatSolusi" className="mb-rlv-4-mobile mb-lg-rlv-4-desktop">
					<div
						className="d-flex justify-content-center bg-riliv-level-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ borderRadius: "8px" }}
					>
						<img
							src="/img-ads/konseling.png"
							style={{ width: "70%", height: "100%" }}
						/>
					</div>
					<div className="row">
						<div className="col-12">
							<p className="h4 font-weight-semibold mb-rlv-C">
								Konseling Online Dengan Psikolog Profesional di Riliv:
							</p>
							<CentangHijauList additionalClass="mb-rlv-B">
								Sangat berpengalaman, memiliki izin praktek psikolog, ramah
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Mendengarkan tanpa menghakimi
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Memberikan solusi pasti untuk setiap permasalahan
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Fleksibel, jadwal psikolog dengan kamu dapat disesuaikan
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Praktis dan mudah, 75% lebih hemat dari konseling tatap muka dan
								bebas memilih paket sesuai kebutuhan
							</CentangHijauList>
							<div className="d-flex justify-content-center pt-rlv-C">
								<div className="d-block" style={{ width: "500px" }}>
									<AdsBundlingPriceBox
										identifier="promoBox"
										link="https://bit.ly/Konseling-Realtime "
										textLink="Dapatkan Sekarang"
										startPrice="Rp. 260.000"
										promoPrice="Rp. 59.000"
										promo="2x konseling psikolog + 2 bulan meditasi"
										buttonOnly
									/>
								</div>
							</div>
						</div>
						<div className="col-12"></div>
					</div>
				</div>
			</BodyContainer>

			{/* MANFAAT MEDITASI SECTION */}
			<BodyContainer>
				<div className="mb-rlv-4-mobile mb-lg-rlv-4-desktop">
					<div
						className="d-flex justify-content-center bg-riliv-level-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ borderRadius: "8px" }}
					>
						<img
							src="/img-ads/meditasi.png"
							style={{ width: "70%", height: "100%" }}
						/>
					</div>
					<div className="row">
						<div className="col-12">
							<p className="h4 font-weight-semibold mb-rlv-C">
								Manfaat Meditasi di Riliv:
							</p>
							<CentangHijauList additionalClass="mb-rlv-B">
								Menjadi lebih tenang
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								TERBUKTI! Setelah 10 hari penggunaan, 94% pengguna Hening merasa
								lebih damai dan tingkat stres berkurang sebesar 45,6%
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Tidak perlu lama, cukup 10 menit dalam sehari
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Meningkatkan kepuasan hidup
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Menjadi lebih mindful dan membantu meningkatkan kreativitas
								serta fokus
							</CentangHijauList>
							<CentangHijauList additionalClass="mb-rlv-B">
								Coba ratusan konten meditasi untuk setiap permasalahan seperti;
								kecemasan, overthinking, susah tidur, kesedihan, dan lain-lain
							</CentangHijauList>
							<div className="d-flex justify-content-center pt-rlv-C">
								<div className="d-block" style={{ width: "500px" }}>
									<AdsBundlingPriceBox
										identifier="promoBox"
										link="https://bit.ly/Konseling-Realtime"
										textLink="Dapatkan Sekarang"
										startPrice="Rp. 260.000"
										promoPrice="Rp. 59.000"
										promo="2x konseling psikolog + 2 bulan meditasi"
										buttonOnly
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BodyContainer>

			{/* TELAH DILIPUT DI */}
			{/* MEDIA SECTION */}
			<BodyContainer>
				<div
					className="py-rlv-3-mobile py-lg-rlv-3-desktop mb-rlv-4-mobile mb-lg-rlv-4-desktop"
					style={{
						borderTop: "1px solid #c6c6c6",
						borderBottom: "1px solid #c6c6c6",
					}}
				>
					<div className="d-flex justify-content-center">
						<h3
							className="text-center text-gray-5 mb-rlv-C font-weight-semibold"
							style={{ maxWidth: "660px" }}
						>
							Sebagai bukti nyata, kami telah mendapatkan penghargaan dari
							berbagai pihak
						</h3>
					</div>

					<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
						Telah Diliput Di
					</h2>
					<div className="row text-center">
						<div className="col-lg-1 d-none d-lg-inline"></div>
						<MediaImages
							key="media1"
							photoUrl="/img-home/kumparan.png"
							photoAlt="kumparan"
						/>
						<MediaImages
							key="media2"
							photoUrl="/img-home/liputan6.png"
							photoAlt="liputan6"
						/>
						<MediaImages
							key="media3"
							photoUrl="/img-home/techinasia.png"
							photoAlt="techinasia"
						/>
						<MediaImages
							key="media4"
							photoUrl="/img-home/the_straits.png"
							photoAlt="the straits"
						/>
						<MediaImages
							key="media5"
							photoUrl="/img-home/thejakarta.png"
							photoAlt="the jakarta post"
						/>

						<div className="col-lg-1 d-none d-lg-inline"></div>
						<div className="col-lg-1 d-none d-lg-inline"></div>
						<MediaImages
							key="media6"
							photoUrl="/img-home/tirto.png"
							photoAlt="tirto"
						/>
						<MediaImages
							key="media7"
							photoUrl="/img-home/conversation.png"
							photoAlt="conversation"
						/>
						<MediaImages
							key="media8"
							photoUrl="/img-home/detik.png"
							photoAlt="detikcom"
						/>
						<MediaImages
							key="media9"
							photoUrl="/img-home/forbes.png"
							photoAlt="forbes"
						/>
						<MediaImages
							key="media10"
							photoUrl="/img-home/idn.png"
							photoAlt="idn times"
						/>
						<div className="col-lg-1 d-none d-lg-inline"></div>
					</div>
					<p className="text-center text-gray-5 mt-rlv-B h5">
						dan belasan media lainnya
					</p>
				</div>
			</BodyContainer>
			<RilivFooter hideLinks />
			<BootstrapScript />
		</div>
	);
};

export default AdsBundlingPage;

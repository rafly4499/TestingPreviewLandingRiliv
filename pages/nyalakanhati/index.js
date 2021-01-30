import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import { ResponsiveText_P } from "../../components/responsive-text/responsive-text.component";

import ProductTenangDiRumah from "../../components/page/tenangdirumah/tenangdirumah-product/tenangdirumah-product.component";
import MengapaCard from "../../components/page/tenangdirumah/mengapa-card/mengapa-card.component";
import MengapaSlider from "../../components/page/tenangdirumah/mengapa-card/mengapa.slider";
import AccordionProductSection from "../../components/page/tenangdirumah/accordion-product/accordion-product.component";
import BagikanButton from "../../components/page/tenangdirumah/bagikan-button/bagikan-button.component";

import HeaderTenangPage from "../../components/page/tenangdirumah/header-page/header-page.component";
import ResponsiveImage, {
	CenteredResponsiveImage,
} from "../../components/responsive-image/responsive-image.component";

const Tenangdirumah = () => {
	return (
		<div>
			<RilivHeader>
				<HeaderTenangPage />
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbar
				currentPage="Tenang di Rumah"
				urlCTA="https://play.google.com/store/apps/details?id=nozero.apps1"
				textCTA="Coba Aplikasi Sekarang"
			/>

			{/* HEADER SECTION */}
			<div
				className="container-fluid px-0"
				style={{ overflow: "hidden", backgroundColor: "#f8fcfc" }}
			>
				<div
					className="bg-header d-block d-md-none"
					style={{
						backgroundImage: "url('./img-tenangdirumah/mask_group_84.png')",
						minHeight: "40vh",
					}}
				></div>
				<div
					className="bg-header d-none d-md-block d-lg-none"
					style={{
						backgroundImage: "url('./img-tenangdirumah/mask_group_84.png')",
						minHeight: "60vh",
					}}
				></div>
				<BodyContainer>
					<div className="row text-center text-lg-left">
						<div className="col-12 col-lg-6 order-2 order-lg-1 my-rlv-5-mobile my-lg-rlv-5-desktop">
							<h1 className="h2 text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-bold">
								Anda Tidak Sendirian, <br /> Kami Selalu Hadir untuk Anda
							</h1>

							<div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								<ResponsiveText_P
									classDesktop="font-weight-semibold"
									classMobile="font-weight-normal"
									extraStyle={{ lineHeight: "28px" }}
								>
									Selamat datang di Riliv, pelopor aplikasi meditasi dan
									konseling online untuk kesehatan mental yang lebih baik.
								</ResponsiveText_P>
							</div>

							<p
								className="paragraph-riliv text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop"
								style={{ lineHeight: "28px" }}
							>
								Teruntuk Anda semua, <br /> Kita sedang berada di situasi yang
								tidak biasa. Kami di Riliv, juga merasakan apa yang Anda
								rasakan, rasa cemas, takut, dan panik secara tiba-tiba karena
								pandemi ini. Tidak ada kepastian kapan krisis ini akan berakhir.
								Namun, satu hal yang pasti —{" "}
								<strong>Riliv akan selalu hadir untuk Anda.</strong> Dengan
								segenap upaya dan sumber daya yang kami miliki, kami akan selalu
								ada untuk membantu Anda melewati semua ini. <br /> <br />
								Kami bekerja sama dengan Bank OCBC NISP lewat kampanye
								#nyalakanhati akan memberikan dukungan kesehatan mental yang
								efektif, efisien dan terjangkau khusus untuk Anda.
							</p>
							<button
								data-toggle="modal"
								data-target="#modalDownloadAndroidIos"
								className="btn btn-special-grad-1 font-weight-semibold text-white"
								style={{ fontSize: "16px" }}
							>
								Coba Aplikasi Sekarang
							</button>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2">
							<div
								className="d-none d-lg-inline-block"
								style={{
									backgroundImage:
										"url('./img-tenangdirumah/mask_group_84.png')",
									height: "100%",
									backgroundSize: "cover",
									width: "50vw",
									backgroundPosition: "center",
								}}
							></div>
						</div>
					</div>
				</BodyContainer>
			</div>
			{/* HEADER SECTION END */}

			{/* PARTNERSHIP */}
			<BodyContainer>
				<div
					className="py-rlv-5-mobile py-lg-rlv-5-desktop text-center"
					style={{ borderBottom: "solid 1px #ffffff" }}
				>
					<div className="d-lg-table mx-lg-auto">
						<h2
							className="font-weight-bold  d-block mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							style={{ verticalAlign: "middle" }}
						>
							In partnership With:
						</h2>
						<img
							src="./img-nyalakanhati/logoOcbc.png"
							alt="OCBC NISP"
							style={{ width: "350px" }}
							className="d-none d-lg-inline-block mx-auto mx-lg-0 mr-lg-rlv-1-mobile mr-0 mb-rlv-1-mobile mb-lg-0"
						/>
						<img
							src="./img-nyalakanhati/logoOcbc.png"
							alt="OCBC NISP"
							style={{ width: "250px" }}
							className="d-block d-lg-none mx-auto mx-lg-0 mr-lg-rlv-1-mobile mr-0 mb-rlv-1-mobile mb-lg-0"
						/>
					</div>
				</div>
			</BodyContainer>

			{/* ACCORDION SOLUSI UNTUK ANDA */}
			<BodyContainer>
				<AccordionProductSection
					accordionId="accordionSolusiUntukAnda"
					title="Solusi Untuk Anda"
					show={true}
				>
					<ProductTenangDiRumah
						title="Beragam Konten Mindfulness untuk Tenang di Rumah"
						btnText="Mulai Meditasi Sekarang"
						btnUrl="https://play.google.com/store/apps/details?id=nozero.apps1"
						imgSrc="mask_group_86.png"
						imgAlt="Solusi tenang di rumah untuk Anda 1"
						modal={true}
					>
						<p
							className="paragraph-riliv mb-rlv-C"
							style={{ lineHeight: "28px" }}
						>
							Meditasi terbukti dapat meningkatkan mood positif, stabilitas
							emosi yang bertahan lama, dan peningkatan fokus sehari-hari. Riset
							internal kami menunjukkan bahwa{" "}
							<span style={{ textDecoration: "underline" }}>
								{" "}
								94% user kami menganggap meditasi merubah hidup mereka, tingkat
								stress mereka menurun sebesar 45,6%, serta meningkatknya
								kepuasan hidup sebesar 22,4% dalam waktu 10 hari.
							</span>
						</p>
						<p
							className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							style={{ lineHeight: "28px" }}
						>
							Anda bisa menikmati konten premium kami selama 30 hari. Cukup klik
							tombol dibawah, lalu install aplikasi Riliv di playstore,
							<ol type="i" className="pl-rlv-B">
								<li>
									Daftar akun untuk user baru, ikuti setiap petunjuk hingga
									selesai
								</li>
								<li>
									Pilih logo Voucher di bagian ujung kanan atas halaman beranda
								</li>
								<li>Masukkan kode voucher RILIVNYALAKANHATI, klik Redeem</li>
								<li>
									Anda bisa menikmati konten premium meditasi di Riliv selama 30
									hari (selama persediaan masih ada)
								</li>
								<li>
									Jika persedian voucher sudah habis, Masukkan kode voucher
									HENINGSEJENAK, klik Redeem untuk mendapatkan potongan harga
									langganan meditasi sebesar 25%.
								</li>
							</ol>
						</p>
					</ProductTenangDiRumah>
					<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop">
						<ProductTenangDiRumah
							title="Bantuan Psikolog Profesional Online"
							btnText="Coba Konseling Sekarang"
							btnUrl="https://play.google.com/store/apps/details?id=nozero.apps1"
							imgSrc="mask_group_88.png"
							imgAlt="Solusi tenang di rumah untuk Anda 2"
							modal={true}
						>
							<p
								className="paragraph-riliv mb-rlv-C"
								style={{ lineHeight: "28px" }}
							>
								Rasa cemas, khawatir, panik, dan takut yang berlebihan
								menunjukkan bahwa Anda mungkin membutuhkan bantuan profesional.
								Kami dapat menghubungkan Anda dengan Psikolog berlisensi terkait
								masalah apapun, tanpa khawatir! Konseling dengan Psikolog kami
								dilakukan secara online, tanpa keluar rumah sehingga Anda tetap
								bisa #TenangdiRumah.
							</p>
							<p
								className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop"
								style={{ lineHeight: "28px" }}
							>
								Anda bisa mendapatkan potongan harga konseling dengan psikolog
								profesional sebesar 10%. Cukup klik tombol dibawah, lalu install
								aplikasi Riliv di playstore,
								<ol type="i" className="pl-rlv-B">
									<li>
										Daftar akun untuk user baru, ikuti setiap petunjuk hingga
										selesai
									</li>
									<li>
										Pilih logo Voucher di bagian ujung kanan atas halaman
										beranda
									</li>
									<li>Masukkan kode voucher KONSELINGTENANG, klik Redeem</li>
									<li>
										Anda akan melihat informasi tentang potongan harga yang Anda
										dapatkan, dan lanjut memproses untuk mengaktifkan paket
										konseling Anda
									</li>
								</ol>
							</p>
						</ProductTenangDiRumah>
					</div>
				</AccordionProductSection>
			</BodyContainer>

			{/* ACCORDION SOLUSI UNTUK PERUSAHAAN */}
			<BodyContainer>
				<AccordionProductSection
					accordionId="accordionSolusiUntukPerusahaan"
					title="Solusi untuk Perusahaan"
				>
					<ProductTenangDiRumah
						title="Solusi untuk Karyawan Anda"
						btnText="Pelajari Lebih Lanjut"
						btnUrl="./company"
						imgSrc="mask_group_90.png"
						imgAlt="Solusi untuk Perusahaan"
					>
						<p
							className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							style={{ lineHeight: "28px" }}
						>
							Mari ciptakan suasana dan kultur perusahaan yang produktif,
							bahagia, sehat fisik dan mental. Riliv for Company adalah program
							komprehensif kesehatan mental no 1 di Indonesia yang telah
							menangani berbagai organisasi mulai dari pendidikan hingga
							finansial. Kami mengkombinasikan best practice di dunia psikologi
							seperti mindfulness meditation, exercise, cognitive behavioral
							therapy, positive psychology hingga konseling.
						</p>
					</ProductTenangDiRumah>
				</AccordionProductSection>
			</BodyContainer>

			<div className="container-fluid mt-rlv-5-mobile mt-lg-rlv-5-desktop bg-riliv-level-1 py-rlv-4-mobile py-lg-rlv-4-desktop">
				<BodyContainer>
					<div className="text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						<CenteredResponsiveImage
							imgSrc="./img-tenangdirumah/depresi_section_3_sedih.png"
							imgAlt="Sebarkan Berita Baik"
							w_desktop="189px"
							w_tablet="189px"
							w_mobile="189px"
						/>
					</div>
					<h2 className="h1 font-weight-bold mb-rlv-C text-white text-center">
						Sebarkan Berita Baik Ini ke Teman Anda
					</h2>
					<p
						className="paragraph-riliv text-white text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ lineHeight: "28px" }}
					>
						Klik sosial media di bawah ini dan sebarkan ke teman, keluarga atau
						lainnya. Satu informasi yang Anda sebarkan sangat berarti untuk
						memberikan kesadaran pentingnya merawat kesehatan mental di
						masa-masa sulit ini.
					</p>
					<div className="d-lg-table mx-auto">
						<p className="h5 text-white text-center mr-0 mr-lg-rlv-1-desktop d-block d-lg-inline-block mb-rlv-C mb-lg-0">
							Bagikan Lewat
						</p>
						<div className="text-center text-lg-left d-block d-lg-inline-block">
							<BagikanButton
								shareUrl="https://twitter.com/intent/tweet/?text=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda&amp;url=https%3A%2F%2Friliv.co%2Ftenangdirumah"
								imgSrc="icons8_twitter.png"
								imgAlt="Bagikan di Twitter"
								height="32px"
							/>
							<BagikanButton
								shareUrl="line://msg/text/Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda%20https%3A%2F%2Friliv.co%2Ftenangdirumah"
								imgSrc="icons8_line.png"
								imgAlt="Bagikan di Line"
								height="32px"
							/>
							<BagikanButton
								shareUrl="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Friliv.co%2Ftenangdirumah&amp;title=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda&amp;summary=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda&amp;source=https%3A%2F%2Friliv.co%2Ftenangdirumah"
								imgSrc="icons8_linkedin.png"
								imgAlt="Bagikan di Linkedin"
								height="32px"
							/>
							<BagikanButton
								shareUrl="whatsapp://send?text=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda%20https%3A%2F%2Friliv.co%2Ftenangdirumah"
								imgSrc="icons8_whatsapp.png"
								imgAlt="Bagikan di WA"
								height="32px"
							/>
						</div>
					</div>
				</BodyContainer>
			</div>

			<RilivFooter />
			<BootstrapScript />
		</div>
	);
};

export default Tenangdirumah;

// <!-- Sharingbutton Twitter -->
// <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda&amp;url=https%3A%2F%2Friliv.co%2Ftenangdirumah" target="_blank" rel="noopener" aria-label="">
//   <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 7.4l-2 .2c-.4-.5-1-.8-2-.8C13.3 6.8 12 8 12 9.4v.6c-2 0-4-1-5.4-2.7-.2.4-.3.8-.3 1.3 0 1 .4 1.7 1.2 2.2-.5 0-1 0-1.2-.3 0 1.3 1 2.3 2 2.6-.3.4-.7.4-1 0 .2 1.4 1.2 2 2.3 2-1 1-2.5 1.4-4 1 1.3 1 2.7 1.4 4.2 1.4 4.8 0 7.5-4 7.5-7.5v-.4c.5-.4.8-1.5 1.2-2z"/><circle cx="12" cy="12" r="11.5"/></svg>
//     </div>
//   </div>
// </a>

// <!-- Sharingbutton LinkedIn -->
// <a class="resp-sharing-button__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Friliv.co%2Ftenangdirumah&amp;title=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda&amp;summary=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda&amp;source=https%3A%2F%2Friliv.co%2Ftenangdirumah" target="_blank" rel="noopener" aria-label="">
//   <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11.5"/><path d="M15 12.5c-.28 0-.5.22-.5.5v3.5h-3s.03-6.48 0-7h3v.83s.46-.75 1.7-.75c1.56 0 2.3 1.12 2.3 3.3v3.62h-3V13c0-.28-.23-.5-.5-.5zm-7.5-3h2v7h-2z"/><circle cx="8.5" cy="6.5" r="1"/></svg>
//     </div>
//   </div>
// </a>

// <!-- Sharingbutton WhatsApp -->
// <a class="resp-sharing-button__link" href="whatsapp://send?text=Anda%20Tidak%20Sendirian%2C%20Riliv%20Selalu%20Hadir%20untuk%20Anda%20https%3A%2F%2Friliv.co%2Ftenangdirumah" target="_blank" rel="noopener" aria-label="">
//   <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="11.5"/><path stroke-width="1px" d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.4.9 3.7.9 4.3 0 7.8-3.5 7.8-7.8.1-2-.7-3.9-2.2-5.4zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.7-2.4-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6-.1 3.5-3 6.4-6.6 6.4zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0s-.8-.3-1.6-1c-.6-.5-1-1.2-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3s.1-.2.2-.3c.1-.1 0-.2 0-.3s-.4-1.1-.6-1.4c-.2-.4-.3-.3-.4-.3h-.4s-.3 0-.5.2-.7.7-.7 1.6c0 1 .7 1.9.8 2s1.4 2.1 3.3 2.9c.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.8.1-.9 0-.2-.2-.3-.4-.4z"/></svg>
//     </div>
//   </div>
// </a>

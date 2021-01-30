import { useState } from "react";
import BodyContainer from "../../components/body-container/body-container.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import StoryCard from "../../components/page/bersamaindika/story-card";
import StoryPagination from "../../components/page/bersamaindika/story-pagination";
import AccordionProductSection from "../../components/page/tenangdirumah/accordion-product/accordion-product.component";
import BagikanButton from "../../components/page/tenangdirumah/bagikan-button/bagikan-button.component";
import HeaderTenangPage from "../../components/page/tenangdirumah/header-page/header-page.component";
import MengapaCard from "../../components/page/tenangdirumah/mengapa-card/mengapa-card.component";
import MengapaSlider from "../../components/page/tenangdirumah/mengapa-card/mengapa.slider";
import ProductTenangDiRumah from "../../components/page/tenangdirumah/tenangdirumah-product/tenangdirumah-product.component";
import ResponsiveImage, {
	CenteredResponsiveImage,
} from "../../components/responsive-image/responsive-image.component";
import { ResponsiveText_P } from "../../components/responsive-text/responsive-text.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import StoriesContent from "../../contents/bersamaindika/story.content";

const BersamaIndika = () => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(Math.ceil(StoriesContent.length / 9));

	const onPageChange = (e) => {
		setPage(e);
	};
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
			<RilivNavbar currentPage="Bersama Indika" />

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
								ada untuk membantu Anda melewati semua ini.
							</p>
							{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON */}
							<div className=" d-block d-lg-flex ">
								<a
									href="https://play.google.com/store/apps/details?id=nozero.apps1&hl=en"
									className="d-block mr-0 mr-lg-rlv-C text-center mb-rlv-1-mobile mb-lg-0"
									target="_blank"
								>
									<ResponsiveImage
										imgSrc="./img/google_play.png"
										imgAlt="Download Riliv Google Play"
										w_desktop="200px"
										w_tablet="200px"
										w_mobile="200px"
									/>
								</a>
								<a
									href="https://apps.apple.com/mn/app/riliv/id1510486066"
									className="text-center"
									target="_blank"
								>
									<ResponsiveImage
										imgSrc="./img/app_store.png"
										imgAlt="Download Riliv App Store"
										w_desktop="177.46px"
										w_tablet="177.46px"
										w_mobile="177.46px"
									/>
								</a>
							</div>
							{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON END */}
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
					style={{ borderBottom: "solid 1px #afafaf" }}
				>
					<div className="d-lg-table mx-lg-auto">
						<div className="d-block d-lg-inline-block mx-auto mx-lg-0  mb-rlv-1-mobile mb-lg-0">
							<CenteredResponsiveImage
								imgSrc="./img-tenangdirumah/logo_indika.png"
								imgAlt="Indika Foundation"
								w_desktop="372px"
								w_tablet="294px"
								w_mobile="260px"
							/>
						</div>
						<div className=" d-block d-lg-inline-block mx-auto mx-lg-rlv-3-mobile mb-rlv-1-mobile mb-lg-0">
							<CenteredResponsiveImage
								imgSrc="./img-tenangdirumah/tulisan_x.png"
								imgAlt="X"
								w_desktop="34px"
								w_tablet="24px"
								w_mobile="24px"
							/>
						</div>
						<div className="d-block d-lg-inline-block mx-auto mx-lg-0">
							<CenteredResponsiveImage
								imgSrc="./img-tenangdirumah/logo_riliv.png"
								imgAlt="Riliv"
								w_desktop="194px"
								w_tablet="148px"
								w_mobile="148px"
							/>
						</div>
					</div>
				</div>
			</BodyContainer>

			{/* MENGAPA PERLU TENANGDIRUMAH */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
					<div className="text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						<CenteredResponsiveImage
							imgSrc="./img-tenangdirumah/mask_group_85.png"
							imgAlt="Mengapa perlu tenang di rumah?"
							w_desktop="490px"
							w_tablet="400px"
							w_mobile="300px"
						/>
					</div>
					<h2 className="font-weight-bold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Mengapa Perlu #TenangdiRumah?
					</h2>
					<p
						className="text-center paragraph-riliv text-gray-5"
						style={{ lineHeight: "28px" }}
					>
						Banyak perubahan yang terjadi akibat pandemi ini. Mulai dari
						pembatasan dalam hubungan sosial yang dapat memicu stres karena
						akses untuk bertemu menjadi terbatas. Bekerja dari rumah pun
						seringkali dihadapkan dengan berbagai tekanan sehingga produktivitas
						menurun. Belum ada pula referensi untuk menjaga kesejahteraan mental
						di tengah pandemi ini. #TenangdiRumah sangat diperlukan agar Anda
						dapat Tenang, Senang, dan Menang!
					</p>
					<p
						className="text-center paragraph-riliv text-gray-5"
						style={{ lineHeight: "28px" }}
					>
						Untuk itu, kami menyediakan konten kesehatan mental yang
						terintegrasi untuk Anda agar dapat mengatasi kecemasan dan stres,
						mendapatkan kualitas tidur yang baik, hingga meningkatkan
						produktivitas dalam bekerja.
					</p>

					<div className="d-none d-md-block">
						<div className="row">
							<MengapaCard
								imgSrc="./img-tenangdirumah/group_12486.png"
								imgAlt="Tenang"
								Title="Tenang"
								Description="Mengetahui cara menangani kecemasan dan stres"
							/>
							<MengapaCard
								imgSrc="./img-tenangdirumah/group_12487.png"
								imgAlt="Senang"
								Title="Senang"
								Description="Beraktivitas dan tidur lebih baik"
							/>
							<MengapaCard
								imgSrc="./img-tenangdirumah/group_12488.png"
								imgAlt="Menang"
								Title="Menang"
								Description="Produktif meskipun bekerja dari rumah"
							/>
						</div>
					</div>

					<div className="d-block d-md-none">
						<MengapaSlider sliderToSlide={1}>
							<div className="pb-rlv-1-mobile d-block d-lg-none">
								<MengapaCard
									imgSrc="./img-tenangdirumah/group_12486.png"
									imgAlt="Tenang"
									Title="Tenang"
									Description="Mengetahui cara menangani kecemasan dan stres"
								/>
							</div>
							<div className="pb-rlv-1-mobile d-block d-lg-none">
								<MengapaCard
									imgSrc="./img-tenangdirumah/group_12487.png"
									imgAlt="Senang"
									Title="Senang"
									Description="Beraktivitas dan tidur lebih baik"
								/>
							</div>
							<div className="pb-rlv-1-mobile d-block d-lg-none">
								<MengapaCard
									imgSrc="./img-tenangdirumah/group_12488.png"
									imgAlt="Menang"
									Title="Menang"
									Description="Produktif meskipun bekerja dari rumah"
								/>
							</div>
						</MengapaSlider>
					</div>
				</div>
			</BodyContainer>

			{/* RILIV STORY */}
			<BodyContainer>
				<div className="pb-rlv-5-mobile pb-lg-rlv-5-desktop" id="rilivstory">
					<h2 className="h2 mb-rlv-2-mobile mb-lg-rlv-2-desktop text-center">
						<strong>Riliv Story</strong>
					</h2>
					<div className="row">
						{/* STORY CARDS WITH PAGINATION */}
						{StoriesContent.slice(page * 9 - 9, page * 9).map((data, index) => {
							return <StoryCard key={`storyCard${index}`} {...data} />;
						})}
						{/* STORY CARDS WITH PAGINATION END */}
					</div>
					<StoryPagination
						page={page}
						maxPage={maxPage}
						command={(page) => onPageChange(page)}
					/>
				</div>
			</BodyContainer>
			{/* RILIV STORY END */}

			{/* ACCORDION SOLUSI UNTUK ANDA */}
			<BodyContainer>
				<AccordionProductSection
					accordionId="accordionSolusiUntukAnda"
					title="Solusi Untuk Anda"
					show={true}
				>
					<ProductTenangDiRumah
						title="Beragam Konten Mindfulness untuk Tenang di Rumah"
						imgSrc="mask_group_86.png"
						imgAlt="Solusi tenang di rumah untuk Anda 1"
					>
						<p
							className="paragraph-riliv mb-rlv-C"
							style={{ lineHeight: "28px" }}
						>
							Meditasi terbukti dapat meningkatkan mood positif, stabilitas
							emosi yang bertahan lama, dan peningkatan fokus sehari-hari. Riset
							internal kami menunjukkan bahwa 94% user kami menganggap meditasi
							merubah hidup mereka, tingkat stress mereka menurun sebesar 45,6%,
							serta meningkatknya kepuasan hidup sebesar 22,4% dalam waktu 10
							hari.
						</p>
						<p
							className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							style={{ lineHeight: "28px" }}
						>
							Kami menyediakan kategori khusus berjudul{" "}
							<strong>Tenang di Rumah.</strong> Kategori ini berisi kumpulan
							meditasi yang telah kami sesuaikan untuk menghadapi pandemi ini.
							Seluruh meditasi pada kategori Tenang di Rumah bisa Anda akses
							kapanpun dan dimanapun secara GRATIS! Tunggu apalagi?
						</p>
						{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON */}
						<div className=" d-block d-lg-flex ">
							<a
								href="https://play.google.com/store/apps/details?id=nozero.apps1&hl=en"
								className="d-block mr-0 mr-lg-rlv-C mb-rlv-B mb-lg-0 text-left"
								target="_blank"
							>
								<ResponsiveImage
									imgSrc="./img/google_play.png"
									imgAlt="Download Riliv Google Play"
									w_desktop="162px"
									w_tablet="162px"
									w_mobile="162px"
									forceLeft
								/>
							</a>
							<a
								href="https://apps.apple.com/mn/app/riliv/id1510486066"
								className=""
								target="_blank"
							>
								<ResponsiveImage
									imgSrc="./img/app_store.png"
									imgAlt="Download Riliv App Store"
									w_desktop="143.6px"
									w_tablet="143.6px"
									w_mobile="143.6px"
									forceLeft
								/>
							</a>
						</div>
						{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON END */}
					</ProductTenangDiRumah>
					<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop">
						<ProductTenangDiRumah
							title="Bantuan Psikolog Profesional Online"
							imgSrc="mask_group_88.png"
							imgAlt="Solusi tenang di rumah untuk Anda 2"
						>
							<p
								className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop"
								style={{ lineHeight: "28px" }}
							>
								Rasa cemas, khawatir, panik, dan takut yang berlebihan
								menunjukkan bahwa Anda mungkin membutuhkan bantuan profesional.
								Kami dapat menghubungkan Anda dengan Psikolog berlisensi terkait
								masalah apapun, tanpa khawatir! Konseling dengan Psikolog kami
								dilakukan secara online, tanpa keluar rumah sehingga Anda tetap
								bisa #TenangdiRumah.
							</p>

							{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON */}
							<div className=" d-block d-lg-flex ">
								<a
									href="https://play.google.com/store/apps/details?id=nozero.apps1&hl=en"
									className="d-block mr-0 mr-lg-rlv-C mb-rlv-B mb-lg-0 text-left"
									target="_blank"
								>
									<ResponsiveImage
										imgSrc="./img/google_play.png"
										imgAlt="Download Riliv Google Play"
										w_desktop="162px"
										w_tablet="162px"
										w_mobile="162px"
										forceLeft
									/>
								</a>
								<a
									href="https://docs.google.com/forms/u/0/d/1RpbaGMqysXYDdOcOozh42geO_oS9PSfP08hhUpBpKj8/viewform?edit_requested=true"
									className=""
									target="_blank"
								>
									<ResponsiveImage
										imgSrc="./img/app_store.png"
										imgAlt="Download Riliv App Store"
										w_desktop="143.6px"
										w_tablet="143.6px"
										w_mobile="143.6px"
										forceLeft
									/>
								</a>
							</div>
							{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON END */}
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

			{/* ACCORDION SOLUSI TENAGA KESEHATAN */}
			<BodyContainer>
				<AccordionProductSection
					accordionId="accordionSolusiuntukTenagaKesehatan"
					title="Solusi untuk Tenaga Kesehatan"
				>
					<ProductTenangDiRumah
						title="Riliv untuk Tenaga Kesehatan Profesional"
						imgSrc="mask_group_91.png"
						imgAlt="Riliv untuk Tenaga Kesehatan Profesional"
					>
						<p
							className="paragraph-riliv mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							style={{ lineHeight: "28px" }}
						>
							Dari dokter, perawat, pekerja laboratorium, hingga petugas
							kebersihan; tenaga kesehatan merupakan garda terdepan dalam
							penanganan pandemi Covid-19. Ada kerja luar biasa dari tenaga
							medis dalam penanganan medis yang membuat sebagian mereka
							mengalami kelelahan fisik dan mental. Oleh karena itu, kami akan
							membebaskan akses ke seluruh konten Meditasi Riliv secara GRATIS
							untuk seluruh tenaga kesehatan profesional di Indonesia.
						</p>
						{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON */}
						<div className=" d-block d-lg-flex ">
							<a
								href="https://play.google.com/store/apps/details?id=nozero.apps1&hl=en"
								className="d-block mr-0 mr-lg-rlv-C mb-rlv-B mb-lg-0 text-left"
								target="_blank"
							>
								<ResponsiveImage
									imgSrc="./img/google_play.png"
									imgAlt="Download Riliv Google Play"
									w_desktop="162px"
									w_tablet="162px"
									w_mobile="162px"
									forceLeft
								/>
							</a>
							<a
								href="https://apps.apple.com/mn/app/riliv/id1510486066"
								className=""
								target="_blank"
							>
								<ResponsiveImage
									imgSrc="./img/app_store.png"
									imgAlt="Download Riliv App Store"
									w_desktop="143.6px"
									w_tablet="143.6px"
									w_mobile="143.6px"
									forceLeft
								/>
							</a>
						</div>
						{/* DOWNLOAD FROM PLAYSTORE OR IOS BUTTON END */}
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

export default BersamaIndika;

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

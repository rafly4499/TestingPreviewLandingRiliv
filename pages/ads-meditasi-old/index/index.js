import BodyContainer from "../../../components/body-container/body-container.component";
import BootstrapScript from "../../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../../components/header/header-freshchat";
import RilivHeader from "../../../components/header/header.component";
import RilivNavbar from "../../../components/navbar/riliv_navbar.component";
import CardKenapaSection from "../../../components/page/homepage/card-kenapa-section/card-kenapa-section.component";
import HeaderRilivForCompany from "../../../components/page/riliv-for-company/header-page/header-page.component";
import SimpleSnackbar from "../../../components/simple-snackbar/simple-snackbar.component";
import { ResponsiveText_H1 } from "../../../components/responsive-text/responsive-text.component";
import ResponsiveImage from "../../../components/responsive-image/responsive-image.component";
import CentangHijauList from "../../../components/centang-hijau-list";
import AdsMeditasiPriceBox from "../../../components/page/ads-meditasi/price-box";
import MediaImages from "../../../components/media-images/media-images.component";
import AdsMeditasiHeaderSetup from "../../../components/page/ads-meditasi/header-setup";
import AdsMeditasiHeaderList from "../../../components/page/ads-meditasi/header-list";
import { AdsMeditasiButton } from "../../../components/page/ads-meditasi/button";

const CompanyPage = () => {
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
			<RilivNavbar hideMenu currentPage="Promo" center />
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>

			{/* HEADER SECTION */}
			<div
				className="container-fluid px-0"
				style={{ position: "relative", overflow: "hidden" }}
			>
				<AdsMeditasiHeaderSetup />
				<BodyContainer>
					<div className="d-lg-flex d-block py-rlv-3-mobile py-lg-rlv-3-desktop align-items-center">
						<div
							className="mr-lg-rlv-1-mobile mr-0 mb-rlv-3-mobile mb-lg-0 text-center text-lg-left d-none d-lg-block"
							style={{ maxWidth: "409px" }}
						>
							<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Solusi Tepat Untuk Kamu yang Ingin Mendapatkan Hidup Tenang dan
								Bahagia
							</h1>
							<AdsMeditasiButton link="#lihatSolusi" textLink="Lihat Solusi" />
						</div>
						<div className="mr-lg-rlv-1-mobile mr-0 mb-rlv-3-mobile mb-lg-0 text-center text-lg-left d-block d-lg-none">
							<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Solusi Tepat Untuk Kamu yang Ingin Mendapatkan Hidup Tenang dan
								Bahagia
							</h1>
							<AdsMeditasiButton link="#lihatSolusi" textLink="Lihat Solusi" />
						</div>
						<div
							className="bg-white py-rlv-1-mobile py-lg-rlv-1-desktop px-rlv-C"
							style={{ borderRadius: "10px" }}
						>
							<h2 className="h4 font-weight-semibold mb-rlv-C">
								Apakah ini yang sering kamu rasakan?
							</h2>
							<AdsMeditasiHeaderList />
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
					<h1 className="my-rlv-1-mobile my-lg-rlv-1-desktop font-weight-semibold text-center">
						Kamu Layak Mendapatkan Kebahagiaan
					</h1>
					<p className="paragraph-riliv h5 text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Merasa lelah hati, lelah pikiran, lelah fisik, serba lelah rasanya
						ingin berhentiin waktu.. berhentiin semua yang lagi terjadi.. hanya
						untuk merasakan istirahat yang benar-benar istirahat
						<br />
						<br />
						Kamu sudah berusaha yang terbaik, mencoba melakukan yang terbaik,
						tapi rasanya hidup tidak berpihak dan ada saja masalah yang datang
						Sekarang, yang kamu butuhkan adalah menceritakan seluruh
						permasalahan itu ke psikolog profesional untuk mendapatkan solusi
						pasti
						<br />
						<br />
						Seperti layaknya hidup, kamu ingin setidaknya ada seseorang yang
						siap mendengarkan curhatanmu tanpa menghakimi, tanpa juga
						membanding-bandingkan masalahmu dengan orang lain, dan bahkan tidak
						menganggap kamu hanya berlebihan
						<br />
						<br />
						Kalau kamu siap untuk punya cara menemukan kebahagiaanmu dan
						menemukan solusi dari setiap permasalahan saat ini, kamu ada di
						tempat yang benar
					</p>
					<div className="text-center">
						<AdsMeditasiButton link="#lihatSolusi" textLink="Lihat Solusi" />
					</div>
				</BodyContainer>
			</div>

			{/* KENAPA RILIV SECTION */}
			<div
				className="bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("/img-home/background-kenapa.png")' }}
			>
				<BodyContainer key="body6">
					<div className="py-rlv-3-mobile py-lg-rlv-3-desktop row align-items-center">
						<div className="col-12 col-lg-6">
							<h2 className="text-white mb-lg-rlv-1-mobile mb-rlv-1-mobile text-center text-lg-left font-weight-semibold">
								Kenapa Riliv adalah sahabat terbaik Anda untuk Sehat Mental?
							</h2>
						</div>
						<div className="col-12 col-lg-6">
							<div className="row px-rlv-B">
								<CardKenapaSection
									imgSrc="/img-home/group_12344.png"
									imgAlt="user sehat mental"
									imgWidth="65px"
									textTitle="+200.000"
									textDescription="User lebih sehat mental dengan layanan di Aplikasi Riliv"
									customCol="col-12 col-lg-6"
								/>
								<CardKenapaSection
									imgSrc="/img-home/group_12259.png"
									imgAlt="Sehat Mental Meditasi Riliv"
									imgWidth="65px"
									textTitle="94%"
									textDescription="Pengguna lebih sehat mental dengan meditasi Riliv"
									customCol="col-12 col-lg-6"
								/>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* TESTIMONI SECTION */}
			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop bg-riliv-level-5">
				<BodyContainer>
					<h1 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center font-weight-semibold">
						Udah Lebih Dari 100.000 Orang Merasakan Manfaat Dari Meditasi di
						Riliv
					</h1>
					<div className="row">
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_4.png" style={{ width: "100%" }} />
						</div>
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_5.png" style={{ width: "100%" }} />
						</div>
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_3.png" style={{ width: "100%" }} />
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* MANFAAT MEDITASI SECTION */}
			<BodyContainer>
				<div id="lihatSolusi" className="my-rlv-4-mobile my-lg-rlv-4-desktop">
					<div
						className="d-flex justify-content-center bg-riliv-level-5 mb-rlv-4-mobile mb-lg-rlv-4-desktop"
						style={{ borderRadius: "8px" }}
					>
						<img src="/img-ads/meditasi.png" style={{ width: "70%" }} />
					</div>
					<p className="h2 font-weight-semibold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Banyak Artis Telah Mencoba dan Mengisi Suara
					</p>
					<img
						src="/img-ads/meditasi_section.jpg"
						className="mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ width: "100%" }}
					/>
					<div className="row">
						<div className="col-12 col-lg-6">
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
						</div>
						<div className="col-12 col-lg-6">
							<p className="h2 font-weight-semibold mb-lg-rlv-C mb-rlv-A">
								Coba Premium Meditasi Riliv Sekarang
							</p>
							<AdsMeditasiPriceBox
								identifier="promoBox"
								link="/ads-meditasi/promo"
								textLink="Dapatkan Sekarang"
								startPrice="Rp. 60.000/2 bulan"
								promoPrice="Rp. 49.000/2 bulan"
							/>
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

export default CompanyPage;

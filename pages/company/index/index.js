import BodyContainer from "../../../components/body-container/body-container.component";
import BootstrapScript from "../../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../../components/header/header-freshchat";
import RilivHeader from "../../../components/header/header.component";
import {
	CaraKerjaDesktop,
	CaraKerjaMobile,
} from "../../../components/page/riliv-for-company/cara-kerja/cara-kerja.section";
import HeaderRilivForCompany from "../../../components/page/riliv-for-company/header-page/header-page.component";
import KalkulatorKaryawan from "../../../components/page/riliv-for-company/kalkulator-karyawan-section/kalkulator-result.section";
import MengapaRilivCard from "../../../components/page/riliv-for-company/mengapa-riliv/mengapa-riliv.component";
import RilivNavbarCompanyResources from "../../../components/page/riliv-for-company/navbar-company";
import OverviewFeature from "../../../components/page/riliv-for-company/overview-fitur/overview-fitur.component";
import PenghargaanCard from "../../../components/page/riliv-for-company/penghargaan/penghargaan.component";
import PenghargaanSlider from "../../../components/page/riliv-for-company/penghargaan/penghargaan.slider";
import PermasalahanCard from "../../../components/page/riliv-for-company/permasalahan-card/permasalahan-card.component";
import RequestDemoForm from "../../../components/page/riliv-for-company/request-demo/request-demo.component";
import SolusiTerbukti from "../../../components/page/riliv-for-company/solusi-terbukti/solusi-terbukti.component";
import TrustedByImage from "../../../components/page/riliv-for-company/trusted-by-images/trusted-by-image.component";
import SimpleSnackbar from "../../../components/simple-snackbar/simple-snackbar.component";
import { OVERVIEW_FEATURE_CONTENT } from "../../../contents/riliv-for-company/overview-feature.contens";

const CompanyPage = () => {
	return (
		<div>
			<RilivHeader
				customTitle="Riliv for company - Indonesian Employee Assistance Program"
				customDescription="Layanan kesehatan mental terpadu untuk karyawan di perusahaan Anda agar lebih sehat dan bahagia."
			>
				<HeaderRilivForCompany
					customTitle="Riliv for company - Indonesian Employee Assistance Program"
					customDescription="Layanan kesehatan mental terpadu untuk karyawan di perusahaan Anda agar lebih sehat dan bahagia."
				/>
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<RilivNavbarCompanyResources currentPage="Riliv for Company" />
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>

			{/* HEADER SECTION */}
			<div
				className="container-fluid px-0"
				style={{ overflow: "hidden", backgroundColor: "#1fcedc" }}
			>
				<div
					className="bg-header d-block d-md-none"
					style={{
						backgroundImage: "url('/img-company/mask_group_38.webp')",
						minHeight: "40vh",
					}}
				></div>
				<div
					className="bg-header d-none d-md-block d-lg-none"
					style={{
						backgroundImage: "url('/img-company/mask_group_38.webp')",
						minHeight: "60vh",
					}}
				></div>
				<BodyContainer>
					<div className="row text-center text-lg-left">
						<div className="col-12 col-lg-6 order-2 order-lg-1 my-rlv-5-mobile my-lg-rlv-5-desktop">
							<h1 className="h2 text-white mb-lg-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-bold">
								Bantu Karyawan Anda Lebih Sehat dan Bahagia, Dimanapun dan
								Kapanpun
							</h1>
							<h2 className="paragraph-riliv text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								1 dari 4 orang terganggu kesehatan mentalnya akibat
								pekerjaannya. Riliv adalah solusi komprehensif nomor 1 di
								Indonesia untuk mengukur, memantau dan meningkatkan kesehatan
								mental karyawan hanya dalam satu aplikasi.
							</h2>
							<div className="d-flex flex-wrap flex-lg-nowrap justify-content-lg-start justify-content-center align-items-start">
								<a
									href="#requestdemo"
									className="btn btn-special-grad-1 btn-fix text-white font-weight-semibold mr-0 mr-sm-rlv-B mx-rlv-A mx-sm-0 mb-rlv-B"
									style={{ fontSize: "16px" }}
								>
									Request Demo
								</a>
								<a
									href="https://api.whatsapp.com/send?phone=6285785875736"
									target="_blank"
									className="btn btn-outline-riliv-special-2 bg-white btn-fix font-weight-semibold mx-rlv-A mx-sm-0"
									style={{ fontSize: "16px" }}
								>
									Kontak Kami
								</a>
							</div>
							<div className="d-none d-xl-block mb-rlv-5-desktop"></div>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2">
							<div
								className="d-none d-lg-block"
								style={{
									backgroundImage: "url('/img-company/mask_group_38.webp')",
									height: "100%",
									backgroundSize: "cover",
									width: "49vw",
									backgroundPosition: "bottom left",
								}}
							></div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* TRUSTED BY */}
			<BodyContainer key="body3">
				<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-rlv-5-mobile mt-lg-rlv-5-desktop font-weight-semibold">
					Dipercaya oleh
				</h2>

				{/* Dipercaya oleh mobile */}
				<div className="row text-center d-flex d-lg-none">
					<TrustedByImage
						key="trusted2"
						photoUrl="/img-company/bbb.webp"
						photoAlt="danone"
						imgHeight="66px"
					/>
					<TrustedByImage
						key="trusted3"
						photoUrl="/img-company/aaaa.webp"
						photoAlt="unair"
						imgHeight="83px"
					/>
					<TrustedByImage
						key="trusted1"
						photoUrl="/img-company/PENSs.webp"
						photoAlt="PENS"
						imgHeight="83px"
					/>
					<TrustedByImage
						key="trusted5"
						photoUrl="/img-company/ccc.webp"
						photoAlt="ingenico group"
						imgHeight="50px"
					/>

					<TrustedByImage
						key="trusted99"
						photoUrl="/img-company/Kapalapii.webp"
						photoAlt="Kapal Api"
						imgHeight="101px"
					/>

					<TrustedByImage
						key="trusted5"
						photoUrl="/img-company/company_tokopedia.png"
						photoAlt="Tokopedia"
						imgHeight="90px"
					/>

					<TrustedByImage
						key="trusted98"
						photoUrl="/img-company/company_bfi.png"
						photoAlt="BFI"
						imgHeight="69px"
					/>

					<TrustedByImage
						key="trusted6"
						photoUrl="/img-company/company_multibintang.png"
						photoAlt="Multibintang"
						imgHeight="72px"
					/>

					<TrustedByImage
						key="trusted7"
						photoUrl="/img-company/company_shopback.png"
						photoAlt="Shopback"
						imgHeight="55px"
					/>

					<TrustedByImage
						key="trusted8"
						photoUrl="/img-company/company_moselo.png"
						photoAlt="Moselo"
						imgHeight="36px"
					/>

					<TrustedByImage
						key="trusted9"
						photoUrl="/img-company/company_KPK.png"
						photoAlt="KPK"
						imgHeight="43px"
					/>

					<TrustedByImage
						key="trusted10"
						photoUrl="/img-company/company_alterra.png"
						photoAlt="alterra"
						imgHeight="50px"
					/>
				</div>

				{/* Dipercaya oleh desktop */}
				<div className="d-lg-block d-none mb-rlv-2-mobile mb-lg-rlv-2-desktop">
					<div className="d-flex justify-content-center align-items-center flex-wrap">
						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/bbb.webp" alt="danone" style={{width: "auto", maxHeight: "66px"}} />
						</div>
						
						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/aaaa.webp" alt="unair" style={{width: "auto", maxHeight: "83px"}} />
						</div>

						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/PENSs.webp" alt="PENS" style={{width: "auto", maxHeight: "83px"}} />
						</div>

						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/ccc.webp" alt="ingenico group" style={{width: "auto", maxHeight: "50px"}} />
						</div>

						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/Kapalapii.webp" alt="Kapal Api" style={{width: "auto", maxHeight: "101px"}} />
						</div>
						
						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_tokopedia.png" alt="Tokopedia" style={{width: "auto", maxHeight: "90px"}} />
						</div>
						
						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_bfi.png" alt="BFI Finance" style={{width: "auto", maxHeight: "69px"}} />
						</div>
						
						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_multibintang.png" alt="multibintang" style={{width: "auto", maxHeight: "50px"}} />
						</div>
						
						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_shopback.png" alt="shopback" style={{width: "auto", maxHeight: "55px"}} />
						</div>

						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_moselo.png" alt="moselo" style={{width: "auto", maxHeight: "36px"}} />
						</div>

						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_KPK.png" alt="KPK" style={{width: "auto", maxHeight: "43px"}} />
						</div>

						<div className="mx-rlv-B mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<img src="/img-company/company_alterra.png" alt="Alterra" style={{width: "auto", maxHeight: "50px"}} />
						</div>
					</div>

				</div>
				<hr
					className="mb-0 mt-rlv-1-mobile mt-lg-0"
					style={{ borderTop: "1px solid #afafaf" }}
				/>
			</BodyContainer>

			{/* PERMASALAHAN SECTION */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop text-center">
					<h2 className="text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-bold">
						Permasalahan Kesehatan Mental Pada Karyawan Dapat Merugikan
						Perusahaan
					</h2>
					<div className="row">
						<PermasalahanCard
							imgSrc="/img-company/rugi.webp"
							imgAlt="karyawan tidak produktif"
							Title="Karyawan Tidak Produktif"
							Description="Riset dari Gallup, Inc. melaporkan bahwa 76% karyawan di Indonesia tidak termotivasi dengan pekerjaan mereka"
						/>
						<PermasalahanCard
							imgSrc="/img-company/absen.webp"
							imgAlt="karyawan cenderung absen"
							Title="Karyawan Cenderung Absen"
							Description="Masalah kesehatan mental menyebabkan masing-masing karyawan kehilangan 27 hari kerja per tahun"
						/>
						<PermasalahanCard
							imgSrc="/img-company/pengeluaran.webp"
							imgAlt="tingkat turnover tinggi"
							Title="Tingkat Turnover yang Tinggi"
							Description="Indonesia berada di peringkat ke-3 di dunia sebagai negara dengan tingkat turnover yang tinggi, mencapai mencapai 25,8%"
						/>
					</div>
					<p className="h5 mt-rlv-B mt-lg-rlv-C mb-0">
						Pemeliharaan kestabilan psikologis dapat meredam dampak negatif dari
						ketidakpuasan kerja, mencegah intensi turnover, dan kerugian yang
						disebabkan oleh kontra produktivitas karyawan{" "}
					</p>
				</div>
			</BodyContainer>

			{/* SECTION KALKULATOR KARYAWAN */}
			<div
				className="container-fluid px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{ backgroundColor: "#ebfdff" }}
			>
				<BodyContainer>
					<h2 className="text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-bold text-center">
						Berapa banyak karyawan di perusahaan Anda?
					</h2>
					<div style={{ height: "40px" }}></div>
					<KalkulatorKaryawan />
				</BodyContainer>
			</div>

			{/* OVERVIEW FITUR */}
			<BodyContainer>
				<div className="pb-rlv-5-mobile pb-lg-rlv-5-desktop">
					{OVERVIEW_FEATURE_CONTENT.map((data, index) => {
						return (
							<OverviewFeature
								key={`OverviewFeature${index}`}
								invers={data.invers}
								imgSrc={data.imgSrc}
								imgAlt={data.imgAlt}
								Title={data.Title}
								Description={data.Description}
								imgKey={`OverviewImg${index}`}
							/>
						);
					})}
				</div>
			</BodyContainer>

			{/* BAGAIMANA CARA KERJA */}
			<div className="container-fluid px-0 bg-riliv-level-1 text-center py-rlv-5-mobile py-lg-rlv-5-desktop">
				<BodyContainer>
					<h2 className="text-white font-weight-bold mb-0">
						Bagaimana cara kerja sistem ini?
					</h2>
					<div className="d-none d-lg-block">
						<CaraKerjaDesktop />
					</div>
					<div className="d-block d-lg-none">
						<CaraKerjaMobile />
					</div>
				</BodyContainer>
			</div>

			{/* SOLUSI */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
					<h2 className="text-gray-5 mb-0 text-center font-weight-bold">
						Solusi yang terbukti berdampak pada klien kami
					</h2>
					<div className="row">
						<SolusiTerbukti
							Title=">300.000"
							Description="orang telah terbantu oleh Riliv"
						/>
						<SolusiTerbukti
							Title="94%"
							Description="user Riliv mengatakan meditasi merubah hidup mereka"
						/>
						<SolusiTerbukti
							Title="4,7/5"
							Description="rating konten meditasi kami, yang didesain secara ilmiah oleh pakar meditasi"
						/>
					</div>
				</div>
			</BodyContainer>

			{/* MENGAPA RILIV */}
			<div
				className="container-fluid px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{ backgroundColor: "#f8f8f8" }}
			>
				<BodyContainer>
					<h2 className="font-weight-bold text-center mb-0">Mengapa Riliv?</h2>
					<div className="row">
						<MengapaRilivCard
							imgSrc="/img-company/rahasia.webp"
							imgAlt="terjaga kerahasiaan"
							Title="Terjaga Kerahasiaan"
							Description="Prinsip utama kami adalah menjaga kerahasiaan dan keamanan user demi kenyamanan penggunaan"
						/>
						<MengapaRilivCard
							imgSrc="/img-company/murah.webp"
							imgAlt="terjangkau"
							Title="Terjangkau"
							Description="Aplikasi kami didesain oleh pakar meditasi dan bisa diimplementasikan dengan mudah dan bisa diukur keberhasilannya"
						/>
						<MengapaRilivCard
							imgSrc="/img-company/goal_fokus.webp"
							imgAlt="produktivitas terjaga"
							Title="Produktivitas Terjaga"
							Description="Berkurangnya masalah pada karyawan akan membuat mereka fokus dalam menyelesaikan pekerjaan"
						/>
					</div>
					<div className="row">
						<a
							href="#requestdemo"
							className="btn btn-special-grad-1 btn-fix text-white mt-rlv-1-mobile mt-lg-rlv-1-desktop mx-auto font-weight-semibold"
							style={{ fontSize: "16px" }}
						>
							Request Demo
						</a>
					</div>
				</BodyContainer>
			</div>

			{/* APA KATA MEREKA */}
			{/* <div
				className="d-none container-fluid px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{backgroundColor: "#5e6db3"}}
			>
				<BodyContainer>
					<h2 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-bold text-white text-center">
						Apa kata mereka tentang Riliv?
					</h2>
					<ProductSlider ProductToShow={1} withArrow={true}>
						<div>
							<ProductTestimoni
								imgSrc="/img-company/murah.webp"
								imgAlt="testimoni 1"
								review="“Recomended banget buat seseorang yang lagi ada masalah tapi bingung mau curhat ke siapa. Responnya juga lumayan cepat, The best lah pokoknya! Thank you Riliv”"
								reviewer="Saiful, User Riliv"
							/>
						</div>
						<div>
							<ProductTestimoni
								imgSrc="/img-company/murah.webp"
								imgAlt="testimoni 1"
								review="“Recomended banget buat seseorang yang lagi ada masalah tapi bingung mau curhat ke siapa. Responnya juga lumayan cepat, The best lah pokoknya! Thank you Riliv”"
								reviewer="Saiful, User Riliv"
							/>
						</div>
						<div>
							<ProductTestimoni
								imgSrc="/img-company/murah.webp"
								imgAlt="testimoni 1"
								review="“Recomended banget buat seseorang yang lagi ada masalah tapi bingung mau curhat ke siapa. Responnya juga lumayan cepat, The best lah pokoknya! Thank you Riliv”"
								reviewer="Saiful, User Riliv"
							/>
						</div>
						<div>
							<ProductTestimoni
								imgSrc="/img-company/murah.webp"
								imgAlt="testimoni 1"
								review="“Recomended banget buat seseorang yang lagi ada masalah tapi bingung mau curhat ke siapa. Responnya juga lumayan cepat, The best lah pokoknya! Thank you Riliv”"
								reviewer="Saiful, User Riliv"
							/>
						</div>
					</ProductSlider>
				</BodyContainer>
			</div> */}

			{/* PENGHARGAAN */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop text-center">
					<h2 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Penghargaan yang Riliv Terima
					</h2>
					<PenghargaanSlider ProductToShow={2} withArrow={true}>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/mask_group_50.webp"
								imgAlt="Startup World Cup"
								imgWidth="100%"
								Title="Winner of Indonesia Entrepreneurship World Cup 2019"
								Description="Global Entrepreneurship Network (GEN)"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/mask_group_48.webp"
								imgAlt="Google Launchpad Accelerator Demo Day"
								imgWidth="100%"
								Title="Most Favorite Startup in Google Launchpad Accelerator Demo Day 2018"
								Description="Google Launchpad Accelerator by Digitaraya"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/mask_group_49.webp"
								imgAlt="Winner of Indonesia Startup Insight 2018"
								imgWidth="100%"
								Title="Winner of Indonesia Startup Insight 2018"
								Description="KinerjaBisa Holding Pte Ltd"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/mask_group_46.webp"
								imgAlt="Winners of Google Business Group Stories Search 2017"
								imgWidth="100%"
								Title="Winners of Google Business Group Stories Search 2017"
								Description="Google Inc."
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/tempo.webp"
								imgAlt="Best Sustainable Startup 2017"
								imgWidth="100%"
								Title="Best Sustainable Startup 2017"
								Description="Tempo Media"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/yseali_logo.webp"
								imgAlt="Indonesian Delegates of Young Southeast Asian Leaders Initiative (YSEALI) Academic Fellows for Social Entrepreneurship 2017"
								imgWidth="100%"
								Title="Indonesian Delegates of Young Southeast Asian Leaders Initiative (YSEALI) Academic Fellows for Social Entrepreneurship 2017"
								Description="U.S. Department of State"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/australia_awards.webp"
								imgAlt="Indonesian Delegates of Australia Awards 2016"
								imgWidth="100%"
								Title="Indonesian Delegates of Australia Awards 2016"
								Description="Australia Department of State"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/sg.webp"
								imgAlt="Best 16 Young Social Entrepreneurs (YSE) 2016"
								imgWidth="100%"
								Title="Best 16 Young Social Entrepreneurs (YSE) 2016"
								Description="Singapore International Foundation"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/startsby.webp"
								imgAlt="Top 3 Startups of Startup Sprint 2015"
								imgWidth="100%"
								Title="Top 3 Startups of Startup Sprint 2015"
								Description="EMTEK Group"
							/>
						</div>
						<div>
							<PenghargaanCard
								imgSrc="/img-company/gbg.webp"
								imgAlt="1st Winner AndroidOne #SatuMulai Competition 2015"
								imgWidth="100%"
								Title="1st Winner AndroidOne #SatuMulai Competition 2015"
								Description="Google Indonesia"
							/>
						</div>
					</PenghargaanSlider>
				</div>
			</BodyContainer>

			{/* REQUEST DEMO */}
			<div
				id="requestdemo"
				className="container-fluid px-0 bg-riliv-level-1 bg-header py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{
					background:
						'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("http://riliv.co/beta/img/hero-2.jpg")',
					backgroundSize: "cover",
				}}
			>
				<BodyContainer>
					<h2 className="text-center text-white font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Request Demo Program Riliv for Company
					</h2>
					<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-white text-center">
						Riliv for Company membantu perusahaan anda mensejahterakan karyawan
						dengan menyelesaikan permasalahan pribadi dan/atau masalah terkait
						pekerjaan yang dapat mempengaruhi kinerja, kesehatan, kesejahteraan
						mental dan emosional mereka.
					</p>
					<div className="px-0 px-lg-rlv-3-desktop">
						<RequestDemoForm />
					</div>
				</BodyContainer>
			</div>

			<RilivFooter />
			<BootstrapScript />
		</div>
	);
};

export default CompanyPage;

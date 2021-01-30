import RilivHeader from "../components/header/header.component";
import BootstrapScript from "../components/bootstrapScript/bootstrapScript";
import BodyContainer, {
	BodySpecialContainer,
} from "../components/body-container/body-container.component";

import RilivNavbar from "../components/navbar/riliv_navbar.component";
import RilivFooter from "../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../components/header/header-analytics-tagmanager";

import ResponsiveImage from "../components/responsive-image/responsive-image.component";
import MediaImages from "../components/media-images/media-images.component";
import SimpleSnackbar from "../components/simple-snackbar/simple-snackbar.component";

import HeaderHomepage from "../components/page/homepage/header-page/header-page.component";
import ProductDescription from "../components/page/homepage/product-description/product-description.component";
import ProductTestimoni from "../components/page/homepage/product-testimoni/product-testimoni.component";
import CardKenapaSection from "../components/page/homepage/card-kenapa-section/card-kenapa-section.component";

import { PRODUCT_SECTION } from "../contents/homepage/product-section.contents";
import { RILIV_FOR_COMPANY } from "../contents/homepage/riliv-for-company-section.contents";
import YukInstallSection from "../components/yuk-install";

const Home = () => {
	return (
		<div>
			<RilivHeader>
				<HeaderHomepage />
				<HeaderGTagManagerGAnalytics />
			</RilivHeader>
			<RilivNavbar
				currentPage="Beranda"
				urlCTA="https://play.google.com/store/apps/details?id=nozero.apps1"
				textCTA="Coba Aplikasi Sekarang"
			/>

			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			{/* HEADER SECTION */}
			<BodySpecialContainer
				key="body1"
				extraStyle={{ paddingLeft: "42px", paddingRight: "42px" }}
			>
				<div className="row my-rlv-3-mobile my-lg-rlv-3-desktop">
					<div className="col-12 col-lg-6">
						<ResponsiveImage
							key="HomeHeader"
							w_desktop="522px"
							w_tablet="440px"
							w_mobile="320px"
							imgAlt="Riliv Homepage"
							imgSrc="./img-home/ngayang.png"
						/>
					</div>

					<div className="col-12 col-lg-6 my-0 text-center text-lg-left my-rlv-2-desktop">
						<h1 className="mb-0 font-weight-bold">
							Aplikasi Kesehatan Mental No 1 di Indonesia
						</h1>
						<p className="h5 text-gray-5 my-rlv-1-mobile my-lg-rlv-1-desktop">
							Dapatkan solusi lengkap dan komprehensif untuk merawat dan menjaga
							kesehatan mentalmu. Hidup sehat mental dan bahagia tinggal
							selangkah lagi.
						</p>
						<button
							data-toggle="modal"
							data-target="#modalDownloadAndroidIos"
							className="btn btn-special-grad-1 btn-sm font-weight-normal text-white d-inline-block ml-auto mr-3 font-weight-semibold"
							style={{ fontSize: "14px" }}
						>
							Coba Aplikasi Sekarang
						</button>
					</div>
				</div>
			</BodySpecialContainer>

			<BodyContainer key="body2">
				<hr
					className="mt-rlv-5-mobile mt-lg-rlv-5-desktop mb-rlv-3-mobile mb-lg-rlv-3-desktop"
					style={{ borderTop: "1px solid #afafaf" }}
				/>
			</BodyContainer>

			{/* MEDIA SECTION */}
			<BodyContainer key="body3">
				<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
					Telah Diliput Di
				</h2>
				<div className="row text-center">
					<div className="col-lg-1 d-none d-lg-inline"></div>
					<MediaImages
						key="media1"
						photoUrl="./img-home/kumparan.png"
						photoAlt="kumparan"
					/>
					<MediaImages
						key="media2"
						photoUrl="./img-home/liputan6.png"
						photoAlt="liputan6"
					/>
					<MediaImages
						key="media3"
						photoUrl="./img-home/techinasia.png"
						photoAlt="techinasia"
					/>
					<MediaImages
						key="media4"
						photoUrl="./img-home/the_straits.png"
						photoAlt="the straits"
					/>
					<MediaImages
						key="media5"
						photoUrl="./img-home/thejakarta.png"
						photoAlt="the jakarta post"
					/>

					<div className="col-lg-1 d-none d-lg-inline"></div>
					<div className="col-lg-1 d-none d-lg-inline"></div>
					<MediaImages
						key="media6"
						photoUrl="./img-home/tirto.png"
						photoAlt="tirto"
					/>
					<MediaImages
						key="media7"
						photoUrl="./img-home/conversation.png"
						photoAlt="conversation"
					/>
					<MediaImages
						key="media8"
						photoUrl="./img-home/detik.png"
						photoAlt="detikcom"
					/>
					<MediaImages
						key="media9"
						photoUrl="./img-home/forbes.png"
						photoAlt="forbes"
					/>
					<MediaImages
						key="media10"
						photoUrl="./img-home/idn.png"
						photoAlt="idn times"
					/>
					<div className="col-lg-1 d-none d-lg-inline"></div>
				</div>
				<p className="text-center text-gray-5 mt-rlv-B h5">
					dan belasan media lainnya
				</p>
			</BodyContainer>

			<BodyContainer key="body4">
				<hr
					className="mb-rlv-5-mobile mb-lg-rlv-5-desktop mt-rlv-3-mobile mt-lg-rlv-3-desktop"
					style={{ borderTop: "1px solid #afafaf" }}
				/>
			</BodyContainer>

			{/* PRODUCT SECTION */}
			<BodyContainer key="body5">
				{PRODUCT_SECTION.map((data, index) => {
					let { dataDescription, dataTestimoni } = data;
					return (
						<div
							key={`DivProductSection${index}0`}
							className="mb-rlv-5-mobile mb-lg-rlv-5-desktop"
						>
							<ProductDescription
								key={`ProductDescriptions${index}`}
								data={dataDescription}
								imgKey={`ProductDescImg${index}`}
								productSectionKey={`ProductDescriptionSect${index}`}
							/>
							<ProductTestimoni
								key={`ProductTestimoni${index}`}
								data={dataTestimoni}
							/>
						</div>
					);
				})}
			</BodyContainer>

			{/* KENAPA RILIV SECTION */}
			<div
				className="bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("./img-home/background-kenapa.png")' }}
			>
				<BodyContainer key="body6">
					<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
						<h2 className="text-white mb-lg-rlv-5-mobile mb-rlv-5-mobile text-center font-weight-semibold">
							Kenapa Riliv adalah sahabat terbaik Anda untuk Sehat Mental?
						</h2>
						<div className="row px-rlv-B">
							<CardKenapaSection
								imgSrc="./img-home/group_12344.png"
								imgAlt="user sehat mental"
								imgWidth="65px"
								textTitle="+200.000"
								textDescription="user lebih sehat mental"
							/>
							<CardKenapaSection
								imgSrc="./img-home/group_12260.png"
								imgAlt="Himpunan Psikologi Indonesia"
								imgWidth="65px"
								textTitle="100%"
								textDescription="psikolog Riliv memiliki lisensi resmi Himpunan Psikologi Indonesia"
							/>
							<CardKenapaSection
								imgSrc="./img-home/group_12259.png"
								imgAlt="Sehat Mental Meditasi Riliv"
								imgWidth="65px"
								textTitle="94%"
								textDescription="pengguna lebih sehat mental dengan meditasi Riliv"
							/>
							<CardKenapaSection
								imgSrc="./img-home/surface1.png"
								imgAlt="90% tingkat kepuasan konseling online riliv"
								imgWidth="77px"
								textTitle="90%"
								textDescription="tingkat kepuasan konseling online Riliv"
							/>
						</div>
						<div className=" row">
							<button
								data-toggle="modal"
								data-target="#modalDownloadAndroidIos"
								className="mx-auto btn btn-special-grad-1 font-weight-semibold text-white d-inline-block paragraph-riliv"
							>
								Coba Aplikasi Sekarang
							</button>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* RILIV FOR COMPANY SECTION */}
			<BodyContainer>
				<div className=" py-rlv-5-mobile py-lg-rlv-5-desktop">
					<ProductDescription
						key={`ProductDescriptionsCompany`}
						data={RILIV_FOR_COMPANY.dataDescription}
						imgKey={`ProductDescImgCompany`}
						productSectionKey={`ProductDescriptionSectCompany`}
					/>
				</div>
			</BodyContainer>

			{/* YUK SECTION */}
			<YukInstallSection />

			<RilivFooter />
			<BootstrapScript />
		</div>
	);
};

export default Home;

import React, { Fragment, useState } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";

import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";

import ImpactDescription from "../../components/page/hening/impact-description/impact-description.component";
import KataMerekaSlider from "../../components/page/hening/apa-katamereka/apa-katamereka-slider.component";
import KataMereka from "../../components/page/hening/apa-katamereka/apa-katamereka.component";

import HeningHeaderPage from "../../components/page/hening/header-page/header-page.component";
import YukInstallSection from "../../components/yuk-install";
const HeningPage = () => {
	const [email, setEmail] = useState("");
	return (
		<Fragment>
			<RilivHeader>
				<HeningHeaderPage />
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbar
				currentPage="Meditasi"
				urlCTA="https://play.google.com/store/apps/details?id=nozero.apps1"
				textCTA="Coba Aplikasi Sekarang"
			/>

			{/* MODAL BOOTSTRAP */}
			<div
				id="modalYoutubeVideo"
				className="modal fade bd-example-modal-lg"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe
								id="existing-iframe-example"
								className="embed-responsive-item"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/a2lcSy_ZbJw"
								frameBorder="0"
								allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>

			{/* HEADER DESKTOP */}
			<div
				className="container-fluid px-0 bg-header d-none d-lg-block"
				style={{
					backgroundImage: 'url("./img-hening/group_12542.png")',
					overflow: "hidden",
					backgroundColor: "#0fbace",
				}}
			>
				<BodyContainer>
					<div className="row">
						<div className="col-12 col-lg-7 order-2 order-lg-1 py-rlv-5-mobile py-lg-rlv-5-desktop">
							<div
								className="bg-white p-rlv-1-mobile p-lg-rlv-1-desktop mb-0 mb-lg-rlv-3-desktop rounded-lg"
								style={{ boxShadow: "0 20px 30px #3333331a" }}
							>
								<h1 className="h2 font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
									Ubah Hidup Anda dengan Hening Sejenak
								</h1>

								<p className="h5 text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
									Memperkenalkan Hening, aplikasi meditasi dengan instruksi
									bahasa Indonesia dan tampilan modern.
								</p>
								<button
									data-toggle="modal"
									data-target="#modalDownloadAndroidIos"
									className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
								>
									Coba Sekarang
								</button>
							</div>
						</div>
						<div className="col-12 col-lg-5 order-1 order-lg-2">
							<div
								className="d-none d-lg-inline-block"
								style={{
									backgroundImage: "url('./img-hening/Mask Group 73.png')",
									height: "100%",
									backgroundSize: "cover",
									width: "44vw",
									backgroundPosition: "left",
								}}
							></div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* HEADER MOBILE */}
			<div className="d-block d-lg-none">
				<div
					className="container-fluid px-0"
					style={{ backgroundImage: 'url("./img-hening/group_12542.png")' }}
				>
					<div
						className="d-block pt-rlv-5-desktop"
						style={{
							backgroundImage: "url('./img-hening/Mask Group 73.png')",
							backgroundSize: "cover",
							backgroundPosition: "left",
						}}
					>
						<div style={{ height: "50vw" }} />
					</div>
				</div>
				<BodyContainer>
					<div className="mt-rlv-1-mobile mb-rlv-5-mobile">
						<h1 className="h2 font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
							Ubah Hidupmu Dengan Hening Sejenak
						</h1>
						<p className="h5 text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							Memperkenalkan Hening, aplikasi meditasi dengan instruksi bahasa
							Indonesia dan tampilan modern.
						</p>
						<button
							data-toggle="modal"
							data-target="#modalDownloadAndroidIos"
							className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
						>
							Coba Sekarang
						</button>
					</div>
					<hr />
				</BodyContainer>
			</div>

			{/* LIHAT APA YANG TERJADI */}
			<BodyContainer>
				<div className="row py-rlv-5-mobile py-lg-rlv-5-desktop">
					<div className="col-12 col-lg-6">
						<button
							className="border-0 bg-transparent"
							data-toggle="modal"
							data-target=".bd-example-modal-lg"
						>
							<ResponsiveImage
								key="HeningLihat"
								w_desktop="500px"
								w_tablet="100%"
								w_mobile="100%"
								imgAlt="Riliv Hening Lihat Yang Terjadi"
								imgSrc="./img-hening/Mask Group 74.png"
							/>
							<div style={{ position: "absolute", left: "50%", top: "40%" }}>
								<img
									className="d-none d-lg-block"
									src="./img-hening/group_18.png"
									alt=""
									style={{
										position: "relative",
										width: "120px",
										zIndex: "2",
										left: "-70%",
										top: "-50%",
									}}
								/>
								<img
									className="d-block d-lg-none"
									src="./img-hening/group_18.png"
									alt=""
									style={{
										position: "relative",
										width: "120px",
										zIndex: "2",
										left: "-50%",
										top: "-50%",
									}}
								/>
							</div>
						</button>
					</div>
					<div className="col-12 col-lg-6 text-center text-lg-left">
						<h2 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop text-gray-5 mt-rlv-1-mobile mt-lg-0">
							Cara Mudah untuk Hening Sejenak
						</h2>
						<p className="h5 text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							Hanya dengan 1 perangkat, Anda dapat menikmati meditasi sesuai
							kebutuhan. Pilih meditasi yang Anda inginkan, lalu mulai sesi
							meditasinya.
						</p>
						<button
							data-toggle="modal"
							data-target="#modalDownloadAndroidIos"
							className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
						>
							Coba Sekarang
						</button>
					</div>
				</div>
			</BodyContainer>

			{/* IMPACT DESCRIPTION */}
			<ImpactDescription
				backgroundSrc="./img-hening/background_1.png"
				backgroundPos="bottom"
				imgSrc="./img-hening/mask_group_75.png"
				imgAlt="Keterampilan yang Mengubah Anda"
				imgKey="HeningImpact1"
				title="Keterampilan yang Mengubah Anda"
				titleColor="#4c5891"
				description="Nikmati lebih dari 500 konten meditasi yang dikemas secara praktis dan mudah diterapkan. Cukup luangkan 10 menit sehari dan ubah hidup anda."
				descriptionColor="#4c5891"
				invers={true}
			>
				<button
					data-toggle="modal"
					data-target="#modalDownloadAndroidIos"
					className="btn btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A text-riliv-special-1"
					style={{ backgroundColor: "white" }}
				>
					Coba Sekarang
				</button>
			</ImpactDescription>
			<ImpactDescription
				backgroundSrc="./img-hening/background_3.png"
				backgroundPos="top"
				imgSrc="./img-hening/mask_group_76.png"
				imgAlt="Ini Rahasia Menjadi Lebih Chill dan Kalem yang Kekinian "
				imgKey="HeningImpact2"
				title="Ini Rahasia Menjadi Lebih Chill dan Kalem yang Kekinian "
				titleColor="#f395ab"
				description="Dengan Hening, kini tak perlu repot dalam melakukan Meditasi! Hanya dalam satu genggaman, Anda dapat duduk dengan nyaman dimanapun, pejamkan mata dan dengarkan instruksi meditasinya."
				descriptionColor="#ffffff"
				invers={false}
			>
				<button
					data-toggle="modal"
					data-target="#modalDownloadAndroidIos"
					href="https://play.google.com/store/apps/details?id=nozero.apps1"
					className="btn btn-block d-block btn-special-grad-1 btn-lg-fix font-weight-semibold px-rlv-A"
				>
					Coba Sekarang
				</button>
			</ImpactDescription>
			<ImpactDescription
				backgroundSrc="./img-hening/background_4.png"
				backgroundPos="top"
				imgSrc="./img-hening/mask_group_77.png"
				imgAlt="Satu Langkah Sederhana yang Terbukti Efektif"
				imgKey="HeningImpact3"
				title="Satu Langkah Sederhana yang Terbukti Efektif"
				titleColor="#4c5891"
				description="Meditasi dengan Hening terbukti efektif dalam meningkatkan kualitas hidup Anda. Setelah 10 hari penggunaan, 94% pengguna Hening merasa lebih damai dan tingkat stres berkurang sebesar 45,6%."
				descriptionColor="#4c5891"
				invers={true}
			>
				<button
					data-toggle="modal"
					data-target="#modalDownloadAndroidIos"
					className="btn btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A text-riliv-special-1"
					style={{ backgroundColor: "white" }}
				>
					Coba Sekarang
				</button>
			</ImpactDescription>

			{/* COBA HENING SEKARANG */}
			<div
				className="container-fluid px-0 bg-header py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{
					backgroundImage: 'url("./img-hening/group_7.png")',
					backgroundPosition: "center",
				}}
			>
				<BodyContainer>
					<div className="row">
						<div className="col-12 col-lg-6 order-2 order-lg-1">
							<img
								className="d-none d-lg-block text-center mx-auto"
								src="./img-hening/group_12564.png"
								style={{ width: "80%" }}
							/>
							<img
								className="d-block d-lg-none text-center mx-auto"
								src="./img-hening/group_12564.png"
								style={{ width: "80%" }}
							/>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2 mb-rlv-1-mobile mb-lg-0">
							<div className="d-flex h-100">
								<div className="d-block my-lg-auto">
									<h2 className="font-weight-bold text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-0">
										Coba Hening Sekarang
									</h2>
									<p className="h5 text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
										Rasakan ketenangan dalam hidup Anda hanya dengan
										#HeningSejenak selama 10 menit.
									</p>
									<div className="text-center text-lg-left">
										<button
											data-toggle="modal"
											data-target="#modalDownloadAndroidIos"
											className="btn btn-special-grad-1 btn-sm font-weight-normal text-white d-inline-block font-weight-semibold"
											style={{ fontSize: "14px" }}
										>
											Coba Aplikasi Sekarang
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* APA KATA MEREKA */}
			<div
				className="container-fluid px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{
					backgroundImage: "url('./img-hening/group_12536.png')",
					backgroundPosition: "center",
				}}
			>
				<BodyContainer>
					<h2 className="font-weight-bold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Apa Kata Mereka
					</h2>
					<KataMerekaSlider ProductToShow={1} withArrow={true}>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Suka Banget!"
								imgSrc="./img-hening/oval.png"
								imgAlt="Kata Mereka 1"
								review="Suka banget sama aplikasi ini. Aku yang pecicilan dan kayak nggak pernah kehabisan energi, justru  belakangan ini merasa lelah dan drained emotionally karena pressure kerja. Setelah kenalan dan meditasi bersama riliv, aku bisa ngerasa lebih mencintai diri dan fokus. Thank you!"
								reviewer="AG"
								reviewer_job="Karyawan"
							/>
						</div>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Suara Naratornya Bikin Rileks!"
								imgSrc="./img-hening/oval.png"
								imgAlt="Kata Mereka 1"
								review="Suka, suara naratornya bikin rileks, baru nyoba dasar 1 sesi 1 sudah enakan badanku."
								reviewer="UL"
								reviewer_job="Freelancer"
							/>
						</div>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Mudah dan Enak Digunakan!"
								imgSrc="./img-konseling/group_3_copy_6.png"
								imgAlt="Kata Mereka 1"
								review="Mudah digunakan dan enak dipake dah pokonya. Suka banget! Aku yang sering megalami cemas, sekarang sudah berkurang berkat meditasi yg diberikan."
								reviewer="WT"
								reviewer_job="Wirausaha"
							/>
						</div>
					</KataMerekaSlider>
				</BodyContainer>
			</div>

			{/* YUK SECTION */}
			<YukInstallSection />

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default HeningPage;

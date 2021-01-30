import React, { Fragment } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";

import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import {
	ResponsiveText_H1,
	ResponsiveText_H2,
} from "../../components/responsive-text/responsive-text.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";

import {
	MengapaLargeDesktop,
	MengapaMobileSize,
} from "../../components/page/koseling/mengapa-column/mengapa-column.section";
import KataMerekaSlider from "../../components/page/koseling/apa-katamereka/apa-katamereka-slider.component";
import KataMereka from "../../components/page/koseling/apa-katamereka/apa-katamereka.component";
import MasalahSelesaiCard from "../../components/page/koseling/masalah-selesai/masalah-selesai.component";
import HeaderKonselingPage from "../../components/page/koseling/header-page/header-page.component";
import YukInstallSection from "../../components/yuk-install";

const Konseling = () => {
	return (
		<Fragment>
			<RilivHeader>
				<HeaderKonselingPage />
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbar
				currentPage="Konseling"
				textCTA="Coba Aplikasi Sekarang"
				urlCTA="https://play.google.com/store/apps/details?id=nozero.apps1"
			/>

			{/* HEADING */}
			<BodyContainer>
				<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 order-2 order-lg-1">
							<div className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center text-lg-left">
								<ResponsiveText_H1
									classDesktop="font-weight-bold"
									classMobile="font-weight-semibold"
								>
									Bebaskan Diri dari Masalah Pribadi
								</ResponsiveText_H1>
							</div>
							<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-lg-left text-center">
								Dapatkan jawaban atas segala masalah pribadi atau konsultasi
								masalah psikologis secara online. Cukup satu langkah saja, Anda
								akan terhubung dengan psikolog kami yang berlisensi dan
								profesional.
							</p>
							<div className="d-flex d-lg-block">
								<a
									href="./pricing"
									className="btn btn-special-grad-1 btn-sm font-weight-semibold text-white mx-auto mx-lg-0"
									style={{ fontSize: "14px" }}
								>
									Mulai Konseling
								</a>
							</div>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2">
							<ResponsiveImage
								key="KonselingHeader"
								w_desktop="100%"
								w_tablet="450px"
								w_mobile="100%"
								imgAlt="Riliv Konseling"
								imgSrc="./img-konseling/mask_group_69.png"
							/>
						</div>
					</div>
				</div>
			</BodyContainer>

			{/* IMG - SPACING */}
			<div
				className="container-fluid px-0"
				style={{ backgroundColor: "#e6fafc" }}
			>
				<div
					className="container-fluid container-lg bg-header"
					style={{
						backgroundImage: 'url("./img-konseling/mask_group_71.png")',
						backgroundPosition: "center",
						backgroundSize: "fill-parent",
						height: "300px",
					}}
				></div>
			</div>

			{/* LEBIH DARI SECTION */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
					<h2 className="font-weight-bold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop d-none d-lg-block">
						Lebih Dari 100.000 Orang Memilih <br /> Konseling Menggunakan Riliv
					</h2>
					<h2 className="font-weight-bold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop d-block d-lg-none">
						Lebih Dari 100.000 Orang Memilih Konseling Menggunakan Riliv
					</h2>
					<div className="d-none d-lg-block">
						<MengapaLargeDesktop />
					</div>
					<div className="d-block d-lg-none">
						<MengapaMobileSize />
					</div>
					<div className="d-flex">
						<a
							href="./pricing"
							className="btn btn-special-grad-1 btn-sm btn-fix font-weight-semibold text-white mx-auto mt-rlv-1-mobile mt-lg-rlv-1-desktop"
							style={{ fontSize: "14px" }}
						>
							Mulai Konseling
						</a>
					</div>
				</div>
			</BodyContainer>

			{/* APA KATA MEREKA */}
			<div
				className="container-fluid px-0 bg-header py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{ backgroundImage: 'url("./img-konseling/group_12536.png")' }}
			>
				<BodyContainer>
					<div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
						<ResponsiveText_H2
							classDesktop="font-weight-bold"
							classMobile="font-weight-semibold"
						>
							Apa Kata Mereka
						</ResponsiveText_H2>
					</div>
					<KataMerekaSlider ProductToShow={1} withArrow={true}>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Recommended Banget"
								imgSrc="./img-konseling/oval.png"
								imgAlt="Kata Mereka 1"
								review="Recommended banget buat seseorang yang lagi ada masalah tapi bingung mau curhat ke siapa. Responnya juga lumayan cepat. The best lah pokoknya! Thank you Riliv :)"
								reviewer="Ms. A"
								reviewer_job="Desainer Grafis"
							/>
						</div>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Sangat Membantu!"
								imgSrc="./img-konseling/group_3_copy_6.png"
								imgAlt="Kata Mereka 1"
								review="Sangat membantu! Saya dapat berbicara dengan psikolog yang ramah dan fast response. Enjoy banget konseling disini, berasa curhat dengan teman sendiri. Sekali lagi terima kasih Riliv."
								reviewer="Mr. D"
								reviewer_job="Karyawan Swasta"
							/>
						</div>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Just. Loved It!"
								imgSrc="./img-konseling/oval.png"
								imgAlt="Kata Mereka 1"
								review="Just. Loved It! Saya sangat lega ketika bisa bercerita kepada sesorang yang memahami permasalahan dan mendengarkan saya tanpa menghakimi. Tanggapannya ramah sekali."
								reviewer="Ms. T"
								reviewer_job="Mahasiswa"
							/>
						</div>
					</KataMerekaSlider>
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
							imgSrc="./img-konseling/depresi_section_3_sedih.png"
							imgAlt="Hubungan asmara dan keluarga"
							Description="Hubungan asmara dan keluarga"
						/>
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi_section_3_makan.png"
							imgAlt="Karir dan akademik"
							Description="Karir dan Akademik"
						/>
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi_section_3_konsentrasi.png"
							imgAlt="Kecanduan"
							Description="Kecanduan"
						/>
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi-section-1.png"
							imgAlt="Gangguan Psikologis"
							Description="Gangguan Psikologis"
						/>
					</div>
					<div className="d-flex">
						<a
							href="./pricing"
							className="btn btn-special-grad-1 btn-sm btn-fix font-weight-semibold text-white mx-auto"
							style={{ fontSize: "14px" }}
						>
							Mulai Konseling
						</a>
					</div>
				</BodyContainer>
			</div>

			{/* PSIKOLOG BERLISENSI */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 order-2 order-lg-1">
							<div className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center text-lg-left">
								<ResponsiveText_H1
									classDesktop="font-weight-bold"
									classMobile="font-weight-semibold"
								>
									Psikolog Profesional Ada di Saku Anda
								</ResponsiveText_H1>
							</div>
							<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-lg-left text-center">
								Semua psikolog kami telah berlisensi, berpengalaman dan
								profesional yang dapat membantu Anda untuk melewati masa sulit
								atau memberikan perubahan positif di hidup Anda.
								<br />
								<br />
								Mereka akan dengan senang hati membantu tanpa membuat Anda
								merasa malu atau terhakimi. Semua sesi konseling dilakukan
								secara personal dan sesuai kode etik psikologi.
							</p>
							<div className="d-flex d-lg-block">
								<a
									href="./pricing"
									className="btn btn-special-grad-1 btn-fix font-weight-semibold text-white mx-auto mx-lg-0"
									style={{ fontSize: "14px" }}
								>
									Mulai Konseling
								</a>
							</div>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2">
							<ResponsiveImage
								key="KonselingHeader"
								w_desktop="100%"
								w_tablet="450px"
								w_mobile="100%"
								imgAlt="Riliv Konseling"
								imgSrc="./img-konseling/mask_group_63.png"
							/>
						</div>
					</div>
				</div>
			</BodyContainer>

			{/* YUK SECTION */}
			<YukInstallSection />

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default Konseling;

import React, { Fragment } from "react";
import BodyContainer from "../../components/body-container/body-container.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import { CarouselCustom } from "../../components/carousel";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTMandAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderPixelFB from "../../components/header/header-facebook-pixel";
import HeaderHotjar from "../../components/header/header-hotjar";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import AvailablePositionContainer from "../../components/page/career/available-position-container";
import AvailablePositionJobs from "../../components/page/career/available-position-jobs";
import AvailablePositionModal from "../../components/page/career/available-position-modal";
import CardTestimonies from "../../components/page/career/card-testimonies";
import CardValue from "../../components/page/career/card-value";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import AllCareerOpportunities from "../../contents/career/career-oppotunities";
import HeaderFreshChat from "../../components/header/header-freshchat";

const CareerPage = () => {
	const CarouselData = [
		<CardTestimonies
			imgSrc="mbak_aima 2x.webp"
			Name="Aimasari Nur Hidayati"
			Position="Account Executive"
			Desc="Bekerja di Riliv benar-benar mengasah soft skill & hard skill. Bukan hanya sekedar bekerja, tapi bisa hands on langsung membantu banyak orang dengan mudah dan cepat "
		/>,
		<CardTestimonies
			imgSrc="mbak_geby 2x.webp"
			Name="Geby Chyntia Irwan"
			Position="Head of Production"
			Desc="Bekerja di Riliv mengajarkan saya untuk berproses dan belajar setiap saat. Rekan kerja selalu mendukung untuk mengenal potensi yang selama ini tidak disadari. A great workplace to discover your abilities and do the most for mental health in Indonesia!"
		/>,
		<CardTestimonies
			imgSrc="mas_habib 2x.webp"
			Name="Habib Al-Hakim"
			Position="UI/UX Designer"
			Desc="Bekerja di Riliv adalah salah satu hal yang sangat challenging dan dinamis. Tidak hanya bekerja, tapi juga berinovasi setiap hari, menyelesaikan masalah, dan memberikan impact baik terhadap dunia kesehatan mental Indonesia."
		/>,
	];

	return (
		<Fragment>
			<RilivHeader>
				<HeaderHotjar />
				<HeaderPixelFB />
				<HeaderGTMandAnalytics />
				<HeaderFreshChat />
			</RilivHeader>{" "}
			<RilivNavbar
				currentPage="Career"
				textCTA="Lihat Semua Posisi"
				urlCTA="#lihat_posisi"
			/>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0"> Coming Soon </p>{" "}
			</SimpleSnackbar>
			{/* Header Section */}
			<div
				className="container-fluid px-0 bg-riliv-level-1 pt-rlv-5-mobile pt-lg-rlv-5-desktop"
				style={{
					backgroundImage: "url('./img-career/background_foto 2x.webp')",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<BodyContainer>
					<h1 className="text-white text-lg-left text-center pb-lg-rlv-2-desktop pb-rlv-2-mobile pt-lg-rlv-5-desktop pt-rlv-5-mobile">
						<strong>
							Bersama Ciptakan Sehat Mental,{" "}
							<br className="d-none d-lg-block" /> Bergabunglah bersama Kami!
						</strong>
					</h1>
				</BodyContainer>
			</div>
			{/* Header Section End */}
			{/* Header Description */}
			<BodyContainer>
				<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop">
					<h2 className="h5 text-center">
						Misi Riliv untuk membantu semua orang mendapatkan kemudahan akses
						layanan kesehatan mental. Berbekal misi tersebut dan semangat untuk
						terus berkarya, kami mengajak Anda yang ingin memaksimalkan potensi
						yang Anda miliki untuk bersama-sama mewujudkan misi tersebut.
					</h2>
					<div className="text-center mt-rlv-2-mobile mt-lg-rlv-2-desktop">
						<a
							href="#lihat_posisi"
							className="btn btn-special-grad-1 font-weight-semibold font-weight-semibold text-white mx-auto d-block d-lg-inline-block"
						>
							Lihat Semua Posisi
						</a>
					</div>
				</div>
			</BodyContainer>
			{/* Header Description End */}
			{/* Berkarya Section */}
			<BodyContainer>
				<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
					<h2 className="h1 font-weight-bold text-center mb-rlv-2-mobile mb-lg-rlv-2-desktop">
						Berkarya, bukan Sekedar Bekerja
					</h2>
					<div className="row justify-content-around">
						<CardValue
							first
							imgSrc="icon_1 2x.webp"
							desc="Kami yakin nyaman dalam bekerja dimulai dari hubungan interpersonal yang baik"
						/>
						<CardValue
							imgSrc="icon_2 2x.webp"
							desc="Percaya satu sama lain dan saling menginspirasi dalam menghasilkan suatu karya"
						/>
						<CardValue
							imgSrc="icon_3 2x.webp"
							desc="Menjadi selalu ingin tahu untuk kemudian bisa memberikan lebih dari yang diminta"
						/>
					</div>
				</div>
			</BodyContainer>
			{/* Berkarya Section End */}
			{/* Testimoni Section */}
			<div className="p-0 pb-rlv-5-mobile pb-lg-rlv-5-desktop">
				<BodyContainer>
					<div
						className="bg-white py-rlv-5-mobile py-lg-rlv-3-desktop px-rlv-2-mobile px-lg-rlv-2-desktop shadow"
						style={{ borderRadius: "20px" }}
					>
						<CarouselCustom
							Name="CardTestimoniesCareerPage"
							Data={CarouselData}
							InvertArrow={true}
							TranslateArrow="71px"
						/>
					</div>
				</BodyContainer>
				<div
					className=" bg-white"
					style={{
						height: "900px",
						width: "100%",
						transform: "translate(0, -650px)",
						zIndex: "-2",
						position: "absolute",
						backgroundImage: 'url("./img-career/wave_back 2x.webp")',
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "top center",
					}}
				></div>
			</div>
			{/* Testimoni Section End */}
			{/* Posisi Yang Tersedia */}
			<div
				className="container-fluid px-0 bg-riliv-level-1 pb-rlv-5-mobile pb-lg-rlv-5-desktop"
				id="lihat_posisi"
			>
				<BodyContainer>
					<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
						<strong>Posisi yang Tersedia</strong>
					</h1>
					<div className="pb-rlv-3-mobile pb-lg-rlv-3-desktop">
						<p
							className="h5 text-white text-center mx-auto d-none d-lg-block mb-0"
							style={{ maxWidth: "900px" }}
						>
							Kirim biodata beserta portofolio yang dibutuhkan sesuai posisi
							yang Anda inginkan. Kami sudah tidak sabar menunggu kontribusimu
							di dunia kesehatan mental!
						</p>
						<p
							className="h5 text-white text-center mx-auto d-block d-lg-none mb-0"
							style={{ maxWidth: "900px" }}
						>
							Kirim biodata beserta portofolio yang dibutuhkan sesuai posisi
							yang Anda inginkan. Kami sudah tidak sabar menunggu kontribusimu
							di dunia kesehatan mental!
						</p>
					</div>
					<div
						className="bg-white shadow-lg py-rlv-3-mobile py-lg-rlv-3-desktop px-0 px-lg-rlv-2-desktop"
						style={{ borderRadius: "20px" }}
					>
						{/* Career Opportunities*/}
						{AllCareerOpportunities.map((opportunity, index) => {
							return opportunity.none ? (
								<AvailablePositionContainer
									imgDivision={opportunity.imgDivision}
									Division={opportunity.Division}
									first={index === 0 ? true : undefined}
									key={`${opportunity.Division}${index}`}
								>
									<AvailablePositionJobs
										JobTitle="Maaf, Posisi Tidak Tersedia"
										JobType="-"
										first
										none={opportunity.none}
									/>
								</AvailablePositionContainer>
							) : (
								<AvailablePositionContainer
									imgDivision={opportunity.imgDivision}
									Division={opportunity.Division}
									first={index === 0 ? true : undefined}
									key={`${opportunity.Division}${index}`}
								>
									{opportunity.AvailablePosition.map((position, index) => {
										return (
											<AvailablePositionJobs
												JobTitle={position.JobTitle}
												JobType={position.JobType}
												first={index === 0 ? true : undefined}
												key={`${position.JobTitle}_${position.JobType}_${index}`}
											>
												<AvailablePositionModal {...position} />
											</AvailablePositionJobs>
										);
									})}
								</AvailablePositionContainer>
							);
						})}
						{/* Career Opportunities End*/}
					</div>
				</BodyContainer>
			</div>
			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default CareerPage;

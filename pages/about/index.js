import React, { Fragment } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderHotjar from "../../components/header/header-hotjar";
import HeaderPixelFB from "../../components/header/header-facebook-pixel";
import HeaderGTMandAnalytics from "../../components/header/header-analytics-tagmanager";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import CharacterCard from "../../components/page/about/character-card";
import CarouselComponent, { CarouselCustom } from "../../components/carousel";
import { PenghargaanCarouselData } from "../../contents/about/list-penghargaan.content";
import HeaderFreshChat from "../../components/header/header-freshchat";

const AboutPage = () => {
	const CarouselImage = [
		"./img-about/foto_1 2x.webp",
		"./img-about/foto_2 2x.webp",
		"./img-about/foto_3 2x.webp",
		"./img-about/foto_4 2x.webp",
		"./img-about/foto_5 2x.webp",
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
				currentPage="Tentang Kami"
				textCTA="Lihat Semua Posisi"
				urlCTA="https://riliv.co/career#lihat_posisi"
			/>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0"> Coming Soon </p>{" "}
			</SimpleSnackbar>
			{/* HEADER SECTION */}{" "}
			<BodyContainer>
				<div className="mt-rlv-5-mobile mt-lg-rlv-5-desktop">
					<div className="row">
						<div className="col-12 col-lg-6">
							<ResponsiveImage
								key="HomeHeader"
								w_desktop="522px"
								w_tablet="440px"
								w_mobile="320px"
								imgAlt="Riliv About Header"
								imgSrc="./img-about/sec-1-2x.webp"
							/>
						</div>{" "}
						<div className="col-12 col-lg-6 text-center text-lg-left pl-lg-rlv-B">
							<h1 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-rlv-2-mobile mt-lg-rlv-2-desktop">
								Kami adalah Pelopor Sehat Mental di Indonesia{" "}
							</h1>{" "}
							<p className="paragraph-riliv h5">
								Sebagai one-stop aplikasi kesehatan mental pertama di Indonesia,
								Riliv mempunyai misi untuk memberikan kemudahan kepada semua
								orang dalam mengakses layanan kesehatan mental yang
								terintegratif.{" "}
							</p>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</BodyContainer>
			{/* HEADER SECTION END */}
			{/* SECTION 2 */}
			<BodyContainer>
				<div className="mt-rlv-3-mobile mt-lg-rlv-3-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 text-center text-lg-left pr-lg-rlv-B order-2 order-lg-1">
							<h1 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-rlv-2-mobile mt-lg-rlv-2-desktop">
								Yang Berawal dari...
							</h1>{" "}
							<p className="paragraph-riliv h5">
								Awal mula Riliv tidak lepas dari CEO Riliv, Maxi, yang melihat
								banyak orang curhat di media sosial. Namun, bukannya mendapat
								dukungan atau solusi, malah membawa makian, bahkan bisa berujung
								pada depresi.{" "}
							</p>{" "}
							<br />
							<p className="paragraph-riliv h5">
								Bila bercerita lewat teks dengan smartphone begitu mudah,
								mengapa tidak menciptakan teman curhat profesional yang siap
								membantu Anda tanpa menghakimi?{" "}
							</p>{" "}
						</div>{" "}
						<div className="col-12 col-lg-6 text-center order-1 order-lg-2">
							<ResponsiveImage
								key="HomeHeader"
								w_desktop="522px"
								w_tablet="440px"
								w_mobile="320px"
								imgAlt="Riliv About Berawal Dari"
								imgSrc="./img-about/sec-2-2x.webp"
								right={true}
							/>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</BodyContainer>
			{/* SECTION 2 END */}
			{/* SECTION 3 */}
			<BodyContainer>
				<div className="mt-rlv-3-mobile mt-lg-rlv-3-desktop">
					<div className="row">
						<div className="col-12 col-lg-6">
							<ResponsiveImage
								key="HomeHeader"
								w_desktop="522px"
								w_tablet="440px"
								w_mobile="320px"
								imgAlt="Riliv About Tumbuh Berkembang"
								imgSrc="./img-about/sec-3-2x.webp"
							/>
						</div>{" "}
						<div className="col-12 col-lg-6 text-center text-lg-left pl-lg-rlv-B">
							<h1 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-rlv-2-mobile mt-lg-rlv-2-desktop">
								Tumbuh dan Berkembang Menghadirkan…{" "}
							</h1>{" "}
							<p className="paragraph-riliv h5">
								<strong>Riliv Hening</strong>, sebagai salah satu penanganan
								dini untuk masalah kesehatan mental.Kami percaya, kunci dari
								sehat mental adalah dengan menghubungkan pengguna dengan
								profesional yang tepat, serta mendukung kebiasaan melatih
								kemampuan diri secara mandiri.{" "}
							</p>{" "}
							<br />
							<p className="paragraph-riliv h5">
								Anda bisa membantu diri sendiri untuk meningkatkan kualitas
								kesehatan mental Anda melalui meditasi yang kami rancang secara
								khusus dan efektif.{" "}
							</p>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</BodyContainer>
			{/* SECTION 3 END */}
			{/* SECTION LANGKAH KECIL */}
			<div className="position-relative">
				<div
					className="container-fluid position-absolute bg-riliv-level-1"
					style={{
						height: "611px",
						zIndex: "-1",
						backgroundImage: 'url("./img-about/back founder 2x.webp")',
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<div className="mt-rlv-3-mobile mt-lg-rlv-3-desktop p-0 z3">
					<BodyContainer>
						<div className="pt-rlv-3-mobile pt-lg-rlv-3-desktop text-center mb-rlv-2-mobile mb-lg-rlv-2-desktop">
							<h2 className="h1 text-white font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Yang Mengawali Langkah Kecil Ini
							</h2>
							<p
								className="mx-auto paragraph-riliv text-white h5"
								style={{ maxWidth: "750px" }}
							>
								Perkenalkan, kami adalah pemuda-pemudi Indonesia yang percaya
								bahwa langkah kecil yang kami lakukan dapat membawa perubahan
								besar, seperti kualitas mental Anda yang lebih sehat.
							</p>
						</div>
						<div className="container">
							<div className="row">
								<CharacterCard
									imgSrc="maxi-2x.webp"
									Name="Audrey Maximillian Herli "
									JobTitle="Co-Founder"
									SubJobTitle="Chief Executife Officier"
								/>
								<CharacterCard
									imgSrc="audy 2x.webp"
									Name="Audy Christoper Herli"
									JobTitle="Co-Founder"
									SubJobTitle="Chief Business Officer"
								/>
							</div>
						</div>
					</BodyContainer>
				</div>
			</div>
			{/* SECTION LANGKAH KECIL END */}
			{/* SECTION TIM */}
			<BodyContainer>
				<div className="mt-rlv-4-mobile mt-lg-rlv-4-desktop pt-rlv-2-mobile pt-lg-rlv-2-desktop pb-rlv-2-mobile pb-lg-rlv-2-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 text-center text-lg-left">
							<h2 className="h1 font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Kerjasama dengan tim yang solid
							</h2>
							<p className="h5 paragraph-riliv mb-rlv-1-mobile mb-lg-0">
								Dibalik satu aplikasi dan beragam <em>channel</em> Riliv yang
								memudahkan Anda menuju akses kualitas mental yang lebih baik,
								terdapat sebuah tim yang solid, penuh keakraban, dan berdedikasi
								untuk membuat Anda tersenyum setiap hari.{" "}
							</p>
						</div>
						<div className="col-12 col-lg-6">
							<CarouselComponent Data={CarouselImage} Name="AboutTeam" />
						</div>
					</div>
				</div>
			</BodyContainer>
			{/* SECTION TIM END*/}
			{/* SECTION PENGHARGAAN */}
			<div className="mt-rlv-4-mobile mt-lg-rlv-4-desktop p-0 pb-rlv-5-mobile pb-lg-rlv-5-desktop">
				<BodyContainer>
					<h2 className=" font-weight-semibold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Bersama Anda, kami berhasil meraih...
					</h2>
					<div
						className="bg-white pt-rlv-2-mobile pt-lg-rlv-2-desktop pb-rlv-3-mobile pb-lg-rlv-3-desktop shadow"
						style={{ borderRadius: "20px" }}
					>
						<CarouselCustom
							Data={PenghargaanCarouselData}
							Name="PenghargaanAbout"
						/>
					</div>
				</BodyContainer>
				<div
					className=" bg-white"
					style={{
						height: "1000px",
						width: "100%",
						transform: "translate(0, -650px)",
						zIndex: "-2",
						position: "absolute",
						backgroundImage: 'url("./img-about/back award 2x.webp")',
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "top center",
					}}
				></div>
			</div>
			{/* SECTION PENGHARGAAN END */}
			{/* SECTION LIHAT POSISI */}
			<div className="container-fluid bg-riliv-level-1 px-0 text-center pb-rlv-5-mobile pb-lg-rlv-5-desktop">
				<BodyContainer>
					<h2
						className="text-white font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop mx-auto"
						style={{ maxWidth: "600px" }}
					>
						Ingin berkarya untuk Indonesia lebih bahagia dan sehat mental?
						Bergabunglah bersama kami.
					</h2>
					<a
						className="btn btn-special-grad-1 font-weight-semibold"
						href="https://riliv.co/career#lihat_posisi"
					>
						Lihat Semua Posisi
					</a>
				</BodyContainer>
			</div>
			{/* SECTION LIHAT POSISI END */}
			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default AboutPage;

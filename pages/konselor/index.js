import React, { Fragment } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderHotjar from "../../components/header/header-hotjar";
import HeaderPixelFB from "../../components/header/header-facebook-pixel";
import HeaderGTMandAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshchat from "../../components/header/header-freshchat";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import KeuntunganPsikologRiliv from "../../components/page/konselor/KeuntunganPsikologRiliv";
import { KeuntunganBergabungPsikologRiliv } from "../../contents/konselor/keuntunganPsikolog.content";
import { TestimoniPsikolog } from "../../contents/konselor/testimoniPsikolog.content";
import { CarouselKonselor } from "../../components/carousel";

const KonselorPage = () => {
	return (
		<Fragment>
			<RilivHeader>
				<HeaderHotjar />
				<HeaderPixelFB />
				<HeaderGTMandAnalytics />
				<HeaderFreshchat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0"> Coming Soon </p>{" "}
			</SimpleSnackbar>

			<RilivNavbar
				currentPage="Bergabung sebagai Psikolog"
				textCTA="Daftar Disini"
				urlCTA="https://docs.google.com/forms/d/e/1FAIpQLSdfBd4tIs-RMDgxidY4ehtE9jSBORSw-IRsy0MCVlofdBID8w/viewform"
				fix={true}
			/>

			{/* HEADER */}
			<div
				className="container-fluid bg-riliv-level-1 py-rlv-5-mobile py-lg-rlv-5-desktop px-0"
				style={{
					backgroundImage: 'url("./img-konselor/background_1 2x.webp")',
					backgroundSize: "cover",
					backgroundPosition: "top center",
				}}
			>
				<BodyContainer>
					<div className="row">
						<div className="col-12 col-lg-6">
							<ResponsiveImage
								imgAlt="Bergabung Sebagai Konselor"
								imgSrc="./img-konselor/ilus 2x.webp"
								w_desktop="459px"
								w_tablet="400px"
								w_mobile="280px"
							/>
						</div>
						<div className="col-12 col-lg-6">
							<h1 className="h1 text-white mt-rlv-1-mobile mt-lg-0 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center text-lg-left">
								<strong>Ingin Bergabung sebagai Psikolog Riliv?</strong>
							</h1>
							<h3 className="text-white h5 mb-0 text-center text-lg-left">
								Bersama kami, mari wujudkan misi agar masyarakat Indonesia
								mendapatkan akses bantuan profesional yang lebih baik sehingga
								akan ada lebih banyak orang yang terbantu dalam peningkatan
								kualitas kesehatan mental.
							</h3>
						</div>
					</div>
				</BodyContainer>
			</div>
			{/* HEADER END */}
			{/* KEUNTUNGAN SEBAGAI PSIKOLOG */}
			<BodyContainer>
				<div className="py-lg-rlv-5-desktop py-rlv-5-mobile">
					<h2 className="h2 text-center mb-rlv-3-mobile mb-lg-rlv-3-desktop">
						<strong>Sebagai Psikolog Riliv, Anda akan mendapatkan:</strong>
					</h2>
					<div className="row">
						{KeuntunganBergabungPsikologRiliv.map((data, index) => {
							return (
								<KeuntunganPsikologRiliv
									{...data}
									key={`KeuntunganPsikologRiliv${index}`}
								/>
							);
						})}
					</div>
				</div>
			</BodyContainer>
			{/* KEUNTUNGAN SEBAGAI PSIKOLOG END */}
			{/* REVIEW PSIKOLOG */}
			<div
				className="container-fluid bg-white py-rlv-5-mobile py-lg-rlv-5-desktop px-0"
				style={{
					backgroundImage: 'url("./img-konselor/background_2 2x.webp")',
					backgroundSize: "cover",
					backgroundPosition: "top center",
				}}
			>
				<BodyContainer>
					<CarouselKonselor Data={TestimoniPsikolog} nama="TestimoniPsikolog" />
				</BodyContainer>
			</div>
			{/* REVIEW PSIKOLOG END */}
			{/* JIKA INGIN BERGABUNG */}
			<BodyContainer>
				<div className="mt-rlv-5-mobile mt-lg-rlv-5-desktop">
					<div className="d-block d-lg-flex">
						<div className="text-lg-right text-center">
							<ResponsiveImage
								imgSrc="./img-konselor/ilus_2 2x.webp"
								imgAlt="Gabung Psikolog Riliv"
								w_desktop="440px"
								w_tablet="400px"
								w_mobile="300px"
							/>
						</div>
						<div className="pl-lg-rlv-B pt-lg-0 pt-rlv-1-mobile">
							<h3 className="text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								<strong>Jika ingin bergabung, Anda harus memiliki:</strong>
							</h3>
							<ol
								type="1"
								className="pl-rlv-C mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							>
								<li>
									<p className="h5 mb-0">
										Surat Izin Praktik Psikolog (SIPP) yang{" "}
										<strong>masih berlaku</strong>
									</p>
								</li>
								<li>
									<p className="h5 mb-0">
										<em>Smartphone</em> Android versi 4.4 atau lebih
									</p>
								</li>
								<li>
									<p className="h5 mb-0">
										Akun <em>Whatsapp</em> atau <em>Line</em>
									</p>
								</li>
								<li>
									<p className="h5 mb-0">Koneksi internet yang memadai</p>
								</li>
								<li>
									<p className="h5 mb-0">
										Waktu luang antara{" "}
										<strong>Senin - jumat 08.00 - 21.00</strong>
									</p>
								</li>
							</ol>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSdfBd4tIs-RMDgxidY4ehtE9jSBORSw-IRsy0MCVlofdBID8w/viewform"
								className="btn btn-special-grad-1 btn-lg-fix btn-block text-white font-weight-semibold"
							>
								Daftar disini
							</a>
						</div>
					</div>
				</div>
			</BodyContainer>
			<div
				className="container-fluid px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{
					backgroundImage: `url("./img-konselor/background_3 2x.webp")`,
					backgroundPosition: "top center",
					backgroundSize: "cover",
				}}
			>
				<div className="d-block py-rlv-5-mobile"></div>
			</div>
			{/* JIKA INGIN BERGABUNG END */}

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default KonselorPage;

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

const ContactPage = () => {

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
				textCTA="Mulai Konseling"
				urlCTA="https://riliv.co/pricing"
			/>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0"> Coming Soon </p>{" "}
			</SimpleSnackbar>
			{/* HEADER SECTION */}{" "}
			<div
				className="container-fluid px-0 bg-header d-none d-lg-block"
				style={{
					backgroundImage: 'url("./img/contact/contact-header.png")',
					overflow: "hidden",
					backgroundColor: "#0fbace",
				}}
			>
				<BodyContainer>
					<div className="row">
						<div className="col-12 col-lg-7 order-2 order-lg-1">
							<div
								className="p-rlv-1-mobile p-lg-rlv-1-desktop mb-0 mb-lg-rlv-3-desktop rounded-lg">
								<h1 className="h2-hening h1 type--bold h1-contact font-weight-bold text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
									Tetap Terhubung <br/>Bersama Kami
								</h1>
							</div>
						</div>
					</div>
					
				</BodyContainer>
			</div>
			{/* HEADER MOBILE */}
			<div className="d-block d-lg-none">

					<div
						className="d-block pt-rlv-3-desktop pb-rlv-3-desktop"
						style={{
							backgroundImage: "url('./img/contact/contact-header.png')",
							backgroundSize: "cover",
							backgroundPosition: "left",
						}}
					>
						<div className="mt-rlv-1-mobile mb-rlv-3-mobile">
						<h1 className="h2 text-white font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
						Tetap Terhubung <br/>Bersama Kami
						</h1>
				
					</div>
					</div>

				<BodyContainer>
					
				</BodyContainer>
			</div>
			{/* HEADER SECTION END */}
			{/* SECTION 2 */}
			<BodyContainer>
				<div className="mt-rlv-3-mobile mt-lg-rlv-3-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 text-center text-lg-left pr-lg-rlv-B order-2 order-lg-1">
							<h1 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-rlv-2-mobile mt-lg-rlv-2-desktop">
							Kontak Kami
							</h1>{" "}
							<b><p 
							style={{
								
								fontSize: "22px",
								letterSpacing: "1",
								opacity: "0.8",
							}}
							>JAM KERJA : 08.00 - 17.00</p>
                    </b>
							<br />
							<p className="h5 text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">Di luar jam kerja, silahkan hubungi kami melalui e-mail. Kami akan segera membalas Anda !</p>
						</div>{" "}
						<div className="col-12 col-lg-6 text-center order-1 order-lg-2">
							<ResponsiveImage
								key="HomeHeader"
								w_desktop="522px"
								w_tablet="440px"
								w_mobile="320px"
								imgAlt="Riliv About Berawal Dari"
								imgSrc="./img/contact/contact-section-3-telepon.png"
								right={true}
							/>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
				<div className="mt-rlv-1-mobile mt-lg-rlv-1-desktop">
			<div className="row" 
			style={{
				marginTop: "15px",	
				
			}}>
                <div className="col-md-5 col-sm-6 col-xs-12">
					<div className="h2-hening" 
					style={{
						marginTop: "40px",	
						
					}}>
					<b><p 
					style={{
						fontSize: "22px",
						textAlign: "center",	
						
					}}
					>Line</p>
                    </b>
					<p className="p-contact p-hening h5" 
					style={{
						textAlign: "center",
						marginTop: "10px",
						letterSpacing: "1",
						opacity: "0.8",
					}}>@riliv</p>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
					<div className="h2-hening" 
					style={{
						marginTop: "40px",	
						
					}}>
					<b><p 
					style={{
						fontSize: "22px",
						textAlign: "center",	
						
					}}
					>Email</p>
                    </b>
					<p className="p-contact p-hening h5" 
					style={{
						textAlign: "center",
						marginTop: "10px",
						letterSpacing: "1",
						opacity: "0.8",
					}}
					>info@riliv.co</p>
                    </div>
                </div>
            </div>
				</div>{" "}
			</BodyContainer>
			<BodyContainer>
				<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop pt-rlv-2-mobile pt-lg-rlv-2-desktop pb-rlv-2-mobile pb-lg-rlv-2-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 text-center text-lg-left">
							<h2 className="h1 font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							Kunjungi Kami
							</h2>
							<p className="h5 paragraph-riliv mb-rlv-1-mobile mb-lg-0">
							KORIDOR Coworking Space<br/>Gedung Siola Lantai 3, Jalan Tunjungan, <span class="br"><br/></span>Genteng, Kota SBY, Jawa Timur 60275
							</p>
						</div>
						<div className="col-12 col-lg-6">
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.456213347168!2d112.7375877!3d-7.2563092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12072f0108ba519a!2sKORIDOR%20Coworking%20Space!5e0!3m2!1sen!2sid!4v1610912308190!5m2!1sen!2sid" width="100%" height="350px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
						</div>
					</div>
				</div>
			</BodyContainer>
			
			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default ContactPage;

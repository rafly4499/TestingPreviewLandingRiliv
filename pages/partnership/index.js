import React, { Fragment, useState } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderHotjar from "../../components/header/header-hotjar";
import HeaderPixelFB from "../../components/header/header-facebook-pixel";
import HeaderGTMandAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import ReachContent from "../../contents/partnership/reach.content";
import ReachCard from "../../components/page/partnership/reachCard";
import PartnerContent from "../../contents/partnership/partner.content";
import PartnerCard from "../../components/page/partnership/partnerCard";

const PartnershipPage = () => {
	return (
		<Fragment>
			<RilivHeader>
				<HeaderGTMandAnalytics />
				<HeaderPixelFB />
				<HeaderHotjar />
				<HeaderFreshChat />
			</RilivHeader>

			<RilivNavbar
				currentPage="Partnership"
				textCTA="Coba Aplikasi Sekarang"
				urlCTA="https://play.google.com/store/apps/details?id=nozero.apps1"
			/>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0"> Coming Soon </p>{" "}
			</SimpleSnackbar>

			{/* HEADER PARTNERSHIP */}
			<div
				className="container-fluid px-0 pt-rlv-5-mobile pt-lg-rlv-5-desktop bg-riliv-level-1"
				style={{
					backgroundImage: "url('./img-partnership/background_header 2x.webp')",
					backgroundPosition: "bottom center",
					backgroundSize: "cover",
				}}
			>
				<BodyContainer>
					<div className="row justify-content-center">
						<div className="col-12 col-lg-6 order-2 order-lg-1">
							<ResponsiveImage
								imgSrc="./img-partnership/foto_hp 2x.webp"
								imgAlt="Partnership with Riliv"
								w_desktop="100%"
								w_tablet="100%"
								w_mobile="100%"
							/>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2 text-center text-lg-left">
							<h1 className="text-white h1 mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								<strong>
									Mari berkolaborasi
									<br />
									dengan kami!
								</strong>
							</h1>
							<h3 className="h5 text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Riliv terbuka untuk berbagai kesempatan kolaborasi dan kerjasama
								demi terciptanya kesehatan mental yang dapat dijangkau oleh
								seluruh lapisan masyarakat.
							</h3>
						</div>
					</div>
				</BodyContainer>
			</div>
			{/* HEADER PARTNERSHIP END */}

			{/* WIDER AUDIENCE */}
			<BodyContainer>
				<div className="mt-rlv-3-mobile mt-lg-rlv-3-desktop mb-rlv-5-mobile mb-lg-rlv-5-desktop">
					<h2 className="h1 text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						<strong>Wider Audience & Exposure</strong>
					</h2>
					<h3 className="mb-rlv-2-mobile mb-lg-rlv-2-desktop text-center">
						<strong>
							<span className="text-riliv-level-1">Total Reach:</span>{" "}
							5.225.000++
						</strong>
					</h3>
					<div className="row justify-content-center align-items-end">
						{ReachContent.map((data, index) => {
							return <ReachCard key={`RilivReach${index}`} {...data} />;
						})}
					</div>
				</div>
			</BodyContainer>
			{/* WIDER AUDIENCE END */}

			{/* PARTNER KAMI */}
			<BodyContainer>
				<div className="pb-rlv-5-mobile pb-lg-rlv-5-desktop">
					<h2 className="h1 text-center mb-rlv-2-mobile mb-lg-rlv-2-desktop">
						<strong>Partner kami</strong>
					</h2>
					<div className="row justify-content-center align-items-center">
						{PartnerContent.map((data, index) => {
							return <PartnerCard key={`RilivPartner${index}`} {...data} />;
						})}
					</div>
				</div>
			</BodyContainer>
			{/* PARTNER KAMI END */}

			{/* INGIN BERKOLABORASI */}
			<div
				className="container-fluid px-0 py-rlv-5-desktop py-lg-rlv-5-desktop"
				style={{ backgroundColor: "#e2f8fa" }}
			>
				<BodyContainer>
					<h2 className="h2 text-center mb-0">
						<strong>
							Ingin berkolaborasi dengan Riliv?
							<br />
							Kirim proposal kolaborasi Anda ke media@riliv.co dan kami akan
							menghubungi Anda kembali dalam 2x24 jam
						</strong>
					</h2>
				</BodyContainer>
			</div>
			{/* INGIN BERKOLABORASI END */}

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default PartnershipPage;

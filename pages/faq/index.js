import React, { Fragment, useState } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";

import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import HeaderHomepage from "../../components/page/homepage/header-page/header-page.component";

import {
	MainTopicDesktop,
	MainTopicMobile,
} from "../../components/page/faq/main-topic/main-topic-select";

import MengenaiIndexContent from "../../components/page/faq/topic-content/mengenai-riliv/index-content";
import HeningIndexContent from "../../components/page/faq/topic-content/hening/index-content";
import KonselingIndexContent from "../../components/page/faq/topic-content/konseling/index-content";
import HeaderFreshChat from "../../components/header/header-freshchat";
const FaqPage = () => {
	const [topic, setTopic] = useState(1);

	return (
		<Fragment>
			<RilivHeader>
				<HeaderHomepage />
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbar
				currentPage="Faq"
				urlCTA="https://play.google.com/store/apps/details?id=nozero.apps1"
				textCTA="Coba Aplikasi Sekarang"
			/>

			{/* HEADER SECTION */}
			<div
				className="container-fluid bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("./img-faq/faq_header.svg")' }}
			>
				<BodyContainer>
					<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
						<h1 className="text-center text-white font-weight-bold my-rlv-1-mobile my-lg-rlv-1-desktop">
							FREQUENTLY ASK QUESTION
						</h1>
					</div>
				</BodyContainer>
			</div>

			{/* MAIN CONTENT */}
			<BodyContainer>
				<div className="row pt-rlv-3-mobile pt-lg-rlv-3-desktop pb-rlv-5-mobile pb-lg-rlv-5-desktop">
					{/* MAIN TOPIC */}
					<div className="col-12 col-lg-4">
						{/* MAIN TOPIC DESKTOP */}
						<MainTopicDesktop
							selectTopic={(selected) => setTopic(selected)}
							topic={topic}
						/>
					</div>
					{/* MAIN TOPIC MOBILE*/}
					<MainTopicMobile
						selectTopic={(selected) => setTopic(selected)}
						topic={topic}
					/>

					{/* TOPIC CONTENT */}
					<div className="col-12 col-lg-8">
						<MengenaiIndexContent selected={topic} />
						<HeningIndexContent selected={topic} />
						<KonselingIndexContent selected={topic} />
					</div>
				</div>
			</BodyContainer>

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default FaqPage;

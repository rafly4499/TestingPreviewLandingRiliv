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
} from "../../components/page/counseling/mengapa-column/mengapa-column.section";
import KataMerekaSlider from "../../components/page/counseling/apa-katamereka/apa-katamereka-slider.component";
import KataMereka from "../../components/page/counseling/apa-katamereka/apa-katamereka.component";
import MasalahSelesaiCard from "../../components/page/counseling/masalah-selesai/masalah-selesai.component";
import HeaderKonselingPage from "../../components/page/counseling/header-page/header-page.component";
import CardKenapaSection from "../../components/page/homepage/card-kenapa-section/card-kenapa-section.component";
import MediaImages from "../../components/media-images/media-images.component";

const Counseling = () => {
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
				hideMenu
				currentPage="Counseling"
				textCTA="Start Counseling Now"
				urlCTA="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
			/>

			{/* HEADING */}
			<BodyContainer>
				<div className="pt-rlv-3-mobile pt-lg-rlv-3-desktop">
					<div className="row">
						<div className="col-12 col-lg-6 order-2 order-lg-1">
							<div className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center text-lg-left">
								<ResponsiveText_H1
									classDesktop="font-weight-bold"
									classMobile="font-weight-semibold"
								>
									Untie Yourself from Personal Issues
								</ResponsiveText_H1>
							</div>
							<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-lg-left text-center">
								Get the answers for any bothersome personal issues or consult
								any psychological problems, all online. In just one single-step,
								we will be connecting you to our officially licensed and highly
								professional psychologists.
							</p>
							<div className="d-flex d-lg-block">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
									className="btn btn-special-grad-1 btn-sm font-weight-semibold text-white mx-auto mx-lg-0"
									style={{ fontSize: "14px" }}
								>
									Start Counseling Now
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

			{/* Riliv Konseling Description */}
			<BodyContainer>
				<div className="pt-rlv-5-mobile pt-lg-rlv-5-desktop">
					<div className="row">
						<div className="col-12 col-lg-6">
							<ResponsiveImage
								imgSrc="/img-counseling/ilustrasi-konseling-2.png"
								w_desktop="100%"
								w_tablet="80%"
								w_mobile="100%"
							/>
						</div>
						<div className="col-12 col-lg-6">
							<div className="text-center text-lg-left mt-rlv-1-desktop mt-lg-0 mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								<img
									src="/img-counseling/logo-konseling.png"
									style={{ height: "56px" }}
								/>
							</div>
							<p className="h5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Share your personal issues via text chat safely and securely
								with our finest, certified, well-grounded, and non-judgemental
								psychologists.
								<br />
								<br />
								Not only as a friendly ear, all of Riliv’s psychologists have
								the ultimate competence to answer any of your psychological
								problems. Start anywhere; whether it is about anxiety,
								addiction, or even romantic relationship problems.
							</p>
							<div className="d-flex">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
									className="btn btn-special-grad-1 btn-sm font-weight-semibold text-white mx-auto mx-lg-0"
									style={{ fontSize: "14px" }}
								>
									Start Counseling Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</BodyContainer>
			{/* Riliv Konseling Description END */}
			{/* LEBIH DARI SECTION */}
			<BodyContainer>
				<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
					<h2 className="font-weight-bold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop d-none d-lg-block">
						More than 100.000 people have made
						<br />
						their choice to get online counseling by Riliv
					</h2>
					<h2 className="font-weight-bold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop d-block d-lg-none">
						More than 100.000 people have made their choice to get online
						counseling by Riliv
					</h2>
					<div className="d-none d-lg-block">
						<MengapaLargeDesktop />
					</div>
					<div className="d-block d-lg-none">
						<MengapaMobileSize />
					</div>
					<div className="d-flex">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
							className="btn btn-special-grad-1 btn-sm font-weight-semibold text-white mx-auto mt-rlv-1-mobile mt-lg-rlv-1-desktop"
							style={{ fontSize: "14px" }}
						>
							Start Counseling Now
						</a>
					</div>
				</div>
			</BodyContainer>

			{/* KENAPA RILIV SECTION */}
			<div
				className="bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("./img-home/background-kenapa.png")' }}
			>
				<BodyContainer key="body6">
					<div className="py-rlv-5-mobile py-lg-rlv-5-desktop">
						<div className="d-flex">
							<h2
								className="text-white mx-auto mb-lg-rlv-5-mobile mb-rlv-5-mobile text-center font-weight-semibold"
								style={{ maxWidth: "700px" }}
							>
								Riliv is your best buddy along your mental health journey, and
								why is that?
							</h2>
						</div>
						<div className="row px-rlv-B">
							<CardKenapaSection
								imgSrc="./img-home/group_12344.png"
								imgAlt="More than 200.000 Riliv users is more mentally healthy"
								imgWidth="65px"
								textTitle="+200.000"
								textDescription="Riliv users is more mentally healthy"
							/>
							<CardKenapaSection
								imgSrc="./img-home/group_12260.png"
								imgAlt="100% Riliv’s psychologists are licensed byIndonesian Psychological Association (HIMPSI)"
								imgWidth="65px"
								textTitle="100%"
								textDescription="Riliv’s psychologists are licensed byIndonesian Psychological Association"
							/>
							<CardKenapaSection
								imgSrc="./img-home/group_12259.png"
								imgAlt="94% Riliv users feels more mentally healthy after using Riliv’s meditation"
								imgWidth="65px"
								textTitle="94%"
								textDescription="Riliv users feels more mentally healthy after using Riliv’s meditation"
							/>
							<CardKenapaSection
								imgSrc="./img-home/surface1.png"
								imgAlt="90% reported overall satisfaction of using Riliv Counseling"
								imgWidth="77px"
								textTitle="90%"
								textDescription="reported overall satisfaction of using Riliv Counseling"
							/>
						</div>
						<div className=" row">
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
								className="mx-auto btn btn-special-grad-1 font-weight-semibold text-white d-inline-block paragraph-riliv"
							>
								Start Counseling Now
							</a>
						</div>
					</div>
				</BodyContainer>
			</div>

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
							What They Said about Riliv
						</ResponsiveText_H2>
					</div>
					<KataMerekaSlider ProductToShow={1} withArrow={true}>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Absolutely Recommended"
								imgSrc="./img-konseling/oval.png"
								imgAlt="Kata Mereka 1"
								review="Absolutely recommended for anyone who is currently facing a problem but has no one to talk to. Response given is quite fast as well. Simply the best! Thank you Riliv. :)"
								reviewer="Ms. A"
								reviewer_job="Graphic Designer"
							/>
						</div>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Very Helpful!"
								imgSrc="./img-konseling/group_3_copy_6.png"
								imgAlt="Kata Mereka 1"
								review="Very helpful! I’m able to talk to a friendly yet fast-response psychologist. It’s very enjoyable to get counseling here, feels like confiding to a dear friend. Once again, thank you Riliv."
								reviewer="Mr. D"
								reviewer_job="Private Employee"
							/>
						</div>
						<div className="px-0 px-lg-rlv-1-desktop mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							<KataMereka
								title="Just. Loved It!"
								imgSrc="./img-konseling/oval.png"
								imgAlt="Kata Mereka 1"
								review="Just. Loved it! I feel extremely relieved when I can talk to someone who listens and understands without giving any judgements. Very warm-hearted response."
								reviewer="Ms. T"
								reviewer_job="College Student"
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
							Kind of Personal Issues We Get Done
						</ResponsiveText_H2>
					</div>
					<div className="row">
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi_section_3_sedih.png"
							imgAlt="Romantic and family relationship"
							Description="Romantic and family relationship"
						/>
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi_section_3_makan.png"
							imgAlt="Career and academics"
							Description="Career and academics"
						/>
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi_section_3_konsentrasi.png"
							imgAlt="Addiction"
							Description="Addiction"
						/>
						<MasalahSelesaiCard
							imgSrc="./img-konseling/depresi-section-1.png"
							imgAlt="Psychological disorders"
							Description="Psychological disorders"
						/>
					</div>
					<div className="d-flex">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
							className="btn btn-special-grad-1 btn-sm font-weight-semibold text-white mx-auto"
							style={{ fontSize: "14px" }}
						>
							Start Counseling Now
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
									Professional Psychologist Within Your Reach
								</ResponsiveText_H1>
							</div>
							<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-lg-left text-center">
								All of our psychologists are officially licensed, thoroughly
								skilled, and highly professional. They are here to help you to
								get through hard times and to make positive impacts in your
								life.
								<br />
								<br />
								They will be pleased to help you with anything, without leaving
								you feeling ashamed or judged. Every counseling session is done
								personally in private and abides to Psychology Ethics Code.
							</p>
							<div className="d-flex d-lg-block">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
									className="btn btn-special-grad-1 font-weight-semibold text-white mx-auto mx-lg-0"
									style={{ fontSize: "14px" }}
								>
									Start Counseling Now
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

			<BodyContainer key="body2">
				<hr
					className="mb-rlv-3-mobile mb-lg-rlv-3-desktop"
					style={{ borderTop: "1px solid #afafaf" }}
				/>
			</BodyContainer>

			{/* MEDIA SECTION */}
			<BodyContainer key="body3">
				<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
					Has Been Featured In
				</h2>
				<div className="row text-center mb-rlv-5-mobile">
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
				<p className="text-center text-gray-5 mt-rlv-B h5 mb-rlv-5-mobile mb-lg-rlv-5-desktop">
					and a dozen of other media
				</p>
			</BodyContainer>

			{/* YUK SECTION */}
			<div className="container-fluid bg-riliv-level-5 py-rlv-5-mobile py-lg-rlv-5-desktop text-center">
				<BodyContainer>
					<div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop d-flex">
						<p
							className="mb-1 h4 text-gray-5 font-weight-semibold mx-auto"
							style={{ maxWidth: "500px" }}
						>
							Don’t wait any longer, it’s time to get Riliv and make yourself
							mentally healthy!
						</p>
					</div>
					<div className="d-flex d-lg-block">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSc2wgfu8KpRCQvLAIjJ6hYRzlbAOWFtEwLWTmWY2jynFXtRGQ/viewform"
							className="btn btn-special-grad-1 font-weight-semibold text-white mx-auto mx-lg-0"
							style={{ fontSize: "14px" }}
						>
							Start Counseling Now
						</a>
					</div>
				</BodyContainer>
			</div>

			<RilivFooter hideAll />
			<BootstrapScript />
		</Fragment>
	);
};

export default Counseling;

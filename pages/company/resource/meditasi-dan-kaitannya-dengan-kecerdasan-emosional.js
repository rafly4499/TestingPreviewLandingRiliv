import { Fragment } from "react";
import BodyContainer from "../../../components/body-container/body-container.component";
import BootstrapScript from "../../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../../components/footer/footer.component";
import HeaderGTMandAnalytics from "../../../components/header/header-analytics-tagmanager";
import HeaderPixelFB from "../../../components/header/header-facebook-pixel";
import HeaderHotjar from "../../../components/header/header-hotjar";
import HeaderFreshChat from "../../../components/header/header-freshchat";
import RilivHeader from "../../../components/header/header.component";
import RilivNavbarCompanyResources from "../../../components/page/riliv-for-company/navbar-company/index";
import SimpleSnackbar from "../../../components/simple-snackbar/simple-snackbar.component";
import ResponsiveImage from "../../../components/responsive-image/responsive-image.component";
import RequestDemoForm from "../../../components/page/resource/form/request-demo.component";
import HeaderResourceTopic from "../../../components/page/resource/header";
import BodyResourceTopic from "../../../components/page/resource/body";

const MemaksimalkanProduktivitas = () => {
	return (
		<Fragment>
			<RilivHeader
				customTitle="Riliv for company - Indonesian Employee Assistance Program"
				customDescription="Layanan kesehatan mental terpadu untuk karyawan di perusahaan Anda agar lebih sehat dan bahagia."
			>
				<HeaderGTMandAnalytics />
				<HeaderPixelFB />
				<HeaderPixelFB />
				<HeaderHotjar />
			</RilivHeader>

			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbarCompanyResources currentPage="Resource" />

			{/* HEADER SECTION */}
			<section
				className="container-fluid px-0 bg-riliv-level-1 py-rlv-3-mobile py-lg-rlv-3-desktop"
				style={{
					backgroundImage: 'url("/img-resources/section_2 2x.png")',
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<HeaderResourceTopic
					imgSrc="ilus_2 2x.png"
					imgAlt="Meditasi dan kaitannya dengan kecerdasan emosional"
					title="Meditasi dan kaitannya"
					titlebreak=" dengan kecerdasan emosional"
				/>
			</section>
			{/* HEADER SECTION END */}
			{/* BODY SECTION */}
			<section
				className="container-fluid px-0 py-rlv-3-mobile py-lg-rlv-3-desktop"
				style={{ backgroundColor: "#e2f8fa" }}
			>
				<BodyContainer>
					<div className="row">
						<div className="col-12 col-lg-6 mb-rlv-1-mobile mb-lg-0">
							<BodyResourceTopic
								description={
									<span>
										Bukan hanya keterampilan dan kemampuan teknis saja yang
										penting bagi perusahaan, namun kecerdasan emosional pun jadi
										hal yang tidak kalah pentingnya. Apa saja yang perlu
										dilakukan untuk meningkatkan kecerdasan emosional pada
										karyawan Anda?
									</span>
								}
								listHead={
									<span>
										Unduh dokumen ini, yang dapat membantu Anda untuk memahami:
									</span>
								}
								list={[
									<span>
										Pengaruh meditasi dan mindfulness terhadap peningkatan
										kecerdasan emosional di tempat kerja
									</span>,
									<span>
										Informasi dan segala data mengenai kecerdasan emosional yang
										dapat digunakan untuk pertumbuhan perusahaan
									</span>,
									<span>
										Pentingnya memprioritaskan kecerdasan emosional dan
										pengaruhnya terhadap pendapatan dan kepuasan kerja yang
										meningkat
									</span>,
								]}
							/>
						</div>
						<div className="col-12 col-lg-6">
							<RequestDemoForm
								topic="Meditasi dan kaitannya dengan kecerdasan emosional"
								file="Kecerdasan Emosional"
							/>
						</div>
					</div>
				</BodyContainer>
			</section>
			{/* BODY SECTION END */}
			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default MemaksimalkanProduktivitas;

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
					imgSrc="ilus_4 2x.png"
					imgAlt="Mindfulness sebagai solusi atas burnout pada karyawan"
					title={
						<span>
							<em>Mindfulness</em> sebagai solusi
						</span>
					}
					titlebreak={
						<span>
							{" "}
							atas <em>burnout</em> pada karyawan
						</span>
					}
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
										Karyawan yang burnout dapat mengakibatkan berbagai masalah
										pada performa dan produktivitas perusahaan. Meskipun mirip,
										<em>burnout</em> memiliki perbedaan dengan stres kerja.
										Perlu diketahui bahwa <em>mindfulness</em> dapat mengatasi
										maupun mencegah burnout dan juga dapat membuat karyawan
										lebih <em>self-aware</em> akan keadaan dan tantangan yang
										dihadapi di dunia kerja.
									</span>
								}
								listHead={
									<span>
										Pada dokumen ini, Anda akan mengetahui lebih lanjut
										mengenai:
									</span>
								}
								list={[
									<span>
										Perbedaan <em>burnout</em> dan stres kerja
									</span>,
									<span>
										Penyebab dan dampak <em>burnout</em>
									</span>,
									<span>
										Bagaimana mengatasi <em>burnout</em> pada karyawan
									</span>,
									<span>
										Bagaimana <em>mindfulness</em> dapat mengatasi burnout pada
										karyawan
									</span>,
								]}
							/>
						</div>
						<div className="col-12 col-lg-6">
							<RequestDemoForm
								topic="Minfulness sebagai solusi atas burnout pada karyawan"
								file="Mindfulness Sebagai Solusi Atas Burnout Pada Karyawan"
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

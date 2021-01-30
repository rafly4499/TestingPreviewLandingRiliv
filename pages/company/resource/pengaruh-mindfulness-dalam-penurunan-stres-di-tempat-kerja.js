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

const PengaruhMindfulness = () => {
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
					imgSrc="ilus_3 2x.png"
					imgAlt="Pengaruh mindfulness dalam penurunan stres di tempat kerja"
					title={
						<span>
							Pengaruh <em>mindfulness</em> dalam
						</span>
					}
					titlebreak=" penurunan stres di tempat kerja"
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
										Beberapa penelitian telah membuktikan adanya dampak negatif
										pada perusahaan yang ditimbulkan dari adanya stres di tempat
										kerja, diantaranya adalah tingkat absensi dan{" "}
										<em>turnover</em>
										{` `}karyawan yang tinggi. Hal itu karena karyawan yang
										stres cenderung tidak bahagia dan memiliki produktivitas
										kerja yang rendah.
									</span>
								}
								listHead={
									<span>
										Dokumen ini akan membahas bagaimana pelatihan{" "}
										<em>mindfulness</em> dapat membantu menurunkan tingkat stres
										dan membantu Anda lebih memahami tentang:
									</span>
								}
								list={[
									<span>
										Tingkat ketahanan terhadap stres pada otak yang dapat
										berubah dengan <em>mindfulness</em>
									</span>,
									<span>Tanda dan gejala fisik karyawan yang stres</span>,
									<span>
										Alasan perusahaan perlu mencoba pelatihan{" "}
										<em>mindfulness</em> secara daring pada karyawan
									</span>,
								]}
							/>
						</div>
						<div className="col-12 col-lg-6">
							<RequestDemoForm
								topic="Pengaruh mindfulness dalam penurunan stres di tempat kerja"
								file="Stres di tempat kerja_ Bagaimana mindfulness dapat membantu"
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

export default PengaruhMindfulness;

import { Fragment } from "react";
import BodyContainer from "../../../components/body-container/body-container.component";
import BootstrapScript from "../../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../../components/footer/footer.component";
import HeaderGTMandAnalytics from "../../../components/header/header-analytics-tagmanager";
import HeaderPixelFB from "../../../components/header/header-facebook-pixel";
import HeaderFreshChat from "../../../components/header/header-freshchat";
import RilivHeader from "../../../components/header/header.component";
import RequestDemoForm from "../../../components/page/resources/request-demo/request-demo.component";
import ResourcesColumn from "../../../components/page/resources/resources_col";
import RilivNavbarCompanyResources from "../../../components/page/riliv-for-company/navbar-company/index";
import SimpleSnackbar from "../../../components/simple-snackbar/simple-snackbar.component";
import HeaderHotjar from "../../../components/header/header-hotjar";

const CompanyResources = () => {
	return (
		<Fragment>
			<RilivHeader
				customTitle="Riliv for company - Indonesian Employee Assistance Program"
				customDescription="Layanan kesehatan mental terpadu untuk karyawan di perusahaan Anda agar lebih sehat dan bahagia."
			>
				<HeaderGTMandAnalytics />
				<HeaderFreshChat />
				<HeaderPixelFB />
				<HeaderHotjar />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbarCompanyResources currentPage="Resource" />
			{/* HEADER SECTION */}
			<section
				className="container-fluid px-0 bg-riliv-level-1 py-lg-rlv-5-desktop py-rlv-5-mobile"
				style={{
					backgroundImage: 'url("/img-resources/section_1 2x.png")',
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<BodyContainer>
					<h1 className="text-center text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						<strong>
							Pentingnya Lingkungan Kerja <br className="d-none d-md-block" />
							yang Lebih Sehat Mental
						</strong>
					</h1>
					<p
						className="h5 text-white text-center mx-auto"
						style={{ maxWidth: "920px" }}
					>
						Kami hadir untuk membantu Anda menciptakan lingkungan kerja yang
						lebih sehat mental. Seberapa penting sehat mental dalam bekerja?
						Pelajari lebih lanjut penelitian yang telah kami lakukan mengenai
						pentingnya kesehatan mental karyawan dalam lingkungan kerja Anda.
					</p>
				</BodyContainer>
			</section>
			{/* HEADER SECTION END */}

			{/* BODY SECTION */}
			<section className="my-rlv-5-mobile my-lg-rlv-5-desktop">
				<BodyContainer>
					<ResourcesColumn
						first
						link="/company/resource/memaksimalkan-produktivitas-dalam-bekerja"
						title="Memaksimalkan produktivitas"
						titlebreak="dalam bekerja"
						imgSrc="ilus_1 2x.png"
						imgAlt="Memaksimalkan Produktivitas"
					/>
					<ResourcesColumn
						reverse
						link="/company/resource/meditasi-dan-kaitannya-dengan-kecerdasan-emosional"
						title="Meditasi dan kaitannya"
						titlebreak="dengan kecerdasan emosional"
						imgSrc="ilus_2 2x.png"
						imgAlt="Meditasi dan kaitannya"
					/>
					<ResourcesColumn
						link="/company/resource/pengaruh-mindfulness-dalam-penurunan-stres-di-tempat-kerja"
						title={
							<span>
								Pengaruh <em>mindfulness</em> dalam
							</span>
						}
						titlebreak="penurunan stres di tempat kerja"
						imgSrc="ilus_3 2x.png"
						imgAlt="Pengaruh mindfulness"
					/>
					<ResourcesColumn
						reverse
						link="/company/resource/mindfulness-sebagai-solusi-atas-burnout-pada-karyawan"
						title={
							<span>
								<em>Mindfulness</em> sebagai solusi
							</span>
						}
						titlebreak="atas burnout pada karyawan"
						imgSrc="ilus_4 2x.png"
						imgAlt="Mindfulness sebagai solusi"
					/>
					<ResourcesColumn
						link="/company/resource/pentingnya-kesehatan-mental-karyawan-di-perusahaan"
						title="Pentingnya kesehatan mental"
						titlebreak="karyawan di perusahaan"
						imgSrc="ilus_5 2x.png"
						imgAlt="Pentingnya kesehatan mental"
					/>
				</BodyContainer>
			</section>
			{/* BODY SECTION END */}
			{/* FORM SECTION */}
			<section
				className="container-fluid px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{ backgroundColor: "#e2f8fa" }}
			>
				<BodyContainer>
					<h2 className=" mb-rlv-C mb-lg-rlv-1-mobile text-center">
						<strong>Ingin informasi lebih lanjut?</strong>
					</h2>
					<h5
						className="text-center mx-auto mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ maxWidth: "670px" }}
					>
						Daftarkan diri Anda untuk mendapatkan informasi lebih banyak demi
						mewujudkan lingkungan kerja yang sehat mental
					</h5>
					<RequestDemoForm subject="Riliv for Company Test" />
				</BodyContainer>
			</section>

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default CompanyResources;

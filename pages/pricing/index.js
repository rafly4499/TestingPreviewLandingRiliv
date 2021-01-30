import React, { Fragment, useState } from "react";
import RilivHeader from "../../components/header/header.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import BodyContainer from "../../components/body-container/body-container.component";

import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import RilivFooter from "../../components/footer/footer.component";
import HeaderHotjar from "../../components/header/header-hotjar";
import HeaderFreshChat from "../../components/header/header-freshchat";
import HeaderPixelFB from "../../components/header/header-facebook-pixel";
import HeaderGTMandAnalytics from "../../components/header/header-analytics-tagmanager";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";

import PilihPaketKonseling from "../../components/page/pricing/PilihPaketKonseling";
import PaketKonselingCard from "../../components/page/pricing/PaketKonselingCard";
import KonselingTextContent from "../../contents/pricing/koselingText.content";
import KonselingCallContent from "../../contents/pricing/konselingCall.content";
import AnimationFade from "../../components/animation/animationFade";
import PaketMeditasiCard from "../../components/page/pricing/PaketMeditasiCard";
import PaketMeditasiContent from "../../contents/pricing/meditasiContent";
import YangAkanAndaDapatkan from "../../components/page/pricing/YangAkanAndaDapatkan";
import YangAkanAndaDapatContent from "../../contents/pricing/yangAkanAndaDapat.content";
import SyaratGaransi from "../../components/page/pricing/SyaratGaransi";
import SyaratKetentuanGaransiContent from "../../contents/pricing/syaratKetentuanGaransi.content";
import KataMereka from "../../components/page/pricing/KataMereka";
import KataMerekaContent from "../../contents/pricing/kataMereka.content";
import PaketKonselingModal from "../../components/page/pricing/PaketKonselingModal";

const PricingPage = () => {
	const [paketKonseling, setPaketKonseling] = useState(0);
	return (
		<Fragment>
			<RilivHeader>
				<HeaderGTMandAnalytics />
				<HeaderPixelFB />
				<HeaderHotjar />
				<HeaderFreshChat />
			</RilivHeader>
			<RilivNavbar currentPage="Pricing" textCTA="Pilih Paket" urlCTA="#" fix />
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0"> Coming Soon </p>{" "}
			</SimpleSnackbar>

			{/* HEADER PRICING */}
			<div
				className="container-fluid bg-riliv-level-1 px-0 py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{
					backgroundImage: 'url("./img-pricing/background_1 2x.webp")',
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				{/* PAKET KONSELING */}
				<BodyContainer>
					<h1 className="h2 text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
						<strong>Paket Konseling</strong>
					</h1>
					<div className="d-block d-lg-flex justify-content-center mb-rlv-2-mobile mb-lg-rlv-2-desktop">
						<PilihPaketKonseling
							state={paketKonseling}
							select={(e) => setPaketKonseling(e)}
						/>
					</div>
				</BodyContainer>
				{/* PAKET KONSELING TEXT */}
				<AnimationFade selected={paketKonseling} identifier={0}>
					<BodyContainer>
						<div className="row justify-content-center">
							{KonselingTextContent.map((data, index) => {
								return (
									<PaketKonselingCard
										key={`PaketKonselingText${index}`}
										{...data}
										type="Text"
									/>
								);
							})}
						</div>
					</BodyContainer>
				</AnimationFade>
				{/* ModalKonselingText */}
				{KonselingTextContent.map((data, index) => {
					return (
						<PaketKonselingModal
							{...data}
							key={`modalKonselingText${index}`}
							type="Text"
						/>
					);
				})}
				{/* ModalKonselingTextEnd */}
				{/* PAKET KONSELING TEXT END */}

				{/* PAKET KONSELING CALL */}
				<AnimationFade selected={paketKonseling} identifier={1}>
					<BodyContainer>
						<div className="row justify-content-center">
							{KonselingCallContent.map((data, index) => {
								return (
									<PaketKonselingCard
										key={`PaketKonselingCall${index}`}
										{...data}
										type="Call"
										url="https://docs.google.com/forms/u/0/d/1RpbaGMqysXYDdOcOozh42geO_oS9PSfP08hhUpBpKj8/viewform?edit_requested=true"
									/>
								);
							})}
						</div>
					</BodyContainer>
				</AnimationFade>
				{/* ModalKonselingText */}
				{KonselingCallContent.map((data, index) => {
					return (
						<PaketKonselingModal
							{...data}
							key={`modalKonselingText${index}`}
							type="Call"
							url="https://docs.google.com/forms/u/0/d/1RpbaGMqysXYDdOcOozh42geO_oS9PSfP08hhUpBpKj8/viewform?edit_requested=true"
						/>
					);
				})}
				{/* ModalKonselingTextEnd */}

				<BodyContainer>
					<div>
						<h3
							className="h5 text-center mb-0 text-white mt-rlv-1-mobile mt-lg-rlv-3-desktop mx-auto"
							style={{ maxWidth: "528px" }}
						>
							<strong>
								Beberapa psikolog mungkin menyarankan lebih dari 1x konseling
								sesuai dengan permasalahan yang Anda hadapi
							</strong>
						</h3>
					</div>
				</BodyContainer>
				{/* PAKET KONSELING CALL END */}
				{/* PAKET KONSELING END */}

				{/* PAKET MEDITASI */}
				<BodyContainer>
					<h2 className="h2 text-white mt-rlv-3-mobile mt-lg-rlv-3-desktop mb-rlv-2-mobile mb-lg-rlv-2-desktop text-center">
						<strong>Paket Meditasi</strong>
					</h2>
					<div className="d-block d-lg-flex">
						{PaketMeditasiContent.map((data, index) => {
							return (
								<PaketMeditasiCard key={`PaketMeditasi${index}`} {...data} />
							);
						})}
					</div>
				</BodyContainer>
				{/* PAKET MEDITASI END */}
			</div>
			{/* HEADER PRICING END */}

			{/* YANG AKAN ANDA DAPATKAN */}
			<BodyContainer>
				<div className="my-rlv-5-mobile my-lg-rlv-5-desktop">
					<h2 className="h2 mb-rlv-2-mobile mb-lg-rlv-2-desktop text-center">
						<strong>Yang Akan Anda Dapatkan</strong>
					</h2>
					<div className="row">
						{YangAkanAndaDapatContent.map((data, index) => (
							<YangAkanAndaDapatkan
								key={`YangAkanAndaDapatkan${index}`}
								{...data}
							/>
						))}
					</div>
				</div>
			</BodyContainer>
			{/* YANG AKAN ANDA DAPATKAN END */}

			{/* KATA MEREKA */}
			<BodyContainer>
				<div className="mb-rlv-3-mobile mb-lg-rlv-3-desktop">
					<h2 className="mb-rlv-2-mobile mb-lg-rlv-2-desktop text-center">
						<strong>Kata Mereka tentang Riliv</strong>
					</h2>
					<div className="row">
						<div className="col-12 col-lg-6">
							<img src="./img-pricing/testi_ilus 2x.webp" className="w-100" />
						</div>
						<div className="col-12 col-lg-6 mt-rlv-1-desktop">
							<KataMereka Data={KataMerekaContent} />
						</div>
					</div>
				</div>
			</BodyContainer>
			{/* KATA MEREKA END */}

			{/* SYARAT KETENTUAN */}
			<div
				id="syarat&ketentuangaransi"
				className="container-fluid px-0 pt-rlv-4-mobile pt-lg-rlv-4-desktop pb-rlv-5-mobile pb-lg-rlv-5-desktop"
				style={{ backgroundColor: "#e2f8fa" }}
			>
				<BodyContainer>
					<h2 className="h2 text-center mb-rlv-3-mobile mb-lg-rlv-3-desktop">
						<strong>Syarat & Ketentuan Garansi Uang Kembali</strong>
					</h2>
					<div className="row">
						{SyaratKetentuanGaransiContent.map((data, index) => {
							return <SyaratGaransi {...data} key={`SyaratGaransi${index}`} />;
						})}
					</div>
				</BodyContainer>
			</div>
			{/* SYARAT KETENTUAN END */}

			<RilivFooter />
			<BootstrapScript />
		</Fragment>
	);
};

export default PricingPage;

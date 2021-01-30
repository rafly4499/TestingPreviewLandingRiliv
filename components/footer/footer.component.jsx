import { Fragment } from "react";
import { useRouter } from "next/router";
import ActiveSnackbar from "../../components/simple-snackbar/simple-snackbar.active";

const RilivFooter = ({ hideAll, hideLinks }) => {
	return (
		<Fragment>
			{hideAll ? null : (
				<Fragment>
					{hideLinks ? null : <FooterLinks />}

					<div className="container-fluid py-3 bg-gray-1">
						<p className="paragraph-riliv text-gray-5 my-3 text-center d-block">
							PT. Riliv Psikologi Indonesia
						</p>
					</div>
				</Fragment>
			)}

			{/* SCRIPT FRESH CHAT */}
			<script src="https://snippets.freshchat.com/js/fc-pre-chat-form-v2.js"></script>
			<script src="/js/freshChat-preForm.js" />
			<script src="https://wchat.freshchat.com/js/widget.js" async></script>
		</Fragment>
	);
};

const FooterLinks = () => {
	const router = useRouter();
	let path = "";

	if (router.pathname === "/") {
		path = "home";
	} else {
		path = router.pathname;
		path = path.replace("/", "");
	}

	return (
		<Fragment>
			<div className="container-fluid" style={{ backgroundColor: "#fcfcfc" }}>
				<div className="container py-rlv-4-mobile py-lg-rlv-4-desktop text-gray-5 px-lg-rlv-3">
					<div className="row text-center text-md-left px-lg-rlv-4-mobile">
						<div className="col-lg-3 col-md-6 col-12 mb-3">
							<div className="d-block">
								<a href="https://riliv.co" className="d-block">
									<img
										src="/img/logo-full-color.svg"
										alt="logo riliv"
										height="55px"
										className="mb-rlv-1-mobile mb-lg-rlv-1-desktop"
									/>
								</a>
								<a
									className="d-block"
									href={`https://play.google.com/store/apps/details?id=nozero.apps1&referrer=utm_source%3Dwebsite%26utm_content%3Dandroid%26utm_campaign%3D${path}`}
								>
									<img
										src="/img/google_play.png"
										className="mb-rlv-B"
										style={{ width: "161.8px", height: "48px" }}
									/>
								</a>
								<a
									className="d-block"
									href={`https://click.google-analytics.com/redirect?tid=UA-65518022-7&url=https%3A%2F%2Fitunes.apple.com%2Fid%2Fapp%2Friliv%2Fid1510486066&aid=nozero.apps1&idfa=%{idfa}&cs=website&cn=${path}&cc=ios`}
								>
									<img
										src="/img/app_store.png"
										style={{ width: "161.8px", height: "48px" }}
									/>
								</a>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-3">
							<h4 className="mb-3 font-weight-semibold">Layanan Kami</h4>
							<a
								href="/hening"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Meditasi
							</a>
							<a
								href="/konseling"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Konseling
							</a>
							<a
								href="/company"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Riliv for Company
							</a>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-3">
							<h4 className="mb-3 font-weight-semibold">Tentang Kami</h4>
							<a
								href="https://riliv.co/rilivstory"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Blog
							</a>
							<a
								href="/about"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Tentang Kami
							</a>
							<a
								href="/career"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Karir
							</a>
							<a
								href="/contact"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Kontak
							</a>
							<a
								href="/konselor"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Bergabung Sebagai Konselor
							</a>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-3 ">
							<h4 className="mb-3 font-weight-semibold">Lainnya</h4>
							<a
								className="d-block text-decoration-none text-gray-5 mb-3"
								style={{ cursor: "pointer" }}
								onClick={() => ActiveSnackbar("comingSoon")}
							>
								Terapi Online
							</a>
							<a
								href="/pricing"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Harga
							</a>
							<a
								href="/privasi"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Kebijakan Privasi
							</a>
							<a
								href="/ketentuan"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								Syarat dan Ketentuan
							</a>
							<a
								href="/faq"
								className="d-block text-decoration-none text-gray-5 mb-3"
							>
								FAQ
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default RilivFooter;

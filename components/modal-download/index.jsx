import { useRouter } from "next/router";

const ModalDownloadAndroidIos = () => {
	const router = useRouter();
	let path = "";

	if (router.pathname === "/") {
		path = "home";
	} else {
		path = router.pathname;
		path = path.replace("/", "");
	}

	return (
		<div
			className="modal fade"
			id="modalDownloadAndroidIos"
			tabIndex="-1"
			role="dialog"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content" style={{ border: "0" }}>
					<div className="modal-body" style={{ position: "relative" }}>
						<div
							className="d-flex justify-content-end"
							style={{ position: "absolute", right: "16px", top: "16px" }}
						>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								style={{ opacity: "1" }}
							>
								<span
									aria-hidden="true"
									className="font-weight-bold text-gray-5"
								>
									&times;
								</span>
							</button>
						</div>
						<div className="my-rlv-1-mobile my-lg-rlv-1-desktop">
							<p className="h5 font-weight-bold text-center mb-rlv-B">
								Coba Aplikasi Sekarang
							</p>
							<div className="d-lg-flex d-block text-center justify-content-center">
								<div className="mx-lg-rlv-A mx-0 my-lg-rlv-A my-0">
									<p className="mb-rlv-A">Aplikasi Android</p>
									<a
										href={`https://play.google.com/store/apps/details?id=nozero.apps1&referrer=utm_source%3Dwebsite%26utm_content%3Dandroid%26utm_campaign%3D${path}`}
									>
										<img
											src="/img/google_play.png"
											style={{ width: "161.8px", height: "48px" }}
										/>
									</a>
								</div>
								<div className="mx-lg-rlv-A mx-0 my-lg-rlv-A my-0">
									<p className="mb-rlv-A">Aplikasi IOS</p>
									<a
										href={`https://click.google-analytics.com/redirect?tid=UA-65518022-7&url=https%3A%2F%2Fitunes.apple.com%2Fid%2Fapp%2Friliv%2Fid1510486066&aid=nozero.apps1&idfa=%{idfa}&cs=website&cn=${path}&cc=ios`}
									>
										<img
											src="/img/app_store.png"
											style={{ width: "161.8px", height: "48px" }}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalDownloadAndroidIos;

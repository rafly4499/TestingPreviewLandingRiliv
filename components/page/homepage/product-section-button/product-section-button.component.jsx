import React, { Fragment } from "react";
import ActiveSnackbar from "../../../simple-snackbar/simple-snackbar.active";

const ProductSectionButton = ({
	urlDetail,
	urlPlaystore,
	forCompany,
	comingSoon,
}) => {
	let btnText = "Lihat Detail";
	if (forCompany) btnText = "Pelajari Lebih Lanjut";
	return (
		<div className="d-lg-flex d-block">
			{comingSoon ? (
				<Fragment>
					<button
						data-toggle="modal"
						data-target="#modalDownloadAndroidIos"
						className="btn font-weight-semibold btn btn-special-grad-1 mr-rlv-B w-auto px-rlv-B d-none d-lg-block"
						style={{ height: "47.84px", width: "161px" }}
					>
						Coba Aplikasi Sekarang
					</button>
					<button
						data-toggle="modal"
						data-target="#modalDownloadAndroidIos"
						className="btn font-weight-semibold btn btn btn-special-grad-1 mr-rlv-B px-rlv-A d-block d-lg-none"
						style={{ height: "47.84px", width: "100%" }}
					>
						Coba Aplikasi Sekarang
					</button>
					<a
						className="btn font-weight-semibold btn btn-outline-riliv-special-1 pointer-event text-riliv-special-1 mr-rlv-B w-auto mt-rlv-B mt-lg-0 d-none d-lg-block"
						style={{ height: "47.84px", width: "161px" }}
						onClick={() => ActiveSnackbar("comingSoon")}
					>
						{btnText}
					</a>
					<a
						className="btn font-weight-semibold btn btn-outline-riliv-special-1 pointer-event text-riliv-special-1 mr-rlv-B px-rlv-A mt-rlv-B mt-lg-0 d-block d-lg-none"
						style={{ height: "47.84px", width: "100%" }}
						onClick={() => ActiveSnackbar("comingSoon")}
					>
						{btnText}
					</a>
				</Fragment>
			) : (
				<Fragment>
					{forCompany ? (
						<Fragment>
							<div className="">
								<a
									href={urlDetail}
									className="btn font-weight-semibold btn btn-outline-riliv-special-1 w-auto mt-rlv-B mt-lg-0 d-none d-lg-block"
									style={{ height: "47.84px", width: "161px" }}
								>
									{btnText}
								</a>
								<a
									href={urlDetail}
									className="btn font-weight-semibold btn btn-outline-riliv-special-1 px-rlv-A mt-rlv-B mt-lg-0 d-block d-lg-none"
									style={{ height: "47.84px", width: "100%" }}
								>
									{btnText}
								</a>
							</div>
						</Fragment>
					) : (
						<Fragment>
							<button
								data-toggle="modal"
								data-target="#modalDownloadAndroidIos"
								className="btn font-weight-semibold btn btn-special-grad-1 mr-rlv-B w-auto px-rlv-B d-none d-lg-block"
								style={{ height: "47.84px", width: "161px" }}
							>
								Coba Aplikasi Sekarang
							</button>
							<button
								data-toggle="modal"
								data-target="#modalDownloadAndroidIos"
								className="btn font-weight-semibold btn btn btn-special-grad-1 mr-rlv-B px-rlv-A d-block d-lg-none"
								style={{ height: "47.84px", width: "100%" }}
							>
								Coba Aplikasi Sekarang
							</button>
						</Fragment>
					)}
				</Fragment>
			)}

			{forCompany ? (
				""
			) : comingSoon ? null : (
				<div className="">
					<a
						href={urlDetail}
						className="btn font-weight-semibold btn btn-outline-riliv-special-1 w-auto mt-rlv-B mt-lg-0 d-none d-lg-block"
						style={{ height: "47.84px", width: "161px" }}
					>
						{btnText}
					</a>
					<a
						href={urlDetail}
						className="btn font-weight-semibold btn btn-outline-riliv-special-1 px-rlv-A mt-rlv-B mt-lg-0 d-block d-lg-none"
						style={{ height: "47.84px", width: "100%" }}
					>
						{btnText}
					</a>
				</div>
			)}
		</div>
	);
};

export default ProductSectionButton;

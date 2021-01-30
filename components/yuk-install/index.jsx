import React, { Fragment } from "react";
import BodyContainer from "../body-container/body-container.component";

const YukInstallSection = () => {
	return (
		<Fragment>
			<div className="container-fluid bg-riliv-level-5 py-rlv-5-mobile py-lg-rlv-5-desktop text-center">
				<BodyContainer>
					<div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop d-none d-md-block">
						<p className="mb-1 h4 text-gray-5 font-weight-semibold">
							Tunggu apalagi? Yuk install Riliv
						</p>
						<p className="h4 text-gray-5 font-weight-semibold">
							dan saatnya kamu sehat mental
						</p>
					</div>
					<div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop d-block d-md-none">
						<p className="mb-1 h4 text-gray-5 font-weight-semibold">
							Tunggu apalagi? Yuk install Riliv dan saatnya kamu sehat mental
						</p>
					</div>
					<button
						data-toggle="modal"
						data-target="#modalDownloadAndroidIos"
						className="btn btn-special-grad-1 btn-sm font-weight-normal text-white d-inline-block font-weight-semibold"
						style={{ fontSize: "14px" }}
					>
						Coba Aplikasi Sekarang
					</button>
				</BodyContainer>
			</div>
		</Fragment>
	);
};

export default YukInstallSection;

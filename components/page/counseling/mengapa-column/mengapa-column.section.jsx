import React from "react";
import {
	MengapaTop,
	MengapaBody,
	MengapaBottom,
} from "./mengapa-column.component";

export const MengapaLargeDesktop = () => {
	return (
		<div className="row">
			<div className="col-6 pr-0">
				<MengapaTop>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface1.png"
						alt="Konseling Online Riliv"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Riliv Counseling
					</h4>
				</MengapaTop>
				<MengapaBody>
					<p className="h5">
						Do it anywhere, experience more convenience and efficiency.
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">Flexible, schedule based on your availability</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Save up to 75% from face to face counseling and pick the most
						suitable package for your needs.
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Counseling by text chat and phone call, anonymity is highly assured.
					</p>
				</MengapaBody>
				<MengapaBottom>
					<p className="h5">Is as effective as face to face counseling.</p>
				</MengapaBottom>
			</div>
			<div className="col-6 pl-0" style={{ borderLeft: "2px solid #eaeae9" }}>
				<MengapaTop>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface12.png"
						alt="Konseling Offline"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Face to Face Counseling
					</h4>
				</MengapaTop>
				<MengapaBody>
					<p className="h5">
						Requires you to directly visit counseling offices or mental health
						units around.
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Agreed schedule is harder to be adjusted again when something comes
						up.
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">Price ranges from min. $160 for each session</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Counseling by direct interaction, identity can’t be 100% anonymous
						(confidentiality assured).
					</p>
				</MengapaBody>
				<MengapaBottom>
					<p className="h5">
						Is as effective as Riliv Counseling, but some people go for online
						counseling for its anonymity assurance and to avoid external
						judgements.
					</p>
				</MengapaBottom>
			</div>
		</div>
	);
};

export const MengapaMobileSize = () => {
	return (
		<div className="row">
			<div className="col-12">
				<MengapaTop mobile={true}>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface1.png"
						alt="Konseling Online Riliv"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Riliv Counseling
					</h4>
				</MengapaTop>
				<MengapaBody mobile={true}>
					<p className="h5">
						Do it anywhere, experience more convenience and efficiency.
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">Flexible, schedule based on your availability</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Save up to 75% from face to face counseling and pick the most
						suitable package for your needs.
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Counseling by text chat and phone call, anonymity is highly assured.
					</p>
				</MengapaBody>
				<MengapaBottom mobile={true}>
					<p className="h5">Is as effective as face to face counseling.</p>
				</MengapaBottom>
			</div>
			<div className="col-12 mt-rlv-1-mobile mt-lg-rlv-1-desktop">
				<MengapaTop mobile={true}>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface12.png"
						alt="Konseling Offline"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Face to Face Counseling
					</h4>
				</MengapaTop>
				<MengapaBody mobile={true}>
					<p className="h5">
						Requires you to directly visit counseling offices or mental health
						units around.
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Agreed schedule is harder to be adjusted again when something comes
						up.
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">Price ranges from min. $160 for each session</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Counseling by direct interaction, identity can’t be 100% anonymous
						(confidentiality assured).
					</p>
				</MengapaBody>
				<MengapaBottom mobile={true}>
					<p className="h5">
						Is as effective as Riliv Counseling, but some people go for online
						counseling for its anonymity assurance and to avoid external
						judgements.
					</p>
				</MengapaBottom>
			</div>
		</div>
	);
};

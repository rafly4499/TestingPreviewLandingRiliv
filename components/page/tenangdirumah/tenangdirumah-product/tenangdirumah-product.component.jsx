import ResponsiveImage from "../../../responsive-image/responsive-image.component";
import { Fragment } from "react";

const ProductTenangDiRumah = (props) => {
	const { title, btnText, btnUrl, imgSrc, imgAlt, modal } = props;
	return (
		<div className="row">
			<div className="col-12 col-lg-6">
				<div className="d-flex">
					<div className="d-inline">
						<h3 className="d-inline-block mr-rlv-B">&#8226;</h3>
					</div>
					<div className="d-inline">
						<h3 className="font-weight-bold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							{title}
						</h3>
						{props.children}
						{modal ? (
							<Fragment>
								<button
									data-toggle="modal"
									data-target="#modalDownloadAndroidIos"
									className="btn btn-special-grad-1 font-weight-semibold text-white"
									style={{ fontSize: "16px" }}
								>
									{btnText}
								</button>
							</Fragment>
						) : btnText ? (
							<a
								href={btnUrl}
								className="btn btn-special-grad-1 font-weight-semibold text-white"
								style={{ fontSize: "16px" }}
							>
								{btnText}
							</a>
						) : null}
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-6 mt-rlv-1-mobile mt-lg-0 pl-rlv-1-mobile">
				<ResponsiveImage
					w_desktop="100%"
					w_tablet="70%"
					w_mobile="90%"
					imgSrc={`./img-tenangdirumah/${imgSrc}`}
					imgAlt={imgAlt}
				/>
			</div>
		</div>
	);
};

export default ProductTenangDiRumah;

import React from "react";
import { CenteredResponsiveImage } from "../../../responsive-image/responsive-image.component";

const CardTestimonies = ({ imgSrc, Name, Position, Desc }) => {
	return (
		<div className="row mx-auto pl-lg-rlv-A">
			<div className="col-12 col-lg-auto">
				<CenteredResponsiveImage
					w_desktop="220px"
					w_tablet="200px"
					w_mobile="180px"
					imgSrc={`./img-career/${imgSrc}`}
					imgAlt="Work At Riliv"
				/>
			</div>
			<div
				className="col-12 col-lg-8 pl-0 pl-lg-rlv-2-desktop text-center text-lg-left d-block"
				style={{ maxWidth: "100%" }}
			>
				<p className="h5 mb-rlv-1-mobile mb-lg-rlv-C mt-lg-0 mt-rlv-1-mobile">
					<strong>
						{Name},<br className=" d-lg-none d-block " /> {Position}
					</strong>
				</p>
				<p className="h5">"{Desc}"</p>
			</div>
		</div>
	);
};
export default CardTestimonies;

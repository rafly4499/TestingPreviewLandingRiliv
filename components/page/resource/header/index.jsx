import ResponsiveImage from "../../../responsive-image/responsive-image.component";
import { Fragment } from "react";
import BodyContainer from "../../../body-container/body-container.component";

const HeaderResourceTopic = ({ imgSrc, imgAlt, title, titlebreak }) => {
	return (
		<Fragment>
			<BodyContainer>
				<div className="d-lg-flex d-block justify-content-center align-items-center">
					<div className=" mr-lg-rlv-2-desktop mr-0 mb-lg-0 mb-rlv-1-mobile">
						<ResponsiveImage
							imgSrc={`/img-resources/${imgSrc}`}
							imgAlt={imgAlt}
							w_desktop="265px"
							w_tablet="300px"
							w_mobile="100%"
						/>
					</div>
					<h1 className="text-white text-lg-left text-center">
						<strong>
							{title} <br className="d-none d-lg-block" />
							{titlebreak}
						</strong>
					</h1>
				</div>
			</BodyContainer>
		</Fragment>
	);
};

export default HeaderResourceTopic;

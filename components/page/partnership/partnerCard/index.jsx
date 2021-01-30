const { Fragment } = require("react");

const PartnerCard = ({ first, firstMd, firstLg, imgSrc, imgAlt }) => {
	return (
		<Fragment>
			<div className="col-12 col-md-6 col-lg-4">
				<div
					className={`${first ? "" : "mt-rlv-1-mobile"} ${
						firstMd ? "mt-md-0" : "mt-md-rlv-1-mobile"
					} ${firstLg ? "mt-lg-0" : "mt-lg-rlv-1-desktop"}`}
				>
					<img src={imgSrc} alt={imgAlt} style={{ width: "100%" }} />
				</div>
			</div>
		</Fragment>
	);
};

export default PartnerCard;

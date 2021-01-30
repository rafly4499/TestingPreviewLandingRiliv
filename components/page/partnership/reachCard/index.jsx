const { Fragment } = require("react");

const ReachCard = ({
	first,
	imgSrc,
	imgAlt,
	imgWidth,
	Title,
	Reach,
	Description,
	firstRow,
}) => {
	return (
		<Fragment>
			<div
				className={`col-12 col-lg-3 text-center ${
					first ? "" : "mt-rlv-1-mobile "
				} ${firstRow ? "mt-lg-0" : "mt-lg-rlv-2-desktop"}`}
			>
				<img
					className="mb-rlv-A mb-lg-rlv-B"
					src={imgSrc}
					alt={imgAlt}
					style={{ width: imgWidth }}
				/>
				<h3 className="h3 mb-rlv-A" style={{ color: "#f5a623" }}>
					{Title}
				</h3>
				<p className="h3 mb-0" style={{ lineHeight: "42px" }}>
					<strong>{Reach}</strong>
				</p>
				<p className="h5">{Description}</p>
			</div>
		</Fragment>
	);
};

export default ReachCard;

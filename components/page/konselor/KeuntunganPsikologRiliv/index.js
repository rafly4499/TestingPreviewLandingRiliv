import ResponsiveImage from "../../../responsive-image/responsive-image.component";
const KeuntunganPsikologRiliv = ({
	first,
	firstRow,
	imgSrc,
	imgAlt,
	Title,
	Description,
}) => {
	return (
		<div
			className={`col-12 col-lg-6 text-center text-lg-left ${
				first ? "" : "mt-rlv-2-mobile"
			} ${firstRow ? "mt-lg-0" : "mt-lg-rlv-2-desktop"}`}
		>
			<div className="d-inline-block d-lg-flex ">
				<div className=" d-block d-lg-inline text-center text-lg-left">
					<ResponsiveImage
						imgSrc={`./img-konselor/${imgSrc}`}
						imgAlt={imgAlt}
						w_desktop="160px"
						w_tablet="160px"
						w_mobile="160px"
					/>
				</div>
				<div className="d-block d-lg-inline text-center text-lg-left ml-0 ml-lg-rlv-1-mobile">
					<h4 className="h5 mb-rlv-B mt-rlv-1-mobile mt-lg-rlv-A">
						<strong>{Title}</strong>
					</h4>
					<p className="h5 mb-0">{Description}</p>
				</div>
			</div>
		</div>
	);
};

export default KeuntunganPsikologRiliv;

const YangAkanAndaDapatkan = ({ imgSrc, imgAlt, Description, first }) => {
	return (
		<div
			className={`col-12 col-lg-4 text-center ${
				first ? "" : "mt-rlv-1-mobile mt-lg-0"
			}`}
		>
			<div>
				<img
					src={`./img-pricing/${imgSrc}`}
					alt={imgAlt}
					className="mb-rlv-1-mobile mb-lg-rlv-1-desktop mx-auto"
					style={{ width: "220px" }}
				/>
			</div>
			<div>
				<p className="h5 mb-0 mx-auto" style={{ maxWidth: "500px" }}>
					{Description}
				</p>
			</div>
		</div>
	);
};

export default YangAkanAndaDapatkan;

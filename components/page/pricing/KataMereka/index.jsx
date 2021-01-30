const { Fragment } = require("react");

const KataMereka = ({ Data }) => {
	return (
		<Fragment>
			<div
				id="carouselExampleControls"
				className="carousel slide text-lg-left text-center"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					{Data.map((data, index) => {
						return (
							<div
								key={`TestimoniList${index}`}
								className={`carousel-item ${index === 0 ? "active" : ""}`}
							>
								<p className="h4 font-weight-bold mb-rlv-B">
									"<em>{data.Title}</em>"
								</p>
								<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop">
									{data.Review}
								</p>
								<p className="h5 mb-rlv-1-mobile mb-lg-rlv-1-desktop">
									{data.Reviewer}
								</p>
							</div>
						);
					})}
				</div>
				<a href="#carouselExampleControls" role="button" data-slide="prev">
					<div
						className="h2 text-riliv-level-1 font-weight-bold d-inline-block mr-rlv-B relative"
						style={{
							height: "36px",
							width: "36px",
							borderRadius: "18px",
							border: "3px solid #11cbe1",
							position: "relative",
						}}
					>
						<p
							className="h1-desktop font-weight-normal"
							style={{ position: "absolute", left: "9px", bottom: "-26px" }}
						>
							&#8249;
						</p>
					</div>
				</a>
				<a href="#carouselExampleControls" role="button" data-slide="next">
					<div
						className="h2 text-riliv-level-1 font-weight-bold d-inline-block relative"
						style={{
							height: "36px",
							width: "36px",
							borderRadius: "18px",
							border: "3px solid #11cbe1",
							position: "relative",
						}}
					>
						<p
							className="h1-desktop font-weight-normal"
							style={{ position: "absolute", left: "9px", bottom: "-26px" }}
						>
							&#8250;
						</p>
					</div>
				</a>
			</div>
		</Fragment>
	);
};

export default KataMereka;

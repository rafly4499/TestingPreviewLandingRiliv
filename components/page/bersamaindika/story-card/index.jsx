const StoryCard = ({ title, link, imgLink, last, lastRow }) => {
	return (
		<div className="col-12 col-lg-4">
			<a href={link} target="_blank">
				{/* Image */}
				<div
					className="mb-rlv-B"
					style={{
						width: "100%",
						paddingBottom: "57.5%",
						backgroundColor: "#d5d8d8",
						backgroundImage: `url("${imgLink}")`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						borderRadius: "16px",
					}}
				></div>
			</a>
			<a
				href={link}
				target="_blank"
				style={{ color: "#333333", textDecoration: "none" }}
			>
				<p
					className={`h5 ${lastRow ? "mb-lg-0" : "mb-lg-rlv-2-desktop"} ${
						last ? "mb-0" : "mb-rlv-2-mobile"
					}`}
					style={{ lineHeight: "32px" }}
				>
					<strong>{title}</strong>
				</p>
			</a>
		</div>
	);
};

export default StoryCard;

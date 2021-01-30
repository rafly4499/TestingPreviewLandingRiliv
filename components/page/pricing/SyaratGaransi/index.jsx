const SyaratGaransi = ({ Title, Subtitle, List, Url, first }) => {
	return (
		<div
			className={`col-12 col-lg-6 ${first ? "" : "mt-rlv-1-mobile mt-lg-0"}`}
		>
			<div
				className="bg-white py-rlv-2-mobile py-lg-rlv-2-desktop px-rlv-C px-lg-rlv-1-desktop"
				style={{
					borderRadius: "20px",
					boxShadow: "0px 20px 50px 0px #00000011",
					height: "100%",
				}}
			>
				<h4 className="h4 mb-rlv-A text-center">
					<strong>{Title}</strong>
				</h4>
				<p
					className={`paragraph-riliv text-center mb-rlv-C ${
						Subtitle ? "" : "invisible d-none d-lg-block"
					}`}
				>
					{Subtitle ? Subtitle : "No Subtitle"}
				</p>
				<ul className="mb-rlv-1-mobile mb-lg-rlv-1-desktop">
					{List.map((data, index) => {
						return (
							<li
								className={`h5 ${
									data.visible ? "" : "invisible d-none d-lg-block"
								}`}
								key={`listGaransi${Title}${index}`}
								style={{ transform: "translateX(-16px)" }}
							>
								{data.text}
							</li>
						);
					})}
				</ul>
				<div className="d-flex">
					<a
						href={Url}
						className="btn btn-sm btn-fix font-weight-semibold text-white btn-special-grad-1 mx-auto"
					>
						Klaim Garansi
					</a>
				</div>
			</div>
		</div>
	);
};

export default SyaratGaransi;

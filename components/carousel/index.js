import React, { Fragment } from "react";

const CarouselComponent = ({ Data, Name }) => {
	return (
		<div
			id={`carousel${Name}`}
			className="carousel slide"
			data-ride="carousel"
			data-touch="true"
		>
			<ol className="carousel-indicators" style={{ marginBottom: "-36px" }}>
				{Data.map((data, index) => {
					return (
						<li
							data-target={`#carousel${Name}`}
							data-slide-to={`${index}`}
							className={index === 0 ? "active" : ""}
							style={{
								width: "10px",
								height: "10px",
								borderRadius: "100%",
							}}
							key={`CarouselIndicators${Name}${index}`}
						></li>
					);
				})}
			</ol>
			<div className="carousel-inner">
				{Data.map((data, index) => {
					return (
						<div
							className={`carousel-item shadow-lg ${
								index === 0 ? "active" : ""
							}`}
							key={`CarouselData${Name}${index}`}
						>
							<img
								className="d-block w-100 px-rlv-A"
								src={data}
								alt={`Slide ${index}`}
							/>
						</div>
					);
				})}
			</div>
			<a
				className="carousel-control-prev"
				href={`#carousel${Name}`}
				role="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href={`#carousel${Name}`}
				role="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};

export const CarouselCustom = ({ Data, Name, InvertArrow, TranslateArrow }) => {
	return (
		<div
			id={`carousel${Name}`}
			className="carousel slide"
			data-ride="carousel"
			data-touch="true"
		>
			<ol className="carousel-indicators" style={{ marginBottom: "-48px" }}>
				{Data.map((data, index) => {
					return (
						<li
							data-target={`#carousel${Name}`}
							data-slide-to={`${index}`}
							className={index === 0 ? "active" : ""}
							style={{
								width: "10px",
								height: "10px",
								borderRadius: "100%",
							}}
							key={`CarouselCustomIndicators${Name}${index}`}
						></li>
					);
				})}
			</ol>
			<div className="carousel-inner">
				{Data.map((data, index) => {
					return (
						<div
							className={`carousel-item ${index === 0 ? "active" : ""}`}
							key={`CarouselCustomData${Name}${index}`}
						>
							{data}
						</div>
					);
				})}
			</div>
			<a
				className="carousel-control-prev"
				href={`#carousel${Name}`}
				role="button"
				data-slide="prev"
			>
				<span
					className="carousel-control-prev-icon d-none d-lg-inline-block"
					aria-hidden="true"
					style={{
						filter: InvertArrow ? "invert(100%)" : "",
						transform: `translateX(-${TranslateArrow})`,
					}}
				></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href={`#carousel${Name}`}
				role="button"
				data-slide="next"
			>
				<span
					className="carousel-control-next-icon d-none d-lg-inline-block"
					aria-hidden="true"
					style={{
						filter: InvertArrow ? "invert(100%)" : "",
						transform: `translateX(${TranslateArrow})`,
					}}
				></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};

export const CarouselKonselor = ({ Data, nama }) => {
	return (
		<Fragment>
			<div
				id={`carousel${nama}`}
				className="carousel slide"
				data-ride="carousel"
				data-touch="true"
			>
				<ol
					className="carousel-indicators"
					style={{ transform: "translateY(64px)" }}
				>
					<li
						data-target={`#carousel${nama}`}
						data-slide-to="0"
						className="active"
						style={{
							width: "10px",
							height: "10px",
							borderRadius: "100%",
						}}
					/>
					<li
						data-target={`#carousel${nama}`}
						data-slide-to="1"
						style={{
							width: "10px",
							height: "10px",
							borderRadius: "100%",
						}}
					/>
				</ol>
				<div className="carousel-inner">
					{Data.map((data, index) => {
						return (
							<div
								className={`carousel-item ${
									index === 0 ? "active" : ""
								} px-rlv-A px-lg-rlv-2-desktop`}
								key={`carousel${nama}${index}_item`}
							>
								<div
									className="bg-white py-rlv-2-mobile py-lg-rlv-2-desktop px-rlv-1-mobile px-lg-rlv-1-desktop"
									style={{ borderRadius: "10px" }}
								>
									<div className="d-block d-lg-flex text-center text-lg-left">
										<div className="d-block d-lg-inline">
											<img
												src={`./img-konselor/${data.imgSrc}`}
												alt={`${data.imgAlt}`}
												style={{ width: "220px", height: "220px" }}
											/>
										</div>
										<div className="d-block d-lg-inline ml-0 ml-lg-rlv-2-desktop mt-rlv-1-mobile mt-lg-0">
											<p className="h5 mb-rlv-C">“{data.testimoni}”</p>
											<p className="paragraph-riliv mb-rlv-A">
												<strong>{data.nama}</strong>
											</p>
											<p className="paragraph-riliv mb-0">
												<em>{data.bidang}</em>
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<a
					className="carousel-control-prev "
					href={`#carousel${nama}`}
					role="button"
					data-slide="prev"
				>
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 16 16"
						className="bi bi-chevron-left d-lg-inline d-none"
						fill="currentColor"
						style={{
							color: "#11cbe1",
							opacity: "100%",
							transform: "translateX(-48px)",
						}}
					>
						<path
							stroke="#11cbe1"
							strokeWidth="2"
							fillRule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</a>
				<a
					className="carousel-control-next"
					href={`#carousel${nama}`}
					role="button"
					data-slide="next"
				>
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 16 16"
						className="bi bi-chevron-left d-lg-inline d-none"
						fill="currentColor"
						style={{
							color: "#11cbe1",
							opacity: "100%",
							transform: "translateX(48px) rotate(180deg)",
						}}
					>
						<path
							stroke="#11cbe1"
							strokeWidth="2"
							fillRule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</a>
			</div>
		</Fragment>
	);
};

export default CarouselComponent;

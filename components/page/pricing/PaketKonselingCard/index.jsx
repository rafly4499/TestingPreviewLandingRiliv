import React, { Fragment } from "react";
import PaketKonselingModal from "../PaketKonselingModal";
const PaketKonselingCard = (props) => {
	const {
		Title,
		Subtitle,
		SubtitleBg,
		Price,
		PriceTotal,
		ExpiredIn,
		List,
		first,
		type,
		Url,
	} = props;
	return (
		<Fragment>
			{/* CARD */}
			<div
				className={`col-12 col-lg-3 ${first ? "" : "mt-rlv-1-mobile mt-lg-0"}`}
			>
				<div
					className="bg-white py-rlv-1-mobile py-lg-rlv-1-desktop px-rlv-C"
					style={{
						borderRadius: "20px",
						boxShadow: "0px 20px 50px 0px #00000011",
						position: "relative",
					}}
				>
					{Subtitle ? (
						<div
							className="paragraph-riliv"
							style={{
								backgroundColor: "#00000000",
								position: "absolute",
								top: "0",
								left: "0",
								marginTop: "-20px",
								width: "100%",
							}}
						>
							<div
								className="mx-auto"
								style={{
									width: "156px",
									borderRadius: "10px",
									backgroundColor: SubtitleBg,
								}}
							>
								<p className="text-center paragraph-riliv py-rlv-A text-white mb-0">
									{Subtitle}
								</p>
							</div>
						</div>
					) : null}

					<h3 className="h5 text-center mb-rlv-C">
						<strong>
							PAKET
							<br />
							{Title}
						</strong>
					</h3>
					<p className="paragraph-riliv-sm text-center text-riliv-level-1 mb-rlv-A">
						Rp. {Price}/sesi
					</p>
					<p className="h5 font-weight-bold mb-rlv-A text-center">
						Rp. {PriceTotal}/paket
					</p>
					<p
						className="paragraph-riliv-sm text-center pb-rlv-C mb-rlv-C"
						style={{
							fontSize: "12px",
							borderBottom: "2px solid #00000011",
						}}
					>
						Paket berlaku hingga {ExpiredIn}
					</p>
					{List.map((data, index) => {
						if (data.on) {
							return (
								<div className="d-flex" key={`List${type}${Title}${index}`}>
									<img
										className="d-inline"
										src="./img-pricing/icon_centang_on 2x.webp"
										style={{
											height: "16px",
											marginRight: "12px",
											transform: "translateY(4px)",
										}}
									/>
									<p
										className="d-inline paragraph-riliv-sm mb-0"
										style={{ fontSize: "12px" }}
									>
										{data.text}{" "}
										{data.iconI ? (
											<a href="#syarat&ketentuangaransi ">
												<img
													className="d-inline ml-rlv-A"
													src="./img-pricing/icon_i 2x.webp"
													style={{ height: "16px" }}
												/>
											</a>
										) : null}
									</p>
								</div>
							);
						} else {
							return (
								<div className="d-flex" key={`List${type}${Title}${index}`}>
									<img
										className="d-inline"
										src="./img-pricing/icon_centang_off 2x.webp"
										style={{
											height: "16px",
											marginRight: "12px",
											transform: "translateY(4px)",
										}}
									/>
									<p
										className="d-inline paragraph-riliv-sm mb-0 text-gray-3"
										style={{ fontSize: "12px" }}
									>
										{data.text}
									</p>
								</div>
							);
						}
					})}

					{/* <button
						className="btn btn-block btn-sm btn-special-grad-1 mt-rlv-C mb-0 paragraph-riliv font-weight-semibold"
						data-toggle="modal"
						data-target={`#modal${type}${Title}`}
					>
						Pilih Paket
					</button> */}
					<div className="text-center">	
							{type === "Text" ? (
								<Fragment>
									<a
										href={"https://play.google.com/store/apps/details?id=nozero.apps1&referrer=utm_source%3Dwebsite%26utm_content%3Dandroid%26utm_campaign%3D${path}"}
										className="btn btn-block btn-lg-fix d-lg-inline-block px-0 btn-special-grad-1 font-weight-semibold mt-2 mr-0 mr-lg-rlv-C"
									>
										Via Android
									</a>
									<a
										className="btn btn-block btn-lg-fix d-lg-inline-block px-0 btn-special-grad-1 font-weight-semibold mr-0 mr-lg-rlv-C text-white"
										data-toggle="modal"
										data-target={`#modal${type}${Title}`}
									>
										Via iOS
									</a>
								</Fragment>
							) : (
								<a
									className="btn btn-block btn-lg-fix d-lg-inline-block px-0 btn-special-grad-1 font-weight-semibold text-white"
									data-toggle="modal"
									data-target={`#modal${type}${Title}`}
								>
									Lanjutkan
								</a>
							)}
						</div>
				</div>
			</div>
			{/* CARD END */}
		</Fragment>
	);
};

export default PaketKonselingCard;

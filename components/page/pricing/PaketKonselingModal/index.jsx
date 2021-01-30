import { useRouter } from "next/router";
import React, { Fragment } from "react";

const PaketKonselingModal = (props) => {
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
	const router = useRouter();
	let path = "";

	if (router.pathname === "/") {
		path = "home";
	} else {
		path = router.pathname;
		path = path.replace("/", "");
	}

	return (
		<div
			className="modal fade px-rlv-A"
			id={`modal${type}${Title}`}
			tabIndex="-1"
			role="dialog"
			aria-hidden="true"
		>
			<div
				className="modal-dialog modal-dialog-centered modal-xl"
				role="document"
			>
				<div
					className="modal-content shadow-lg"
					style={{ borderRadius: "20px", border: "0px" }}
				>
					{/* Modal Header */}
					<div
						className="bg-riliv-level-1"
						style={{ borderRadius: "20px 20px 0 0" }}
					>
						<div className="d-flex px-rlv-B px-lg-rlv-2-desktop py-rlv-1-mobile py-lg-rlv-1-desktop align-items-center">
							<p className="h5 text-white mb-0">
								<strong>PAKET {Title}</strong>
							</p>
							<button
								data-dismiss="modal"
								className="ml-auto"
								aria-label="Close"
								style={{ backgroundColor: "#00000000", border: "none" }}
							>
								<p className="h4 font-weight-semibold text-white mb-0">
									&#10005;
								</p>
							</button>
						</div>
					</div>
					{/* Modal Header End */}
					{/* Modal Content */}
			{/* CARD */}
			<div className="px-rlv-B px-lg-rlv-2-desktop pt-rlv-1-desktop pt-lg-rlv-1-desktop"
			style={{
				margin: "auto",
				width: "70%",
			}}
			>
			<div
				className={`col-lg-6 col-md-offset-5 ${first ? "" : "mt-rlv-1-mobile mt-lg-0"}`}
				style={{
					float: "left",
				}}
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
						className="paragraph-riliv-sm text-center"
						style={{
							fontSize: "12px",
						}}
					>
						Paket berlaku hingga {ExpiredIn}
					</p>
					</div>
					</div>
					<div className={`col-lg-6 ${first ? "" : "mt-rlv-1-mobile mt-lg-0"}`}
					style={{
						float: "left",
						paddingTop: "40px",
					}}>
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
										style={{ fontSize: "16px", lineHeight: "31px !important" }}
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
				
					</div>
					</div>
					{/* Modal Content End */}
					{/* Modal Description */}
					<div className="px-rlv-B px-lg-rlv-2-desktop pt-rlv-1-desktop pt-lg-rlv-1-desktop pb-rlv-3-mobile pb-lg-rlv-3-desktop">
						<p className="h5 mb-rlv-B">
							<strong>
								Kami tidak menyarankan layanan ini bagi Anda yang:
							</strong>
						</p>
						<ol
							className="mb-rlv-1-mobile"
							type="1"
							style={{ transform: "translateX(-16px)" }}
						>
							<li className="h5">Dibawah 17 tahun</li>
							<li className="h5">
								Sedang menyakiti diri sendiri (<em>self-harm</em>)
							</li>
							<li className="h5">Memiliki pikiran untuk bunuh diri</li>
							<li className="h5">
								Jika memiliki masalah mendesak atau mengancam hidup, jangan
								gunakan layanan Riliv, silahkan hubungi 119
							</li>
						</ol>
						<p className="h5 mb-rlv-B">
							<strong>Perhatian:</strong>
						</p>
						<p className="h5 mb-rlv-2-mobile mb-lg-rlv-2-desktop">
							Sesi konseling akan dimulai setelah Anda menentukan jadwal bersama
							Psikolog. Psikolog akan menyapa Anda dalam 1x24 jam.
						</p>
						<div className="text-center">
							{type === "Text" ? (
								<Fragment>
									<a
									href={`https://clientarea.riliv.co.id/?packageId=${Url}`}
									className="btn btn-block btn-lg-fix d-lg-inline-block px-0 btn-special-grad-1 font-weight-semibold text-white"
								>
									Lanjutkan Pembelian
								</a>
								</Fragment>
							) : (
								<a
									href={`https://clientarea.riliv.co.id/?packageId=${Url}`}
									className="btn btn-block btn-lg-fix d-lg-inline-block px-0 btn-special-grad-1 font-weight-semibold text-white"
								>
									Lanjutkan Pembelian
								</a>
							)}
						</div>
					</div>
					{/* Modal Description End */}
				</div>
			</div>
		</div>
	);
};

export default PaketKonselingModal;

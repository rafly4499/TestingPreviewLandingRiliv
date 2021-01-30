import React, { Fragment } from "react";

export const CaraKerjaDesktop = () => {
	return (
		<Fragment>
			<div className="row justify-content-center mt-rlv-1-mobile mt-lg-rlv-1-desktop">
				<div className="col-1 invisible"></div>
				<div className="col-1 p-0 d-flex">
					<img
						src="/img-company/group_12342.webp"
						className="container align-self-center"
						style={{ padding: "0", height: "104px", objectFit: "contain" }}
					/>
				</div>
				<div className="col-3 p-0 d-flex">
					<img
						src="/img-company/group_12345.webp"
						className="container align-self-center"
						style={{
							padding: "0",
							width: "110%",
							objectFit: "contain",
							marginLeft: "-5%",
						}}
					/>
				</div>
				<div className="col-1 p-0 d-flex">
					<img
						src="/img-company/group_12343.webp"
						className="container align-self-center"
						style={{ padding: "0", height: "104px", objectFit: "contain" }}
					/>
				</div>
				<div className="col-3 p-0 d-flex">
					<img
						src="/img-company/group_12345.webp"
						className="container align-self-center"
						style={{
							padding: "0",
							width: "110%",
							objectFit: "contain",
							marginLeft: "-5%",
						}}
					/>
				</div>
				<div className="col-1 p-0 d-flex">
					<img
						src="/img-company/group_12344.webp"
						className="container align-self-center"
						style={{ padding: "0", height: "104px", objectFit: "contain" }}
					/>
				</div>
				<div className="col-1 invisible"></div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3">
					<h4 className="text-white font-weight-bold mb-rlv-B">INTAKE</h4>
					<p className="paragraph-riliv text-white mb-0">
						Karyawan menginstall, mengisi kondisi kesehatan mereka. Biodata
						karyawan tidak akan ditampilkan untuk perusahaan
					</p>
				</div>
				<div className="col-1 invisible"></div>
				<div className="col-3">
					<h4 className="text-white font-weight-bold mb-rlv-B">TREATMENT</h4>
					<p className="paragraph-riliv text-white mb-0">
						Karyawan menggunakan meditasi secara rutin / konseling sesuai yang
						dibutuhkan
					</p>
				</div>
				<div className="col-1 invisible"></div>
				<div className="col-3">
					<h4 className="text-white font-weight-bold mb-rlv-B">RESULT</h4>
					<p className="paragraph-riliv text-white mb-0">
						Karyawan merasa lebih baik. Perusahaan bisa memonitor data karyawan
						(anonimus)
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export const CaraKerjaMobile = () => {
	return (
		<div className="row">
			<div className="col-12">
				<div className="p-0 d-flex mt-rlv-1-mobile">
					<img
						src="/img-company/group_12342.webp"
						className="container align-self-center"
						style={{ padding: "0", height: "128px", objectFit: "contain" }}
					/>
				</div>
				<h4 className="text-white font-weight-bold mb-rlv-B">INTAKE</h4>
				<p className="paragraph-riliv text-white mb-0 px-md-rlv-1-desktop">
					Karyawan menginstall, mengisi kondisi kesehatan mereka. Biodata
					karyawan tidak akan ditampilkan untuk perusahaan
				</p>
			</div>
			<div className="col-12">
				<div className="p-0 d-flex mt-rlv-1-mobile">
					<img
						src="/img-company/group_12343.webp"
						className="container align-self-center"
						style={{ padding: "0", height: "128px", objectFit: "contain" }}
					/>
				</div>
				<h4 className="text-white font-weight-bold mb-rlv-B">TREATMENT</h4>
				<p className="paragraph-riliv text-white mb-0 px-md-rlv-1-desktop">
					Karyawan menggunakan meditasi secara rutin / konseling sesuai yang
					dibutuhkan
				</p>
			</div>
			<div className="col-12">
				<div className="p-0 d-flex mt-rlv-1-mobile">
					<img
						src="/img-company/group_12344.webp"
						className="container align-self-center"
						style={{ padding: "0", height: "128px", objectFit: "contain" }}
					/>
				</div>
				<h4 className="text-white font-weight-bold mb-rlv-B">RESULT</h4>
				<p className="paragraph-riliv text-white mb-0 px-md-rlv-1-desktop">
					Karyawan merasa lebih baik. Perusahaan bisa memonitor data karyawan
					(anonimus)
				</p>
			</div>
		</div>
	);
};

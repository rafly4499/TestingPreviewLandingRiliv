import React from "react";
import {
	MengapaTop,
	MengapaBody,
	MengapaBottom,
} from "./mengapa-column.component";

export const MengapaLargeDesktop = () => {
	return (
		<div className="row">
			<div className="col-6 pr-0">
				<MengapaTop>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface1.png"
						alt="Konseling Online Riliv"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Konseling Riliv
					</h4>
				</MengapaTop>
				<MengapaBody>
					<p className="h5">
						Lebih nyaman dan efisien karena dapat{" "}
						<strong>dilakukan dimanapun</strong>
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						<strong>Fleksibel,</strong> jadwal dapat disesuaikan dengan
						ketersediaan Anda
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						<strong>75% lebih hemat</strong> dari konseling tatap muka dan{" "}
						<strong>bebas memilih paket</strong> sesuai kebutuhan
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Dilakukan melalui teks atau telepon dan{" "}
						<strong>anonimitas lebih terjaga</strong>
					</p>
				</MengapaBody>
				<MengapaBottom>
					<p className="h5">
						Memiliki <strong>efektivitas yang sama</strong> dengan konseling
						tatap muka
					</p>
				</MengapaBottom>
			</div>
			<div className="col-6 pl-0" style={{ borderLeft: "2px solid #eaeae9" }}>
				<MengapaTop>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface12.png"
						alt="Konseling Offline"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Konseling Tatap Muka
					</h4>
				</MengapaTop>
				<MengapaBody>
					<p className="h5">
						Harus datang ke kantor psikologi atau unit layanan kesehatan mental
						terlebih dahulu
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Jadwal yang telah disepakati bersama seringkali sulit disesuaikan
						kembali apabila berhalangan
					</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">Sekitar Rp 300.000 hingga Rp 1.000.000 per sesi</p>
				</MengapaBody>
				<MengapaBody>
					<p className="h5">
						Dilakukan melalui interaksi langsung dan identitas tidak anonim
					</p>
				</MengapaBody>
				<MengapaBottom>
					<p className="h5">
						Efektivitas sama, namun sebagian orang lebih nyaman melakukan
						konseling online untuk menjaga anonimitas dan menghindari adanya
						penghakiman dari lingkungan sekitar
					</p>
				</MengapaBottom>
			</div>
		</div>
	);
};

export const MengapaMobileSize = () => {
	return (
		<div className="row">
			<div className="col-12">
				<MengapaTop mobile={true}>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface1.png"
						alt="Konseling Online Riliv"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Konseling Riliv
					</h4>
				</MengapaTop>
				<MengapaBody mobile={true}>
					<p className="h5">
						Lebih nyaman dan efisien karena dapat{" "}
						<strong>dilakukan dimanapun</strong>
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						<strong>Fleksibel,</strong> jadwal dapat disesuaikan dengan
						ketersediaan Anda
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						<strong>75% lebih hemat</strong> dari konseling tatap muka dan{" "}
						<strong>bebas memilih paket</strong> sesuai kebutuhan
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Dilakukan melalui teks atau telepon dan{" "}
						<strong>anonimitas lebih terjaga</strong>
					</p>
				</MengapaBody>
				<MengapaBottom mobile={true}>
					<p className="h5">
						Memiliki <strong>efektivitas yang sama</strong> dengan konseling
						tatap muka
					</p>
				</MengapaBottom>
			</div>
			<div className="col-12 mt-rlv-1-mobile mt-lg-rlv-1-desktop">
				<MengapaTop mobile={true}>
					<img
						className="inline mr-rlv-C"
						src="./img-konseling/surface12.png"
						alt="Konseling Offline"
						style={{ height: "32px", width: "32px" }}
					/>
					<h4 className="font-weight-bold d-inline align-bottom">
						Konseling Tatap Muka
					</h4>
				</MengapaTop>
				<MengapaBody mobile={true}>
					<p className="h5">
						Harus datang ke kantor psikologi atau unit layanan kesehatan mental
						terlebih dahulu
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Jadwal yang telah disepakati bersama seringkali sulit disesuaikan
						kembali apabila berhalangan
					</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">Sekitar Rp 300.000 hingga Rp 1.000.000 per sesi</p>
				</MengapaBody>
				<MengapaBody mobile={true}>
					<p className="h5">
						Dilakukan melalui interaksi langsung dan identitas tidak anonim
					</p>
				</MengapaBody>
				<MengapaBottom mobile={true}>
					<p className="h5">
						Efektivitas sama, namun sebagian orang lebih nyaman melakukan
						konseling online untuk menjaga anonimitas dan menghindari adanya
						penghakiman dari lingkungan sekitar
					</p>
				</MengapaBottom>
			</div>
		</div>
	);
};

import React, { Fragment } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";

class RequestDemoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {
				nama: "",
				email: "",
				noTelp: "",
				namaPerusahaan: "",
				jumlahKaryawan: "",
				jabatan: "",
				tauDari: "",
				tauDariVal: "",
			},
			errorMessage: {
				email: "Gunakan email perusahaan anda",
				showEmail: 0,
				karyawan: "Masukkan jumlah karyawan perusahaan anda dengan benar",
				showKaryawan: 0,
				tauDari: "Masukkan pernyataan ini dengan benar",
				showTaudari: 0,
			},
			showComponent: {
				tauDariComponent: false,
			},
			loading: false,
			notification: {
				showNotification: false,
				success: 0,
			},
		};
	}

	componentDidMount() {}

	toParams(data) {
		return Object.keys(data)
			.map((key) => `${key}=${encodeURIComponent(data[key])}`)
			.join("&");
	}

	sendEmailHandler = (willEncodedVal) => {
		// EMAIL OPTION HANDLER
		const ServerURL = "https://company-api.riliv.co.id/api/v1";
		const mailUrl = `${ServerURL}/company/send/email`;
		const bodyData = {
			name: willEncodedVal.nama,
			email: willEncodedVal.email,
			templateId: "24",
		};

		axios({
			method: "post",
			url: mailUrl,
			headers: {
				Authorization: "rilivforcompanymailer",
				"Content-Type": "application/json",
			},
			data: bodyData,
		}).then(
			(res) => {},
			(err) => {
				console.log(err);
			}
		);
		return null;
	};

	onFormSubmit = () => {
		event.preventDefault();
		let errors = 0;
		let karyawanError = 0;
		let emailError = 0;
		let tauDariError = 0;
		let tauDariValError = 0;
		const { data, errorMessage } = this.state;
		// // Error Handler
		this.setState({
			errorMessage: {
				...errorMessage,
				showEmail: 0,
				showKaryawan: 0,
				showTaudari: 0,
			},
		});
		// ERROR KARYAWAN
		if (data.jumlahKaryawan == "Jumlah Karyawan" || data.jumlahKaryawan == "") {
			karyawanError = 1;
			errors = 1;
		}

		// ERROR EMAIL
		// let emailList = "gmail|yahoo|aol|hotmail|ymail";
		// let checkerResult = data.email.match(`@(${emailList})\.[A-Za-z0-9]`);
		// if (checkerResult != null) {
		// 	emailError = 1;
		// 	errors = 1;
		// }

		// ERROR TAU DARI
		if (
			data.tauDari == "Bagaimana Anda tau tentang Riliv?" ||
			data.tauDari == ""
		) {
			tauDariError = 1;
			errors = 1;
		}

		// SET ERROR
		if (errors == 1) {
			this.setState({
				errorMessage: {
					...errorMessage,
					showEmail: emailError,
					showKaryawan: karyawanError,
					showTaudari: tauDariError,
				},
			});
			return;
		} else {
			this.setState({ loading: true });

			let willEncodedVal = data;
			// HANDLE TAU DARI CASE
			if (data.tauDari === "Lainnya") {
				willEncodedVal.tauDari = willEncodedVal.tauDariVal;
			}

			// REQUEST
			const encodedVal = this.toParams(willEncodedVal);
			fetch(
				`https://script.google.com/macros/s/AKfycbyN6V5q7Gigg6F_oUzaVpBQczyHbuHbCQSimBpyJ70By4dxpyk/exec?${encodedVal}`
			)
				.then((res) => res.json())
				.then((parsed) => {
					if (parsed.result == "success") {
						this.setState({
							loading: false,
							notification: { showNotification: true, success: 1 },
						});
						this.sendEmailHandler(willEncodedVal);
					} else {
						this.setState({
							loading: false,
							notification: { showNotification: true, success: 0 },
						});
					}
				})
				.catch((error) => {
					this.setState({
						loading: false,
						notification: { showNotification: true, success: 0 },
					});
				});
		}
	};

	onCloseNotification() {
		this.setState({ notification: { showNotification: false, success: 0 } });
	}

	onChangeData = (event) => {
		this.setState({
			data: { ...this.state.data, [event.target.name]: event.target.value },
		});

		// HANDLER TAU DARI LAINNYA
		if (event.target.name === "tauDari" && event.target.value === "Lainnya") {
			this.setState({
				showComponent: { tauDariComponent: true },
			});
		}
		// HANDLER TAU DARI BUKA LAINNYA
		else if (
			event.target.name === "tauDari" &&
			event.target.value !== "Lainnya"
		) {
			this.setState({
				showComponent: { tauDariComponent: false },
			});
		}
	};

	render() {
		const { data, errorMessage, notification, showComponent } = this.state;
		return (
			<Fragment>
				{/* NOTIFICATION */}
				{this.state.notification.showNotification === true ? (
					<div
						className="col-12"
						style={{
							position: "fixed",
							top: "110px",
							zIndex: "3",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						<div
							className={`alert alert-${
								notification.success === 1 ? "success" : "danger"
							} alert-dismissible fade show`}
							style={{ width: "100%" }}
						>
							<strong>
								{notification.success === 1 ? "Terima kasih!" : "Proses Gagal "}{" "}
								<br />
							</strong>{" "}
							{notification.success === 1
								? "Proposal Program Riliv for Company akan kami kirim ke e-mail Anda dalam 1x24 jam "
								: "Silahkan coba lagi"}
							<button
								type="button"
								className="close"
								onClick={() => {
									this.onCloseNotification();
								}}
							>
								<span>&times;</span>
							</button>
						</div>
					</div>
				) : (
					""
				)}
				<div
					className="bg-white px-rlv-1-mobile py-rlv-1-desktop"
					style={{ borderRadius: "10px" }}
				>
					<form onSubmit={(event) => this.onFormSubmit(event)}>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								placeholder="Nama Lengkap Anda *"
								name="nama"
								required
								value={data["nama"]}
								onChange={this.onChangeData}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="email"
								placeholder="Alamat Email Anda *"
								name="email"
								required
								value={data["email"]}
								onChange={this.onChangeData}
							/>
							<small className="form-text text-danger">
								{errorMessage.showEmail ? errorMessage.email : ""}
							</small>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								placeholder="Nomor Telepon Anda *"
								name="noTelp"
								required
								value={data["noTelp"]}
								onChange={this.onChangeData}
							/>
						</div>
						<div className="form-row">
							<div className="col-12 col-lg-7">
								<div className="form-group">
									<input
										className="form-control"
										type="text"
										placeholder="Nama Perusahaan Anda *"
										name="namaPerusahaan"
										required
										value={data["namaPerusahaan"]}
										onChange={this.onChangeData}
									/>
								</div>
							</div>
							<div className="col-12 col-lg-5">
								<div className="form-group">
									<select
										name="jumlahKaryawan"
										className="form-control"
										required
										value={data["jumlahKaryawan"]}
										onChange={this.onChangeData}
									>
										<option defaultValue>Jumlah Karyawan *</option>
										<option>0 - 50</option>
										<option>50 - 200</option>
										<option>200 - 1000</option>
										<option>1000 - 10000</option>
										<option>10000 - 100000</option>
									</select>
									<small className="form-text text-danger">
										{errorMessage.showKaryawan ? errorMessage.karyawan : ""}
									</small>
								</div>
							</div>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								placeholder="Posisi/Jabatan Anda *"
								name="jabatan"
								required
								value={data["jabatan"]}
								onChange={this.onChangeData}
							/>
						</div>
						<div className="form-group">
							<select
								name="tauDari"
								className="form-control"
								required
								value={data["tauDari"]}
								onChange={this.onChangeData}
							>
								<option defaultValue>
									Bagaimana Anda tau tentang Riliv? *
								</option>
								<option>Pencarian di Google</option>
								<option>Media Sosial</option>
								<option>Teman atau Kerabat</option>
								<option>Televisi</option>
								<option>Media Online</option>
								<option>Lainnya</option>
							</select>
							<small className="form-text text-danger">
								{errorMessage.showTaudari ? errorMessage.tauDari : ""}
							</small>
						</div>
						{showComponent.tauDariComponent === false ? (
							""
						) : (
							<div className="form-group">
								<input
									className="form-control"
									type="text"
									placeholder="Bagaimana Anda tau tentang Riliv?"
									name="tauDariVal"
									required
									value={data["tauDariVal"]}
									onChange={this.onChangeData}
								/>
							</div>
						)}

						<p className="text-gray-4">* : Wajib Diisi</p>

						<button className="btn btn-block btn-special-grad-1 font-weight-bold mt-rlv-1-mobile">
							{this.state.loading === false ? (
								"Request Demo"
							) : (
								<Fragment>
									Tunggu Sebentar
									<div
										className="spinner-border ml-rlv-B"
										role="status"
										style={{ height: "24px", width: "24px" }}
									>
										<span className="sr-only">Loading...</span>
									</div>
								</Fragment>
							)}
						</button>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default RequestDemoForm;

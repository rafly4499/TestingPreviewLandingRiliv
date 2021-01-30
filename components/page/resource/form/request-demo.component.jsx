import React, { Fragment } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";

// Reference: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

class RequestDemoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				nama: "",
				email: "",
				noTelp: "",
				namaPerusahaan: "",
				jumlahKaryawan: "",
				jabatan: "",
				topic: "",
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

	async onSaveContactToList(willEncodedVal) {
		// EMAIL OPTION HANDLER
		const ServerURL = "https://company-api.riliv.co.id/api/v1";
		const Url = `${ServerURL}/company/save`;
		const bodyData = {
			name: willEncodedVal.nama,
			email: willEncodedVal.email,
			contactListId: "27",
		};

		await axios({
			method: "post",
			url: Url,
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
	}

	onFormSubmit = () => {
		const MainProps = this.props;
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

			// GET CURRENT TIME
			const today = new Date();
			const date =
				today.getFullYear() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getDate();
			const time =
				today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			const dateTime = date + " " + time;

			let willEncodedVal = data;

			willEncodedVal.dateTime = dateTime;
			willEncodedVal.topic = MainProps.topic;

			// REQUEST
			const encodedVal = this.toParams(willEncodedVal);

			fetch(
				`https://script.google.com/macros/s/AKfycbwsRYDMp663T54J52XCsITPhLZDIhV-z9nNUjZPHrUc-zBk-AmJ/exec?${encodedVal}`
			)
				.then((res) => res.json())
				.then(async (parsed) => {
					if (parsed.result == "success") {
						await this.onSaveContactToList(willEncodedVal);
						await this.setState({
							loading: false,
							notification: { showNotification: true, success: 1 },
						});
						window.open(
							`https://company-api.riliv.co.id/api/v1/download/company/resource/${MainProps.file}`
						);
						$("#modalCenter").modal({
							show: true,
							backdrop: "static",
							keyboard: false,
						});
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
	};

	render() {
		const { data, errorMessage, notification, showComponent } = this.state;
		return (
			<Fragment>
				{/* MODAL */}
				<div
					className="modal fade"
					id="modalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="modalCenterTitle"
					aria-hidden="true"
				>
					<div
						className="modal-dialog modal-dialog-centered"
						role="document"
						style={{ maxWidth: "600px" }}
					>
						<div className="modal-content text-center">
							<div className="py-lg-rlv-2-desktop py-rlv-C px-rlv-B px-lg-rlv-5-desktop">
								<h5 className="mb-rlv-B">
									<strong>Terima kasih telah mengunduh!</strong>
								</h5>
								<h5 className="mb-rlv-1-desktop">Unduhan Anda telah selesai</h5>
								<button
									type="button"
									class="btn btn-special-grad-1 btn-sm-fix font-weight-semibold text-white"
									data-dismiss="modal"
								>
									Ok
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* MODAL END */}

				<div
					className="bg-white px-rlv-1-mobile py-rlv-1-desktop mx-auto"
					style={{ borderRadius: "10px", maxWidth: "672px" }}
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

						<p className="text-gray-4 mb-0">* Wajib Diisi</p>

						<button className="btn btn-block btn-special-grad-1 font-weight-bold mt-rlv-1-mobile">
							{this.state.loading === false ? (
								"Unduh PDF"
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

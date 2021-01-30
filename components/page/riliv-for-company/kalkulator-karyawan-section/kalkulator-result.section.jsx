import React, { Fragment } from "react";
import { Range, getTrackBackground } from "react-range";

import KalkulatorCardComponent from "./kalkulator-card.component";

const numeral = require("numeral");

const STEP = 10;
const MIN = 0;
const MAX = 100000;

class KalkulatorKaryawan extends React.Component {
	state = {
		values: [1000],
		MAX: 100000,
		percentage: [33333],
	};
	render() {
		let jumlahKaryawan = this.state.values[0] / 5;
		let jumlahHari = jumlahKaryawan * 27;
		let jumlahRupiah = this.state.values[0];
		if (jumlahRupiah >= 1 && jumlahRupiah <= 4000) {
			jumlahRupiah = (4500000 / 21) * jumlahHari;
		} else if (jumlahRupiah >= 4001 && jumlahRupiah <= 20000) {
			jumlahRupiah = (4500000 / 21) * jumlahHari;
		} else {
			jumlahRupiah = (4500000 / 21) * jumlahHari;
		}
		return (
			<div>
				<div className="px-rlv-C px-lg-0">
					<Range
						values={this.state.percentage}
						step={STEP}
						min={MIN}
						max={this.state.MAX}
						onChange={(percentage) => {
							// CALCULATION HANDLER, PERCENTAGE
							let values = undefined;
							if (percentage[0] < 33333)
								values = (percentage[0] * 1000) / 33333;
							else if (percentage[0] < 66666) {
								let temporaryPercentage = percentage[0] - 33333;
								values = (temporaryPercentage * 4000) / 33333 + 1000;
							} else {
								let temporaryPercentage = percentage[0] - 66666;
								values = (temporaryPercentage * 95000) / 33333 + 5000;
							}

							// VALUES RESULT LIMIT HANDLER
							if (values > 100000) values = 100000;

							// SET STATE
							this.setState({ percentage, values: [values], MAX: 100000 });
						}}
						renderTrack={({ props, children }) => (
							<div
								onMouseDown={props.onMouseDown}
								onTouchStart={props.onTouchStart}
								style={{
									...props.style,
								}}
							>
								<div
									ref={props.ref}
									style={{
										height: "5px",
										width: "100%",
										borderRadius: "4px",
										background: getTrackBackground({
											values: this.state.percentage,
											colors: ["#11cbe1", "#d0f5f9"],
											min: MIN,
											max: this.state.MAX,
										}),
										alignSelf: "center",
									}}
								>
									{children}
								</div>
							</div>
						)}
						renderThumb={({ props, isDragged }) => (
							<div
								{...props}
								style={{
									...props.style,
									height: "40px",
									width: "40px",
									borderRadius: "50%",
									backgroundColor: "#FFF",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									boxShadow: "0px 2px 6px #AAA",
								}}
							>
								<div
									style={{
										position: "absolute",
										top: "-40px",
										color: "#fff",
										fontWeight: "bold",
										fontSize: "16px",
										padding: "2px 16px",
										borderRadius: "4px",
										backgroundColor: "#11cbe1",
									}}
								>
									{numeral(this.state.values[0].toFixed(0)).format("0,0")}
								</div>
								<div
									style={{
										height: "14px",
										width: "14px",
										borderRadius: "50%",
										backgroundColor: "#11cbe1",
									}}
								/>
							</div>
						)}
					/>
				</div>
				<div className="row">
					<KalkulatorCardComponent
						Title={numeral(jumlahKaryawan).format("0,0")}
						SubTitle="Karyawan"
						Description=" di perusahaan Anda mungkin sedang mengalami gangguan kesehatan mental seperti depresi, stres, atau kecemasan"
					/>
					<KalkulatorCardComponent
						Title={numeral(jumlahHari).format("0,0")}
						SubTitle="Hari"
						Description=" bisa terbuang sia-sia akibat penurunan kesehatan mental karyawan Anda"
					/>
					<KalkulatorCardComponent
						Title={numeral(jumlahRupiah).format("0,0")}
						SubTitle="Rupiah"
						Description=" di perusahaan Anda berpotensi terbuang karena masalah kesehatan mental"
					/>
				</div>
			</div>
		);
	}
}

export default KalkulatorKaryawan;

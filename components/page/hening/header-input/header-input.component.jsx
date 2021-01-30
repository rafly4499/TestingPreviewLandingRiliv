import React, {useState} from "react";

const HeaderInput = ({email, onChangeMail}) => {
	const [localMail, setLocalMail] = useState(email);

	const onFormSubmit = () => {
		onChangeMail(localMail);
		event.preventDefault();
		console.log(localMail);
	};

	const onEmailChange = (event) => {
		setLocalMail(event.target.value);
		onChangeMail(event.target.value);
	};

	return (
		<form onSubmit={(event) => onFormSubmit(event)}>
			<div className="form-row">
				<div className="col-12 col-lg-8 mb-rlv-B mb-lg-0 pr-lg-rlv-B">
					<input
						type="email"
						className="form-control d-block mr-0 mr-lg-rlv-B"
						placeholder="Masukkan Email Anda"
						onChange={onEmailChange}
						value={email}
					/>
				</div>
				<div className="col-12 col-lg-4 px-lg-0">
					<button
						type="submit"
						className="btn btn-special-grad-1 btn-block d-block font-weight-semibold text-white px-rlv-A"
					>
						Gabung Sekarang
					</button>
				</div>
			</div>
		</form>
	);
};

export default HeaderInput;

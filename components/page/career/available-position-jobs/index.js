import React from "react";

const AvailablePositionJobs = ({
	children,
	JobTitle,
	JobType,
	first,
	none,
}) => {
	let Job_Title = JobTitle.split(" ").join("");
	Job_Title = Job_Title.split("(").join("");
	Job_Title = Job_Title.split(")").join("");
	const Job_Type = JobType.split(" ").join("");
	return (
		<div
			className={`d-flex align-items-center bg-gray-1 mx-rlv-C mx-lg-0 ${
				first ? "" : "mt-rlv-A"
			}`}
		>
			<div className="col px-0">
				<div className="row py-rlv-B align-items-center">
					<div className="col-12 col-lg-6">
						<p className="h5 mb-0 font-weight-bold pl-rlv-B pl-lg-rlv-1-mobile px-0">
							{JobTitle}
						</p>
					</div>
					<div className="col-12 col-lg-6  ">
						<div className="d-flex align-items-center pr-lg-rlv-C">
							<p className="h5 mb-0 mr-auto pl-rlv-B px-0">{JobType}</p>
							<button
								className={`btn d-none ${
									none ? "" : "d-lg-inline-block"
								} btn-sm btn-special-grad-1 btn-lg-fix font-weight-semibold`}
								data-toggle="modal"
								data-target={`#modal${Job_Title}_${Job_Type}`}
							>
								Lihat Detail
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className=" px-0 d-lg-none text-right">
				<button
					className={`mr-rlv-B ${none ? "d-none" : ""}`}
					data-toggle="modal"
					data-target={`#modal${Job_Title}_${Job_Type}`}
					style={{
						backgroundImage: 'url("./img-career/mask_group_92.png")',
						height: "24px",
						width: "24px",
						backgroundSize: "contain",
						border: "none",
						transform: "rotate(-90deg)",
					}}
				/>
			</div>
			{children}
		</div>
	);
};

export default AvailablePositionJobs;

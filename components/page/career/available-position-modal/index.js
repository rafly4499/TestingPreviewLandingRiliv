import React, { Fragment } from "react";

const AvailablePositionModal = ({
	JobTitle,
	JobType,
	MainDesc,
	JobDesc,
	PreferedBackground,
	Requirements,
	ExtraDesc,
	Closing,
	Footer,
}) => {
	let Job_Title = JobTitle.split(" ").join("");
	Job_Title = Job_Title.split("(").join("");
	Job_Title = Job_Title.split(")").join("");
	const Job_Type = JobType.split(" ").join("");
	return (
		<div
			className="modal fade px-rlv-A"
			id={`modal${Job_Title}_${Job_Type}`}
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
								<strong>{JobTitle}</strong> - {JobType}
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
					{/* Modal Description */}
					<div className="px-rlv-B px-lg-rlv-2-desktop pt-rlv-1-desktop pt-lg-rlv-1-desktop pb-rlv-3-mobile pb-lg-rlv-3-desktop">
						<p className="h5 mb-rlv-1-mobile">
							<em>
								{MainDesc}
								<br />
								{ExtraDesc}
							</em>
						</p>
						{PreferedBackground ? (
							<Fragment>
								<p className="h5 font-weight-bold mb-rlv-B">
									Prefered backgrounds fot this role but not limited to:
								</p>
								<p className="h5 mb-rlv-1-mobile">{PreferedBackground}</p>
							</Fragment>
						) : null}

						{JobDesc.length > 0 ? (
							JobTitle == 'Copywriter (Social Media Digital Marketing and B2B Marketing)' ? (
							<Fragment>
								<p className="h5 font-weight-bold mb-rlv-B">Job Description Copywriter Social Media:</p>
								<ol className="mb-rlv-1-mobile" style={{ transform: "translateX(-16px)" }}>
									
										<li className="h5">Write, edit and publish engaging posts for various social networks, including Facebook, Twitter and Instagram</li>
										<li className="h5">Optimize social media posts (language, tone, message) based on our target audience’s behaviors</li>
										<li className="h5">Coordinate with internal teams to create advertising posts (e.g. for events, open roles and product releases)</li>
										<li className="h5">Track and report on social media insights (traffic, engagement, shares, conversion rates)</li>
										<li className="h5">Network with clients and industry professional</li>
									
								</ol>
								<p className="h5 font-weight-bold mb-rlv-B">Job Description Copywriter Digital Marketing:</p>
								<ol className="mb-rlv-1-mobile" style={{ transform: "translateX(-16px)" }}>
									
										<li className="h5">Create persuasive writing to promote riliv’s products and services</li>
										<li className="h5">Several edits and rewrites are sometimes necessary to ensure the copy is creative, attention - grabbing and effective</li>
										<li className="h5">Coordinate with internal teams to create advertising posts (e.g. for events, open roles and product releases)</li>
									
								</ol>
								<p className="h5 font-weight-bold mb-rlv-B">Job Description Copywriter B2B Marketing:</p>
								<ol className="mb-rlv-1-mobile" style={{ transform: "translateX(-16px)" }}>
									
										<li className="h5">Create copywriting for presentation slide</li>
										<li className="h5">Create MoU or other administration documents</li>
										<li className="h5">Create copywriting for B2B clients</li>
										<li className="h5">Coordinate with internal teams for copywriting needs</li>
										<li className="h5">Translate english documents to indonesian</li>
									
								</ol>
							</Fragment>
						) : 
						<Fragment>
								<p className="h5 font-weight-bold mb-rlv-B">Job Description:</p>
								<ol
									className="mb-rlv-1-mobile"
									style={{ transform: "translateX(-16px)" }}
								>
									{JobDesc.map((requirement, index) => (
										<li
											className="h5"
											key={`requirement${index}:${Job_Title}_${Job_Type}`}
										>
											{requirement}
										</li>
									))}
								</ol>
							</Fragment>
						):null}

						{Requirements.length > 0 ? (
							<Fragment>
								<p className="h5 font-weight-bold mb-rlv-B">Job Requirement:</p>
								<ol
									className="mb-rlv-1-mobile"
									style={{ transform: "translateX(-16px)" }}
								>
									{Requirements.map((requirement, index) => (
										<li
											className="h5"
											key={`requirement${index}:${Job_Title}_${Job_Type}`}
										>
											{requirement}
										</li>
									))}
								</ol>
							</Fragment>
						) : null}

						<p className="h5 mb-0" style={{ maxWidth: "900px" }}>
							{Closing ? (
								Closing
							) : (
								<Fragment>
									Send your Curriculum Vitae and Portfolio regarding to the role
									you apply in{" "}
									<a
										className="text-gray-5"
										href="https://docs.google.com/forms/d/e/1FAIpQLSeMCFvWIzsFVmZDWT4PuIKjTUwU3oJwM6Kwn3geKULerIR2aw/viewform"
									>
										<strong>here</strong>
									</a>
									. Should you have any questions, do not hesitate to contact us
									on career@riliv.co !
								</Fragment>
							)}
						</p>
						{Footer ? (
							<p className="h5 text-gray-5 mb-0 mt-rlv-B">{Footer}</p>
						) : null}
					</div>
					{/* Modal Description End */}
				</div>
			</div>
		</div>
	);
};

export default AvailablePositionModal;

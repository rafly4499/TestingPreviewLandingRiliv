import React, { Fragment } from "react";

const AccordionInfo = (props) => {
	const { accordionId, title, show, dataParent } = props;
	return (
		<Fragment>
			<div id={accordionId} className="mt-rlv-1-mobile mt-lg-rlv-1-desktop">
				<div style={{ borderBottom: "2px solid #d5d8d8" }}>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href={`#collapse${accordionId}`}
						role="button"
						aria-expanded="true"
						aria-controls={`collapse${accordionId}`}
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h5
								className="h5 font-weight-bold text-left pb-rlv-B mb-0 d-none d-md-inline"
								style={{ width: "90%" }}
							>
								{title}
							</h5>
							<h5
								className="h5 font-weight-bold text-left pb-rlv-B mb-0 d-inline d-md-none"
								style={{ width: "80%" }}
							>
								{title}
							</h5>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "20px",
									width: "20px",
									backgroundSize: "contain",
								}}
							></span>
						</nav>
					</button>
				</div>

				<div
					className={`collapse ${show === true ? "show" : ""}`}
					id={`collapse${accordionId}`}
					data-parent={`#${dataParent}`}
				>
					<div className="border-0 text-gray-5 pt-rlv-C pt-rlv-2-desktop">
						{props.children}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AccordionInfo;

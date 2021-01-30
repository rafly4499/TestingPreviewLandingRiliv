import React, {Fragment} from "react";

const AccordionProduct = (props) => {
	const {accordionId, title, show} = props;
	return (
		<Fragment>
			<div id={accordionId} className="container">
				<div style={{borderBottom: "2px solid #7b7c7c"}}>
					<button
						className="d-block btn-block text-gray-5 p-0 border-0"
						data-toggle="collapse"
						href={`#collapse${accordionId}`}
						role="button"
						aria-expanded="true"
						aria-controls={`collapse${accordionId}`}
					>
						<nav className="navbar navbar-light bg-light justify-content-between p-0 bg-white">
							<h2 className="h2 font-weight-bold py-rlv-C mb-0 d-none d-md-inline">{title}</h2>
							<h2
								className="h2 font-weight-bold text-left py-rlv-C mb-0 d-inline d-md-none"
								style={{width: "60vw"}}
							>
								{title}
							</h2>
							<span
								className="collapsed-span anim anim-rotate-90-clockwise"
								style={{
									backgroundImage: `url('assets-ketentuan-privasi/img-system/collapsed-right-arrow.svg')`,
									height: "24px",
									width: "24px",
								}}
							></span>
						</nav>
					</button>
				</div>

				<div
					className={`collapse ${show === true ? "show" : ""}`}
					id={`collapse${accordionId}`}
					data-parent={`#${accordionId}`}
				>
					<div className="border-0 text-gray-5 pt-rlv-2-mobile pt-rlv-2-desktop pb-rlv-5-mobile pb-rlv-5-desktop">
						{props.children}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AccordionProduct;

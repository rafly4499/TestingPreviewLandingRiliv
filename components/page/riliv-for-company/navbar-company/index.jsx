import { Fragment } from "react";

const RilivNavbarCompanyResources = ({ currentPage, textCTA, urlCTA, fix }) => {
	return (
		<Fragment>
			<nav
				id="navbar-custom"
				className="navbar navbar-expand-lg navbar-light bg-white text-gray-5 border-dark"
				style={{ transition: "top 0.3s" }}
			>
				<div className="container px-lg-3">
					<a className="navbar-brand" href="/">
						<img
							src="/img/logo-full-color.svg"
							alt="logo riliv"
							height="28px"
						/>
					</a>
					<a
						href={urlCTA}
						className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold px-1 px-sm-rlv-A px-md-rlv-B text-white d-inline-block d-lg-none ml-auto mr-1 ${
							textCTA ? "" : "invisible"
						}`}
						style={{ fontSize: "14px" }}
					>
						{textCTA ? textCTA : `|`}
					</a>
					<button
						className="navbar-toggler border-0 font-weight-bold d-inline d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span
							className="navbar-toggler-icon"
							style={{
								backgroundImage: `url('/img/burger.svg')`,
								height: `24px`,
								width: `24px`,
							}}
						></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav ml-auto justify-content-end font-weight-normal">
							<li className="nav-item pr-4">
								<a
									className={`nav-link pl-0 paragraph-riliv-sm ${
										currentPage == "Riliv for Company"
											? "active font-weight-semibold"
											: ""
									}`}
									href="/company"
								>
									Riliv for Company
								</a>
							</li>

							<li className="nav-item pr-4">
								<a
									className={`nav-link pl-0 paragraph-riliv-sm ${
										currentPage == "Resource"
											? "active font-weight-semibold"
											: ""
									}`}
									href="/company/resources"
								>
									Resource
								</a>
							</li>
						</ul>
						<span
							className={`navbar-text d-none d-lg-inline-block ${
								textCTA ? "ml-4" : "invisible m-0"
							}`}
							style={{ width: textCTA ? "" : "0px" }}
						>
							<a
								href={urlCTA}
								className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold text-white invisible d-lg-inline-block ml-auto mr-3 ${
									fix === true ? "btn-fix" : ""
								} `}
								style={{ fontSize: "14px" }}
							>
								{textCTA}a
							</a>
						</span>
					</div>
				</div>
			</nav>
			<script src="/js/riliv-navbar.js"></script>
		</Fragment>
	);
};

export default RilivNavbarCompanyResources;

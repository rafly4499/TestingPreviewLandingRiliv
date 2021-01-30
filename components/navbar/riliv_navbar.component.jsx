import { Fragment } from "react";
import Link from 'next/link'
import ModalDownloadAndroidIos from "../modal-download";

const RilivNavbar = (props) => {
	const { currentPage, textCTA, urlCTA, fix, hideMenu, center } = props;
	return (
		<Fragment>
			<nav
				id="navbar-custom"
				className="navbar navbar-expand-lg navbar-light bg-white text-gray-5 border-dark"
				style={{ transition: "top 0.3s" }}
			>
				<div className="container px-lg-3">
					{center ? <CenterNavbar {...props} /> : <DefaultNavbar {...props} />}
				</div>
			</nav>
			<script src="/js/riliv-navbar.js"></script>
		</Fragment>
	);
};

const CenterNavbar = (props) => {
	const { currentPage, textCTA, urlCTA, fix, hideMenu, center } = props;

	return (
		<Fragment>
			<a className="navbar-brand mx-auto" href="/">
				<img src="/img/logo-full-color.svg" alt="logo riliv" height="28px" />
			</a>
			<a
				className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold px-1 px-sm-rlv-A px-md-rlv-B text-white d-lg-none invisible`}
				style={{ fontSize: "14px", width: "0px" }}
			>
				a
			</a>
			<span className={`navbar-text invisible m-0`} style={{ width: "0px" }}>
				<a
					className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold text-white d-none d-lg-inline-block`}
					style={{ fontSize: "14px", width: "0px" }}
				>
					a
				</a>
			</span>
			{/* <Link href="/ads-bundling/view?campaign=[type_campaign]&versi=[no_versi]">
				<a>Versi</a>
			</Link> */}
		</Fragment>
	);
};

// Default setting of riliv navbar
const DefaultNavbar = (props) => {
	const { currentPage, textCTA, urlCTA, fix, hideMenu, center } = props;

	return (
		<Fragment>
			<a className="navbar-brand" href="/">
				<img src="/img/logo-full-color.svg" alt="logo riliv" height="28px" />
			</a>
			{/* If textCTA is Coba Aplikasi Sekarang */}
			{textCTA === "Coba Aplikasi Sekarang" ? (
				<ButtonAndroidIos textCTA={textCTA} />
			) : (
				<a
					href={urlCTA}
					className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold px-1 px-sm-rlv-A px-md-rlv-B text-white  d-lg-none ml-auto mr-1 ${
						textCTA ? "d-inline-block" : "invisible"
					}`}
					style={{ fontSize: "14px" }}
				>
					{textCTA ? textCTA : "a"}
				</a>
			)}

			{/* HIDE MENU */}
			{hideMenu ? null : (
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
							backgroundImage: `url('./img/burger.svg')`,
							height: `24px`,
							width: `24px`,
						}}
					></span>
				</button>
			)}
			{/* HIDE MENU END */}

			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav ml-auto justify-content-end font-weight-normal">
					{/* HIDE MENU COLLAPSE */}
					{hideMenu ? null : (
						<Fragment>
							<li className="nav-item pr-4">
								<a
									className={`nav-link pl-0 paragraph-riliv-sm ${
										currentPage == "Beranda"
											? "active font-weight-semibold"
											: ""
									}`}
									href="/"
								>
									Beranda
								</a>
							</li>
							<li className="nav-item pr-4">
								<a
									className={`nav-link pl-0 paragraph-riliv-sm ${
										currentPage == "Meditasi"
											? "active font-weight-semibold"
											: ""
									}`}
									href="/hening"
								>
									Meditasi
								</a>
							</li>
							<li className="nav-item pr-4">
								<a
									className={`nav-link pl-0 paragraph-riliv-sm ${
										currentPage == "Konseling"
											? "active font-weight-semibold"
											: ""
									}`}
									href="/konseling"
								>
									Konseling
								</a>
							</li>
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
						</Fragment>
					)}
					{/* HIDE MENU COLLAPSE END */}
				</ul>

				{/* If textCTA is Coba Aplikasi Sekarang */}
				{textCTA === "Coba Aplikasi Sekarang" ? (
					<ButtonAndroidIosLarge textCTA={textCTA} fix={fix} />
				) : (
					<span
						className={`navbar-text ml-4 ${textCTA ? "" : "invisible m-0"}`}
					>
						<a
							href={urlCTA}
							className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold text-white d-none d-lg-inline-block ml-auto mr-3 ${
								fix === true ? "btn-fix" : ""
							} `}
							style={{ fontSize: "14px" }}
						>
							{textCTA ? textCTA : "a"}
						</a>
					</span>
				)}
			</div>
		</Fragment>
	);
};

const ButtonAndroidIosLarge = ({ textCTA, fix }) => {
	return (
		<Fragment>
			<span className={`navbar-text ml-4 ${textCTA ? "" : "invisible m-0"}`}>
				<button
					className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold text-white d-none d-lg-inline-block ml-auto mr-3 ${
						fix === true ? "btn-fix" : ""
					} `}
					data-toggle="modal"
					data-target="#modalDownloadAndroidIos"
					style={{ fontSize: "14px" }}
				>
					{textCTA}
				</button>
			</span>
		</Fragment>
	);
};

const ButtonAndroidIos = ({ textCTA }) => {
	return (
		<Fragment>
			<button
				className={`btn btn-special-grad-1 btn-sm my-2 font-weight-semibold px-1 px-sm-rlv-A px-md-rlv-B text-white  d-lg-none ml-auto mr-1 d-inline-block`}
				style={{ fontSize: "14px" }}
				data-toggle="modal"
				data-target="#modalDownloadAndroidIos"
			>
				{textCTA}
			</button>
		</Fragment>
	);
};

export default RilivNavbar;

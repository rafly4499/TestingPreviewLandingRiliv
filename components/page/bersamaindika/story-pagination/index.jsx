import { useState, Fragment, useEffect } from "react";

const StoryPagination = ({ page, maxPage, command }) => {
	const [desktopPage, setDesktopPage] = useState([]);
	const [tabletPage, setTabletPage] = useState([1, 2, 3, 4, 5]);
	const [mobilePage, setMobilePage] = useState([1, 2, 3]);

	// PAGE ARROW HANDLER
	// PREVIOUS
	const PreviousPage = () => {
		// Set currentPage
		if (page - 1 < 1) {
			command(1);
		} else {
			command(page - 1);
		}
		// Set tabletPage
		if (page <= 3) {
			setTabletPage([1, 2, 3, 4, 5]);
		} else if (page >= maxPage - 2) {
			setTabletPage([
				maxPage - 4,
				maxPage - 3,
				maxPage - 2,
				maxPage - 1,
				maxPage,
			]);
		} else {
			setTabletPage([page - 3, page - 2, page - 1, page, page + 1]);
		}

		// Set mobilePage
		if (page <= 2) {
			setMobilePage([1, 2, 3]);
		} else if (page >= maxPage - 1) {
			setMobilePage([maxPage - 2, maxPage - 1, maxPage]);
		} else {
			setMobilePage([page - 2, page - 1, page]);
		}
		return null;
	};

	// NEXT
	const NextPage = () => {
		// Set page
		if (page + 1 > maxPage) {
			command(maxPage);
		} else command(page + 1);

		// Set tabletPage
		if (page >= maxPage - 2) {
			setTabletPage([
				maxPage - 4,
				maxPage - 3,
				maxPage - 2,
				maxPage - 1,
				maxPage,
			]);
		} else if (page <= 3) {
			setTabletPage([1, 2, 3, 4, 5]);
		} else {
			setTabletPage([page - 1, page, page + 1, page + 2, page + 3]);
		}

		// Set mobilePage
		if (page <= 2) {
			setMobilePage([1, 2, 3]);
		} else if (page >= maxPage - 1) {
			setMobilePage([maxPage - 2, maxPage - 1, maxPage]);
		} else {
			setMobilePage([page, page + 1, page + 2]);
		}
		return null;
	};
	// PAGE ARROW HANDLER

	// PAGE NUMBER HANDLER
	const SetPageNumber = (page) => {
		// Set page
		command(page);
		// Set tabletPage
		if (page >= maxPage - 2) {
			setTabletPage([
				maxPage - 4,
				maxPage - 3,
				maxPage - 2,
				maxPage - 1,
				maxPage,
			]);
		} else if (page <= 3) {
			setTabletPage([1, 2, 3, 4, 5]);
		} else {
			setTabletPage([page - 2, page - 1, page, page + 1, page + 2]);
		}

		// Set mobilePage
		if (page <= 2) {
			setMobilePage([1, 2, 3]);
		} else if (page >= maxPage - 1) {
			setMobilePage([maxPage - 2, maxPage - 1, maxPage]);
		} else {
			setMobilePage([page - 1, page, page + 1]);
		}
	};
	// PAGE NUMBER HANDLER END

	// Desktop Page Handler
	useEffect(() => {
		let i = 0;
		let Pages = [];
		for (i = 0; i < maxPage; i++) {
			Pages.push(i);
		}
		setDesktopPage(Pages);
	}, []);

	return (
		<div className="d-flex mt-rlv-2-mobile mt-lg-rlv-2-desktop mx-auto justify-content-center">
			<PageArrow direction="left" command={() => PreviousPage()} />
			{/* Dekstop Pagination */}
			<div
				className="d-none d-lg-flex justify-content-around"
				style={{ width: maxPage * 40 + maxPage * 16 }}
			>
				{desktopPage.map((data, index) => {
					return (
						<PageNumber
							key={`storyPage${index}`}
							page={index + 1}
							currentPage={page}
							command={(pageToSet) => SetPageNumber(pageToSet)}
						/>
					);
				})}
			</div>
			{/* Tablet Pagination */}
			<div
				className="d-none d-md-flex d-lg-none justify-content-around"
				style={{ width: "270px" }}
			>
				{tabletPage.length > 0
					? tabletPage.map((data, index) => {
							return (
								<PageNumber
									key={`storyPage${data}`}
									page={data}
									currentPage={page}
									command={(pageToSet) => SetPageNumber(pageToSet)}
								/>
							);
					  })
					: null}
			</div>
			{/* Mobile Pagination */}
			<div
				className="d-flex d-md-none justify-content-around"
				style={{ width: "150px" }}
			>
				{tabletPage.length > 0
					? mobilePage.map((data, index) => {
							return (
								<PageNumber
									key={`storyPage${data}`}
									page={data}
									currentPage={page}
									command={(pageToSet) => SetPageNumber(pageToSet)}
								/>
							);
					  })
					: null}
			</div>
			<PageArrow direction="right" command={() => NextPage()} />
		</div>
	);
};

const PageNumber = ({ page, currentPage, command }) => {
	return (
		<a href="#rilivstory" style={{ textDecoration: "none" }}>
			<div
				className="text-center"
				style={{
					width: "40px",
					height: "40px",
					backgroundColor: `${page === currentPage ? "#11cbe1" : "#00000000"}`,
					border: `3px solid ${page === currentPage ? "#11cbe1" : "#d5d8d8"}`,
					borderRadius: "20px",
					position: "relative",
					cursor: "pointer",
				}}
				onClick={() => command(page)}
			>
				<h5
					className="font-weight-semibold"
					style={{ color: page === currentPage ? "#ffffff" : "#d5d8d8" }}
				>
					{page}
				</h5>
			</div>
		</a>
	);
};

const PageArrow = ({ direction, command }) => {
	return (
		<Fragment>
			{direction === "left" ? (
				<a href="#rilivstory" style={{ textDecoration: "none" }}>
					<button
						onClick={() => {
							command();
						}}
						className="mr-rlv-B text-center"
						style={{
							width: "40px",
							height: "40px",
							backgroundColor: "#00000000",
							border: "3px solid #11cbe1",
							borderRadius: "20px",
							position: "relative",
							cursor: "pointer",
						}}
					>
						<svg
							style={{ left: "7px", top: "8px", position: "absolute" }}
							width="18px"
							height="18px"
							viewBox="0 0 16 16"
							className="bi bi-chevron-left"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke="#11cbe1"
								strokeWidth="2px"
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</button>
				</a>
			) : (
				<a href="#rilivstory" style={{ textDecoration: "none" }}>
					<button
						onClick={() => {
							command();
						}}
						className="ml-rlv-B text-center"
						style={{
							width: "40px",
							height: "40px",
							backgroundColor: "#00000000",
							border: "3px solid #11cbe1",
							borderRadius: "20px",
							position: "relative",
							cursor: "pointer",
						}}
					>
						<svg
							style={{ right: "7px", top: "8px", position: "absolute" }}
							width="18px"
							height="18px"
							viewBox="0 0 16 16"
							className="bi bi-chevron-right"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke="#11cbe1"
								strokeWidth="2px"
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</button>
				</a>
			)}
		</Fragment>
	);
};

export default StoryPagination;

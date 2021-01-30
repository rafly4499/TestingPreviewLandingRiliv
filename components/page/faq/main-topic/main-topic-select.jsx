import { Fragment, useState } from "react";

export const MainTopicDesktop = (props) => {
	const activeClass = "font-weight-bold text-gray-5 mb-0";
	const notActiveClass = "text-gray-3 mb-0";

	const { topic, selectTopic } = props;
	const changeTopic = (selected) => selectTopic(selected);
	return (
		<Fragment>
			<div className="row d-none d-lg-block">
				<div className="col col-lg-12 mb-rlv-C">
					<h5
						className={topic === 1 ? activeClass : notActiveClass}
						style={{ cursor: "pointer" }}
						onClick={() => changeTopic(1)}
					>
						Mengenai Riliv
					</h5>
				</div>
				<div className="col col-lg-12 mb-rlv-C">
					<h5
						className={topic === 2 ? activeClass : notActiveClass}
						style={{ cursor: "pointer" }}
						onClick={() => changeTopic(2)}
					>
						Hening
					</h5>
				</div>
				<div className="col col-lg-12 mb-rlv-C">
					<h5
						className={topic === 3 ? activeClass : notActiveClass}
						style={{ cursor: "pointer" }}
						onClick={() => changeTopic(3)}
					>
						Konseling
					</h5>
				</div>
			</div>
		</Fragment>
	);
};

export const MainTopicMobile = (props) => {
	const activeClass =
		"font-weight-bold text-gray-5 mb-0 d-inline-block mr-rlv-B";
	const notActiveClass = "text-gray-3 mb-0 d-inline-block mr-rlv-B";

	const { topic, selectTopic } = props;
	const changeTopic = (selected) => selectTopic(selected);

	return (
		<Fragment>
			<div className="d-lg-none ml-rlv-B mb-rlv-C pb-rlv-C">
				<h5
					className={topic === 1 ? activeClass : notActiveClass}
					style={{ cursor: "pointer" }}
					onClick={() => changeTopic(1)}
				>
					Mengenai Riliv
				</h5>
				<h5
					className={topic === 2 ? activeClass : notActiveClass}
					style={{ cursor: "pointer" }}
					onClick={() => changeTopic(2)}
				>
					Hening
				</h5>
				<h5
					className={topic === 3 ? activeClass : notActiveClass}
					style={{ cursor: "pointer" }}
					onClick={() => changeTopic(3)}
				>
					Konseling
				</h5>
			</div>
		</Fragment>
	);
};

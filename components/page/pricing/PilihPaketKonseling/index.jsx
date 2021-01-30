const { Fragment } = require("react");

const PilihPaketKonseling = ({ state, select }) => {
	return (
		<Fragment>
			{/* Top */}
			<button
				className={`btn btn-block d-block d-lg-none border-0 border-0 text-center px-lg-rlv-2-desktop ${
					state === 0 ? "bg-white" : "bg-riliv-level-2"
				} mb-rlv-B`}
				style={{ borderRadius: "50px", zIndex: state === 0 ? 1 : 0 }}
				onClick={() => select(0)}
			>
				<h3
					className={`h5 mb-0 d-inline-block ${
						state === 0 ? "font-weight-bold text-riliv-level-1" : "text-white"
					}`}
				>
					Konseling Via Text
				</h3>
			</button>
			{/* Left */}
			<button
				className={`btn d-none d-lg-inline border-0 border-0 text-center px-lg-rlv-2-desktop ${
					state === 0 ? "bg-white" : "bg-riliv-level-2"
				}`}
				style={{ borderRadius: "50px", zIndex: state === 0 ? 1 : 0 }}
				onClick={() => select(0)}
			>
				<h3
					className={`h5 mb-0 d-inline-block ${
						state === 0 ? "font-weight-bold text-riliv-level-1" : "text-white"
					} `}
				>
					Konseling Via Text
				</h3>
			</button>
			{/* Right */}
			<button
				className={`d-none d-lg-inline border-0 text-center px-lg-rlv-2-desktop ${
					state === 0 ? "bg-riliv-level-2" : "bg-white"
				}`}
				style={{
					borderRadius: "50px",
					zIndex: state === 0 ? 0 : 1,
					transform: "translateX(-50px)",
				}}
				onClick={() => select(1)}
			>
				<h3
					className={`h5 mb-0 d-inline-block ${
						state === 0 ? "text-white" : "font-weight-bold text-riliv-level-1"
					}`}
				>
					Konseling Via Telepon
				</h3>
			</button>
			{/* Bottom */}
			<button
				className={`btn btn-block d-block d-lg-none border-0 text-center px-lg-rlv-2-desktop ${
					state === 0 ? "bg-riliv-level-2" : "bg-white"
				}`}
				style={{ borderRadius: "50px", zIndex: state === 0 ? 0 : 1 }}
				onClick={() => select(1)}
			>
				<h3
					className={`h5 mb-0 d-inline-block ${
						state === 0 ? "text-white" : "font-weight-bold text-riliv-level-1"
					}`}
				>
					Konseling Via Telepon
				</h3>
			</button>
		</Fragment>
	);
};

export default PilihPaketKonseling;

import React, { Fragment } from "react";

const AdsBundlingPriceBox = ({
	link,
	textLink,
	startPrice,
	promoPrice,
	promo,
	identifier,
	buttonOnly,
}) => {
	return (
		<Fragment>
			<div
				className={`${
					buttonOnly ? undefined : "p-rlv-1-mobile p-lg-rlv-1-desktop"
				} mt-rlv-B mt-lg-0`}
				style={{ border: "1px solid #c6c6c6", borderRadius: "8px" }}
			>
				{buttonOnly ? undefined : (
					<Fragment>
						<p className="h5 font-weight-semibold mb-0">Harga Normal</p>
						<p
							className="h3 font-weight-semibold mb-rlv-1-mobile mb-lg-rlv-1-desktop"
							style={{ textDecoration: "line-through" }}
						>
							{startPrice}
						</p>
						<p className="h5 font-weight-semibold mb-0">
							Harga Penawaran Spesial <br className="d-block d-lg-none" /> Hari
							Ini
						</p>
						<p className="h3 font-weight-semibold mb-rlv-1-mobile mb-lg-rlv-1-desktop text-riliv-level-1">
							HANYA {promoPrice}
						</p>
						<p className="h5 font-weight-semibold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
							{promo}
						</p>
					</Fragment>
				)}

				{/* Button Desktop */}
				<a
					id={identifier}
					href={link}
					className="btn btn-special-grad-1 btn-sm text-white font-weight-semibold px-rlv-1-desktop d-none d-lg-block"
				>
					{textLink}
				</a>
				{/* Button Mobile */}
				<a
					id={identifier}
					href={link}
					className="btn btn-special-grad-1 btn-sm text-white font-weight-semibold btn-block d-block d-lg-none"
				>
					{textLink}
				</a>
			</div>
		</Fragment>
	);
};

export default AdsBundlingPriceBox;

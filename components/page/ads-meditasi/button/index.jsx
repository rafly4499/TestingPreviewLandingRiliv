import React, { Fragment } from "react";

export const AdsMeditasiButton = ({ link, textLink, dynamic }) => {
	return (
		<Fragment>
			<a
				href={link}
				className="btn btn-special-grad-1 btn-sm text-white font-weight-semibold"
				style={{ width: dynamic ? undefined : "250px" }}
			>
				{textLink}
			</a>
		</Fragment>
	);
};

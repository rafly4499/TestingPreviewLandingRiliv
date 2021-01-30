import { Fragment } from "react";
import ResponsiveImage from "../../../responsive-image/responsive-image.component";

const ResourcesColumn = ({
	reverse,
	imgSrc,
	imgAlt,
	title,
	titlebreak,
	link,
	first,
}) => {
	return (
		<div
			className={`d-lg-flex d-block text-lg-left text-center align-items-center ${
				reverse ? "flex-row-reverse" : ""
			} ${first ? "" : "mt-rlv-2-mobile mt-lg-rlv-2-desktop"}`}
		>
			<div>
				<ResponsiveImage
					imgSrc={`/img-resources/${imgSrc}`}
					imgAlt={imgAlt}
					w_desktop="350px"
					w_tablet="350px"
					w_mobile="280px"
				/>
			</div>
			<div
				className={`${
					reverse
						? "text-lg-right mr-lg-rlv-1-mobile"
						: "text-lg-left ml-lg-rlv-1-mobile"
				} text-center ml-0`}
			>
				<h2 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-rlv-1-mobile mt-lg-0">
					<strong>
						{title} <br className="d-none d-lg-block" /> {titlebreak}
					</strong>
				</h2>
				<a
					href={link}
					className="btn btn-special-grad-1 text-white font-weight-semibold"
				>
					Pelajari lebih lanjut
				</a>
			</div>
		</div>
	);
};

export default ResourcesColumn;

import { Fragment } from "react";

const BodyResourceTopic = ({ description, listHead, list }) => {
	return (
		<Fragment>
			<p className="h5 text-gray-5 mb-rlv-C">{description}</p>
			<p className="h5 text-gray-5">{listHead}</p>
			<ul
				className="negativeList"
				style={{
					marginLeft: "-16px",
					paddingLeft: "24px",
				}}
			>
				{list.map((data, index) => {
					return (
						<li key={`${data}-${index}`} className="h5 pl-rlv-B">
							{data}
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
};

export default BodyResourceTopic;

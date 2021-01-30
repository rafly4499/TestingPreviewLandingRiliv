import { Fragment } from "react";

import Fade from "react-reveal/Fade";

import { TopicContainer } from "../../topic-container/topic-container";

import MengenaiHening from "./mengenai-hening";
import PenggunaanHening from "./penggunaan-hening";

const HeningIndexContent = (props) => {
	const { selected } = props;
	return (
		<Fade when={selected === 2} delay={100} duration={300}>
			{selected === 2 ? (
				<Fragment>
					<TopicContainer title="Hening">
						<MengenaiHening title="Mengenai Hening" />
						<PenggunaanHening title="Penggunaan Hening" />
					</TopicContainer>
				</Fragment>
			) : (
				<div className="d-none"></div>
			)}
		</Fade>
	);
};

export default HeningIndexContent;

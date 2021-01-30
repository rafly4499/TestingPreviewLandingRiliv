import { Fragment } from "react";

import Fade from "react-reveal/Fade";

import { TopicContainer } from "../../topic-container/topic-container";

import InformasiUmum from "./informasi-umum";
import BiayaLayanan from "./biaya-layanan";

const MengenaiIndexContent = (props) => {
	const { selected } = props;
	return (
		<Fade when={selected === 1} delay={100} duration={300}>
			{selected === 1 ? (
				<Fragment>
					<TopicContainer title="Mengenai Riliv">
						<InformasiUmum title="Informasi Umum" />
						<BiayaLayanan title="Biaya Layanan" />
					</TopicContainer>
				</Fragment>
			) : (
				<div className="d-none"></div>
			)}
		</Fade>
	);
};

export default MengenaiIndexContent;

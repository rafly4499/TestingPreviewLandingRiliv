import { Fragment } from "react";

import Fade from "react-reveal/Fade";

import { TopicContainer } from "../../topic-container/topic-container";

import InformasiUmum from "./informasi-umum";
import TerkaitPsikolog from "./terkait-psikolog";
import PenggunaanKonseling from "./penggunaan-konseling";

const KonselingIndexContent = (props) => {
	const { selected } = props;
	return (
		<Fade when={selected === 3} delay={100} duration={300}>
			{selected === 3 ? (
				<Fragment>
					<TopicContainer title="Konseling">
						<InformasiUmum title="Informasi Umum" />
						<TerkaitPsikolog title="Terkait Psikolog" />
						<PenggunaanKonseling title="Penggunaan Konseling" />
					</TopicContainer>
				</Fragment>
			) : (
				<div className="d-none"></div>
			)}
		</Fade>
	);
};

export default KonselingIndexContent;

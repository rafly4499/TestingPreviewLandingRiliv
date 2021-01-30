import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const BiayaLayanan = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="mengapaBerbayar"
					title="Mengapa Riliv berbayar?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Layaknya layanan profesional pada umumnya, layanan Riliv berbayar
						untuk menjamin kualitas kepuasan Anda. Seluruh layanan kami dibuat
						bersarkan riset mendalam, berlisensi, dan profesional.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="berapaHargaLayanan"
					title="Berapa harga layanan riliv?"
					dataParent={title.split(" ").join("")}
				>
					<h5 className="mb-rlv-B">
						Kabar baiknya, kami memiliki berbagai macam paket dengan selisih
						harga hingga 3x lebih murah dibanding layanan tatap muka.
					</h5>
					<a
						href="./pricing"
						className="btn btn-special-grad-1 font-weight-semibold text-white d-inline-block paragraph-riliv"
					>
						Lihat Harga
					</a>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaMembayar"
					title="Bagaimana saya bisa membayar?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Anda bisa melakukan pembayaran melalui transfer Bank, Go-pay,
						ataupun Akulaku. Rekening tujuan akan ditampilkan ketika pembelian
						sudah diproses hingga pembayaran.
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default BiayaLayanan;

import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const InformasiUmum = (props) => {
	const { title } = props;
	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="apaRilivItu"
					title="Apakah Riliv itu?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Riliv adalah layanan kesehatan mental berbasis teknologi. Anda dapat
						melakukan self-help dengan meditasi dan pengantar lelap serta
						konseling online dengan psikolog profesional langsung dari
						smartphone Anda. Kami yakin bahwa layanan kesehatan mental
						seharusnya dapat dijangkau siapapun, kapanpun, dan dimanapun tanpa
						kendala mobilitas.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaHubungiRiliv"
					title="Bagaimana saya bisa menghubungi Riliv?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Untuk terhubung dengan Admin Riliv Anda bisa menghubungi kami
						melalui line@ (@Riliv) atau info@riliv.co
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="tidakIndonesiaRiliv"
					title="Saya tidak tinggal di Indonesia, Apakah saya bisa menggunakan layanan Riliv?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Ya, tentu saja! Karena layanan bersifat online, Anda dapat mengakses
						Riliv dimana pun Anda berada.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="RilivTepatSaya"
					title="Apakah Riliv tepat untuk saya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Di tengah kesibukan Anda, tentu saja Riliv adalah pilihan terbaik!
						Anda tidak perlu keluar rumah untuk menggunakan Riliv. Selama Anda
						memiliki koneksi internet, Anda dapat mengakses Riliv di mana saja.
						Kami selalu berupaya menghadirkan solusi terbaik sesuai kebutuhan
						Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="kerjaSamaRiliv"
					title="Saya ingin melaksanakan kerjasama dengan Riliv, bagaimana caranya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Terkait kerjasama dengan Riliv, Anda bisa mengirimkan
						email/proposal/bentuk kerjasama yang ditawrkan ke email:
						partnership@riliv.co
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="RilivMagang"
					title="Apakah riliv membuka lowongan magang?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Ya, kami membuka kesempatan bagi Anda yang bersemangat menyalurkan
						kebaikan melalui Riliv. Lowongan magang akan dibuka setiap 3 bulan
						sekali. Anda dapat memantau kabarnya di Instagram Riliv (@riliv).
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default InformasiUmum;

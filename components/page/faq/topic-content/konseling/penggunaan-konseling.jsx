import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const PenggunaanKonseling = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="apaRilivFreeTrialKonseling"
					title="Apakah Riliv memiliki free trial?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Demi menjamin kualitas, saat ini kami tidak menyediakan layanan free
						trial. Bila Anda ingin mencoba Riliv pertama kali, kami sarankan
						menggunakan paket Perkenalan untuk 1x sesi. Kami juga memberikan
						voucher berkala melalui media sosial Instagram kami @riliv.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaCaraDaftarKonseling"
					title="Bagaimana cara saya mendaftar konseling?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Silahkan download Riliv di{" "}
						<a href="http://bit.ly/rilivplaystore" target="_blank">
							Play Store
						</a>{" "}
						bagi pengguna Android. Bagi pengguna iOS Anda bisa melakukan
						pendaftaran konseling lewat{" "}
						<a href="http://bit.ly/2IG0AB6" target="_blank">
							website kami
						</a>{" "}
						dan mencentang “Saya pengguna iOS” di formulir pembayaran. Nantinya
						Anda akan menerima e-mail lanjutan dari kami.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="kapanBisaMulaiKonseling"
					title="Kapan saya bisa memulai konseling?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Anda bisa memulai konseling setelah paket Anda aktif dan telah
						terhubung dengan Expert Reliever. Perlu dicatat bahwa sebelum Expert
						Reliever, Anda akan dihubungi oleh admin untuk mencatat asesmen
						permasalahan Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaMendapatkanJadwal"
					title="Bagaimana saya bisa mendapatkan jadwal?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Usai menyelesaikan asesmen, Expert Reliever akan menyapa dan membuat
						jadwal dengan Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="mengapaKonselingExpired"
					title="Mengapa paket konseling bisa expired?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Expiration paket bertujuan untuk agar Anda tidak lupa dan segera
						mendiskusikan problem Anda agar segera terselesaikan.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaBisaGantiKonselingTextKeKonselingCall"
					title="Apakah saya bisa berganti dari paket konseling text ke konseling call?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Anda dapat menghubungi admin Riliv melalui line@ (@Riliv) atau
						info@riliv.co
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaBisaMempermanjangMasaBerlakuPaketKonseling"
					title="Apakah saya bisa memperpanjang masa berlaku paket konseling saya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Anda bisa mengajukan perpanjangan masa berlaku paket konseling Anda
						jika, terjadi hal-hal yang tak terduga (misal, bencana alam, sakit
						keras, dan lain sebagainya yang memerlukan waktu pemulihan)
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default PenggunaanKonseling;

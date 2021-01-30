import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const PenggunaanHening = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="apaHeningTersediaIOS"
					title="Apakah Riliv Hening tersedia di IOS?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Saat ini, Riliv belum tersedia di IOS. Anda dapat mengunduh aplikasi
						Riliv melalui Google Play Store.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaHeningMenawarkanTrial"
					title="Apakah Hening menawarkan layanan percobaan/trial session?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Riliv tidak menyediakan trial session, namun riliv membuka akses
						untuk semua sesi meditasi dasar 1 dan semua sesi 1 dari semua seri
						meditasi.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaBerlanggananHening"
					title="Bagaimana cara berlangganan?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Anda dapat melakukan pembelian paket meditasi bersama Hening melalui
						aplikasi riliv dan mengklik tombol Buka Semua yang terletak di home
						aplikasi riliv
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaDidapatkanDariHeningPremium"
					title="Apa yang saya dapatkan ketika saya membeli Hening Premium?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Anda akan mendapatkan seluruh sesi meditasi yang ada di dalam
						aplikasi dengan durasi sesuai dengan pembayaran anda (2 bulan / 1
						tahun).
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="seberapaSeringRilivUpdateHening"
					title="Seberapa sering Riliv mengupdate aplikasi?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Setiap bulan aplikasi Riliv akan selalu mendapatkan pembaruan dan
						perbaikan. Supaya kamu tidak ketinggalan, selalu nyalakan update mu
						ya dear!
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaBerhentiBerlanggananHening"
					title="Bagaimana saya bisa berhenti berlangganan?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Apabila anda membayar untuk paket setahun, kemudian anda tidak
						membayar kembali, maka langganan anda akan otomatis berhenti.
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default PenggunaanHening;

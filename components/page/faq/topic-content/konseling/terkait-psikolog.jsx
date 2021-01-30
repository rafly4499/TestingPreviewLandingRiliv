import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const TerkaitPsikolog = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="siapaMenjawabCurhatKonseling"
					title="Siapa yang akan menjawab curhatan saya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Seluruh konseling yang ada di Riliv dilayani oleh psikolog
						profesional berlisensi dan mempunyai izin praktik.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaMasalahBisaSelesaiPsikologKonseling"
					title="Apakah masalah saya bisa diselesaikan Psikolog?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Seperti layanan psikolog tatap muka, seluruh sesi konseling yang
						berlaku membantu Anda untuk menemukan jawaban dari permasalahan.
						Diperlukan adanya kerjasama Anda dengan Expert Reliever untuk dapat
						mengikuti sesi dengan baik. Anda dapat bercerita dengan jujur dan
						mengikuti saran Expert Reliever untuk menjamin penyelesaian masalah.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaBisaGantiPsikologKonseling"
					title="Apakah saya bisa berganti psikolog?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Secara otomatis kami akan memasangkan Anda dengan psikolog yang
						sesuai dengan masalah Anda. Namun bila nanti terdapat
						ketidakcocokan, Anda dapat memintanya kepada pihak Riliv. Kami hanya
						akan memproses pergantian psikolog bila memang disetujui oleh pihak
						Expert Reliever dan Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaBisaPilihPsikologSendiriKonseling"
					title="Apakah saya bisa memilih psikolog saya sendiri?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Kami secara otomatis akan menghubungkan Anda dengan Expert Reliever
						yang sesuai dengan permasalahan Anda. Anda akan diminta untuk
						mengisi asesmen seputar permasalahan Anda dan kami akan segera
						mencocokkannya dengan keahlian Expert Reliever kami.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="jikaInginKonselingApaKonselorSama"
					title="Jika saya ingin konseling lagi, apakah nantinya dengan konselor yang sama?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Tentu saja! Konselor Anda adalah mitra terbaik Anda ⎯ kami
						memastikan permasalahan Anda dapat ditangani secara efisien dengan
						konselor yang sudah memahami rekam jejak Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaBisaLihatProfilPsikologKonseling"
					title="Apakah saya bisa melihat profil psikolog saya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Ya, Anda dapat melihat profil Expert Reliever bila sudah terhubung
						dengan Anda. Anda dapat membukanya melalui aplikasi kami.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="sayaPsikologTertarikGabungKonseling"
					title="Saya seorang psikolog dan tertarik bergabung dengan Riliv. Bagaimana caranya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Kami sangat terbuka dengan partisipasi Anda. Silahkan mengisi form
						di link berikut{" "}
						<a href="https://bit.ly/FormPsikolog" target="_blank">
							bit.ly/FormPsikolog
						</a>
						. Kami akan menghubungi Anda bila memenuhi kualifikasi kami.
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default TerkaitPsikolog;

import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const MengenaiHening = (props) => {
	const { title } = props;

	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="apaRilivHening"
					title="Apa sih Riliv Hening itu?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Riliv Hening adalah layanan panduan meditasi dan cerita pengantar
						tidur yang dibuat untuk meningkatkan kesejahteraan dan kesehatan
						mental Anda. Anda dapat menggunakan meditasi saat merasa kalut atau
						cemas, dan cerita pengantar tidur kami akan membantu Anda
						mendapatkan tidur yang berkualitas dan damai.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaRilivMeditasi"
					title="Apa sih meditasi itu?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Meditasi adalah cara melatih pikiran, sama seperti melakukan
						olahraga membantu melatih tubuh. Meditasi merupakan praktik
						relaksasi yang dilakukan untuk memperkuat hubungan antara pikiran
						dan tubuh. Meditasi juga dilakukan agar Anda lebih mengenali pola
						pikir dan kehidupan yang dijalani saat ini.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaMeditasiEfektif"
					title="Apakah meditasi itu efektif?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Meditasi sudah teruji dengan menggunakan banyak penelitian sebagai
						cara sederhana mengurangi gangguan-gangguan kesehatan mental seperti
						kecemasan, depresi, gangguan tidur, gangguan makan, dan gangguan
						dalam hubungan. Melakukan meditasi secara rutin akan membantu
						meningkatkan kesejahteraan Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaMeditasiMembantu"
					title="Bagaimana meditasi dengan Hening bisa membantu saya?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Sebagai panduan audio meditasi pertama di Indonesia, dengan Hening,
						Anda memiliki akses kapan pun dan dimana pun (selama ada sambungan
						internet) untuk melakukan meditasi. Panduan audio dari Hening dibuat
						oleh para ahli untuk membantu Anda menjalani berbagai momen di
						kehidupan. Hening juga menyediakan panduan meditasi dengan berbagai
						teknik dan durasi, Anda dapat menentukan meditasi mana yang paling
						cocok dengan diri Anda.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaMeditasiTepat"
					title="Bagaimana cara meditasi yang tepat?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Tidak ada cara yang salah dalam melakukan meditasi! Namun, agar
						latihan Anda lebih bermanfaat, lakukan meditasi sambil duduk dengan
						nyaman dan pejamkan mata. Bernafaslah seperti biasa atau sesuai
						dengan panduan pernafasan yang Anda sedang Anda dengarkan.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaMeditasiTidakNgantuk"
					title="Bagaimana agar tidak ngantuk saat meditasi?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Tidak apa-apa jika Anda kesulitan untuk duduk diam dan tidak
						melakukan apapun ketika tubuh Anda terbiasa selalu bergerak dan
						pikiran yang penuh. Jika Anda seorang pemula, berlatihlah saat siang
						atau sore hari. Lakukan meditasi sambil duduk dan jangan bersandar.
						Tidak perlu menutup mata, dan pandanglah satu objek di depan Anda
						sebagai pusat pandangan.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="bagaimanaTetapFokusMeditasi"
					title="Bagaimana agar pikiran tetap fokus saat meditasi?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Meditasi melatih pikiran yang terbiasa menerima banyak sensasi dari
						dunia luar untuk menjadi lebih tenang. Pusatkan perhatian pada satu
						hal, seperti tarikan dan hembusan nafas Anda. Jika Anda seorang
						pemula, gunakan meditasi singkat bersama Hening untuk membiasakan
						diri melakukan meditasi. Perlahan-lahan, beralihlah menggunakan seri
						meditasi dengan durasi yang lebih panjang. Tenang, pikiran yang
						teralihkan bukan berarti kegagalan dalam meditasi. Tetaplah
						berlatih, dan suatu hari, Anda akan menyadari bahwa menjaga fokus
						adalah hal yang mudah.
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default MengenaiHening;

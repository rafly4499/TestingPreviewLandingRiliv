import { useRouter } from "next/router";
import BodyContainer from "../../components/body-container/body-container.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import CardKenapaSection from "../../components/page/homepage/card-kenapa-section/card-kenapa-section.component";
import HeaderRilivForCompany from "../../components/page/riliv-for-company/header-page/header-page.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import {
  ResponsiveText_H1,
  ResponsiveText_H2,
} from "../../components/responsive-text/responsive-text.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import CentangHijauList from "../../components/centang-hijau-list";
import AdsBundlingPriceBox from "../../components/page/ads-bundling/price-box";
import MediaImages from "../../components/media-images/media-images.component";
import AdsBundlingHeaderSetup from "../../components/page/ads-bundling/header-setup";
import AdsBundlingHeaderList from "../../components/page/ads-bundling/header-list";
import { AdsBundlingButton } from "../../components/page/ads-bundling/button";
import MasalahSelesaiCard from "../../components/page/koseling/masalah-selesai/masalah-selesai.component";

const AdsBundlingPage1 = () => {
  return (
    <div>
      <RilivHeader
        customTitle="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
        customDescription="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
      >
        <HeaderRilivForCompany
          customTitle="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
          customDescription="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
        />
        <HeaderGTagManagerGAnalytics />
        <HeaderFreshChat />
      </RilivHeader>
      <RilivNavbar hideMenu currentPage="Promo" center />

      <SimpleSnackbar identifier="comingSoon">
        <p className="p-0 m-0">Coming Soon</p>
      </SimpleSnackbar>

      {/* HEADER SECTION */}
      <div
        className="container-fluid px-0 bg-header d-none d-lg-block"
        style={{
          backgroundImage: 'url("./../img-ads/bgheader.png")',
          overflow: "hidden",
          backgroundColor: "#0fbace",
        }}
      >
        <BodyContainer>
          <div className="row">
            <div className="col-12 col-lg-7 order-2 order-lg-1 py-rlv-5-mobile py-lg-rlv-5-desktop">
              <div className="p-rlv-1-mobile p-lg-rlv-1-desktop mb-0 mb-lg-rlv-3-desktop rounded-lg">
                <h1 className="h2 text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
                  Apakah Kamu Ingin Mendapatkan Hidup Bahagia dengan Pikiran
                  yang Tenang?
                </h1>
                <a href="#section1"
                  className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </BodyContainer>
      </div>

      {/* HEADER MOBILE */}
      <div className="d-block d-lg-none">
        <div
          className="d-block pt-rlv-5-desktop bg-header d-lg-block"
          style={{
            backgroundImage: "url('./../img-ads/bgmeditasi1.png')",
            backgroundSize: "cover",
          }}
        >
          <div style={{ height: "50vw" }} />
        </div>
        <div
          className="container-fluid pt-rlv-2-desktop"
          style={{
            backgroundImage: 'url("./../img-hening/group_12542.png")',
            backgroundSize: "cover",
            /* color: white !important; */
          }}
        >
          <BodyContainer>
            <div className="mt-rlv-1-mobile mb-rlv-5-mobile">
              <h1 className="h2 text-white text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
                Apakah Kamu Ingin Mendapatkan Hidup Bahagia dengan Pikiran yang
                Tenang?
              </h1>
              <a href="#section1"
                  className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
                >
                  Lihat Selengkapnya
                </a>
            </div>
            <hr />
          </BodyContainer>
        </div>
      </div>

      {/* PADAHAL UDAH SECTION */}
      <div className="bg-gray--1">
        <BodyContainer>
		<div className="py-rlv-3-mobile py-lg-rlv-3-desktop py-rlv-3-mobile px-lg-rlv-5-desktop px-lg-5">

            <h3 className="text-center mb-rlv-C font-weight-semibold">
              Namun belum terwujud karena kamu sering merasa:
            </h3>
            <div className="row pt-5">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/content/content_cemas.png"
                />
              </div>
              <div className="col-md-8">
                <h5 className="font-weight-bold">Cemas akan banyak hal</h5>
                <p>
                  Kamu sering mengkhawatirkan masa depan yang tidak jelas,
                  dilanda panik hingga berdebar dan gemetar, takut mengambil
                  keputusan, selalu berada di zona nyaman sehingga kehilangan
                  banyak kesempatan.
                </p>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/content/content_overthinking.png"
                />
              </div>
              <div className="col-md-8 pt-3">
                <h5 className="font-weight-bold">
                  Overthinking dan pikiran selalu berisik
                </h5>
                <p>
                  Sering teringat dan menyesali kejadian masa lalu yang tidak
                  dapat diubah, memikirkan hal-hal yang tidak dapat dikontrol,
                  mengkhawatirkan penilaian orang lain secara berlebihan.
                </p>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/content/content_emosi.png"
                />
              </div>
              <div className="col-md-8 pt-3">
                <h5 className="font-weight-bold">Tidak bisa mengatur emosi</h5>
                <p>
                  Kamu menjadi emosional saat dihadapkan dengan masalah, lebih
                  mudah marah, sedih berlebihan, mudah tersinggung atas perilaku
                  dan perkataan orang lain hingga menganggap semua orang tak
                  bisa mengerti dirimu.
                </p>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/content/content_tidur.png"
                />
              </div>
              <div className="col-md-8 pt-3">
                <h5 className="font-weight-bold">Mengalami gangguan tidur</h5>
                <p>
                  Sebenarnya kamu sudah sangat lelah, namun tidak bisa tidur
                  dengan nyenyak, mudah terbangun di malam hari, selalu
                  diselimuti rasa gelisah bahkan saat sudah tidur tetap merasa
                  lelah keesokan harinya.
                </p>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/content/content_semangat.png"
                />
              </div>
              <div className="col-md-8 pt-3">
                <h5 className="font-weight-bold">Kehilangan semangat hidup</h5>
                <p>
                  Semua terasa tidak menarik lagi bahkan pada hal-hal yang
                  biasanya menjadi favoritmu, selalu ingin menyendiri dan malas
                  bersosialisasi, sering merasa sedih atau menangis tanpa sebab.
                </p>
              </div>
            </div>
          </div>
          <div className="py-rlv-1-mobile py-lg-rlv-1-desktop">
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg_riliv text-white">
                  <div className="container">
                    <img src="./../img-ads/icon/icon_love.png" />
                    <p class="font-content">
                      Seperti tubuh yang sakit, saat kesehatan pikiran dan
                      hatimu sedang tidak baik, meminta bantuan bukan berarti
                      kamu lemah. Agar tidak semakin parah,{" "}
                      <b>
                        kamu memang perlu dan butuh bantuan psikolog
                        profesional.
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.260.000</s></p>
                    <p className="price-riliv">Rp.69.000</p>
                    <hr/>
                    <div className="listriliv">
                      <ul>
                        <li><p>2x Konseling Psikolog Profesional</p></li>
                        <li><p>2 Bulan Full Akses Meditasi</p></li>
                      </ul>
                    </div>
                    <a href="https://app.midtrans.com/payment-links/1611299075823">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BodyContainer>
      </div>

      {/* MAU SAMPAI KAPAN SECTION */}
      <div id="section1" className="bg-riliv-level-6 py-rlv-3-mobile py-lg-rlv-3-desktop">
        <BodyContainer>
		<div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/content/content_bersama.png"
                />
              </div>
              <div className="col-md-8 pt-3">
                <h4 className="font-weight-semibold">Kamu tidak sendiri. Kami sangat mengerti bahwa kamu telah mencoba berbagai cara</h4>
				<div className="listriliv">
                      <ul>
                        <li><p>Curhat ke teman tapi malah dihakimi, dibilang berlebihan, dan kurang beriman</p></li>
                        <li><p>Mencari solusi ke orang tua, dibilangnya kurang ibadah</p></li>
						<li><p>Coba dipendam aja dan pura-pura bahagia, malah makin parah</p></li>
                      </ul>
                    </div>
              </div>
            </div>
			<div className="row section-riliv">
              <div className="col-md-8">
				  <div className="pt-5">

				  
		  			<h4 className="font-weight-semibold">Jangan dibiarkan hingga parah</h4>
                    <p class="font-content">
					Pikiran tidak tenang dan terganggu oleh banyak hal dapat menyebabkan kamu <b>rentan mengalami gangguan fungsi otak</b>, sehingga berpengaruh pada <b>menurunnya daya ingat dan konsentrasi.</b> Gangguan ini juga bisa berdampak pada kondisi fisik tubuh seperti <b>mempengaruhi tekanan darah, detak jantung, dan nafsu makan.</b>
                    </p>
					</div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.260.000</s></p>
                    <p className="price-riliv">Rp.69.000</p>
                    <hr/>
                    <div className="listriliv">
                      <ul>
                        <li><p>2x Konseling Psikolog Profesional</p></li>
                        <li><p>2 Bulan Full Akses Meditasi</p></li>
                      </ul>
                    </div>
                    <a href="https://app.midtrans.com/payment-links/1611299075823">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </BodyContainer>
      </div>

      {/* LAYAK MENDAPATKAN KEBAHAGIAAN */}
      <div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
        <BodyContainer>
          <h2 className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center font-weight-semibold">
		  Riliv Hadir untuk Membantumu<br />
dengan Solusi Terbaik
          </h2>
		  <div className="jumbotron jumbotron-fluid bg_riliv_2" style={{marginTop: "64px"}}>
                  <div className="container">
					  <div className="row">
		
					  <div className="col-md-6">
					  <div className="row"
						  style={{ 
							  padding: "95px 40px" 
						  
						  }}>
		  				<div className="number">
							  1
						  </div>
					  <h2 className="font-weight-semibold">
		  				Konseling Online
					  </h2>
					  </div>
					  </div>
					  <div className="col-md-6">
					  <img className="img-fluid" src="./../img-ads/konseling.png" />
					  </div>
					  </div>
                    
                  </div>
                </div>
			<div className="row">
				<div className="col-md-6">
				<div className="listriliv">
                      <ul>
                        <li><p><b>Psikolog memahami kondisimu,</b> mendengarkan tanpa menghakimi, semua psikolog ramah dan berempati</p></li>
                        <li><p><b>Psikolog memberikan solusi,</b> memberikan sudut pandang baru, hingga membantumu menemukan akar dari permasalahan dan menyelesaikannya</p></li>
						<li><p><b>Rahasia terjamin,</b> sesuai dengan kode etik psikologi semua data dan permasalahan klien akan aman terjaga</p></li>
					  </ul>
                    </div>
				</div>
				<div className="col-md-6">
				<div className="listriliv">
                      <ul>
                        <li><p><b>Psikolog fleksibel,</b> dapat menyesuaikan jadwal konseling dan pilihan paket sesuai kebutuhan secara praktis dan mudah</p></li>
                        <li><p><b>Psikolog profesional,</b> memiliki izin praktek psikolog, tersertifikasi oleh Himpunan Psikologi Indonesia dan sangat berpengalaman dalam mengatasi berbagai masalah</p></li>
						<li><p><b>75% lebih hemat,</b>  dibandingkan dengan konseling tatap muka namun tetap memiliki kualitas terbaik dan profesional</p></li>
					  </ul>
				</div>
			</div>
		  </div>
        </BodyContainer>
      </div>

      {/* RILIV YANG KAMU PERLUKAN */}
      <div className="bg-riliv-level-6 py-rlv-3-mobile py-lg-rlv-3-desktop">
        <BodyContainer>
		<div className="jumbotron jumbotron-fluid bg_riliv_2">
                  <div className="container">
					  <div className="row">
		
					  <div className="col-md-6">
					  <div className="row"
						  style={{ 
							  padding: "50px 40px" 
						  
						  }}>
					  <h2 className="font-weight-semibold">
					  Psikolog Berlisensi<br/>
Kami Siap Membantumu
					  </h2>
					  </div>
					  </div>
					  <div className="col-md-6">
					  <img className="img-fluid" src="./../img-ads/content/content_psikolog.png" />
					  </div>
					  </div>
                    
                  </div>
                </div>
				<h2 className="text-center font-weight-semibold pt-5">Masalah yang Kami Selesaikan</h2>
				<div className="row pt-4">
					<div className="col-md-3 mt-4">
						  <div className="bg_default2">
						  <img className="pict-content mx-auto d-block" src="./../img-ads/content/content_hubungan.png" />
						  <h4 className="title-content">Hubungan asmara, pertemanan, dll</h4>
						  </div>
					</div>
					
					<div className="col-md-3 mt-4">
					<div className="bg_default2">
						  <img className="pict-content mx-auto d-block" src="./../img-ads/content/content_karir.png" />
						  <h4 className="title-content">Karir, pekerjaan, dan<br/>
akademik</h4>
						  </div>
					</div>
					
					<div className="col-md-3 mt-4">
					<div className="bg_default2">
						  <img className="pict-content mx-auto d-block" src="./../img-ads/content/content_kecanduan.png" />
						  <h4 className="title-content">Kecanduan<br/>
dan adiksi</h4>
						  </div>
					</div>
					
					<div className="col-md-3 mt-4">
					<div className="bg_default2">
						  <img className="pict-content mx-auto d-block" src="./../img-ads/content/content_psikis.png" />
						  <h4 className="title-content">Masalah psikis umum lainnya</h4>
						  </div>
					</div>
				</div>
        </BodyContainer>
      </div>

      {/* JADI APA SOLUSINYA */}
      <div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
        <BodyContainer>
		<div className="py-rlv-1-mobile py-lg-rlv-1-desktop">
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg_riliv text-white">
                  <div className="container">
                    <img src="./../img-ads/icon/icon_love.png" />
                    <h5 class="font-content2">
					Kami menghadirkan kumpulan layanan terapi online  untuk kesehatan mental yang lebih baik berupa konseling dan meditasi online
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.260.000</s></p>
                    <p className="price-riliv">Rp.69.000</p>
                    <hr/>
                    <div className="listriliv">
                      <ul>
                        <li><p>2x Konseling Psikolog Profesional</p></li>
                        <li><p>2 Bulan Full Akses Meditasi</p></li>
                      </ul>
                    </div>
                    <a href="https://app.midtrans.com/payment-links/1611299075823">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  <h2 className="text-center font-weight-semibold pt-5">Bebas Akses ke Semua Fitur</h2>
				<div className="row pt-4">
					<div className="col-md-3 col-6">
						  <div className="bg_riliv3">
						  <h4 className="title-content">Meditasi</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_meditasi.png" />
						  
						  </div>
					</div>
					
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Lelap</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_lelap.png" />
						  
						  </div>
					</div>
					
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Konseling</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_konseling.png" />
						  </div>
					</div>
					
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Mood Tracker</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_mood.png" />
						  
						  </div>
					</div>
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Journey</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_journey.png" />
						  
						  </div>
					</div>
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Journal</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_journal.png" />
						  
						  </div>
					</div>
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Bubble Breath</h4>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/fitur/fitur_bubble.png" />
						  
						  </div>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid bg_riliv_2" style={{marginTop: "64px"}}>
                  <div className="container">
					  <div className="row">
		
					  <div className="col-md-6">
					  <div className="row"
						  style={{ 
							  padding: "95px 40px" 
						  
						  }}>
		  				<div className="number">
							  2
						  </div>
					  <h2 className="font-weight-semibold">
		  				Meditasi
					  </h2>
					  </div>
					  </div>
					  <div className="col-md-6">
					  <img className="img-fluid" src="./../img-ads/meditasi.png" />
					  </div>
					  </div>
                    
                  </div>
                </div>
				<div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/bgmeditasi2.png"
                />
              </div>
              <div className="col-md-8 pt-3">
                <h5 className="font-weight-bold">Duduk, Dengar, Damai</h5>
                <p>
				<b>Tenangkan pikiran mudah hanya dengan 3 teknik sederhana.</b><br/>
Kami akan beri panduan lengkap di aplikasi. Terbukti membantu menjadi lebih tenang, kalem, mengurangi stres, dan menghilangkan overthinking.
                </p>
              </div>
            </div>
			<div className="row pt-4">
				<div className="col-md-6">
				<div className="listriliv">
                      <ul>
                        <li><p><b>Melatih pikiran menjadi lebih tenang,</b> dengan mengurangi tekanan emosional dan stres dapat membantu meningkatkan kreativitas serta fokus</p></li>
                        <li><p><b>Terpercaya berdasarkan penelitian, </b> meditasi disusun oleh profesional melalui metode ilmiah sehingga terbukti ampuh untuk menenangkan pikiran</p></li>
						
					  </ul>
                    </div>
				</div>
				<div className="col-md-6">
				<div className="listriliv">
                      <ul>
                        <li><p><b>Tidak memakan waktu, </b> cukup 10 menit setiap hari selama 10 hari untuk merasakan manfaatnya secara langsung. Menjadikan hidup lebih bahagia</p></li>
                        <li><p><b>Ratusan konten meditasi,</b> bebas pilih sesuai permasalahan seperti; kecemasan, overthinking, susah tidur, kesedihan, stres, dan masih banyak lagi</p></li>
						
					  </ul>
				</div>
			</div>
		  </div>
		  <div className="row mt-5">
		  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_panik.png"
                />
				<h5 className="font-weight-semibold">Saat Panik</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_frustasi.png"
                />
				<h5 className="font-weight-semibold">Frustasi</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_konsentrasi.png"
                />
				<h5 className="font-weight-semibold">Konsentrasi</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_duka.png"
                />
				<h5 className="font-weight-semibold">Hidup dengan Duka</h5>
				<p className="font-meditasi">7-10 menit | Med Seri</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_waktu.png"
                />
				<h5 className="font-weight-semibold">Waktu Sendiri</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_tersakiti.png"
                />
				<h5 className="font-weight-semibold">Tersakiti</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_menyesal.png"
                />
				<h5 className="font-weight-semibold">Mengapa Menyesal</h5>
				<p className="font-meditasi">7-10 menit | Med Seri</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_fokus.png"
                />
				<h5 className="font-weight-semibold">Fokus</h5>
				<p className="font-meditasi">7-10 menit | Med Singkat</p>
			  </div>
		  </div>
		  <div className="container">
		  <div className="py-rlv-3-mobile py-lg-rlv-3-desktop py-rlv-3-mobile px-lg-rlv-5-desktop px-lg-5">

		  
		  <h2 className="text-center font-weight-semibold mt-5">Memahami. Menerima. Menghadapi.</h2>
		  <div className="listriliv">
              <ol>
                <li>
				<b>Memahami</b> tentang diri sendiri, tentang emosi dan segala hal yang sedang terjadi saat ini
                </li>
                <li>
                  <b>Menerima</b> bahwa apa yang kamu rasakan adalah sesuatu yang wajar, sekalipun itu perasaan yang menyakitkan
                </li>
                <li>
				<b>Menghadapi</b> sumber-sumber masalah yang sebenarnya tidak dapat kamu kendalikan dengan lebih kuat
                </li>
               
              </ol>
            </div>
		  </div>
		  </div>
        </BodyContainer>
      </div>

      {/* MASALAH YANG KAMI SELESAIKAN */}
      <div className="container-fluid py-rlv-5-mobile py-lg-rlv-5-desktop bg-riliv-level-1">
        <BodyContainer>
          <div className="mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center">
            <ResponsiveText_H2
              classMobile="font-weight-semibold text-white"
              classDesktop="font-weight-bold text-white"
            >
              Kualitas kami dibuktikan dengan angka bukan sekadar kata
            </ResponsiveText_H2>
          </div>
		  <div className="row pt-4">
					<div className="col-md-3 mt-4">
						  <div className="bg_default2" style={{ padding:"32px 24px !important", height: "212px"}}>
						  <h2 className="text-center font-weight-semibold">+200.000</h2>
						  <h4 className="title-content">User lebih sehat mental dengan Riliv</h4>
						  </div>
					</div>
					
					<div className="col-md-3 mt-4">
					<div className="bg_default2" style={{ padding:"32px 24px !important", height: "212px"}}>
						  
						  <h2 className="text-center font-weight-semibold">100%</h2>
						  <h4 className="title-content">Psikolog Riliv memiliki lisensi resmi Himpunan Psikologi Indonesia</h4>
						  </div>
					</div>
					
					<div className="col-md-3 mt-4">
					<div className="bg_default2" style={{ padding:"32px 24px !important", height: "212px"}}>
						<h2 className="text-center font-weight-semibold">94%</h2>
						  <h4 className="title-content">Pengguna lebih sehat mental dengan meditasi Riliv</h4>
						  </div>
					</div>
					
					<div className="col-md-3 mt-4">
					<div className="bg_default2" style={{ padding:"32px 24px !important", height: "212px"}}>
						<h2 className="text-center font-weight-semibold">90%</h2>
						  <h4 className="title-content">Tingkat kepuasan konseling online Riliv</h4>
						  </div>
					</div>
				</div>
        </BodyContainer>
      </div>

      {/* MEDITASI MENGAJAKMU SECTION */}
      <div className="my-rlv-3-mobile my-lg-rlv-3-desktop">
        <BodyContainer>
		<div className="py-rlv-1-mobile py-lg-rlv-1-desktop">
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg_riliv text-white">
                  <div className="container">
                    <img src="./../img-ads/icon/icon_love.png" />
                    <h5 class="font-content2">
					Dapatkan kebahagiaanmu bersama<br/> +200.000 orang yang telah merasakan manfaatnya

                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.260.000</s></p>
                    <p className="price-riliv">Rp.69.000</p>
                    <hr/>
                    <div className="listriliv">
                      <ul>
                        <li><p>2x Konseling Psikolog Profesional</p></li>
                        <li><p>2 Bulan Full Akses Meditasi</p></li>
                      </ul>
                    </div>
                    <a href="https://app.midtrans.com/payment-links/1611299075823">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BodyContainer>
      </div>

      {/* MASIH RAGU SECTION */}
      <div className="py-rlv-3-mobile py-lg-rlv-3-desktop bg-grey-light">
        <BodyContainer>
          <h1 className="font-weight-semibold text-center mb-rlv-C">
            Testimoni User
          </h1>
		  <div className="row pt-4">
					<div className="col-md-6">
						  <div className="bg_default2 mt-4 heightRilivAuto" style={{ background:"black", height:"440px", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user1.png" />
						  </div>
					</div>
					
					<div className="col-md-6">
					<div className="bg_default2 mt-4 heightRilivAuto" style={{ background:"black", height:"440px", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user2.png" />
						 
						  </div>
					</div>
					
					<div className="col-md-6">
					<div className="bg_default2 mt-4 heightRilivAuto" style={{ background:"black", height:"440px", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user3.png" />
						 
						  </div>
					</div>
					
					<div className="col-md-6">
					<div className="bg_default2 mt-4 heightRilivAuto" style={{ background:"black", height:"440px", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user4.png" />
						  
						  </div>
					</div>
					<div className="col-md-6">
					<div className="bg_default2 mt-4 heightRilivAuto" style={{ background:"white", height:"390px", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user5.png" />
						  
						  </div>
					</div>
					<div className="col-md-6">
					<div className="bg_default2 mt-4 heightRilivAuto" style={{ background:"white", height:"390px", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user6.png" />
						  
						  </div>
					</div>
					<div className="col-md-6">
					<div className="bg_default2 mt-4 " style={{ background:"white", borderRadius:"16px", padding:"40px"}}>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/testimoni/user_testimoni2.png" />
						  <p className="font-weight-semibold">“Gak perlu habisin waktu di jalan, karena konselingnya bisa dilakuin online. Yang paling aku suka psikolognya yang ramah. Beliau berusaha memahami kondisiku dan mencari tau letak masalah yang harus diperbaiki dan memberikan solusi dengan tepat.”</p>
						  </div>
					</div>
					<div className="col-md-6">
					<div className="bg_default2 mt-4" style={{ background:"white", borderRadius:"16px", padding:"40px"}}>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/testimoni/user_testimoni1.png" />
						  <p className="font-weight-semibold">”Meditasi Riliv itu ibarat pertolongan pertama buatku kalau tiba-tiba lagi panik atau cemas, bisa langsung tenang lagi. Hati rasanya adem di mana dan kapan aja. Panduannya praktis dan mudah buat aku yang masih pertama kali nyoba.”
</p>
						  </div>
					</div>
				</div>
        </BodyContainer>
      </div>

      {/* SUDAH SAATNYA SECTION */}
      <div className="my-rlv-3-mobile my-lg-rlv-3-desktop">
        <BodyContainer>
				<div className="row mt-5">
					<div className="col-md-4 mt-4">
						  <div className="mx-auto d-block bg-riliv-level-6 mb-4" style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_mask.png" />
						  </div>
						  <h4 className="title-content">Konseling</h4>
						  <p className="text-center">Selesaikan masalah dengan berbagai solusi terpercaya dari yang ahli</p>
						  
					</div>
					 
					<div className="col-md-4 mt-4">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_lelap.png" />
						  </div>
						  <h4 className="title-content">Cerita Lelap</h4>
							<p className="text-center">Tak perlu overthinking lagi, kamu bisa tidur lelap hari ini</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_meditasi.png" />
						  </div>
						  <h4 className="title-content">Belajar Meditasi</h4>
						  <p className="text-center">Panduan yang mudah membuatmu lebih fokus dalam beraktivitas</p>
						  
					</div>
					
					<div className="col-md-4 mt-5">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_nuansa.png" />
						  </div>
						  <h4 className="title-content">Nuansa Lelap</h4>
						  <p className="text-center">Hadirkan ketenangan dalam tidurmu, singkirkan beban pikiran</p>
						 
					</div>
					<div className="col-md-4 mt-5">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_darurat.png" />
						  </div>
						  <h4 className="title-content">Meditasi Darurat</h4>
						  <p className="text-center">Menjadi tenang dengan segera, karena cemas bisa datang tiba-tiba</p>
						 
					</div>
					
					<div className="col-md-4 mt-5">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4" style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_mood.png" />
						  </div>
						  <h4 className="title-content">Mood Tracker</h4>
						  <p className="text-center">Memantau dan mengelola emosimu semudah menggeser jari</p>
						  
					</div>
				</div>
				<div className="py-rlv-2-mobile py-lg-rlv-2-desktop">
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg_riliv text-white">
                  <div className="container">
                    <img src="./../img-ads/icon/icon_love.png" />
                    <h5 class="font-content2">
					Dapatkan kebahagiaanmu bersama<br/> +200.000 orang yang telah merasakan manfaatnya

                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.260.000</s></p>
                    <p className="price-riliv">Rp.69.000</p>
                    <hr/>
                    <div className="listriliv">
                      <ul>
                        <li><p>2x Konseling Psikolog Profesional</p></li>
                        <li><p>2 Bulan Full Akses Meditasi</p></li>
                      </ul>
                    </div>
                    <a href="https://app.midtrans.com/payment-links/1611299075823">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  <h2 className="font-weight-semibold text-center mb-rlv-C mt-2">
		  Tidak perlu diragukan lagi, bersamamu<br/>
kami berhasil meraih…
          </h2>
				
		  <div className="row mt-5">
		  	<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_google.png" />
						 
						  <h4 className="title-content">Winners of Google Business Group Stories Search 2017</h4>
						  <p className="text-center">Google Inc.</p>
						  
					</div>
					 
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_tempo.png" />
						 
						  <h4 className="title-content">Best Sustainable Startup 2017</h4>
						  <p className="text-center">Tempo Media</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_bmcig.png" />
						 
						  <h4 className="title-content">Winner of Indonesia Startup Insight 2018</h4>
						  <p className="text-center">KinerjaBisa Holding Pte Ltd</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_gen.png" />
						 
						  <h4 className="title-content">Winners of Indonesian Enterpreneurship World Cup 2019</h4>
						  <p className="text-center">Global Enterpreneurship
Network (GEN)</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_digitaraya.png" />
						 
						  <h4 className="title-content">Most Favorite Startup In Google Launchpad Accelarator Demo 2018</h4>
						  <p className="text-center">Global Launchpad Accelerator
by Digitaraya</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_yseali.png" />
						 
						  <h4 className="title-content">Indonesian Delegates of YSEALI Academic Fellows for Social Enterpreneur 2017</h4>
						  <p className="text-center">U.S. Department of State</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_australia.png" />
						 
						  <h4 className="title-content">Indonesian Delegates of Australia Awards 2016</h4>
						  <p className="text-center">Australia Department of State</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_yse.png" />
						 
						  <h4 className="title-content">Best 16 Young Social Enterpreneurs (YSE) 2016</h4>
						  <p className="text-center">Singapore International
Foundation</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_startup.png" />
						 
						  <h4 className="title-content">Top 3 Startups of Startup Sprint 2015</h4>
						  <p className="text-center">EMTEK Group</p>
						  
					</div>
				</div>

				<div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
				<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
            Telah Diliput Di
          </h2>
          <div className="row text-center">
            <div className="col-lg-1 d-none d-lg-inline"></div>
            <MediaImages
              key="media1"
              photoUrl="/img-home/kumparan.png"
              photoAlt="kumparan"
            />
            <MediaImages
              key="media2"
              photoUrl="/img-home/liputan6.png"
              photoAlt="liputan6"
            />
            <MediaImages
              key="media3"
              photoUrl="/img-home/techinasia.png"
              photoAlt="techinasia"
            />
            <MediaImages
              key="media4"
              photoUrl="/img-home/the_straits.png"
              photoAlt="the straits"
            />
            <MediaImages
              key="media5"
              photoUrl="/img-home/thejakarta.png"
              photoAlt="the jakarta post"
            />

            <div className="col-lg-1 d-none d-lg-inline"></div>
            <div className="col-lg-1 d-none d-lg-inline"></div>
            <MediaImages
              key="media6"
              photoUrl="/img-home/tirto.png"
              photoAlt="tirto"
            />
            <MediaImages
              key="media7"
              photoUrl="/img-home/conversation.png"
              photoAlt="conversation"
            />
            <MediaImages
              key="media8"
              photoUrl="/img-home/detik.png"
              photoAlt="detikcom"
            />
            <MediaImages
              key="media9"
              photoUrl="/img-home/forbes.png"
              photoAlt="forbes"
            />
            <MediaImages
              key="media10"
              photoUrl="/img-home/idn.png"
              photoAlt="idn times"
            />
            <div className="col-lg-1 d-none d-lg-inline"></div>
          </div>
		  </div>
        </BodyContainer>
      </div>
	  <div className="bg-riliv-level-5 py-rlv-3-mobile py-lg-rlv-3-desktop">
	  <div className="container">
	  <div className="jumbotron jumbotron-fluid bg-riliv-level-1 text-white" style={{borderRadius:"16px", padding:"24px 24px 0px 24px"}}>
                  
					  <div className="row">
		
					  <div className="col-md-3">
						  <div className="" style={{background: "#41D5E7", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_riliv.png" />
						  
						  </div>
					</div>
					  <div className="col-md-9">
					  <h2 className="font-weight-semibold">
					  Dapatkan hidup lebih bahagia bersama Aplikasi Kesehatan Mental No.1 di Indonesia
					  </h2>
					  <p className="mt-4">Riliv App</p>
					  </div>
					  </div>
                    
                  
                </div>
	  </div>
	  </div>
      <RilivFooter hideLinks />
      <BootstrapScript />
    </div>
  );
};

export default AdsBundlingPage1;

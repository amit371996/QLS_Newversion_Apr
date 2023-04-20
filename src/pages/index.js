
import React,{useState,useEffect} from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
// import catering from '../../images/catering.png';
import "../stylee.css"

import Layout from "../components/layout/layout"

import anmimg1 from '../image/round.svg';
import anmimg2 from '../image/star.svg';
import anmimg3 from '../image/bloone.svg';
import anmimg4 from '../image/eardff.svg';
import anmimg5 from '../image/wav.svg';
import anmimg6 from '../image/wav.svg';
import partner from '../image/partner1.png';

import homepgbg from '../image/Blog-image-7th-April-409x214-1.jpg';
import homepgb2 from '../image/homebg.png';
import homepgb3 from '../image/events.png';
import homepgb4 from '../image/25_546.jpg';
import homepgb5 from '../image/imgpsh_fullsize_anim-1.png';
import { Link } from 'gatsby';




const Home = () => {

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
          
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? "visible" : "hidden";

	return(
		<ReactFullpage
		//fullpage options
		// licenseKey={'YOUR_KEY_HERE'}
		scrollingSpeed={1000} /* Options here */

		render={({ state, fullpageApi }) => {
			
			
			  
			return (
				<Layout headervisiblity={cls}>
					<ReactFullpage.Wrapper>
						<section class="section">
							<div class="secation01 bhg">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<div class="our_main_heading">
												<h1><strong>Bringing </strong>OUT OF<br />
													<strong>this</strong> WORLD <br />
													OPPORTUNITIES<br />
													<strong>to you </strong></h1>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="secation02 bhg">
								<div class="jhg_tfrd">
									<div class="container">
										<div class="row">
											<div class="col-md-5 colmd5" /*style="position: relative;"*/>
												<div class="kj_bgvcdfs">
													<div class="image_hfgfss">


														<source src="assets/image/vg.mp4" />



													</div>



													<div class="image_gnbdd">
														<div class="roghrtf">
															<div class="ljkf">
																<img src={anmimg1} />
															</div>
															<div class="ghbd">
																<img src={anmimg2} />
																{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/star.svg"> */}
															</div>
															<div class="ghbd1">
																<img src={anmimg3} />
																{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/bloone.svg"> */}
															</div>
															<div class="ghbd2">
																<img src={anmimg4} />
																{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/eardff.svg"> */}
															</div>
															<div class="ghbd3">
																<img src={anmimg5} />
																{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/wav.svg"> */}
															</div>
															<div class="ghbd4">
																<img src={anmimg6} />
																{/* <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/moon.svg"> */}
															</div>
														</div>
														<div class="image_hfgfss">
															<video autoplay="true" muted="" loop="" playsInline="" preload="metadata" class="video" id="myVideo" /*style="min-width:100%; min-height:100%;"*/>
																<source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
															</video>
														</div>
													</div>

												</div>
											</div>
											<div class="col-md-7">
												<div class="our_about_wrap">
													<h2>About <strong>us</strong> </h2>
													<h4>Our vision and values drive us to achieve greater heights</h4>
													<div class="oj_t">
														<p>We are an Earth observation data company that equips our customers, across multiple industries, with the information they need to optimise, plan, monitor, model, design and execute their business decisions and processes.</p>

														<p>Bringing together high-resolution satellite imagery, smart sensors, machine learning, AI and edge computing, QL Space provides descriptive, diagnostic and predictive analytics tailored to your business goals and needs.</p>

														<p>Our downstream applications include work in areas such as precision mining, sustainability, agriculture monitoring, supply chain mapping, disaster response support, weather forecasting and infrastructure planning.</p>

														<p>Our upstream focus involves plans to test a hybrid radar and optic payload, to further improve the insights we offer our customers.</p>
													</div>
													<div class="btn_g">
														<Link to="/app/about">View More</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="section id_hide" id="stopr_de">
							<div class="secation03 back_ghbd bhg sliderimg">
								<div class="container">
									<div class="row">

										<div class="col-md-12">
											<div class="our_about_wrap">
												<h2 class="text-start">Solutions</h2>
												<h4 class="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>


											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-1">
											<div class="progress">
												<ul>
													<span class="line"></span>
													<li><a href="#sec1">I</a></li>
													<li><a href="#sec2">II</a></li>
													<li><a href="#sec3">III</a></li>
													<li><a href="#sec4">IV</a></li>
													<li><a href="#sec5">V</a></li>
													<li><a href="#sec5">VI</a></li>
													<li><a href="#sec5">7</a></li>
												</ul>
											</div>
										</div>
										<div class="col-md-11">


											<div class="list_manage">
												<div class="row">
													<div class="col-md-6">
														<div class="new_idf">
															<div class="start_y" id="sec1">
																<h2 class="text-start">MINING</h2>
																<p>Revolutionise the future of critical earth mineral discovery and extraction</p>
																<ul>
																	<li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
																	<li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
																	<li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
																	<li>Near real-time emission monitoring in mining</li>
																</ul>
															</div>
															<div class="start_y" id="sec2">
																<h2 class="text-start">AGRICULTURE</h2>
																<p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
																<ul>
																	<li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
																	<li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
																	<li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
																	<li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
																</ul>
															</div>
															<div class="start_y" id="sec3">
																<h2 class="text-start">INFRASTRUCTURE</h2>
																<p>Improve management of infrastructure risk through proactive monitoring</p>
																<ul>
																	<li>Transmission line planning and route optimization using machine learning and satellite data</li>
																	<li>Airport information management using geospatial data and machine learning</li>
																	<li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
																	<li>Rail-road conditions at regional and national levels</li>
																	<li>Remote location monitoring of assets and infrastructure</li>
																</ul>
															</div>
															<div class="start_y" id="sec4">
																<h2 class="text-start">ENVIRONMENT </h2>
																<p>Protecting the environment through accurate earth observation datasets</p>
																<ul>
																	<li>Monitor methane emissions, as well as carbon levels</li>
																	<li>Provide more accurate environmental impact assessments through to use of spatially explicit and frequently updated data</li>
																	<li>Monitor inland waterway health</li>
																</ul>
															</div>
															<div class="start_y" id="sec5">
																<h2 class="text-start">DISASTER AND RECOVERY</h2>
																<p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
																<ul>
																	<li>Improve disaster response and management through analysis of natural disasters like earthquake, cyclones, floods, and bushfire damages</li>
																	<li>Aid recovery by detecting near real time changes to allow immediate relief measures to be taken during natural calamities</li>
																</ul>
															</div>
															<div class="start_y" id="sec6">
																<h2 class="text-start">DEFENCE AND SECURITY</h2>
																<p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
																<ul>
																	<li>Identify military resources and troop movement to aid with relief and security efforts</li>
																	<li>Detect chemical seepages across land classes</li>
																</ul>
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>

									</div>
								</div>

							</div>
						</section>
						<section class="section">
							<div class="section04 bhg">

								<div class="container">
									<div class="row">
										<div class="col-md-6">
											<div class="ourr_tsgdf">
												<ul>
													<li>
														<ul>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26692.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26691.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26697.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26700.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26702.png" alt='' /> </a> </li>
														</ul>
													</li>
													<li>
														<ul>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26693.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26695.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26698.png" alt='' /></a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26701.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26703.png" alt='' /> </a> </li>
														</ul>
													</li>
													<li>
														<ul>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26694.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26696.png" alt='' /> </a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26699.png" alt='' /></a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26704.png" alt='' /></a> </li>
															<li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26705.png" alt='' /> </a> </li>
														</ul>
													</li>
													<div class="clr"></div>
												</ul>
											</div>
										</div>
										<div class="col-md-6">
											<div class="our_about_wrap">
												<h2>MEET OUR</h2>
												<h4>PARTNERS AND SUPPORTERS</h4>
												<div class="oj_t">
													<p>To achieve over and above the set expectation we strive to develop strong partnerships, that can only be committed with complete transparency we pride ourselves.</p>
												</div>
												<div class="btn_g">
													<a href="#">Meet Us</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="secation05 bhg">
								<div class="container">
									<div class="row">

										<div class="col-md-12">
											<div class="our_about_wrap">
												<h2 class="text-start">What's New</h2>
												<h4 class="text-start">Get the latest updates and helpful information</h4>


											</div>
										</div>
									</div>
								</div>
								<div class="htbdgh">
									<div class="htbdgh">


										<div class="gidr_news">
											<div class="grif_wrap grif_wrap1">
												<div class="itemg_hbg ngpv1">
													<div class="itemsnq itemsnq1">
														<div class="our_tsadr">
															<img src={homepgbg} alt='' className='img-fluid' />
															{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/homepage.jpg"> */}
															<div class="our_tfdsd">
																<div class="gtfrd">
																	<h3>
																		<a href="https://www.qlspace.com.au/the-role-of-data-analytics-in-agriculture-monitoring-with-ai-and-satellite-technology/">
																			The Role of Data Analytics in ...    </a></h3>

																	<p> The combination of data analytics, artificial intelligence… </p>
																	<div class="our_tascrt">
																		<Link to="/app/blog">View All Posts</Link>

																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="itemsnq itemsnq2">
														<div class="our_tsadr">
															<img src={homepgb2} alt='' className='img-fluid' />
															{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/News-image-3rd-April-409x214-1.jpg"> */}
															<div class="our_tfdsd">
																<div class="gtfrd">
																	<h3>
																		<a href="https://www.qlspace.com.au/news/spacex-successfully-launches-10-space-force-tranche-0-satellites-after-abort-delay-lands-rocket/">
																			SpaceX successfully launches 1...    </a></h3>
																	<p> The Tranche 0 satellites are part of… </p>
																	<div class="our_tascrt">
																		<Link to="/app/whatsnew">View All News</Link>

																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="itemg_hbg ngpv2">
													<div class="itemsnq itemsnq3">
														<img src={homepgb3} alt='' className='img-fluid' />
														{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/events.png"> */}
														<div class="our_tfdsd">
															<div class="gtfrd">
																<h3>
																	<a href="https://www.qlspace.com.au/events/asias-most-prominent-tech-summit-umagine/">
																		Asia’s most prominent te...    </a></h3>
																<p> Asia's most prominent tech summit - Umagine </p>
																<div class="our_tascrt">
																	<Link to="/app/event">View All Events</Link>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="grif_wrap grif_wrap2">
												<div class="itemsnq itemsnq4">
													<img src={homepgb4} alt='' className='img-fluid' />
													{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/25_546.jpg"> */}
													<div class="our_tfdsd">
														<div class="gtfrd">
															<h3>
																<a href="https://www.qlspace.com.au/partners/ql-space-sign-mous/">
																	QL Space Sign MOUs    </a>
															</h3>
															<p>
																Today was a big day for QL…</p>
															<div class="our_tascrt">
																<Link to="/app/partner">View All Partners</Link>
															</div>
														</div>
													</div>

												</div>

												<div class="itemsnq itemsnq5">
													<img src={homepgb5} alt='' className='img-fluid' />
													{/* <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-1.png"> */}
													<div class="our_tfdsd">
														<div class="gtfrd">
															<h3>
																<a href="https://www.qlspace.com.au/videos/avalon-2023-australian-international-airshow/">
																	AVALON 2023 – Australian...    </a>
															</h3>
															<p>
																QL Space is thrilled to have participated…</p>
															<div class="our_tascrt">
																<Link to="/app/videos">View All Videos</Link>

															</div>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						
						
					</ReactFullpage.Wrapper>
				</Layout>
			);
		}}
	/>
	)


	};
export default Home;
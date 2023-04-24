import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import catering from '../../images/catering.png';
import "../../stylee.css";

import frame1 from "../../image/Frame1.png";
import frame2 from "../../image/Frame2.png";
import frame3 from "../../image/Frame3.png";
import frame4 from "../../image/Frame4.png";
import frame5 from "../../image/Frame5.png";
import footerlogo from "../../image/footerlogo.png";
import userff from "../../image/userff.png";
import icon from "../../image/Icon.png";
import anmimg1 from "../../image/round.svg";
import anmimg2 from "../../image/star.svg";
import anmimg3 from "../../image/bloone.svg";
import anmimg4 from "../../image/eardff.svg";
import anmimg5 from "../../image/wav.svg";
import anmimg6 from "../../image/wav.svg";
import { useStaticQuery, graphql, StaticQuery, Link } from "gatsby";

const About = () => {
	return (

		<StaticQuery
			// scrollingSpeed={1000}
			query={graphql`
            query {
                wpPage(id: { eq: "cG9zdDoxMDM=" }) {
					title
					about {
					  advisorsheading
					  description
					  heading
					  ouradvisors {
						designation
						image {
						  sourceUrl
						}
						linkedinurl
						name
						colorimage {
							sourceUrl
						  }
					  }
					  teamheading
					  ourteam {
						designation
						linkedinurl
						name
						image {
						  sourceUrl
						}
						colourImage {
						  sourceUrl
						}
					  }
					}
				  }
              }
            `}
			render={data => (
				<main>
					<section class="section">
						<div class="secation01 bhg secn_abouts">
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<div class="our_main_heading text-center">
											<div class="bread_cumg" dangerouslySetInnerHTML={{ __html: data.wpPage.about.heading }}>
												
											</div>
										</div>
										<div class="img_arrow">
											<div class="roww_wrap">
												<a href="#">
													<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" />
												</a>
											</div>
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
										<div class="col-md-5 colmd5">
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
														<video
															autoplay="true"
															muted=""
															loop=""
															playsinline=""
															preload="metadata"
															class="video"
															id="myVideo"
														>
															<source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
														</video>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-7">
											<div class="our_about_wrap"  dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>
												
												
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="section">
						<div class="secatioonteam bhg">
							<div class="jhg_tfrd paddint_top padding_Btnh">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<div class="main_heading">
												<div class="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }}>
													
												</div>
											</div>
										</div>
									</div>
									<div class="our_vba">
										<div class="row mar_yes">
											{data &&
												data.wpPage &&
												data.wpPage.about &&
												data.wpPage.about.ourteam.map((prop, i) => {
													return (
														<>
															<div class="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																<div class="image_tema">
																	<div class="f1_container">
																		<div class="f1_card shadow">
																			<div class="front face">

																				<img src={prop.image.sourceUrl} />
																			</div>
																			<div class="back face center">

																				<img src={prop.colourImage.sourceUrl} />
																			</div>
																		</div>
																	</div>
																	<div class="details">
																		<div class="left_part_name">
																			<h4>{prop.name}</h4>
																			<span>
																				{prop.designation}
																			</span>
																		</div>
																		<div class="right_part_name">
																			<Link to=
																				{prop.linkedinurl}
																				target="_blank"
																			>
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</>
													)
												})}



										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="section">
						<div class="secatioonteam bhg">
							<div class="jhg_tfrd paddint_top padding_Btnh">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<div class="main_heading">
												<div class="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.advisorsheading }}>
													
												</div>
											</div>
										</div>
									</div>
									<div class="our_vba">
										<div class="row mar_none">
											{data &&
												data.wpPage &&
												data.wpPage.about &&
												data.wpPage.about.ouradvisors.map((prop, i) => {
													return (
														<>
															<div class="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																<div class="image_tema">
																	<div class="f1_container">
																		<div class="f1_card shadow">
																			<div class="front face">

																				<img src={prop.image.sourceUrl} />
																			</div>
																			<div class="back face center">

																				{/* <img src={prop.colourImage.sourceUrl} />  */}
																			</div>
																		</div>
																	</div>
																	<div class="details">
																		<div class="left_part_name">
																			<h4>{prop.name}</h4>
																			<span>
																				{prop.designation}
																			</span>
																		</div>
																		<div class="right_part_name">
																			<Link to=
																				{prop.linkedinurl}
																				target="_blank"
																			>
																				<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</>
													)
												})}


										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <section class="section">
						<div class="main_fot bhg">
							<footer class="footer_wrap">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<h2>Subscribe to our newsletter</h2>
											<p>Lörem ipsum monomubegt håd epiv dide.</p>
										</div>
										<div class="col-md-12">
											<div class="our_news_leeter">
												<form class="row g-3">
													<div class="col-md-6">
														<div class="hfnfa">
															<input
																type="text"
																class="form-control"
																id="name"
																placeholder="Enter Name"
															/>
															<div class="imgddds">
																<img src={userff} alt="" />
															</div>
														</div>
													</div>
													<div class="col-md-6">
														<div class="hfnfa">
															<input
																type="text"
																class="form-control"
																id="email"
																placeholder="Enter Email"
															/>
															<div class="imgddds">
																<img src={icon} alt="" />
															</div>
														</div>
													</div>
													<div class="col-12">
														<button type="submit" class="btn btn-primary">
															Submit
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div class="our_main_footer">
									<div class="container">
										<div class="row">
											<div class="col-md-3">
												<div class="images_logo">
													<div class="logo_footer">
														<a href="#">
															<img src={footerlogo} alt="" />
														</a>
													</div>
													<div class="cont_footer">
														<p>
															Our goal is to develop cutting-edge space
															technology that accomplishes the incredible.
														</p>
													</div>
													<div class="list_s">
														<ul>
															<li>
																<a href="#">
																	<img src={frame1} alt="" />
																</a>
															</li>
															<li>
																<a href="#">
																	<img src={frame2} alt="" />
																</a>
															</li>
															<li>
																<a href="#">
																	<img src={frame3} alt="" />
																</a>
															</li>
															<li>
																<a href="#">
																	<img src={frame4} alt="" />
																</a>
															</li>
															<li>
																<a href="#">
																	<img src={frame5} alt="" />
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="col-md-3">
												<div id="myDIV" class="ythfr">
													<ul>
														<li class="btn_list active_list">
															<a href="#">Home</a>
														</li>
														<li class="btn_list">
															<a href="#">About Us</a>
														</li>
														<li class="btn_list">
															<a href="#">Solution</a>
														</li>
														<li class="btn_list">
															<a href="#">Partner</a>
														</li>
														<li class="btn_list">
															<a href="#">News Room</a>
														</li>
													</ul>
												</div>
											</div>
											<div class="col-md-3">
												<div class="kn_list">
													<div class="kn_left_list">
														<div class="lefti_text">
															<div class="inner_l">
																 <img src="assets/image/Icon.png"/>
															</div>
														</div>
														<div class="righti_text">
															<div class="rig_th">
																<span>Mail</span>
																<p>info@qlspace.com.au</p>
															</div>
														</div>
													</div>
													<div class="kn_left_list">
														<div class="lefti_text">
															<div class="inner_l">
																<img src="assets/image/map.png"/>
															</div>
														</div>
														<div class="righti_text">
															<div class="rig_th">
																<span>Address</span>
																<p>
																	45 St Georges Terrace, Ground Floor,Perth, WA,
																	6000
																</p>
															</div>
														</div>
													</div>
													<div class="kn_left_list">
														<div class="lefti_text">
															<div class="inner_l">
																<img src="assets/image/map.png"/>
															</div>
														</div>
														<div class="righti_text">
															<div class="rig_th">
																<span>Addess</span>
																<p>
																	Ground Floor, Space Lab Building, Lot
																	Fourteen, Frome Road, ADELAIDE | SA |5000
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-3">
												<div class="kn_list">
													<div class="kn_left_list">
														<div class="lefti_text">
															<div class="inner_l">
																<img src="assets/image/phone.png"/>
															</div>
														</div>
														<div class="righti_text">
															<div class="rig_th">
																<span>Mail</span>
																<p>+61 8 6262 3559</p>
															</div>
														</div>
													</div>
													<div class="kn_left_list">
														<div class="lefti_text">
															<div class="inner_l">
																<img src="assets/image/phone.png"/>
															</div>
														</div>
														<div class="righti_text">
															<div class="rig_th">
																<span>Mail</span>
																<p>+61 410 881 616</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="copy_right">
									<div class="container">
										<div class="row">
											<div class="col-md-6">
												<div class="outg_o">
													<p>Copyright ©2023 SPACE. Powered By QL Tech</p>
												</div>
											</div>
											<div class="col-md-6">
												<div class="right_text_copy">
													All Rights Reserved{" "}
													<span>
														<ul>
															<li>
																<a href="#"> Terms and Conditions </a>
															</li>
															<li>
																<a href="#"> Privacy Policy </a>
															</li>
														</ul>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</section> */}
				</main>
			)}
		/>
	);
};

export default About;
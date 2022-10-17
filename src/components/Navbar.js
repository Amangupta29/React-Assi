/** @format */

import React from 'react';
import Vector from './images/Vector.png';
import Layer1 from './images/Layer1.png';
import pic from './images/pic.png';
import ai from './images/ai.png';
import vector1 from './images/vector1.png';
import vector2 from './images/vector2.png';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar'>
				<ul className='list'>
					<li className='list-item'>
						<img
							className='img1'
							src={Vector}></img>
						<a
							class='link '
							href='https://github.com/'>
							github
						</a>
					</li>
					<li className='list-item'>
						<img
							className='img1'
							src={vector1}></img>
						<a
							class='link '
							href='https://www.google.com/docs/about/'>
							Docs
						</a>
					</li>
					<li className='list-item'>
						<img
							className='img1'
							src={vector2}></img>
						<a
							class='link '
							href=''>
							sign in
						</a>
					</li>
				</ul>
			</nav>
			<div className='main'>
				<div className='head'>
					<img
						className='Layer1'
						src={Layer1}></img>

					<button
						className='button'
						>
						Talk to us
					</button>
				</div>
				<div className='header'>
					<h1>
						Grow Your Bussiness <br />
						With Email Automation
					</h1>
				</div>
			</div>
			<div className='btn'>
				<img
					className='mail'
					src={pic}></img>
				<button className='button2'>Get Started</button>
			</div>
			<div className='container'>
				<div className='header2'>
					<h1 className='hd'>
						AI <span className='spn'>framework</span>
					</h1>
					<div className='main'>
						<div className='head-flex'>
							<div className='v1'></div>
							<div className='flexing'>
								<h3>Personalisation</h3>
								<h4>
									The advanced intelligent system assists in <br />
									reaching out to customers and increasing
									<br /> conversion funnel.
								</h4>

								<br />
							</div>
						</div>

						<div className='head-flex'>
							<div className='v1'></div>
							<div className='flexing'>
								<h3>Efficiency</h3>
								<h4>
									Our data models help improve the content.
									<br />
									Real-time delivery insights are monitored
									<br />
									using AI and provide meaningful actions.
								</h4>

								<br />
							</div>
						</div>

						<div className='head-flex'>
							<div className='v1'></div>
							<div className='flexing'>
								<h3>Automation</h3>
								<h4>
									Send email at scale using code written in
									<br /> your preferred programming language , such
									<br />
									as Pyhton, Java or Curl.
								</h4>

								<br />
							</div>
						</div>
					</div>
				</div>
				<img
					className='ai'
					src={ai}></img>
				
			</div>
		</div>
	);
};

export default Navbar;

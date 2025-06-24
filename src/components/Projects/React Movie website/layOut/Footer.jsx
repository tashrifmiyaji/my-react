export const Footer = () => {
	return (
		<footer className="section-footer">
			<div className="footer-container container">
				<div className="content_1">
					<img src="./images/logo.png" alt="logo" />
					<p>
						Welcome to Tashrif Movie Store, your ultimate
						destination for all types of movies!
					</p>
					<img
						src="https://i.postimg.cc/Nj9dgJ98/cards.png"
						alt="cards"
					/>
				</div>
				<div className="content_2">
					<h4>Other Things</h4>
					<a href="#">Songs</a>
					<a href="#">drama</a>
					<a href="#">series</a>
					<a href="#">short films</a>
				</div>
				<div className="content_3">
					<h4>Experience</h4>
					<a href="./contact.html">Contact Us</a>
					<a href="" target="_blank">
						Payment Method
					</a>
				</div>
				<div className="content_4">
					<h4>NEWSLETTER</h4>
					<p>
						Be the first to know about new
						<br />
						arrivals!
					</p>
					<div className="f-mail">
						<input type="email" placeholder="Your Email" />
						<i className="bx bx-envelope"></i>
					</div>
					<hr />
				</div>
			</div>
			<div className="f-design">
				<div className="f-design-txt">
					<p>Design and Code by @tashrif-miyaji</p>
				</div>
			</div>
		</footer>
	);
};

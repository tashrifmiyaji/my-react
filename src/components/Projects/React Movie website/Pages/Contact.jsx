import {useEffect  } from "react";
import { Form, useActionData  } from "react-router";

import contactSideImg from "../public/contact.png";

export const contactData = async ({ request }) => {
	try {
		const res = await request.formData();
		const data = Object.fromEntries(res);
		console.log(data);
		return { status: "success", message: "Message sent successfully!" };
	} catch (error) {
		return { status: "error", message: "Something went wrong!" };
	}
};

export const Contact = () => {
    const actionData = useActionData()

      useEffect(() => {
    if (actionData) {
      console.log("Form submitted! Response from action:", actionData);
    }
  }, [actionData]);
    
	return (
		<>
			<section className="container ">
				<h2 className="section-common--heading">contact us</h2>
				<p className="section-common--subheading">
					Get in touch with us. We are always here to help you.
				</p>
				{/* ✅ Success/Error Message */}
				{actionData?.status === "success" && (
					<p className="text-green-600 mb-3">{actionData.message}</p>
				)}
				{actionData?.status === "error" && (
					<p className="text-red-600 mb-3">{actionData.message}</p>
				)}
				<div className="section-contact">
					<div className=" grid grid-two--cols">
						<div className="contact-content">
							<Form method="POST" action="/contact">
								<div className="grid grid-two-cols mb-3">
									<div>
										<label htmlFor="username">
											full name
										</label>
										<input
											type="text"
											name="username"
											id="username"
											required
											autoComplete="off"
											placeholder="enter full name"
										/>
									</div>

									<div>
										<label htmlFor="email">
											email address
										</label>
										<input
											type="email"
											name="email"
											id="email"
											required
											autoComplete="off"
											placeholder="abc@tashrif.com"
										/>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="message">message</label>
									<textarea
										name="message"
										id="message "
										cols="30"
										rows="5"
										placeholder="we are always here to help you."
									></textarea>
								</div>

								<div className="mt-3">
									<button
										type="submit"
										className="btn contact-btn"
									>
										send message
									</button>
								</div>
							</Form>
						</div>
						<div className="contact-image">
							<figure>
								<img
									src={contactSideImg}
									alt="contact pic"
									className="contact_image"
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

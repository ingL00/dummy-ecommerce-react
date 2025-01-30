import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Registrationform = () => {
	function handleRegister(event) {
		event.preventDefault();
		return toast.error("Register functionality is not live yet");
	}

	return (
		<section className="loginform">
			<Helmet>
				<meta
					http-equiv="Content-type"
					content="text/html; charset=UTF-8"
				/>
				<script src="https://www.google.com/recaptcha/api.js"></script>
				<script>
					{`
            function timestamp() {
              var response = document.getElementById("g-recaptcha-response");
              if (response == null || response.value.trim() == "") {
                var elems = JSON.parse(
                  document.getElementsByName("captcha_settings")[0].value
                );
                elems["ts"] = JSON.stringify(new Date().getTime());
                document.getElementsByName("captcha_settings")[0].value =
                  JSON.stringify(elems);
              }
            }
            setInterval(timestamp, 500);
          `}
				</script>
			</Helmet>
			<div className="container-login">
				<div className="wrapper">
					<div className="heading-login">
						<h1>Sign Up</h1>
						<p>
							Already a user ?{" "}
							<span>
								<Link to="/login">Login here</Link>
							</span>
						</p>
					</div>
					<form
						className="form"
						method="POST"
						action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DfK000001CvLJ"
					>
						<input
							type="hidden"
							name="captcha_settings"
							value='{"keyname":"Salesforce_Sales_Cloud_250122","fallback":"true","orgId":"00DfK000001CvLJ","ts":""}'
						/>
						<input
							type="hidden"
							name="oid"
							value="00DfK000001CvLJ"
						/>
						<input
							type="hidden"
							name="retURL"
							value="http://blendmedia.co.id"
						/>

						<label className="label" for="first_name">
							First Name
							<input
								id="first_name"
								maxlength="40"
								name="first_name"
								size="20"
								type="text"
							/>
						</label>

						<label className="label" for="last_name">
							Last Name
							<input
								id="last_name"
								maxlength="80"
								name="last_name"
								size="20"
								type="text"
							/>
						</label>

						<label className="label" for="email">
							Email
							<input
								id="email"
								maxlength="80"
								name="email"
								size="20"
								type="text"
							/>
						</label>

						<label className="label" for="company">
							Company
							<input
								id="company"
								maxlength="40"
								name="company"
								size="20"
								type="text"
							/>
						</label>

						<label className="label" for="city">
							City
							<input
								id="city"
								maxlength="40"
								name="city"
								size="20"
								type="text"
							/>
						</label>

						<label className="label" for="state">
							State/Province
							<input
								id="state"
								maxlength="20"
								name="state"
								size="20"
								type="text"
							/>
						</label>

						<div
							class="g-recaptcha"
							data-sitekey="6LdHc78qAAAAAEPPHQwGA8ZEOmfqYB5s4Smfzy4P"
						></div>
						<input
							className="submit-btn"
							type="submit"
							name="Register"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Registrationform;

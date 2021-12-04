import React from 'react';
import '@styles/RecoveryPassword.scss';

import Logo from "@assets/icons/icons-general/logo-black.png";

const RecoveryPassword = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<h1 className="title-recovery">Password recovery</h1>
				<p className="subtitle-recovery">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="btn-primary login-btn" />
				</form>
			</div>
		</div>
	);
}

export { RecoveryPassword };

import React, { useState } from "react";

function SignUpForm({
  createAccount,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmationPassword,
  onChangeName,
  email,
  password,
  confirmationPassword,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  return (
    <form className="form-container" onSubmit={createAccount}>
      <div className="form-group">
        <label className="required">Nombre:</label>
        <input required type="text" value={name} onChange={onChangeName} />
      </div>
      <div className="form-group">
        <label className="required">Correo</label>
        <input required type="email" value={email} onChange={onChangeEmail} />
      </div>
      <div className="form-group">
        <label className="required">Contraseña</label>
        <div className="input-password">
          <input
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={onChangePassword}
          />
          <span
            className="icon-eye"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      <div className="form-group">
        <label className="required">Confirmar contraseña</label>
        <div className="input-password">
          <input
            required
            type={showConfirmationPassword ? "text" : "password"}
            value={confirmationPassword}
            onChange={onChangeConfirmationPassword}
          />
          <span
            className="icon-eye"
            onClick={() =>
              setShowConfirmationPassword((prevState) => !prevState)
            }
          >
            {showConfirmationPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Crear cuenta
      </button>
    </form>
  );
}

export default SignUpForm;

import { useState } from "react";

export default function HelloControlled() {
  const [username, setUsername] = useState("Marco");
  const [role, setRole] = useState("designer");
  const [accountType, setAccountType] = useState("standard");
  const [hasAcceptance, setHasAcceptance] = useState(false);
  return (
    <section className="container">
      <h2>Controlled Elements (Components)</h2>
{/* Input username */}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Text lenght: {username.length}</p>
      </div>
      {/* Select Role */}
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          id="role"
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
      </div>
      {/* Radios Account Type */}
      <div className="mb-3">
        <h3 className="h6">Account Type</h3>
        <div className="form-check">
          <input
            type="radio"
            name="account"
            id="standard"
            className="form-check-input"
            value="standard"
            checked={accountType === "standard"}
            onChange={(e) => setAccountType(e.target.value)}
          />
          <label htmlFor="standard" className="form-check-label">
            Standard
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="account"
            id="premium"
            className="form-check-input"
            value="premium"
            checked={accountType === "premium"}
            onChange={(e) => setAccountType(e.target.value)}
          />
          <label htmlFor="premium" className="form-check-label">
            Premium
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="account"
            id="max"
            className="form-check-input"
            value="max"
            checked={accountType === "max"}
            onChange={(e) => setAccountType(e.target.value)}
          />
          <label htmlFor="max" className="form-check-label">
            Max
          </label>
        </div>

      </div>

      {/* Checkboxs Acceptance */}
      <div className="mb-3">
        <div className="form-check">
          <input
            id="acceptance"
            type="checkbox"
            className="form-check-input"
            checked={hasAcceptance}
            onChange={(e) => setHasAcceptance(e.target.checked)}
          />
          <label htmlFor="hasAcceptance" className="form-check-label">
            Accept our <a href="#">privacy policy</a>
          </label>
        </div>
      </div>
    </section>
  );
}

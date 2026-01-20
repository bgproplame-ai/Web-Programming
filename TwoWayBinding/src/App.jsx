import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div style={styles.container}>
        <form style={styles.form}>
          <h2>Регистрация</h2>

          <div>
            <label>Име:</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Въведи име"
              style={styles.input}
            />
          </div>

          <div>
            <label>Имейл:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Въведи имейл"
              style={styles.input}
            />
          </div>

          <div>
            <label>Парола:</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Въведи парола"
              style={styles.input}
            />
          </div>

          <button type="button" onClick={handleClear} style={styles.button}>
            Изчисти
          </button>

          <hr />

          <p>Въведено име: {name}</p>
          <p>Въведен имейл: {email}</p>
          <p>Въведена парола: {password}</p>
        </form>
      </div>
    </>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "8px",
    cursor: "pointer",
  },
};

export default RegistrationForm;

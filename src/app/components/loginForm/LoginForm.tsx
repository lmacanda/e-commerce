"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./loginForm.module.scss";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("LOGIN_RESPONSE:", response);

    if (response?.error) {
      console.log("LOGIN_ERROR:", response.error);
      return;
    }

    router.replace("/myAccount");
  };

  return (
    <>
      <div className={styles.signin}>
        <div className={styles.signin_login}>
          <h2 className={styles.signin_ogin_title}>Log In</h2>

          <form onSubmit={handleLogin} className={styles.signin_login_form}>
            <label>Username or email address</label>
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.signin_login_form_btn}>
              <button className="form-btn-login" type="submit">
                Login
              </button>
              <Link href="/">Lost Your Password</Link>
            </div>
          </form>
        </div>
        <div className={styles.signin_register}>
          <h2>Register</h2>
          <form>
            <label>Email address</label>
            <input type="text" required />
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button
              className={styles.signin_register_form_btn}
              type="submit"
              onSubmit={handleLogin}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

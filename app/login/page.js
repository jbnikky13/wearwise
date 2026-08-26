"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase-browser";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const isSignup = mode === "signup";

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (isSignup) {
        const {
          data,
          error: signupError,
        } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              display_name: name.trim(),
            },
            emailRedirectTo:
              `${window.location.origin}/auth/callback`,
          },
        });

        if (signupError) {
          throw signupError;
        }

        /*
         * If email confirmation is enabled in Supabase,
         * there will be no active session yet.
         */
        if (!data.session) {
          setMessage(
            "Account created successfully. Please check your email and confirm your account before signing in."
          );

          setMode("login");
          setPassword("");

          return;
        }

        router.replace("/");
        router.refresh();

        return;
      }

      const {
        data,
        error: loginError,
      } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (loginError) {
        throw loginError;
      }

      if (!data.session) {
        throw new Error(
          "Login succeeded but no session was created. Please try again."
        );
      }

      router.replace("/");
      router.refresh();

    } catch (err) {
      setError(
        err?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const { error } =
        await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo:
              `${window.location.origin}/auth/callback`,
          },
        });

      if (error) {
        throw error;
      }
    } catch (err) {
      setError(
        err?.message ||
        "Google sign-in is not available yet."
      );

      setLoading(false);
    }
  }

  return (
    <main className="login-page">

      <div className="login-background">
        <div className="login-orb login-orb-one" />
        <div className="login-orb login-orb-two" />
      </div>

      <section className="login-shell">

        <div className="login-brand">

          <div className="login-logo">
            W
          </div>

          <span>
            WEARWISE
          </span>

        </div>


        <div className="login-card">

          <div className="login-heading">

            <span className="login-eyebrow">
              YOUR PERSONAL STYLE SPACE
            </span>

            <h1>
              {isSignup
                ? "Create your style profile."
                : "Welcome back."}
            </h1>

            <p>
              {isSignup
                ? "Join WearWise and discover a smarter way to dress."
                : "Sign in to continue your WearWise journey."}
            </p>

          </div>


          <div className="login-switcher">

            <button
              type="button"
              className={
                !isSignup
                  ? "login-switch active"
                  : "login-switch"
              }
              onClick={() => {
                setMode("login");
                setError("");
                setMessage("");
              }}
            >
              Sign in
            </button>

            <button
              type="button"
              className={
                isSignup
                  ? "login-switch active"
                  : "login-switch"
              }
              onClick={() => {
                setMode("signup");
                setError("");
                setMessage("");
              }}
            >
              Create account
            </button>

          </div>


          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {isSignup && (
              <div className="login-field">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />

              </div>
            )}


            <div className="login-field">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

            </div>


            <div className="login-field">

              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="••••••••"
                autoComplete={
                  isSignup
                    ? "new-password"
                    : "current-password"
                }
                minLength={6}
                required
              />

            </div>


            {error && (
              <div className="login-message login-error">
                {error}
              </div>
            )}


            {message && (
              <div className="login-message login-success">
                {message}
              </div>
            )}


            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : isSignup
                ? "Create my account"
                : "Sign in"}
            </button>

          </form>


          {!isSignup && (
            <>
              <div className="login-divider">
                <span>OR</span>
              </div>

              <button
                type="button"
                className="google-button"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                <span className="google-icon">
                  G
                </span>

                Continue with Google
              </button>
            </>
          )}


          <div className="login-footer">

            <button
              type="button"
              onClick={() => router.push("/")}
            >
              ← Continue without signing in
            </button>

          </div>

        </div>


        <p className="login-bottom-text">
          WearWise · Your style. Your rules.
        </p>

      </section>

    </main>
  );
}

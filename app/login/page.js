"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const isSignup = mode === "signup";

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (isSignup) {
        const { data, error } =
          await supabase.auth.signUp({
            email,
            password,

            options: {
              data: {
                display_name: displayName,
              },

              emailRedirectTo:
                `${window.location.origin}/auth/callback`,
            },
          });

        if (error) {
          throw error;
        }

        if (data?.session) {
          router.push("/");
          router.refresh();
          return;
        }

        setMessage(
          "Account created. Please check your email to confirm your account."
        );
      } else {
        const { error } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (error) {
          throw error;
        }

        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError(
        err?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
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

          <span>WEARWISE</span>
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
            onSubmit={handleSubmit}
            className="login-form"
          >

            {isSignup && (
              <div className="login-field">

                <label htmlFor="displayName">
                  Name
                </label>

                <input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) =>
                    setDisplayName(e.target.value)
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
                onChange={(e) =>
                  setEmail(e.target.value)
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
                onChange={(e) =>
                  setPassword(e.target.value)
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
          WearWise · Discover your personal style
        </p>

      </section>

    </main>
  );
}

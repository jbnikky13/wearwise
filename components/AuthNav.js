"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase-browser";

export default function AuthNav() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const supabase = createClient();
    let active = true;
    supabase.auth.getUser().then(({ data }) => { if (active) { setUser(data.user || null); setLoading(false); } });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { if (active) { setUser(session?.user || null); setLoading(false); } });
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);
  async function signOut() { const supabase = createClient(); await supabase.auth.signOut(); window.location.href = "/"; }
  if (loading) return <span className="ww-auth-loading">...</span>;
  if (user) return <div className="ww-auth-user"><Link href="/dashboard" className="ww-account">{user.user_metadata?.display_name || user.email?.split("@")[0] || "My account"}</Link><button type="button" className="ww-signout" onClick={signOut}>Sign out</button></div>;
  return <Link href="/login" className="ww-login">Sign in</Link>;
}

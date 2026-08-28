"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase-browser";

const wrap={display:"flex",alignItems:"center",gap:8};
const account={padding:"10px 14px",border:"1px solid #c9c4ba",borderRadius:999,fontSize:12,fontWeight:800,background:"#f4f1eb"};
const signout={padding:"10px 14px",border:0,borderRadius:999,fontSize:11,fontWeight:800,background:"#171714",color:"white",cursor:"pointer"};
export default function AuthNav(){
 const [user,setUser]=useState(null); const [loading,setLoading]=useState(true);
 useEffect(()=>{const supabase=createClient();let active=true;supabase.auth.getUser().then(({data})=>{if(active){setUser(data.user||null);setLoading(false)}});const {data:listener}=supabase.auth.onAuthStateChange((_event,session)=>{if(active){setUser(session?.user||null);setLoading(false)}});return()=>{active=false;listener.subscription.unsubscribe()}},[]);
 async function signOut(){const supabase=createClient();await supabase.auth.signOut();window.location.href="/";}
 if(loading)return <span>…</span>;
 if(user)return <div style={wrap}><Link href="/dashboard" style={account}>{user.user_metadata?.display_name||user.email?.split("@")[0]||"My account"}</Link><button type="button" style={signout} onClick={signOut}>Sign out</button></div>;
 return <Link href="/login" className="ww-login">Sign in</Link>;
}

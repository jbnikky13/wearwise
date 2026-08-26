import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL(
        "/login?error=missing_code",
        requestUrl.origin
      )
    );
  }

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value, options }) => {
              try {
                cookieStore.set(
                  name,
                  value,
                  options
                );
              } catch {
                // Ignore cookie errors during redirect.
              }
            }
          );
        },
      },
    }
  );

  const {
    error,
  } = await supabase.auth.exchangeCodeForSession(
    code
  );

  if (error) {
    console.error(
      "Supabase authentication error:",
      error.message
    );

    return NextResponse.redirect(
      new URL(
        "/login?error=authentication_failed",
        requestUrl.origin
      )
    );
  }

  return NextResponse.redirect(
    new URL("/", requestUrl.origin)
  );
}

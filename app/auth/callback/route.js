import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL("/login?error=missing_code", requestUrl.origin)
    );
  }

  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },

          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(
                ({ name, value, options }) => {
                  cookieStore.set(name, value, options);
                }
              );
            } catch {
              // Ignore cookie errors.
            }
          },
        },
      }
    );

    const { error } =
      await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error(
        "Supabase callback error:",
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
  } catch (error) {
    console.error("Authentication error:", error);

    return NextResponse.redirect(
      new URL(
        "/login?error=server_error",
        requestUrl.origin
      )
    );
  }
}

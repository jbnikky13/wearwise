import { NextResponse } from "next/server";
import { createClient } from "../../../../lib/supabase-server";

export async function GET(request) {
  const requestUrl = new URL(request.url);

  const code =
    requestUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL(
        "/login?error=missing_code",
        requestUrl.origin
      )
    );
  }

  try {
    const supabase = await createClient();

    const { error } =
      await supabase.auth.exchangeCodeForSession(
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

  } catch (error) {
    console.error(
      "Authentication callback error:",
      error
    );

    return NextResponse.redirect(
      new URL(
        "/login?error=server_error",
        requestUrl.origin
      )
    );
  }
}

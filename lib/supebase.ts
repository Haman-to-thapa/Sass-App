import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";



export const createSupabaseClient = () => {
  return createClient(
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
   process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      async accessToken() {
       const { getToken } = await auth();
        return await getToken();
      },
    }
  )
}
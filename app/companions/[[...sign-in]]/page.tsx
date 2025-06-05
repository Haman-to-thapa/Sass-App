// app/sign-in/[[...sign-in]]/page.tsx (or pages/sign-in/[[...sign-in]].tsx)
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn redirectUrl="/dashboard" />;
}

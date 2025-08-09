import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


export default function AdminPage() {
  if (!PUBLISHABLE_KEY) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <article className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-semibold">Admin auth not configured</h1>
          <p className="text-muted-foreground">
            Missing Clerk publishable key. Provide VITE_CLERK_PUBLISHABLE_KEY or ask us to switch to Supabase Auth.
          </p>
        </article>
      </main>
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="p-6">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}

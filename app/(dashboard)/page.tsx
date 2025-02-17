"use client";
import { useAuth, RedirectToSignIn, UserButton } from "@clerk/nextjs";

const LandingPage = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <p>Loading...</p>;
  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <div>
      <h1>This is a screen for authenticated users only.</h1>
      <UserButton />
    </div>
  );
};

export default LandingPage;

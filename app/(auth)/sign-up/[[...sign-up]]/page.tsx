import { SignUp, SignedIn, SignedOut } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <>
      <SignedOut>
        <SignUp />
      </SignedOut>
      <SignedIn>
        {/* Optionally, show a message or redirect */}
      </SignedIn>
    </>
  )
}

export default SignUpPage
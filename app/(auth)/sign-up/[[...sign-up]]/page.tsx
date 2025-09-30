import { SignUp, SignIn, SignedIn, SignedOut } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <>
      <SignedOut>
        <SignUp />
      </SignedOut>
      <SignedIn>
        <SignIn />
      </SignedIn>
    </>
  )
}

export default SignUpPage
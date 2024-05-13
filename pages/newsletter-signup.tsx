import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import SignupForm from "@/components/SignupForm";

export default function NewsletterSignup() {
  return (
    <Container>
      <Main>
        <Title>NewsletterSignup Page</Title>
        <SignupForm />
      </Main>
    </Container>
  );
}

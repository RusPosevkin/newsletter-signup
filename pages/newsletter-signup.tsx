import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import SignupForm from "@/components/SignupForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsletterSignup() {
  return (
    <Container>
      <Header />
      <Main>
        <Title>Subscribe to our newsletter</Title>
        <SignupForm />
      </Main>
      <Footer />
    </Container>
  );
}

import { Container, Main, TitleAdaptive } from '@/components/sharedstyles';
import SignupForm from '@/components/SignupForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewsletterSignup() {
  return (
    <Container>
      <Header />
      <Main>
        <TitleAdaptive>Subscribe to our newsletter</TitleAdaptive>
        <SignupForm />
      </Main>
      <Footer />
    </Container>
  );
}

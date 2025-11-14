import { Container, Main, TitleAdaptive } from '@/components/sharedstyles';
import SignupForm from '@/components/SignupForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GetServerSideProps } from 'next';
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GET_COUNTRY } from '@/queries';

export const getServerSideProps = (async () => {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
  });

  const { data, loading } = await client.query({
    query: GET_COUNTRY
  });

  const {
    country: {
      languages
    }
  } = data;

  const countryTitles = languages.map((data: { name: string, code: string }) => data.name);

  return {
    props: {
      films: {
        data: countryTitles,
        loading
      }
    }
  }
}) satisfies GetServerSideProps<{ films: FilmsData }>

export default function NewsletterSignup({ films }: { films: FilmsData }) {
  return (
    <Container>
      <Header />
      <Main>
        <TitleAdaptive>Subscribe to our newsletter</TitleAdaptive>
        <SignupForm films={films} />
      </Main>
      <Footer />
    </Container>
  );
}

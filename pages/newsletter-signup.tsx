import { Container, Main, TitleAdaptive } from '@/components/sharedstyles';
import SignupForm from '@/components/SignupForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GetServerSideProps } from 'next';
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GET_FILMS } from '@/queries';

export const getServerSideProps = (async () => {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });

  const { data, loading } = await client.query({
    query: GET_FILMS
  });

  const {
    allFilms: {
      films
    }
  } = data;

  const filmsTitles = films.map((film: { title: string }) => film.title);

  return {
    props: {
      films: {
        data: filmsTitles,
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

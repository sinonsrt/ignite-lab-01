import { getAccessToken, getSession, useUser } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';
import { json } from 'stream/consumers';

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getAccessToken(req, res);
  const session = getSession(req, res);
  console.log({ token, session });
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      },
    };
  }
};

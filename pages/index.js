import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/widget';
import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/quizbackground';

/* const BackgroundImage = styled.div`
  background-image :url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position:center;
` */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno do usestate', name, setName);
  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>MatheusQuiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Programming</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={
              function (infosDoEvent) {
                infosDoEvent.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('fazendo uma submissao');
              }
            }
            >
              <input
                placeholder="Nome"
                onChange={function (infosDoEvent) {
                  setName(infosDoEvent.target.value);
                  // console.log(infosDoEvent.target.value);
                }}
              />
              <button disabled={name.length === 0} type="submit">
                Jogar
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>

          <Widget.Header>
            <h1>Titulo 2</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Outro texto</p>
          </Widget.Content>

        </Widget>
        <Footer />
        <GitHubCorner />
      </QuizContainer>
    </QuizBackground>
  );
}

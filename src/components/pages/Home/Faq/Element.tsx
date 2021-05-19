import * as React from 'react';

interface IHomeFaqElementProps {
  data: { question: string; answer: string };
}

const HomeFaqElement: React.FunctionComponent<IHomeFaqElementProps> = ({
  data: { question, answer },
}) => (
  <div>
    <h4> {question} </h4>
    <p> {answer} </p>
  </div>
);

export default HomeFaqElement;

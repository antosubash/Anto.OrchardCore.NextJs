import React from "react";
import { gql, useQuery } from "@apollo/client";

interface Props {}

const LanguagesQuery = gql`
  query Languages {
    language {
      code
      createdUtc
      displayText
      modifiedUtc
      name
    }
  }
`;

const Languages = (props: Props) => {
  const { loading, error, data } = useQuery(LanguagesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.language.map((lang: any) => (
    <div key={lang.code}>
      <p>{lang.name}</p>
    </div>
  ));
};

export default Languages;

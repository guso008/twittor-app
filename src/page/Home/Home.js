import React, { useState, useEffect } from "react";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import { getTweetsFollowerApi } from "../../api/tweet";

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogin } = props;
  const [tweets, setTweets] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    getTweetsFollowerApi(page).then((response) => {
      console.log(response);
    });
  }, [page]);

  return (
    <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
      <div className="home__title">
        <h2>Inicio</h2>
      </div>
      <p>Lista de Tweets</p>
      <p>Cargar mas Tweets</p>
    </BasicLayout>
  );
}

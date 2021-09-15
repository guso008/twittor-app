import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvatar from "../../components/User/BannerAvatar/BannerAvatar";
import InfoUser from "../../components/User/InfoUser/InfoUser";
import ListTweets from "../../components/ListTweets";
import { getUserApi } from "../../api/user";
import { getUserTweetApi } from "../../api/tweet";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null);
  const { params } = match;
  const loggedUser = useAuth();

  console.log(tweets);

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) toast.error("El usuario que has visitado no existe");
      })
      .catch(() => {
        toast.error("El usuario que has visitado no existe");
      });
  }, [params]);

  useEffect(() => {
    getUserTweetApi(params.id, 1)
      .then((response) => {
        setTweets(response);
      })
      .catch(() => {
        setTweets([]);
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
        </h2>
      </div>
      <BannerAvatar user={user} loggedUser={loggedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">
        <h3>Tweets</h3>
        {tweets && <ListTweets tweets={tweets}></ListTweets>}
      </div>
    </BasicLayout>
  );
}

export default withRouter(User);

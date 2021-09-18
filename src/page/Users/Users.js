import React, { useState, useEffect } from "react";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { isEmpty } from "lodash";
import BasicLayout from "../../layout/BasicLayout";
import ListUsers from "../../components/ListUsers/ListUsers";
import { getFollowsApi } from "../../api/follow";

import "./Users.scss";

function Users(props) {
  const { setRefreshCheckLogin, location } = props;
  const [users, setUsers] = useState(null);
  const params = useUsersQuery(location);

  console.log(params);

  useEffect(() => {
    getFollowsApi(queryString.stringify(params))
      .then((response) => {
        if (isEmpty(response)) {
          setUsers([]);
        } else {
          setUsers(response);
        }
      })
      .catch(() => {
        setUsers([]);
      });
  }, []);

  return (
    <BasicLayout
      className="users"
      title="Usuarios"
      setRefreshCheckLogin={setRefreshCheckLogin}
    >
      <div className="users__title">
        <h2>Users</h2>
        <input type="text" placeholder="Busca un usario" />
      </div>
      <ButtonGroup className="users__options">
        <Button className="active">Siguiendo</Button>
        <Button>Nuevos</Button>
      </ButtonGroup>

      {!users ? (
        <div className="users__loading">
          <Spinner animation="border" variant="info" />
          Buscando usuarios
        </div>
      ) : (
        <ListUsers users={users} />
      )}
    </BasicLayout>
  );
}

function useUsersQuery(location) {
  const {
    page = 1,
    type = "follow",
    search,
  } = queryString.parse(location.search);

  return { page, type, search };
}

export default withRouter(Users);

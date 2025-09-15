import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return;
  }

  return (
    <div>
      <h2>Perfil</h2>
      <img src={user.picture} alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        sing out
      </button>
    </div>
  );
}

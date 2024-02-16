import { redirect } from "react-router-dom";

function getAuthToken() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return null;
  }

  return token;
}

export function getId() {
  const id = localStorage.getItem("id");
  if (!id) {
    return null;
  }
  return id;
}

export function tokenLoader() {
  const accessToken = getAuthToken();
  const id = getId();

  return { accessToken: accessToken, id: id };
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}

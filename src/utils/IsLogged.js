import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../connection/firebase";

const IsLogged = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (!user) return navigate("/")
  }, [user, loading])

  return [user, loading]
}

export default IsLogged;
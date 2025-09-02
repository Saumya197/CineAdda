import React from "react";
import { GOOGLE_CLIENT_ID } from "../../config.public";

// Do NOT use client secret on frontend.

export default function GoogleAuthUserReg() {
  if (!GOOGLE_CLIENT_ID) {
    return <p style={{ color: "#888" }}>Google Sign-In temporarily disabled</p>;
  }
  // Put your Google sign-in components here when you add a real client ID locally
  return <div>Google Sign-In goes here</div>;
}
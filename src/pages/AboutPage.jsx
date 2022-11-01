import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h3>About Page</h3>
      <p>This is an App to review a product or service</p>
      <p>Version 1.0.0</p>
      <Link to="/">Return to Home Page</Link>
    </Card>
  );
}

export default AboutPage;

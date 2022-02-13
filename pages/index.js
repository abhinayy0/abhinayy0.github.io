import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { useEffect, useState } from "react";

export default function Home() {
  let token = "";
  const repositories = getLatestRepos(userData, token);
  const [repos, setRepos] = useState(false);
  //
  useEffect(() => {
    // Update the document title using the browser API

    setRepos(repositories);
  });

  return (
    <ContainerBlock
      title="Abhinay Yadav - Developer, Tech Enthusiast"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      <FavouriteProjects />
      {repos && <LatestCode repositories={repos} />}
    </ContainerBlock>
  );
}

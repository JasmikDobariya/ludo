import type { NextPage } from "next";
import { DefaultLayout } from "@/components/layout/defaultLayout";
import Landing from "@/components/landing/landing";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Landing />
    </DefaultLayout>
  );
};

export default Home;

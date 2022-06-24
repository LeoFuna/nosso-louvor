import Head from "next/head";


interface AppLayoutInterface {
  title: string,
}

function AppLayout({
  title,
}: AppLayoutInterface) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}

export default AppLayout;
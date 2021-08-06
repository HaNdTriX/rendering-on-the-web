import Page from "../components/Page";
import { useRouter } from "next/router";
import { generateLoremCollection } from "../helper/lorem";

export function getStaticProps() {
  return {
    props: {
      data: generateLoremCollection(),
    },
    // The following line enabled iSSG
    revalidate: 2000,
  };
}

export default function IncrementalStaticSiteGenerationPage({ data }) {
  const { isFallback } = useRouter();
  return (
    <Page
      title="incremental Static Site Generation"
      swimlane={{
        url: "https://swimlanes.io/u/AKUyrhfe3",
        src: "https://static.swimlanes.io/f0d6f5f18c2c7a70b56277219ef1f529.png",
        width: 1300,
        height: 711,
      }}
      description={
        <>
          <p>
            Here we render our HTML code at build time and off thread at runtime
            then we hydrate the markup from the server on the client at runtime.
          </p>

          <p>
            <strong>Fallback (stale) Page:</strong> {isFallback ? "yes" : "no"}
          </p>
        </>
      }
      data={data}
    ></Page>
  );
}

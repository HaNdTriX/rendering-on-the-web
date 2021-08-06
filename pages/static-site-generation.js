import Page from "../components/Page";
import { generateLoremCollection } from "../helper/lorem";

export function getStaticProps() {
  return {
    props: {
      data: generateLoremCollection(),
    },
  };
}

export default function StaticSiteGenerationPage({ data }) {
  return (
    <Page
      title="Static Site Generation"
      swimlane={{
        url: "https://swimlanes.io/#ZY1BDoIwEEX3PcUstUEP0IULYeNCTeAAlMBHm5AWpxWvb1EhopuZZP6b/4TjBqwow4DO9eCECvAw7jQ7JbRn9/BgIUyrKC1yWpVSpp2BDVSYAMphY4GxFynLtaDpgTa7sUDRwZpgqi5ytzt8iEQ8j+kHVNFnmxj73lmPZcPM6BxVHbLzccsvn/7mJpVuEeqr/lUtembkX/fNMd4eEecT",
        src: "https://static.swimlanes.io/8af0c2ec87fc69f9c2207821a48ef371.png",
        width: 1406,
        height: 577,
      }}
      description={
        <p>
          Here we render our HTML code at build time using a modern framework
          and hydrate the markup from the server on the client at runtime.
        </p>
      }
      data={data}
    ></Page>
  );
}

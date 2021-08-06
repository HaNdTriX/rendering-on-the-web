import Page from "../components/Page";
import { generateLoremCollection } from "../helper/lorem";

export function getServerSideProps() {
  return {
    props: {
      data: generateLoremCollection(),
    },
  };
}

export default function ServerSideRenderingPage() {
  return (
    <Page
      title="Server Side Renderin"
      swimlane={{
        url: "https://swimlanes.io/u/pywdtbj2D",
        src: "https://static.swimlanes.io/0b110159f638db524478b01d9ba61f10.png",
        width: 1300,
        height: 711,
      }}
      description={
        <p>
          Here we render our HTML code on the server using a modern JavaScript
          framework (React.js) and hydrate the markup from the server on the
          client at runtime.
        </p>
      }
    ></Page>
  );
}

import Page from "../components/Page";
import { generateLoremCollection } from "../helper/lorem";

export function getServerSideProps() {
  return {
    props: {
      data: generateLoremCollection(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

export default function ServerSideRenderingPage() {
  return (
    <Page
      title="Server Side Rendering Traditional"
      swimlane={{
        url: "https://swimlanes.io/#XY7BCsIwDIbP9ily1KI+QA8edAgeVFi8b8NFKYx2pnV7fdNtMvEUyP/n++K5JjaQUUeNb4nXgMRdmofssoY9+z4QK6XswwBiDstC67ECaGuCnJwQrHtqXawUfC9gs0sEAydno60a6b3eFKJayDaFI8PA0XNfcT3nE/ynUuZU3WN2PaN8yVsejDePMWlLcc4ngxKlILzQehdI4sk4ffaffwA=",
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

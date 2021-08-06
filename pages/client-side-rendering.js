import useIsServer from "../helper/useIsServer";
import Page from "../components/Page";
import useSWR from "swr";

export default function ClientSideRenderationPage({ content }) {
  const isServer = useIsServer();
  const { data } = useSWR("/api/lorem");

  if (isServer) {
    // We are cheating heade since Next.js will still call
    // ReactDOM.hydrate instead of ReactDOM.render. Nevertheless
    // we get damn close to real CSR since the content of this component
    // will be rendered after mount.
    return null;
  }

  return (
    <Page
      title="Client Side Rendering"
      swimlane={{
        url: "https://swimlanes.io/#ZY1BDoIwEEX3PcUstUEP0IULYeNCTeAAlMBHm5AWpxWvb1EhopuZZP6b/4TjBqwow4DO9eCECvAw7jQ7JbRn9/BgIUyrKC1yWpVSpp2BDVSYAMphY4GxFynLtaDpgTa7sUDRwZpgqi5ytzt8iEQ8j+kHVNFnmxj73lmPZcPM6BxVHbLzccsvn/7mJpVuEeqr/lUtembkX/fNMd4eEecT",
        src: "https://static.swimlanes.io/162199bec6fb2818f4e84d5a535debae.png",
        width: 1208,
        height: 488,
      }}
      description={
        <p>
          Here we render our HTML code at build time using a modern framework
          and hydrate the markup from the server on the client at runtime.
        </p>
      }
      data={data}
    />
  );
}

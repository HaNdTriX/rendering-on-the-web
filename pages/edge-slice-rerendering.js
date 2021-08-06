import Page from "../components/Page";

export default function EdgeSideRerenderingPage() {
  // Not yet implemented since this technologie is
  // close source. Lets wait for better technologies (maybe Server Components?)
  return (
    <Page
      title="Edge Slice Rerendering"
      swimlane={{
        url: "https://swimlanes.io/u/ubfxqMMBm",
        src: "https://static.swimlanes.io/8af0c2ec87fc69f9c2207821a48ef371.png",
        width: 1406,
        height: 635,
      }}
      description={
        <>
          <p>
            Here we render our HTML code at build time and then modify this
            document on a CDN.
          </p>
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/ylRpAG4OzxY"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </>
      }
    />
  );
}

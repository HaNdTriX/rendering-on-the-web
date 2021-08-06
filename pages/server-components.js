import Page from "../components/Page";

export default function ServerComponentsPage() {
  return (
    <Page
      title="Server Components"
      description={
        <>
          <p>WIP...</p>
          <p>
            <ul>
              <li>
                <a
                  href="https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/blog/everything-about-react-server-components"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel Statements
                </a>
              </li>
              <li>
                <a
                  href="https://next-server-components.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vercel/next-server-components"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </li>
            </ul>
          </p>
        </>
      }
    ></Page>
  );
}

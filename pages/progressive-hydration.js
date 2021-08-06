import Page from "../components/Page";

export default function ProgressiveHydrationPage() {
  return (
    <Page
      title="Progressive Hydration"
      description={
        <>
          <p>
            Only Hydrate what the user needs. React 18 (Suspense) will be able
            to capture events on non hydrated components due to React Fiber.
          </p>
          <p>
            <ul>
              <li>
                <a
                  href="https://codesandbox.io/s/heuristic-resonance-mt5lv"
                  target="_blank"
                  rel="noreferrer"
                >
                  Example
                </a>
              </li>
              <li>
                <a
                  href="https://addyosmani.com/blog/rehydration/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Background Infos
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@luke_schmuke/how-we-achieved-the-best-web-performance-with-partial-hydration-20fab9c808d5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discusstion
                </a>
              </li>
            </ul>
          </p>
        </>
      }
    ></Page>
  );
}

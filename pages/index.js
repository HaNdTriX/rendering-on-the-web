import Page from "../components/Page";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Page
      title="Introduction"
      swimlane={{
        url: "https://swimlanes.io/#3VbLUsIwFF3br7hL6Agf0IULwecIzlD3NiYXiIYEkwDy96ZNn6B1RgcZ3bTT5OQ+zrn3ppZbgRFMUDLUXM5gw+0cxvhm+88mCJR2yxEMcY1CLVGfQox6nb4Hw/EpnGu1MaiDgE8jGMQT6DyG4UBwlBZibrGyG4aP3QAqQ9A7S02kppdCbQEXS7uF64fRHQwVbUNSb54qhkGvF0GoV9LyBUahO5UHVJ65kdxyIlwcrys01iHccrqbAyOXj2Ru2yyVNNi0UGKSCRJqh/ejvs7ySeq4wlUyRUvnya6rhp0Ssu+ujtPo/QTu6bmN46uM29gSy6nn9golavep5Efklh+18L12eRIPKrapMkkb2R6KzCvDjqgMCuPqNMzKc75leeKfMVgp5rF4DMl8O3jSnWTsi3bwwJJN489lbB6K9JOc88L1pdIbolm1nwdfg9SK6eNaqo5kLnf765+pzIvO5JJqXDgpHL2/0aXfq5a9fobOlAjxROhL63g+RGsbRxW6iJqlUUttgjNPHtZMFeXVwK2J4CzFdZ5WXLBuVbhFTANC51jqC3+v0C7ycXLBZljcrbptnBz5Ami769MUBFkwArfxDydXtlkwAZ2VSf9hKgem+79Gzjs=",
        src: "https://static.swimlanes.io/d3f62369438be32bbed34e66f05de46e.png",
        width: 1300,
        height: 3258,
      }}
      description={
        <>
          <p className="text-sm mb-3">
            Over the past years JavaScript frameworks have created new patterns
            for rendering to achieve the optimal performance for page rendering.
            This guide tries to explain the different patterns and discuss their
            pros and cons using Next.js.
          </p>

          <ul className="space-y-3">
            <li>
              <Link href="/client-side-rendering" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Client Side Rendering (CSR)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/server-side-rendering" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Server Side Rendering (SSR)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/server-side-traditional" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Server Side Rendering Traditional (SSR)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/static-site-generation" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Static Site Generation (SSG)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/incremental-static-site-generation" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  incremental Static Site Generation (iSSG)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/edge-side-rerendering" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edge Slice Rerendering (ESR)
                </a>
              </Link>
            </li>
            <li>
              <Link href="/server-components" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Server Components
                </a>
              </Link>
            </li>
            <li>
              <Link href="/progressive-hydration" passHref>
                <a className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Progressive Hydration
                </a>
              </Link>
            </li>
          </ul>
        </>
      }
    ></Page>
  );
}

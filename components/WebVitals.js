import { useEffect, useState } from "react";
import { getLCP, getFID, getCLS, getTTFB, getFCP } from "web-vitals";
import classnames from "clsx";

export default function WebVitals() {
  const [LCP, setLCP] = useState({});
  const [FID, setFID] = useState({});
  const [CLS, setCLS] = useState({});
  const [TTFB, setTTFB] = useState({});
  const [FCP, setFCP] = useState({});

  useEffect(() => {
    getLCP(setLCP);
    getFID(setFID);
    getCLS(setCLS);
    getTTFB(setTTFB);
    getFCP(setFCP);
  }, []);

  return (
    <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900">
          <a
            href="https://web.dev/time-to-first-byte/"
            target="_blank"
            rel="noreferrer"
          >
            Time to First Byte <br /> (TTFB)
          </a>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            className={classnames(
              "flex items-baseline text-2xl font-semibold",
              {
                "text-green-500": TTFB.value <= 300,
                "text-red-500": TTFB.value > 300,
              }
            )}
          >
            {typeof TTFB.value !== "undefined" ? TTFB.value.toFixed(1) : "..."}
            <span className="ml-2 text-sm font-medium text-gray-500">ms</span>
          </div>
        </dd>
      </div>

      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900">
          <a href="https://web.dev/fcp/" target="_blank" rel="noreferrer">
            First Contentful Paint <br />
            (FCP)
          </a>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            className={classnames(
              "flex items-baseline text-2xl font-semibold",
              {
                "text-green-500": FCP.value <= 1800,
                "text-amber-500": FCP.value >= 1800 && FCP.value >= 3000,
                "text-red-500": FCP.value > 3000,
              }
            )}
          >
            {typeof FCP.value !== "undefined" ? FCP.value.toFixed(1) : "..."}
            <span className="ml-2 text-sm font-medium text-gray-500">ms</span>
          </div>
        </dd>
      </div>

      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900">
          <a href="https://web.dev/lcp/" target="_blank" rel="noreferrer">
            Largest Contentful Paint (LCP)
          </a>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            className={classnames(
              "flex items-baseline text-2xl font-semibold",
              {
                "text-green-500": LCP.value <= 2500,
                "text-amber-500": LCP.value >= 2500 && LCP.value >= 4000,
                "text-red-500": LCP.value > 4000,
              }
            )}
          >
            {typeof LCP.value !== "undefined" ? LCP.value.toFixed(2) : "..."}
            <span className="ml-2 text-sm font-medium text-gray-500">ms</span>
          </div>
        </dd>
      </div>

      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900">
          <a href="https://web.dev/fid/" target="_blank" rel="noreferrer">
            First Input Delay <br /> (FID)
          </a>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            className={classnames(
              "flex items-baseline text-2xl font-semibold",
              {
                "text-green-500": FID.value <= 100,
                "text-amber-500": FID.value >= 100 && FID.value >= 300,
                "text-red-500": FID.value > 300,
              }
            )}
          >
            {typeof FID.value !== "undefined" ? FID.value.toFixed(2) : "..."}
            <span className="ml-2 text-sm font-medium text-gray-500">ms</span>
          </div>
        </dd>
      </div>

      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900">
          <a href="https://web.dev/cls/" target="_blank" rel="noreferrer">
            Cumulative Layout Shift (CLS)
          </a>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            className={classnames(
              "flex items-baseline text-2xl font-semibold",
              {
                "text-green-500": CLS.value <= 0.1,
                "text-amber-500": CLS.value >= 0.1 && CLS.value >= 0.25,
                "text-red-500": CLS.value > 0.25,
              }
            )}
          >
            {typeof CLS.value !== "undefined" ? CLS.value.toFixed(6) : "..."}
            <span className="ml-2 text-sm font-medium text-gray-500">ms</span>
          </div>
        </dd>
      </div>
    </dl>
  );
}

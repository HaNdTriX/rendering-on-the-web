import Head from "next/head";
import Link from "next/link";
import Counter from "./Counter";
import Swimlane from "./Swimlane";
import WebVitals from "./WebVitals";

export default function Page({ title, swimlane, description, data, children }) {
  return (
    <div className="relative text-lg max-w-prose mx-auto">
      <Head>
        <title>{title} | Rendering on the web</title>
      </Head>
      <div className="px-3 space-y-6 my-12">
        <h1 className="mb-8">
          <Link href="/" passHref>
            <a className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Rendering on the web
            </a>
          </Link>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </span>
        </h1>

        <section>
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-3">
            Description
          </h2>
          {description && (
            <div className="prose prose-indigo prose-lg">{description}</div>
          )}
        </section>

        {swimlane && (
          <section>
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-3">
              Swimlane
            </h2>
            <Swimlane
              title={title}
              src={swimlane.src}
              url={swimlane.url}
              width={swimlane.width}
              height={swimlane.height}
            />
          </section>
        )}

        <section>
          <h2 className="text-lg mb-3 leading-6 font-medium text-gray-900">
            Counter
          </h2>
          <Counter />
        </section>

        <section>
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-3">
            Web Vitals
          </h2>
          <WebVitals />
        </section>

        {data && (
          <section>
            <h2 className="text-lg mb-3 leading-6 font-medium text-gray-900">
              Content
            </h2>
            <div className="prose prose-indigo prose-lg">
              {data && data.map((p) => <p key={p.id}>{p.content}</p>)}
            </div>
          </section>
        )}

        {children}
      </div>
    </div>
  );
}

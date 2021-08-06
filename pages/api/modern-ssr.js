import ReactDOM from "react-dom/server";

export default function handleModernSSR(req, res) {
  let responseBody =
    "<!doctype html>" +
    ReactDOM.renderToStaticMarkup(
      <html>
        <body>
          <h1>Modern Server Side Rendering</h1>
          <p>
            Here we render our HTML code on the server using a modern JavaScript
            framework (React.js).
          </p>
        </body>
      </html>
    );

  res.status(200).setHeader("Content-Type", "text/html").send(responseBody);
}

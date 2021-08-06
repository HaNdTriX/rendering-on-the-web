export default function handleModernSSR(req, res) {
  const content = `Here we just do some very simple string concatnation on the Server and send it to the client.`;

  let responseBody = "<!doctype html>\n";
  responseBody += "<html>\n";
  responseBody += "  <body>\n";
  responseBody += "    <h1>Tranditional Server Side Rendering</h1>\n";
  responseBody += `    <p>${content}</p>\n`;
  responseBody += "  </body>\n";
  responseBody += "<html>\n";

  res.status(200).setHeader("Content-Type", "text/html").send(responseBody);
}

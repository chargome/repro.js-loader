import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "<DSN>",
  sendDefaultPii: true,
});

console.log(
  Object.keys(Sentry)
    .filter(
      (key) =>
        key == "getClient" ||
        key == "onLoad" ||
        key == "addEventProcessor" ||
        key == "setContext" ||
        key == "setTag"
    )
    .map((key) => [key, typeof Sentry[key]])
);

window.Sentry = Sentry;

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

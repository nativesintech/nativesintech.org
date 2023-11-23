export const convertHandleToLink = (str: string): string => {
  return str.replace(
    /(@\w+)/gi,
    (h) =>
      `<a
        class="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/${h}"
        >
        ${h}
      </a>&nbsp;`
  );
};

export const convertUrlToLink = (str: string): string => {
  return str.replace(
    /(https:\/\/\w+\.(com|ly)\/\w+)/g,
    (u) =>
      `<a class="a" target="_blank" rel="noopener noreferrer" href="${u}">${u}</a>`
  );
};

export const convertEmailToLink = (str: string): string => {
  /**
   * Email Regex from: https://www.emailregex.com/
   */
  return str.replace(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
    (e) => `<a class="a" href="mailto:${e}">${e}</a>`
  );
};

export const convertStrToJsx =
  (converter: (str: string) => string) =>
  (str: string): JSX.Element =>
    <p className="p" dangerouslySetInnerHTML={{ __html: converter(str) }} />;

export const convertScheduleToJsx = (str: string): Array<JSX.Element> => {
  return str.split("|").map((v, i) => {
    const h = convertHandleToLink(v);
    return <li key={i} dangerouslySetInnerHTML={{ __html: h }} />;
  });
};

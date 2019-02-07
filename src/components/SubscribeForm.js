import React from "react";

import * as Styles from "./FormStyles";

export default () => {
  return (
    <div className={Styles.wrapper}>
      <form
        action="https://twitter.us7.list-manage.com/subscribe/post?u=6872107ebdd9e6f7b3cb9190f&amp;id=277436fefe"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <h2 className={Styles.header}>Join our mailing list</h2>
          <p className={Styles.paragraph}>
            Get the latest news from Natives in Tech. No spam. Unsubscribe at
            any time.
          </p>
          <div className="indicates-required" />
          <div className="mc-field-group">
            <input
              type="email"
              placeholder="Email"
              name="EMAIL"
              className={Styles.input}
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" />
            <div className="response" id="mce-success-response" />
          </div>
          <div aria-hidden="true">
            <input
              type="text"
              name="b_6872107ebdd9e6f7b3cb9190f_277436fefe"
              tabIndex="-1"
              className={Styles.hiddenInput}
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={Styles.button}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

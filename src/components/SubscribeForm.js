import React from "react";
import { css } from "emotion";

const wrapper = css`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 3px;
`;

const paragraph = css`
  margin: 8px 0;
  font-size: 18px;
`;

const input = css`
  border-radius: 2px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
  padding: 8px;
  color: #212121;
`;

const hiddenInput = css`
  visibility: hidden;
`;

const button = css`
  font-size: 18px;
  border: 2px solid #ff5252;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 3px;
  background-color: #ff5252;
  font-weight: 700;
  cursor: pointer;
  color: #fafafa;

  &:hover {
    background-color: #fafafa;
    color: #ff5252;
  }
`;

export default () => {
  return (
    <div className={wrapper}>
      <form
        action="https://twitter.us7.list-manage.com/subscribe/post?u=6872107ebdd9e6f7b3cb9190f&amp;id=277436fefe"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <h2>Join our mailing list</h2>
          <p className={paragraph}>
            Get the latest news from Natives in Tech. No spam. Unsubscribe at
            any time.
          </p>
          <div className="indicates-required" />
          <div className="mc-field-group">
            <input
              type="email"
              placeholder="Email"
              name="EMAIL"
              className={input}
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
              value=""
              className={hiddenInput}
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={button}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

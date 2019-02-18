import React from "react";
import { css } from "emotion";

export const wrapper = css`
  border: 1px solid #e0e0e0;
  padding: 24px;
  border-radius: 4px;
`;

export const header = css`
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const paragraph = css`
  margin: 8px 0;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const input = css`
  border-radius: 2px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
  padding: 8px;
  color: #212121;
  width: 100%;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const hiddenInput = css`
  visibility: hidden;
`;

const color = "#23c7c5";

export const button = css`
  font-size: 18px;
  border: 2px solid ${color};
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 3px;
  background-color: ${color};
  font-weight: 700;
  cursor: pointer;
  color: #fff !important;
  box-shadow: none;

  &:hover {
    background-color: #fff;
    color: ${color} !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

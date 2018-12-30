type selector = string;

[@bs.deriving abstract]
type options = {
  strings: array(string),
  typeSpeed: int,
  backSpeed: int,
  loop: bool,
  backDelay: int,
};

[@bs.module "typed.js"] [@bs.new]
external create: (selector, options) => unit = "default";

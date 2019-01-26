[@bs.module "../../../../src/components/SubscribeForm.js"]
external subscribeForm: ReasonReact.reactClass = "default";

let make = _children =>
  ReasonReact.wrapJsForReason(
    ~reactClass=subscribeForm,
    ~props=Js.Obj.empty(),
    [||],
  );

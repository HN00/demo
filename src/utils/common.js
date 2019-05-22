import moment from "moment";
import { DATETIME_FORMAT } from "../constants/appSettings";

export const jsonFromUrlParams = search => {
  if (!search) return {};

  search = search.replace("?", "");

  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

export const roundUSD = value => {
  return Math.round(value * 100) / 100;
};

export const formatDate = value => {
  return moment(value).format(DATETIME_FORMAT);
};

export const getBrowserName = () => {
  let isOpera =
    (!!window.opr && !!window.opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0;
  if (isOpera) return "Opera";

  let isFirefox = typeof InstallTrigger !== "undefined";
  if (isFirefox) return "Firefox";

  let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) return "Safari";

  let isIE = /*@cc_on!@*/ false || !!document.documentMode;
  if (isIE) return "Internet Explorer";

  let isEdge = !isIE && !!window.StyleMedia;
  if (isEdge) return "Microsoft Edge";

  let isChrome = !!window.chrome && !!window.chrome.webstore;
  if (isChrome) return "Google Chrome";

  return "Unknown";
};

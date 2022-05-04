<!-- //1
  SELECT_TIME_FORM: "SELECT_TIME_FORM",
  //2
  SHOW_CART_CHECK_OUT_FORM: "SHOW_CART_CHECK_OUT_FORM",
  //3
  OPT_AUTHENTICATION_PHONE_NUMBER_FORM: "OPT_AUTHENTICATION_PHONE_NUMBER_FORM",
  OPT_AUTHENTICATION_OTP_INPUT_FORM: "OPT_AUTHENTICATION_OTP_INPUT_FORM",

  //4
  PERSONAL_DETAIL_FORM: "PERSONAL_DETAIL_FORM",
  PERSONAL_DETAIL_REASON_EXTRA_FORM: "PERSONAL_DETAIL_REASON_EXTRA_FORM",
  SHOW_CART_SERVICE_DETAIL_BY_SERVICE_SELECTED:
    "SHOW_CART_SERVICE_DETAIL_BY_SERVICE_SELECTED",

  //5
  SHOW_PAYMENT_FORM: "SHOW_PAYMENT_FORM",
  SHOW_SELECT_PAYMENT_METHOD_FORM: "SHOW_SELECT_PAYMENT_METHOD_FORM",
  //6
  SUCCESS_FORM: "SUCCESS_FORM",

  //back to screen profile
  BACK_TO_SCREEN_PROFILE: "BACK_TO_SCREEN_PROFILE",

 -->

# Feature "Save Patient Info if not Confirm Booking" Estimate: (7 days)

### save data: (2 days)
   1. change step booking
   2. reload or close page
   <!-- 3. when fill input info -->

### clear data: (0,5 days)
   1. booking success appointment
   2. click book now another profile

### show step checkout flow: (2,5 days)

   1. user is the choose time form 
   => booking widget show form select time 

   2. user is the OTP form 
   => show OTP input form 

   3. user is the cart select form
   => show cart select form 

   4. user is personal detail form
   => show personal detail form 

   5. user is payment form 
   => show payment form 

   6. user is select payment form 
   => show select payment form 


### testing & fix bug (2 days)
<!-- 
### solution:
1. when change step save data to:
   - redux store: handle data booking widget
   - local storage: handle data case user reload page -->


<!-- *


const forumLoginId = "LOGIN_FORUM_IFRAME_ID";
const buttonLoginId = "BUTTON_LOGIN_ID";
const loginForumButtonCloseId = "LOGIN_FORUM_BUTTON_CLOSE_ID";
const closeIframeMessage = "close_iframe";

const iframeForumLoginStyle = {
  width: "100vw",
  height: "100vh",
  color: "white",
  overFlow: "hidden",
  position: "fixed",
  top: "64px",
  left: 0,
  border: "none",
  zIndex: 1,
};

const LANGUAGE_OPTION = {
  VI: "vi",
  EN: "en",
};

const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const getSourceByLanguage = (language) => {
  switch (language) {
    case LANGUAGE_OPTION.EN:
      return "https://dev3.docosan.com/en/forum/login";
    case LANGUAGE_OPTION.VI:
      return "https://dev3.docosan.com/dien-dan/dang-nhap";
    default:
      return "https://dev3.docosan.com/en/forum/login";
  }
};

const getCookie = (name) => {
  try {
    if (typeof window === "undefined") return null;

    let documentCookie = document.cookie;
    documentCookie = documentCookie.split(";");
    let result = null;
    documentCookie.forEach((item) => {
      if (item.indexOf(`${name}=`) !== -1) {
        result = item.replace(`${name}=`, "");
        result.trim();
      }
    });
    return result;
  } catch (e) {
    console.log("Error getCookie:", e);
    return null;
  }
};

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const addPopupLogin = () => {
  try {
    const languageSite =
      getParameterByName("locale") == LANGUAGE_OPTION.VI
        ? LANGUAGE_OPTION.VI
        : LANGUAGE_OPTION.EN;

    window.addEventListener("message", (event) => {
      if (event.data === closeIframeMessage) {
        const iframes = document.querySelectorAll("iframe");

        for (let i = 0; i < iframes.length; i++) {
          if (iframes[i].id === forumLoginId) {
            iframes[i].parentNode.removeChild(iframes[i]);
          }
        }
      }
    });

    const iframe = document.createElement("iframe");
    iframe.id = forumLoginId;

    const isMobile = deviceType() === "mobile";

    const iframeStyleCustom = {
      ...iframeForumLoginStyle,
      ...(isMobile && { top: 0 }),
    };

    Object.assign(iframe.style, iframeStyleCustom);

    iframe.src = getSourceByLanguage(languageSite);

    document.body.appendChild(iframe);
  } catch (error) {
    console.log("🚀 ~ file: scriptImportForumPage.js ~ line 84 ~ error", error);
  }
};

const checkInclude = (listHref, hrefValue) => {
  let rs = false;
  for (const item of listHref) {
    if (hrefValue.includes(item)) {
      rs = true;
      break;
    }
  }
  return rs;
};

const bodyDom = document.getElementsByClassName(
  "overflow-hidden pb-5 pt-5 sm:pt-7"
)[0];

if (window.location.href.indexOf("auth/login") > -1) {
  window.onload = () => {
    document.body.style.display = "none";

    addPopupLogin();

    document.body.style.display = "block";

    bodyDom.innerHTML = "";
  };
}


sftp


{
  "name": "My Server",
  "host": "18.138.166.48",
  "protocol": "sftp",
  "port": 22,
  "username": "root",
  "password": "Docosan48!",
  "remotePath": "/opt/web/khanh_v2",
  "uploadOnSave": true,

  "save_before_upload": true,
  "upload_on_save": true,
  "sync_down_on_open": false,
  "sync_skip_deletes": false,
  "sync_same_age": true,
  "confirm_downloads": false,
  "confirm_sync": true,
  "confirm_overwrite_newer": false,

  "connect_timeout": 30
}


{
  "name": "My Server",
  "protocol": "sftp",
  "username": "root",
  "remotePath": "/opt/web/khanh_v2",
  "uploadOnSave": true,

  "host": "18.138.85.94",
  "user": "root",
  "password": "Docosan94!",
  "port": 22,
  "remote_path": "/opt/docosan-web-v2",

  "save_before_upload": true,
  "upload_on_save": true,
  "sync_down_on_open": false,
  "sync_skip_deletes": false,
  "sync_same_age": true,
  "confirm_downloads": false,
  "confirm_sync": true,
  "confirm_overwrite_newer": false,

  "connect_timeout": 30
}


* -->
* 
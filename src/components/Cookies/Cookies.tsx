import { setCartCookies } from "Hooks/useSetCartCookies";
import useShop from "Hooks/useShop";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

function Cookies() {
  const { t } = useTranslation();
  const { cart } = useShop();

  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      disableStyles={true}
      location="bottom"
      buttonText={t("CookiesConsentAccept")}
      declineButtonText={t("CookiesConsentDecline")}
      declineButtonClasses="CookieConsentDeclineButton"
      containerClasses="CookieConsentContainer"
      buttonClasses="CookieConsentButton"
      onAccept={() => {
        setCartCookies(cart);
      }}
    >
      {t("CookiesConsent")}
    </CookieConsent>
  );
}

export default Cookies;

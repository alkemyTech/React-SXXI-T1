import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from "assets/images";
import { RedirectToSocialNetwork } from "../RedirectToSocialNetwork";

export const FooterSocialNetworks = ({ contactData }) => {
  return (
    <>
      <RedirectToSocialNetwork>
        {[
          {
            href: contactData?.data?.facebook_url,
            icon: facebookIcon,
            text: "facebook",
          },
          {
            href: contactData?.data?.instagram_url,
            icon: instagramIcon,
            text: "instagram",
          },
          {
            href: contactData?.data?.linkedin_url,
            icon: linkedinIcon,
            text: "linkedin",
          },
          {
            href: contactData?.data?.twitter_url,
            icon: twitterIcon,
            text: "twitter",
          },
        ]}
      </RedirectToSocialNetwork>
    </>
  );
};

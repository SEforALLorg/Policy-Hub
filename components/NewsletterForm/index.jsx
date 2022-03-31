import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./newsletterForm";

const NewsletterSubscribe = ({newsletterCheckbox}) => {
  const MAILCHIMP_URL =
    process.env.NEXT_PUBLIC_MAILCHIMP_URL ||
    "https://keymouseit.us14.list-manage.com/subscribe/post?u=213a9c1ce4c7835eab18a91e5&amp;id=04f9d3a1de";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            newsletterCheckbox={newsletterCheckbox}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;

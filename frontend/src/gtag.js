export const GA_TRACKING_ID = "G-7DDW31MBHZ"; // Replace with your Measurement ID

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, { page_path: url });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

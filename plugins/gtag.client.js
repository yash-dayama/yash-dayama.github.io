export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', config.public.googleAnalytics.id);
  }
});

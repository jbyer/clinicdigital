'use client';

import Script from 'next/script';

export default function ChatWidget() {
  // Only load in production to keep dev console clean 
  // and prevent hydration errors during local development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      src="https://beta.leadconnectorhq.com/loader.js"
      strategy="lazyOnload"
      data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="698352597cd1e6562be9d7d1"
    />
  );
}

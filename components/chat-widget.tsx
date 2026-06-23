'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function ChatWidget() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render after client-side hydration to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <script
      src="https://beta.leadconnectorhq.com/loader.js"
      strategy="lazyOnload"
      data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="698352597cd1e6562be9d7d1"
    ></script>
  );
}

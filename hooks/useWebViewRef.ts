import React from "react";
import WebView from "react-native-webview";

export function useWebViewRef() {
  const elementRef = React.useRef<WebView>(null);

  return { elementRef };
}

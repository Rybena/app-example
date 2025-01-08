import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

let webViewRef: React.RefObject<WebView> = React.createRef();

export const sendToRybena = (message: string) => {
  webViewRef.current?.injectJavaScript(message);
};

type RybenaWebViewProps = {
  ref: React.ForwardedRef<WebView>;
};

const RybenaWebView = React.forwardRef<WebView, RybenaWebViewProps>(() => {
  return (
    <View style={styles.view}>
      <WebView
        ref={webViewRef}
        style={styles.webview}
        scalesPageToFit
        onLoadEnd={() => {
          sendToRybena(`
            document.body.style.touchAction = 'manipulation';
            `);
        }}
        source={{
          uri: "https://repository.rybena.com.br:9000/webview/index.html?token={SEU_TOKEN_AQUI}",
          //Necessário substituir {SEU_TOKEN_AQUI} pelo token gerado pela equipe da Rybená
        }}
      />
    </View>
  );
});

export default RybenaWebView;

const styles = StyleSheet.create({
  webview: {
    backgroundColor: "transparent",
  },
  view: {
    pointerEvents: "none",
    width: Dimensions.get("window").width/3,
    height: 222,
    position: "absolute",
    bottom: 50,
    right: 0,
  },
});

import { WebView } from "react-native-webview";
import { Dimensions, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonUI from "@/components/ui/Button";
import { sendToRybena } from "@/components/RybenaWebView";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView as TV } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function TabTwoScreen() {
  const color = useThemeColor({}, "text");

  const [text, setText] = React.useState(
    "Digite o texto que deseja traduzir aqui..."
  );

  return (
    // <SafeAreaView style={styles.container}>

    //   <ButtonUI
    //     onPress={() => {
    //       sendToRybena(`RybenaApi.getInstance().setSize(280)`);
    //     }}
    //   >
    //     Aumentar Rybená
    //   </ButtonUI>

    //   <ButtonUI
    //     onPress={() => {
    //       sendToRybena(
    //         `RybenaApi.getInstance().translate('Bom dia esse é um teste do app')`
    //       );
    //     }}
    //   >
    //     Teste Libras
    //   </ButtonUI>
    //   <ButtonUI
    //     onPress={() => {
    //       sendToRybena(`RybenaApi.getInstance().setCoordinates(500, 200);`);
    //     }}
    //   >
    //     Teste Libras
    //   </ButtonUI>
    // </SafeAreaView>
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#f4f4f4", dark: "#222222" }}
      headerImage={
        <Image
          source={require("@/assets/images/rybFrame.png")}
          style={styles.reactLogo}
        />
      }
    >
      <TV style={styles.titleContainer}>
        <ThemedText type="title">Básicos!</ThemedText>
        <HelloWave />
      </TV>
      <TV style={styles.stepContainer}>
        <ThemedText type="default">
          A seguir, você encontrará exemplos de uso básico, como abrir, fechar,
          mudar para voz mudar para libras e traduzir...
        </ThemedText>
      </TV>

      <TV style={styles.stepContainer}>
        <ThemedText type="subtitle">Abrir Player</ThemedText>
        <ThemedText>
          Abaixo você encontrará um botão que ao ser pressionado, abrirá o
          player da Rybená. Para isso, basta chamar o método{" "}
          <ThemedText type="defaultSemiBold">openPlayer()</ThemedText> da API.
        </ThemedText>
        <ButtonUI
          onPress={() => {
            sendToRybena(`RybenaApi.getInstance().openPlayer()`);
          }}
        >
          Abrir Player
        </ButtonUI>
      </TV>

      <TV style={styles.stepContainer}>
        <ThemedText type="subtitle">Fechar Player</ThemedText>
        <ThemedText>
          Para fechar o player da Rybená, basta chamar o método{" "}
          <ThemedText type="defaultSemiBold">closePlayer()</ThemedText> da API.
        </ThemedText>
        <ButtonUI
          onPress={() => {
            sendToRybena(`RybenaApi.getInstance().closePlayer()`);
          }}
        >
          Fechar Player
        </ButtonUI>
      </TV>

      <TV style={styles.stepContainer}>
        <ThemedText type="subtitle">Alterar Voz/Libras</ThemedText>
        <ThemedText>
          Você pode alternar entre voz e libras no player da Rybená. Para isso,
          utilize as funções{" "}
          <ThemedText type="defaultSemiBold">
            switchToVoz() e switchToLibras()
          </ThemedText>{" "}
          da API.
        </ThemedText>
        <ButtonUI
          onPress={() => {
            sendToRybena(`RybenaApi.getInstance().switchToVoz()`);
          }}
        >
          Mudar para Voz
        </ButtonUI>
        <ButtonUI
          onPress={() => {
            sendToRybena(`RybenaApi.getInstance().switchToLibras()`);
          }}
        >
          Mudar para Libras
        </ButtonUI>
      </TV>

      <TV style={styles.stepContainer}>
        <ThemedText type="subtitle">Traduzir Conteúdo</ThemedText>
        <ThemedText>
          Para traduzir um texto para Libras ou Voz, basta chamar o método{" "}
          <ThemedText type="defaultSemiBold">
            translate('Seu texto aqui')
          </ThemedText>{" "}
          ele irá sinalizar se estiver em libras e sintetizar se estiver em voz.
        </ThemedText>
        <TextInput
          multiline
          style={[styles.textarea, { color }]}
          value={text}
          onChangeText={setText}
        />
        <ButtonUI
          onPress={() => {
            sendToRybena(`RybenaApi.getInstance().translate('${text}')`);
          }}
        >
          Traduzir/Sintetizar
        </ButtonUI>
      </TV>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 4,
  },
  webview: {
    width: Dimensions.get("window").width,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  textarea: {
    width: "100%",
    height: 80,
    padding: 8,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    color: "red",
  },
});

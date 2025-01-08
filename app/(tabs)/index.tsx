import { Image, StyleSheet, Platform, View, Linking } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView, ThemedView as TV } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
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
        <ThemedText type="title">Olá!</ThemedText>
        <HelloWave />
      </TV>
      <TV style={styles.stepContainer}>
        <ThemedText type="default">
          Este é um aplicativo de exemplo do uso da Rybená em apps...
        </ThemedText>
        <ThemedText>
          Neste exemplo utilizamos{" "}
          <ThemedText type="defaultSemiBold">React Native e Expo</ThemedText>,
          mas a Rybená pode ser utilizada em qualquer projeto com suporte a
          WebView e JavaScript.
        </ThemedText>
      </TV>
      <TV style={styles.stepContainer}>
        <ThemedText type="subtitle">Informações Importantes</ThemedText>
        <ThemedText>
          Você pode ver o código fonte deste app em{" "}
          <ThemedText
            onPress={() => {
              Linking.openURL("https://lab.grupoicts.com.br/rybena/app-example").catch((err) =>
                console.error("Error opening URL:", err)
              );
            }}
            type="link"
          >
            Mudar Link
          </ThemedText>
        </ThemedText>
        <ThemedText>
          Ou acessar a documentação oficial da Rybená em{" "}
          <ThemedText
            onPress={() => {
              Linking.openURL("https://docs.rybena.com.br").catch((err) =>
                console.error("Error opening URL:", err)
              );
            }}
            type="link"
          >
            docs.rybena.com.br
          </ThemedText>
        </ThemedText>
      </TV>
      <TV style={styles.stepContainer}>
        <ThemedText type="subtitle">Vamos Começar!!</ThemedText>
        <ThemedText>
          Nas outras abas você encontrará exemplos de uso da Rybená em{" "}
          <ThemedText type="defaultSemiBold">diferentes situações.</ThemedText>{" "}
          Para dúvidas ou sugestões, entre em contato com a equipe da Rybená
          enviando um e-mail para o{" "}
          <ThemedText
            type="link"
            onPress={() => {
              Linking.openURL("mailto:suporte@rybena.com.br").catch((err) =>
                console.error("Error opening URL:", err)
              );
            }}
          >
            Suporte Rybená
          </ThemedText>
        </ThemedText>
      </TV>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
});

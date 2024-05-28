import { ActivityIndicator, Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  useReadContract,
  useActiveAccount,
  useConnect,
  useSendTransaction,
  useDisconnect,
  useActiveWallet,
  useAutoConnect,
  useWalletBalance,
} from "thirdweb/react";
import { balanceOf, claimTo } from "thirdweb/extensions/erc721";
import {
  getUserEmail,
  inAppWallet,
  preAuthenticate,
} from "thirdweb/wallets/in-app";
import { chain, client, contract } from "@/constants/thirdweb";
import { shortenAddress } from "thirdweb/utils";
import { ThemedButton } from "@/components/ThemedButton";
import { useEffect, useState } from "react";
import { ThemedInput } from "@/components/ThemedInput";
import { createWallet } from "thirdweb/wallets";
import {
  Button,
  H3,
  H4,
  Input,
  Paragraph,
  SizableText,
  Text,
  View,
  YStack,
  styled,
} from "tamagui";

const Container = styled(View, {
  paddingLeft: 28.5,
  paddingRight: 28.5,
  height: "100%",
  width: "100%",
  top: 0,
});

export default function HomeScreen() {
  return (
    <Container>
      <YStack gap="$2" py="$10" pb="$8">
        <ConnectSection />
      </YStack>
    </Container>
  );
}

function ConnectSection() {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const autoConnect = useAutoConnect({
    client,
    wallets: [createWallet("io.metamask"), inAppWallet()],
  });
  const autoConnecting = autoConnect.isLoading;

  if (autoConnecting) {
    return (
      <>
        <ActivityIndicator />
      </>
    );
  }

  return (
    <View style={styles.stepContainer}>
      {wallet ? (
        <>
          <ConnectedSection />
          <ThemedButton
            title="Log out"
            variant="secondary"
            onPress={() => disconnect(wallet)}
          />
        </>
      ) : (
        <View>
          <H3>Sign in</H3>
          <YStack gap="$2" py="$8" pb="$8">
            <ConnectWithEmail />
            <ThemedText style={{ textAlign: "center" }}>or</ThemedText>
            <ConnectWithGoogle />
            <ConnectWithMetamask />
          </YStack>
        </View>
      )}
    </View>
  );
}

function ConnectWithGoogle() {
  const { connect, isConnecting } = useConnect();

  const connectInAppWallet = async () => {
    await connect(async () => {
      const wallet = inAppWallet();
      await wallet.connect({
        client,
        strategy: "google",
        redirectUrl: "xyz.goemon.app://",
      });
      return wallet;
    });
  };

  return (
    <ThemedButton
      onPress={connectInAppWallet}
      title="Sign in with Google"
      loading={isConnecting}
      loadingTitle="Signing in..."
    />
  );
}

function ConnectWithEmail() {
  const [screen, setScreen] = useState<"email" | "sending" | "code">("email");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const { connect, isConnecting } = useConnect();

  const sendEmailCode = async () => {
    if (!email) return;
    setScreen("sending");
    await preAuthenticate({
      client,
      strategy: "email",
      email,
    });
    setScreen("code");
  };

  const connectInAppWallet = async () => {
    if (!verificationCode || !email) return;
    await connect(async () => {
      const wallet = inAppWallet();
      await wallet.connect({
        client,
        strategy: "email",
        email,
        verificationCode,
      });
      return wallet;
    });
  };

  if (screen === "email") {
    return (
      <>
        <Input
          size="$5"
          placeholder="Enter your Email"
          onChangeText={setEmail}
          keyboardType="email-address"
          value={email}
          autoCapitalize="none"
        />

        <Button
          onPress={() => {
            console.log("Button pressed"); // Log to check if button press works
          }}
          backgroundColor="teal"
          color="white"
          fontWeight={500}
        >
          Sign in with emails
        </Button>

        <Button
          onPress={() => {
            console.log("Button pressed"); // Add a log to check if the function is being called
            sendEmailCode();
          }}
          backgroundColor="teal"
          color="white"
          fontWeight={500}
        >
          {isConnecting ? "Signing in..." : "Sign in with email"}
        </Button>
        {/* <ThemedButton
          onPress={sendEmailCode}
          title="Sign in with email"
          loading={isConnecting}
          loadingTitle="Signing in..."
        /> */}
      </>
    );
  }

  if (screen === "sending") {
    return (
      <>
        <ActivityIndicator />
        <ThemedText>Sending Email verification code...</ThemedText>
      </>
    );
  }

  return (
    <>
      <ThemedInput
        placeholder="Enter verification code"
        onChangeText={setVerificationCode}
        value={verificationCode}
        keyboardType="numeric"
      />
      <ThemedButton
        onPress={connectInAppWallet}
        title="Sign in"
        loading={isConnecting}
        loadingTitle="Signing in..."
      />
    </>
  );
}

function ConnectWithMetamask() {
  const { connect, isConnecting } = useConnect();

  const connectMetamask = async () => {
    await connect(async () => {
      const wallet = createWallet("io.metamask");
      await wallet.connect({
        client,
        chain,
      });
      return wallet;
    });
  };

  return (
    <ThemedButton
      onPress={connectMetamask}
      title="Sign in with Metamask"
      loading={isConnecting}
      loadingTitle="Signing in..."
    />
  );
}

function ConnectedSection() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const balanceQuery = useWalletBalance({
    address: account?.address,
    chain,
    client,
  });
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const email = await getUserEmail({
          client,
        });
        if (email) {
          setEmail(email);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchEmail();
  }, [account]);

  return (
    <>
      {account ? (
        <>
          <ThemedText>
            Wallet type:{" "}
            <ThemedText type="defaultSemiBold">{wallet?.id}</ThemedText>{" "}
            {email && <ThemedText> ({email})</ThemedText>}
          </ThemedText>
          <ThemedText>
            Address:{" "}
            <ThemedText type="defaultSemiBold">
              {shortenAddress(account.address)}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Balance:{" "}
            <ThemedText type="defaultSemiBold">
              {`${balanceQuery.data?.displayValue} ${balanceQuery.data?.symbol}`}
            </ThemedText>
          </ThemedText>
        </>
      ) : (
        <ThemedText>Connect to mint an NFT.</ThemedText>
      )}
    </>
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
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

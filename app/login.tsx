import { ActivityIndicator, Image, StyleSheet } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import {
  useReadContract,
  useActiveAccount,
  useConnect,
  useSendTransaction,
  useDisconnect,
  useActiveWallet,
  useAutoConnect,
  useWalletBalance,
} from 'thirdweb/react'
import { balanceOf, claimTo } from 'thirdweb/extensions/erc721'
import { getUserEmail, inAppWallet, preAuthenticate } from 'thirdweb/wallets/in-app'
import { chain, client, contract } from '@/constants/thirdweb'
import { shortenAddress } from 'thirdweb/utils'
import { ThemedButton } from '@/components/ThemedButton'
import { useEffect, useState } from 'react'
import { ThemedInput } from '@/components/ThemedInput'
import { createWallet } from 'thirdweb/wallets'
import Animated, { useAnimatedRef } from 'react-native-reanimated'
import DividerWithText from '@/components/DividerWithText'
import { View } from 'react-native'
import { Text } from 'react-native'
import Footer from '@/components/Footer'

export default function HomeScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>()

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          {/* <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={{ paddingBottom: 0 }}></ThemedText>
          </ThemedView> */}
          <ConnectSection />
          <Footer />
        </Animated.ScrollView>
      </ThemedView>
    </ThemedView>
  )
}

function ConnectSection() {
  const { disconnect } = useDisconnect()
  const wallet = useActiveWallet()
  const autoConnect = useAutoConnect({
    client,
    wallets: [createWallet('io.metamask'), inAppWallet()],
  })
  const autoConnecting = autoConnect.isLoading

  if (autoConnecting) {
    return (
      <>
        <ActivityIndicator />
      </>
    )
  }

  return (
    <ThemedView style={styles.stepContainer}>
      {wallet ? (
        <>
          <ConnectedSection />
          <ThemedButton title="Log out" variant="secondary" onPress={() => disconnect(wallet)} />
        </>
      ) : (
        <ThemedView style={{ gap: 16 }}>
          <ConnectWithEmail />

          <ThemedView style={{ gap: 16, paddingTop: 30 }}>
            <DividerWithText text="Or" />
            <ConnectWithGoogle />
          </ThemedView>
          <ThemedView style={{ gap: 16, paddingTop: 40 }}>
            <DividerWithText text="Or" />
            <ConnectWithMetamask />
          </ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  )
}

function ConnectWithGoogle() {
  const { connect, isConnecting } = useConnect()

  const connectInAppWallet = async () => {
    await connect(async () => {
      const wallet = inAppWallet()
      await wallet.connect({
        client,
        strategy: 'google',
        redirectUrl: 'xyz.goemon.app://',
      })
      return wallet
    })
  }

  return (
    <ThemedButton
      onPress={connectInAppWallet}
      icon={require('@/assets/images/u_google.png')}
      title="Continue with Google"
      loading={isConnecting}
      loadingTitle="Signing in..."
      style={styles.buttonGoogle}
      Color="#888891"
    />
  )
}

function ConnectWithEmail() {
  const [screen, setScreen] = useState<'email' | 'sending' | 'code'>('email')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const { connect, isConnecting } = useConnect()

  const sendEmailCode = async () => {
    console.log('hello')
    if (!email) {
      alert('Please Enter a Email Address')
    }
    setScreen('sending')
    await preAuthenticate({
      client,
      strategy: 'email',
      email,
    })
    setScreen('code')
  }

  const connectInAppWallet = async () => {
    if (!verificationCode || !email) return
    await connect(async () => {
      const wallet = inAppWallet()
      await wallet.connect({
        client,
        strategy: 'email',
        email,
        verificationCode,
      })
      return wallet
    })
  }

  if (screen === 'email') {
    return (
      <>
        <ThemedInput
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.emailInput}
          Color="#888891"
        />
        <ThemedButton
          onPress={sendEmailCode}
          title="Next"
          loading={isConnecting}
          loadingTitle="Signing in..."
          style={styles.buttonEmail}
          Color="#FAFAFA"
        />
      </>
    )
  }

  if (screen === 'sending') {
    return (
      <>
        <ActivityIndicator />
        <ThemedText>Sending Email verification code...</ThemedText>
      </>
    )
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
        style={{ backgroundColor: '#2da8ce' }}
        title="Sign in"
        loading={isConnecting}
        loadingTitle="Signing in..."
      />
    </>
  )
}

function ConnectWithMetamask() {
  const { connect, isConnecting } = useConnect()

  const connectMetamask = async () => {
    await connect(async () => {
      const wallet = createWallet('io.metamask')
      await wallet.connect({
        client,
        chain,
      })
      return wallet
    })
  }

  return (
    <ThemedButton
      onPress={connectMetamask}
      icon={require('@/assets/images/u_wallet.png')}
      title="Connect Wallet"
      loading={isConnecting}
      loadingTitle="Signing in..."
      style={styles.buttonGoogle}
      Color="#888891"
    />
  )
}

function ConnectedSection() {
  const account = useActiveAccount()
  const wallet = useActiveWallet()
  const balanceQuery = useWalletBalance({
    address: account?.address,
    chain,
    client,
  })
  const [email, setEmail] = useState('')
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const email = await getUserEmail({
          client,
        })
        if (email) {
          setEmail(email)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fetchEmail()
  }, [account])

  return (
    <>
      {account ? (
        <>
          <ThemedText>
            Wallet type: <ThemedText type="defaultSemiBold">{wallet?.id}</ThemedText>{' '}
            {email && <ThemedText> ({email})</ThemedText>}
          </ThemedText>
          <ThemedText>
            Address:{' '}
            <ThemedText type="defaultSemiBold">{shortenAddress(account.address)}</ThemedText>
          </ThemedText>
          <ThemedText>
            Balance:{' '}
            <ThemedText type="defaultSemiBold">
              {`${balanceQuery.data?.displayValue} ${balanceQuery.data?.symbol}`}
            </ThemedText>
          </ThemedText>
        </>
      ) : (
        <ThemedText>Connect to mint an NFT.</ThemedText>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    paddingTop: 5,
  },
  emailInput: {
    fontFamily: 'Poppins',
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    paddingLeft: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212124',
    height: 50,
  },
  buttonEmail: {
    fontFamily: 'Poppins',
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2DA8CE',
    height: 50,
    color: '#2DA8CE',
  },
  buttonGoogle: {
    backgroundColor: '#212124',
    height: 60,
    color: '#888891',
  },
})

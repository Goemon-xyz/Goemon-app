import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  useActiveAccount,
  useConnect,
  useDisconnect,
  useActiveWallet,
  useAutoConnect,
  useWalletBalance,
} from 'thirdweb/react'
import { getUserEmail, inAppWallet, preAuthenticate } from 'thirdweb/wallets/in-app'
import { shortenAddress } from 'thirdweb/utils'
import { createWallet } from 'thirdweb/wallets'
import Animated, { useAnimatedRef } from 'react-native-reanimated'
import { router } from 'expo-router'

import { Colors } from '@/constants/Colors'
import { chain, client } from '@/constants/thirdweb'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { ThemedButton } from '@/components/ThemedButton'
import { ThemedInput } from '@/components/ThemedInput'
import DividerWithText from '@/components/DividerWithText'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import IconButton from '@/components/IconButton'

export default function LoginScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const [loader, setloader] = useState(false)
  const theme = useTheme()
  const colors = Colors[theme.dark ? 'dark' : 'light']

  function ConnectWithMetamask() {
    const { connect, isConnecting } = useConnect()

    const connectMetamask = async () => {
      setloader(true)
      await connect(async () => {
        const wallet = createWallet('io.metamask')
        await wallet.connect({
          client,
          chain,
        })
        return wallet
      })
      setloader(false)
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

  function ConnectSection() {
    const { disconnect } = useDisconnect()
    const wallet = useActiveWallet()
    const autoConnect = useAutoConnect({
      client,
      wallets: [createWallet('io.metamask'), inAppWallet()],
    })
    const autoConnecting = autoConnect.isLoading

    if (autoConnecting) {
      // setloader(true)
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
  function ConnectWithEmail() {
    const [screen, setScreen] = useState<'email' | 'sending' | 'code'>('email')
    const [email, setEmail] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const { connect, isConnecting } = useConnect()

    const sendEmailCode = async () => {
      setloader(true)
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
      setloader(false)
    }

    const connectInAppWallet = async () => {
      setloader(true)
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
      setloader(false)
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
      // setloader(true)
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

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.content}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          <ThemedView style={styles.header}>
            <ThemedText type="title" style={[styles.title, { color: colors.text }]}>
              Sign in
            </ThemedText>
            <IconButton name="close" type="Ionicons" onPress={router.back} />
          </ThemedView>
          {loader ? (
            <>
              <ActivityIndicator
                size={100}
                color="#2DA8CE"
                animating={loader}
                style={{ paddingBottom: 118, paddingTop: 200, alignItems: 'center' }}
              />
              <Footer2 />
            </>
          ) : (
            <>
              <ConnectSection />
              <Footer />
            </>
          )}
        </Animated.ScrollView>
      </ThemedView>
    </SafeAreaView>
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
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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

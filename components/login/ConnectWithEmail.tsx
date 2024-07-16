import { useState } from "react"
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'
import { useLoginWithEmail } from '@privy-io/expo';

// components
import { ThemedButton } from '@/components/ThemedButton'
import { ThemedInput } from '@/components/ThemedInput'

function ConnectWithEmail() {
    const [screen, setScreen] = useState<'email' | 'code'>('email')
    const [email, setEmail] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const router = useRouter()
  
    const {sendCode, loginWithCode, state} = useLoginWithEmail({
      onError(error) {
         console.log(error)
      },
    });
  
    const sendEmailCode = async () => {
      if (!email) {
        alert('Please Enter an Email Address');
        return;
      }
   
      try {
        const response = await sendCode({ email });
        console.log("response from send code is", response);
        setScreen('code');
    
      } catch (error) {
        console.error("Error sending code:", error);
      } 
    };
  
    const signIn = async () => {
      if (!verificationCode || !email) return
  
      try {
        const response = await loginWithCode({code: verificationCode, email})

        if(response) router.push('/')
  
      } catch (error) {
        console.error("Error sending code:", error);
      } 
    }
  
  return (
    <>
      {screen === 'email' && (
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
            loading={state.status === "sending-code"}
            loadingTitle="Sending code..."
            style={styles.buttonEmail}
            Color="#FAFAFA"
          />
        </>
      )}
  
      {screen === 'code' && (
        <>
          <ThemedInput
            placeholder="Enter verification code"
            onChangeText={setVerificationCode}
            value={verificationCode}
            keyboardType="numeric"
            Color="#888891"
          />
          <ThemedButton
            onPress={signIn}
            style={{ backgroundColor: '#2da8ce' }}
            title="Sign in"
            loading={state.status === "submitting-code"}
            loadingTitle="Signing in..."
          />
        </>
      )}
  
    </>
  )
  }

export default ConnectWithEmail


const styles = StyleSheet.create({  
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
    }
  })

  
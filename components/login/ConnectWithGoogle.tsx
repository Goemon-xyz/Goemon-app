import { StyleSheet } from 'react-native'
import {useLoginWithOAuth} from '@privy-io/expo';
import { ThemedButton } from '@/components/ThemedButton'

function ConnectWithGoogle() {
    const {login} = useLoginWithOAuth({
      onError(error) {
        console.log(error)
      },
    });
  
    return (
      <ThemedButton
        onPress={() => login({provider: 'google'})}
        icon={require('@/assets/images/u_google.png')}
        title="Continue with Google"
        style={styles.buttonGoogle}
        Color="#888891"
      />
    )
}

export default ConnectWithGoogle

const styles = StyleSheet.create({
    buttonGoogle: {
      backgroundColor: '#212124',
      height: 60,
      color: '#888891',
    }
})
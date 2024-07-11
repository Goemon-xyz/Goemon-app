
import { StyleSheet } from 'react-native'
import { ThemedButton } from '@/components/ThemedButton'


function ConnectWithMetamask() {


    return (
      <ThemedButton
        onPress={() => {}}
        icon={require('@/assets/images/u_wallet.png')}
        title="Connect Wallet"
        style={styles.buttonGoogle}
        Color="#888891"
      />
    )
}


export default ConnectWithMetamask

const styles = StyleSheet.create({
    buttonGoogle: {
      backgroundColor: '#212124',
      height: 60,
      color: '#888891',
    }
})
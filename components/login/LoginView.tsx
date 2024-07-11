
// components
import ConnectWithEmail from '@/components/login/ConnectWithEmail';
import { ThemedView } from '@/components/ThemedView'
import DividerWithText from '@/components/DividerWithText'
import ConnectWithGoogle from '@/components/login/ConnectWithGoogle';
import ConnectWithMetamask from '@/components/login/ConnectWithMetamask';

const LoginView = () => {
  return (
      <ThemedView style={{ gap: 16 }}>
        <ConnectWithEmail/>

        <ThemedView style={{ gap: 16, paddingTop: 30 }}>
          <DividerWithText text="Or" />
          <ConnectWithGoogle />
        </ThemedView>
        
        <ThemedView style={{ gap: 16, paddingTop: 40 }}>
          <DividerWithText text="Or" />
          <ConnectWithMetamask />
        </ThemedView>
        
      </ThemedView>
  )
}

export default LoginView
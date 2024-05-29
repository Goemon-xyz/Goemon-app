# Goemon

## Get started

1. Install dependencies

```bash
yarn install
```

2. Get your thirdweb client id

Rename the `.env.example` file to `.env` and paste in your thirdweb client id.

You can obtain a free client id from the [thirdweb dashboard](https://thirdweb.com/dashboard/settings).

3. Start the app

```bash
yarn ios
```

or

```bash
yarn android
```

to build android do make sure JAVA is installed and is already in path properly
also make sure to include SDK path in bashrc or zshrc if you get SDK missing error
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk >> .zshrc

To run this app, you'll need either:

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

## Additional Resources

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)

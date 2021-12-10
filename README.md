# musalaTest

# Installation
- Clone the repo.
- Open the terminal and navigate to the project root dir.
- Run the following command.
```
npm i
```

# Running the App
1 - IOS (run the following commands)

```
cd ios && pod install && cd ..

npm run ios
``` 

2 - Android (run the following commands)
- Please make sure you have android emulators installed.

```
npm run android
```

# Testing
- run the following commands
```
npm test
```


# Linting
- run the following commands
```
npm run lint
```

# Theming
- For both platforms: changing the system mode (dark / light) will reflect on the App theme dynamically.

# Deep Linking
- dbArticle.sh: This is a script for deep linking with concrete article.
- Make sure App metro bundler is runnig already (need this if App in debug mode)

1 - IOS (run the following command)
```
sh Scripts/dbArticle.sh ios
```

2 - Android (run the following command)
```
sh Scripts/dbArticle.sh android
```

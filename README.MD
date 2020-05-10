# Belin app
This project was created with 

``` 
npx react-native init
```

## Run on device

``` 
yarn install 
npx react-native run-ios
npx react-native run-android
```

## Run Emulator (ios)

``` 
cd ios
pod install
```

Luego salir de la carpeta ios

``` 
npx react-native run-ios
```

### reset cache 

``` 
yarn start -- --reset-cache
```

## install pod

``` 
cd ios
```

``` 
pod install
```

### Build Android

To build run the command on /android folder

to generate a .aab

``` 
./gradlew bundleRelease
```

to generate a .apk

``` 
./gradlew assembleRelease
```

to test release build

``` 
npx react-native run-android --variant=release
```

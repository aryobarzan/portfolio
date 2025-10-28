1. `flutter build web` or `flutter build web --wasm`
2. Copy built web files to `public/assets/dartblock/`
3. Change `index.html` of built flutter app: from `<base href="/" />` to `<base href="./" />`
4. Edit `angular.json` by adding the following to `architect > build > options`:

```json
"scripts":
    [
        "public/assets/dartblock/flutter_bootstrap.js",
        "public/assets/dartblock/flutter.js"
    ],
```

5. Integrate as iframe: `<iframe src="assets/dartblock/index.html"></iframe>`

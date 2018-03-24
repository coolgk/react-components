# React Components

- [googleLoginButton](./src/googleLoginButton/README.md)

## Google Login Button

`npm i @coolgk/react-google-login-button`

`react-google-login` with icon in bootrap button.

![button screenshot](https://raw.githubusercontent.com/coolgk/react-components/develop/src/googleLoginButton/screenshot.jpg)

All props of `react-google-login` and

* callback

callback is assigned to both `onSuccess` and `onFailure` of `react-google-login`

```javascript

<GoogleLoginButton
    clientId={'[your google client id]'}
    callback={console.log}
/>

```

### requirements

Must include fortawesome and bootstrap globally

#### index.html example

```html

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

```

#### index.jsx example

```javascript

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

import fontawesome from '@fortawesome/fontawesome';
import * as faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
fontawesome.library.add(faGoogle);

```

# Siganpyo Simulator
한국 전통의 스포츠인 수강신청의 박진감 넘치는 재미를 웹게임으로 즐기고자 하는 프로젝트입니다.
실제 수강신청 실력과는 하등의 관계가 없이 대체로 이상한 시간표가 나오며, 이는 어떻게 하든 망하는 수강신청의 실제를 고증한 것입니다.

## 구조
나중에 코딩할 때 보려고 적어 둡니다.

### ScreenStart.js
게임 시작 화면입니다.

### ScreenPlay.js
게임 플레이 화면입니다. 1교시\~12교시, 월요일\~금요일이 있는 시간표 테이블이 표시됩니다.
해당 테이블에는 플레이어의 조작에 따라 테트리스처럼 시간표가 1교시에서 12교시 방향으로 채워지며,
한 개의 요일이 12교시까지 가득 찬다면 게임이 끝납니다.

### ScreenEnd.js
게임 끝 화면입니다.
시간표의 모양에 따라 이름을 붙여 줍니다. 예를 들어 모든 요일에 1교시 수업이 있다면 "고등학생" 이라는 이름을 붙여 주는 식입니다.

## 이하는 create-react-app 사용 설명서입니다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

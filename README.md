

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>🔗 URL Shortener</h1>
  <p>A simple and fast URL shortening service built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Shorten any valid long URL</li>
    <li>Unique short codes generated using <code>shortid</code></li>
    <li>Redirect users to original URLs</li>
    <li>Easy REST API interface</li>
    <li>Powered by MongoDB and Mongoose</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre>
URL_shortener/
├── models/
│   └── Url.js
├── server.js
├── package.json
└── package-lock.json
  </pre>

  <h2>🧪 Getting Started</h2>
  <ol>
    <li><strong>Clone the repository:</strong>
      <pre><code>git clone https://github.com/yourusername/URL_shortener.git
cd URL_shortener</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Start MongoDB:</strong> Ensure it's running locally on default port.</li>
    <li><strong>Run the server:</strong>
      <pre><code>npm start</code></pre>
      Access it at <code>http://localhost:3000</code>
    </li>
  </ol>

  <h2>🔧 API Endpoints</h2>
  <h3>POST /shorten</h3>
  <p>Create a shortened URL</p>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "longUrl": "https://example.com"
}</code></pre>

  <p><strong>Response:</strong></p>
  <pre><code>{
  "shortUrl": "http://localhost:3000/abc123"
}</code></pre>

  <h3>GET /:shortCode</h3>
  <p>Redirects to the original long URL</p>

  <h2>📦 Example</h2>
  <pre><code>curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"longUrl":"https://www.google.com"}'</code></pre>

  <p>Then open <code>http://localhost:3000/&lt;shortCode&gt;</code> in your browser.</p>

  <h2>🧰 Built With</h2>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://mongoosejs.com/">Mongoose</a></li>
    <li><a href="https://www.npmjs.com/package/shortid">shortid</a></li>
  </ul>
  <h2>🙋‍♀️ Author</h2>
  <ul>
    <li>GitHub: <a href="https://github.com/klu2200032499">@klu2200032499</a></li>
    <li>Project: <a href="https://github.com/klu2200032499/URL_shortner">URL_shortner</a></li>
  </ul>

</body>
</html>


# Starter Guide for Creating React app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

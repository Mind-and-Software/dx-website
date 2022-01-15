# DX Website

A scaffolding for a Developer Experience website made with Gatsby.

## Starting up

1.  **Clone the repository**

    Go to whichever location you want to install the app and clone the repository

    ```shell
    git clone git@github.com:Mind-and-Software/dx-website.git
    ```

2.  **Start the website**

    Go into the project directory and start the developing server

    ```shell
    cd dx-website
    npm install
    npm start
    ```

3.  **The site is now running!**

    The site is now running at http://localhost:8000!

    Edit `src/pages/index.jsx` to see your site update in real-time

4.  **Linting**

    `npm run lint` - See linting errors.
    `npm run prettier` To format code


5.  **Test the site**

    - `npm test` - Run unit tests
    - `npm run cy:run` - Run Cypress e2e tests without the UI
      - make sure the site is running first
    - `npm run cy:open` - Open Cypress UI
      - make sure the site is running first

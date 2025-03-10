# Contentstack Recipes Blog (Next.js 15)

This repository contains a minimalistic recipes blog built with Next.js 15, designed for the Contentstack Launch Project Creation and Deployment Challenge.

## Features

* Displays a list of blog posts (recipes) fetched from Contentstack.
* Shows individual recipe details.
* The header, recipes list, recipe details and footer are separate components.
* Each one of them are authorable from Contentstack with their own content types.
* The newsletter form is a dummy form that doesn't submit any data.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd [repository name]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Contentstack environment variables:**

    * Create a `.env` file in the root directory.
   * Add your Contentstack API key, delivery token, environment, and region:

       ```
       CONTENTSTACK_API_KEY: api key,
       CONTENTSTACK_DELIVERY_TOKEN: delivery token,
       CONTENTSTACK_BRANCH: contentstack branch,
       CONTENTSTACK_ENVIRONMENT: environment,
       CONTENTSTACK_APP_HOST: app host,
       CONTENTSTACK_PREVIEW_HOST: preview host,
       CONTENTSTACK_PREVIEW_TOKEN: preview token,
       CONTENTSTACK_LIVE_EDIT_TAGS: live edit tags,
       CONTENTSTACK_API_HOST: api host,
       ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser and navigate to `http://localhost:3000`.**

## Deployment

Deploy to Contentstack and remember to set your environment variables

## Contentstack Setup

Ensure you have the following content types set up in Contentstack:
* Header
* Blog post
* Headings
* Footer

## Notes

This is a basic implementation for the Contentstack Launch Project Creation and Deployment Challenge.
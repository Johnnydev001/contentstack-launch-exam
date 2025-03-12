# Contentstack Recipes Blog with Next.js

<img width="1726" alt="image" src="https://github.com/user-attachments/assets/7c74ac76-072a-4c55-8de4-0133d7290f38" />

This repository contains a minimalistic recipes blog built with Next.js 15.
It was built as an assignment submission for the **Contentstack's Launch Project Creation and Deployment Challenge**.

Please refrain from utilizing this project for the assignment submission.
It can still be used for learning purposes.

## Features

* Displays a list of blog posts (recipes) fetched from Contentstack.
* Shows individual recipe details.
* The header, recipes list, recipe details and footer are separate components.
* Each one of them are authorable from Contentstack with their own content types.
* The newsletter form is a dummy form that doesn't submit any data.

## Technologies

* NextJS 15 (App Router)
* Tailwind CSS

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
   * Add your Contentstack API host, CDN, API key, delivery token and environment:

       ```
        CONTENTSTACK_API_HOST=CONTENTSTACK_API_HOST
        CONTENTSTACK_CDN=CONTENTSTACK_CDN
        CONTENTSTACK_API_KEY=CONTENTSTACK_API_KEY
        CONTENTSTACK_DELIVERY_TOKEN=CONTENTSTACK_DELIVERY_TOKEN
        CONTENTSTACK_ENVIRONMENT=CONTENTSTACK_ENVIRONMENT
       ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser and navigate to `http://localhost:3000`.**

## Deployment

Deploy to Contentstack and remember to set your environment variables.

## Contentstack Setup

Ensure you have the following content types set up in Contentstack:
* Header
* Blog post
* Headings
* Footer

Please refer to their respective types for better understanding.

## Notes: 

**All rights reserved**

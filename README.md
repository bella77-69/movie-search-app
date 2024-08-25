# Movie Search App

This is a simple React + Vite application that allows users to search for movies using the [TMDb API](https://www.themoviedb.org/documentation/api).

## Features

- Search for movies by title.
- Display popular movies on initial page load.
- View movie details like poster, title, and overview.
- Styled using plain CSS for a clean and responsive UI.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and optimized builds.
- **TypeScript**: For type safety and better developer experience.
- **Axios**: For making API requests.
- **TMDb API**: For fetching movie data.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bella77-69/movie-search-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd movie-search-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables:

    Create a `.env` file in the root directory and add your TMDb API key:

    ```
    VITE_TMDB_API_KEY=your_api_key_here
    ```

    You can obtain an API key by creating an account on [TMDb](https://www.themoviedb.org/) and generating a key from your account settings.

## Running the App

To start the development server:

```bash
npm run dev

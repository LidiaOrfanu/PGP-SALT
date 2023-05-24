# React MiniBlog with Sections

The blog is organized into multiple sections based on predefined tags obtained from the API: <https://dummyjson.com/posts>.
Each section represents a different category (tag). Users can select a category from the dropdown, including the "All" option, to filter the posts displayed on the page.
The filtered posts are presented in a card format, showcasing the title, body, and associated tags.

## Technologies Used

The project utilizes the following technologies:

- React
- TypeScript
- Axios: a HTTP client library used to handle API requests and responses efficiently.

## Project Structure

The project structure is organized as follows:

- **components**: contains the `Blog` and `Footer` components responsible for rendering the blog and footer sections.
- **services**: includes the `api.ts` file that provides functions for fetching data from the API.
- **types**: defines TypeScript interfaces used for the structure of posts and sections.
- **App.tsx**: the main entry point of the application, rendering the components and defining the overall structure.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone the repository-url`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and visit [http://localhost:3000]

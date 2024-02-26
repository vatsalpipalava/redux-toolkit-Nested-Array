# Redux Toolkit Nested Array Structure

This React application utilizes Redux Toolkit to manage a nested array structure for feature sections and subsections. Here's a breakdown of the structure:

## Sections Array

The top-level array in the Redux store represents sections. Each section contains:

*   ####ID:#### Unique identifier for the section.
*   ####Section Name:#### Name or title of the section.
*   ####Subsections Array:#### An array containing subsections associated with the section.

## Subsections Array

Each subsection within a section contains:

-   ####ID:#### Unique identifier for the subsection.
-   ####Heading:#### Name or title of the subsection.
-   ####Image:#### Image associated with the subsection.

The application provides functionalities to manipulate this nested array structure:

-   ####Adding Section:#### Adds a new section to the sections array.
-   ####Adding Subsection:#### Adds a new subsection to a specific section.
-   ####Updating Section Name:#### Modifies the name of a section.
-   ####Updating Subsection:#### Modifies the name or image of a subsection.
-   ####Deleting Section:#### Removes a section and all its associated subsections from the array.
-   ####Deleting Subsection:#### Removes a specific subsection from its parent section.

Additionally, the application employs Tailwind CSS for styling purposes, providing a responsive and visually appealing user interface for managing the nested array of feature sections and subsections.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

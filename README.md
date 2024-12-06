# Frontend - File Dependency Graph (FDG)

This project is a React-based FDG constructor designed to create, render, and interact with hierarchical file dependency graphs. The tool constructs dependencies between modules, folders, and files in a structured graph format. Developers can use this tool to understand and analyze project structures.

## Features

- **Dynamic Graph Generation:** Automatically generates a dependency graph based on the provided project structure.
- **Interactive Visualization:** Enables interaction with graph nodes and edges.
- **Zoom and Navigation:** Includes zoom-in, zoom-out, and reset functionality for easy navigation
- **Customizable Events:** Supports event handlers for user interactions such as node/edge clicks.
- **Hierarchical Structure:** Visualizes folders and files with distinct styles and properties for better clarity.

## File Structure

Below is an overview of the main files and their responsibilities:

**Components**
- **NavBar:** Handles user interactions and controls graph visualization.
- **GraphMenu:** Provides options for managing hidden nodes and graph-related settings.
- **ZoomSwitcher:** Enables zoom-in, zoom-out, and reset functionality.

**Hooks**
- **useZoom:** Manages zoom level states and their corresponding handlers.
- **useLevelGraphVisualization:** Visualizes graph levels dynamically.

**Visualizer**
- **event.js:** Initializes and manages event handlers for nodes, edges, and clusters.
- **generateDotSchema.js:**  Converts node data into DOT schema for graph rendering.
- **setupGraph.js:**  Configures graph properties and creates the initial graph structure.

**Utils**
- **graphProperties.js:**  Defines properties like shapes, colors, and styles for nodes and edges.
- **buildGraph.js:** Builds level-wise dependency graphs using data from dependencyGraph.json.
- **dependencyGraph.json:** Contains structured data defining nodes and their dependencies.


## Installation and Setup
Follow the steps below to set up and run the project:

1. Clone the repository:
```sh
git clone https://github.com/DixitLukhi/frontend-fdg.git
```
2. Navigate to the project directory:
```sh
cd frontend-fdg
```
3. Install dependencies:
```sh
npm install
```
4. Run the application:
```sh
npm start
```

5. Access the application: 
Open http://localhost:3000 in your browser to view the FDG.


## Steps to Use the FDG Constructor

1. Prepare Project Data:

- Structure your project according to the dependency requirements.
- Update the dependencyGraph.json file with your project nodes and dependencies.

2. Customize Graph Settings:

- Modify the bundler.config.json file to include root modules or update the Babel configuration.

3. Run the Application:

- Start the application to automatically generate and render the dependency graph.

4. Interact with the Graph:

- Click on nodes or edges to see their relationships.
- Use the GraphMenu to hide/unhide specific nodes.
- Adjust zoom levels using the ZoomSwitcher

## How It Works

1. Graph Setup:
- setupGraph.js initializes graph properties such as layout, colors, and styles.
- generateDotSchema.js translates node data into a DOT schema for rendering.

2. Rendering:
- App.js manages rendering the graph using Viz.js.
- SVG elements are appended dynamically to the DOM.

3. Event Handling:
- event.js initializes click, hover, and keyboard events for user interaction.
- Utility functions in utils/handlers.js process these events.
 
4. Dynamic Visualization:
- Graph levels and dependencies are visualized dynamically using useLevelGraphVisualization.
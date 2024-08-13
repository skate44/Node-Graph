# Node Graph Implementation

## Overview
The **Node Graph Implementation** project is a dynamic and interactive visualization tool designed to represent relationships between different services in a system. Each service is depicted as a node, with edges showing the interactions between them. The graph is built using React.js and Cytoscape.js, offering a scalable and performant visualization of complex service networks.

## Features
- **Service Nodes:** Displays each service as a node, showing the service's name, port, K8 namespaces, and K8 clusters.
- **Node Metrics:** Visual representation of the total number of invocations and the success vs. error ratio through colored borders.
- **Service Type Icons:** Includes icons to indicate the type of service (e.g., HTTP, gRPC, MySQL, Redis).
- **Service Interactions:** Directed edges between nodes represent service calls, with metrics like the number of invocations and latency.
- **Edge Thickness:** Varies to indicate the number of invocations between services.
- **Interactivity:** Allows users to explore and interact with the service relationships dynamically.

## Bonus Features
- **Grafana Plugin Integration:** Enhances the existing Grafana Node Graph plugin to support additional metrics, error visualization, and service-type icons, rendering the graph within Grafana.

## Technologies Used
- **React.js** for building the UI components.
- **Cytoscape.js** for the graph visualization.
- **HTML5** for the structure.
- **CSS3** for styling and layout.
- **JavaScript (ES6)** for dynamic functionality.

## Installation
To set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/rahul20107/Node-Graph.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd node-graph
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

## Usage

- **Running the Application:** The graph will be rendered in your default browser at `http://localhost:3000` after starting the server.
- **Adding Nodes and Edges:** Update the `elements` array in the `ServiceGraph.js` file to add new services and interactions.
- **Customizing Styles:** Modify the `styles.css` file to change the appearance of the nodes, edges, and layout to match your preferences.
- **Deploying:** Use your preferred deployment method, such as Netlify or GitHub Pages, to publish the project.

## Project Structure

- `index.html` - The main HTML file for the project.
- `index.js` - The entry point for the React application.
- `App.js` - The main application component.
- `ServiceGraph.js` - Contains the logic for rendering the node graph.
- `styles.css` - Contains all the CSS styling for the project.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or suggestions, feel free to reach out to [rahul20107@iiitd.ac.in](mailto:rahul20107@iiitd.ac.in).

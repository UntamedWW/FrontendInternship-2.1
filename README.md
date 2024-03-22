# My Application Name

## Getting Started

### Prerequisites

What things you need to install the software:

- Node.js
- npm

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:

```
git clone https://github.com/UntamedWW/FrontendInternship-2.1.git
```

2. Install NPM packages:

```
npm install
```

### Start the application

To start the application, navigate to the project directory in your terminal and run the following command:

```
npm start
```

This will start the application and it will be accessible at http://localhost:xxx (whatever port you have configured).
Open your web browser and navigate to this local host.

## Project Structure

The project has a specific directory structure set up. Below is the required directory structure for this project:

- App
- Components
- Pages
- Store
- Api
- Types
- Utils

## Branching Strategy

We use Git for version control. Our branching strategy is as follows:

- `main`: This is the main branch where the source code of HEAD always reflects a production-ready state.
- `develop`: This is the branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release. This is where our daily work (commit) happens.
- `FE-1-init-application`: This is the branch for the task 1. Each task will have its own branch which is branched off from the `develop` branch.

Once the task is completed, the branch will be merged into the `develop` branch. After testing, the `develop` branch would be merged into the `main` branch.

## How application launches within Docker

### Build the Docker Image:

- Navigate to the root directory of your project (where the Dockerfile is located).
- Build the Docker image using the following command:

```
docker build .
```

- Check Docker Images:
  To verify that the image was created successfully, run:

```
docker images
```

- If needed, remove unnecessary images with:

```
docker rmi {{image id}}
```

- Create a Docker Volume:

```
Create a Docker Volume:
```

- Run the Container:
  Start a Docker container using the following command:

```
docker run -p 3000:3000 {{image id}}
```

- Check Running Containers:
  To see the list of running containers, use:

```
docker ps
```

- Access Your Application:
  Open your web browser and navigate to `http://localhost:3000`.

- Stop and Remove the Container:
  When you’re done, stop and remove the container:

```
docker stop my-app-container
docker rm my-app-container
```

- Compose with Docker Compose (Optional):
  If your application has multiple services (e.g., database, backend, frontend), consider using docker-compose.
  Create a `docker-compose.yml` file and define your services.
  Run your application using:

```
docker-compose up
```

That’s it! You’ve successfully launched application within Docker. 🚀

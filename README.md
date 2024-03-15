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
  * App
  * Components
  * Pages
  * Store 
  * Api
  * Types 
  * Utils

## Branching Strategy

We use Git for version control. Our branching strategy is as follows:
- `main`: This is the main branch where the source code of HEAD always reflects a production-ready state.
- `develop`: This is the branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release. This is where our daily work (commit) happens.
- `FE-1-init-application`: This is the branch for the task 1. Each task will have its own branch which is branched off from the `develop` branch.

Once the task is completed, the branch will be merged into the `develop` branch. After testing, the `develop` branch would be merged into the `main` branch.

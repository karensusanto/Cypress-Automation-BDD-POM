pipeline {
    agent any 
    tools {
        nodejs 'Node-26'
    }
    stages {
        // Stage 1: Getting code or preparing environments
        stage('Checkout') {
            steps {
                echo 'Step 1: Pulling code from the repository...'
            }
        }

        // Stage 2: Compiling code or installing dependencies
        stage('Build') {
            steps {
                echo 'Step 2: Building the application...'
                sh 'npm install'
            }
        }

        // Stage 3: Running automated tests
        stage('Test') {
            steps {
                echo 'Step 3: Running tests...'
                sh 'npx cypress run'
            }
        }
    }
}


pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                script {

                    bash 'chmod +x build.sh'
                    bash './build.sh'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                // Build steps go here
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Test steps go here
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Deployment steps go here
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
            // Additional actions after successful build
        }
        failure {
            echo 'Pipeline failed!'
            // Additional actions after failed build
        }
    }
}

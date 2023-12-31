
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                script {

                    sh 'chmod +x build.sh'
                    sh './build.sh'
                }
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

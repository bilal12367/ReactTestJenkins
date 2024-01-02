
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
                    sh 'echo ${USER}'
                    sh 'docker build -t React-App-Test .'
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
                script {
                    // sh 'nohup npm start > /dev/null 2>&1 &'
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                }
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

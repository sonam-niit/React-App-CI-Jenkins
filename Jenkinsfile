pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // Use the NodeJS version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sonam-niit/React-App-CI-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test -- --run'   // Vitest needs --run in CI
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

}

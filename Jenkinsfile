pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Hello'
        sh 'npm install && npm test'
      }
    }

    stage('Test') {
      steps {
        echo 'Test'
      }
    }

  }
}
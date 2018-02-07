pipeline {
    agent {
        docker { image 'node:6.12-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh '''
                	npm install -g serverless
                	serverless --version
                '''
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
	    failure {
	        mail to: 'lehoanganh25991@gmail.com',
	             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
	             body: "Something is wrong with ${env.BUILD_URL}"
	    }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
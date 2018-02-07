pipeline {
    agent { docker 'node:6.12' }
    stages {
        stage('Test') {
            steps {
                sh '''
                    # whoami
                    # whoami ERR
                    # whoami: cannot find name for user ID 112
                	sudo npm install -g serverless
                	serverless --version
                '''
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
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
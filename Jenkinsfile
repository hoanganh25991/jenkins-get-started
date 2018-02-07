pipeline {
    agent { docker 'node:6.12' }
    stages {
        stage('Test') {
            steps {
                sh '''
                    # whoami
                    # whoami ERR
                    # whoami: cannot find name for user ID 112

                    # sudo npm install -g serverless
                    # sudo ERR
                    # sudo: not found
                    #npm install -g serverless
                    #serverless --version
                    npm install
                    npm run deploy
                '''
            }
        }
    }
    post {
        success {
            echo 'This will run only if successful'
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
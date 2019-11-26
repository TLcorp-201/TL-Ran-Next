pipeline {
    agent any

    environment {
        APP_NAME = 'ai-news-front'
        API_BASE =  getApiAddr(env.BRANCH_NAME)
        AUTH_BASE = getApiAddr(env.BRANCH_NAME)
        NODE_ENV= getApplicationEnv(env.BRANCH_NAME)
        PORT=3000
        HOST_PORT=3000
        REGISTER_CRE= 'dockerhub'
    }
    stages {
        stage('Dockerize') {
            when {
                anyOf {
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
              sh 'chmod +x ./clean-image.sh'
              sh 'bash ./clean-image.sh'
              script {
                docker_image = docker.build("tuancaurao1993/${APP_NAME}", "--build-arg API_BASE=${env.API_BASE} --build-arg AUTH_BASE=${env.AUTH_BASE} --build-arg NODE_ENV=${env.NODE_ENV} .")
              }
            }
        }

        stage('Publish Docker') {
            when {
                anyOf {
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
                script {
                    docker.withRegistry('', REGISTER_CRE) {
                        docker_image.push("${env.BRANCH_NAME}-${env.BUILD_NUMBER}")
                        docker_image.push("latest")
                    }
                }
            }
        }

        stage('Deploy') {
            environment {
                DEPLOY_TO = deployTo(env.BRANCH_NAME)
            }
            when {
                anyOf {
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
              script {
                sh 'docker run --name ai-new-front-ins-jenkins -p ${HOST_PORT}:${PORT} -d tuancaurao1993/${APP_NAME}'
              }
            }
        }
    }
}

def getApiAddr(branch) {
    if (branch == 'develop') {
        return 'https://api.bangtin.vn/v2'
    } else {
        return 'https://api.bangtin.vn/v2'
    }
}

def getApplicationEnv(branch) {
    return 'production'
}

def deployTo(branch) {
    if (branch == 'develop') {
        return 'develop'
    } else {
        return 'stage'
    }
}

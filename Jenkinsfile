node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("user/node_env_config")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * This runs only a single dummy test inside the image. */

        app.inside {
            sh 'npm test'
        }
    }

}

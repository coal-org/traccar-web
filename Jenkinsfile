pipeline {
    agent any

    environment {
        // Definir variables de entorno, como GRADLE_HOME si es necesario
        echo 'Enviroment...'
    }

    stages {
        stage('Checkout') {
            steps {
                // Obtener código fuente desde el control de versiones
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Compilar el proyecto usando Gradle
                echo 'Build...'
                sh "ff"
            }
        }

        stage('Tests') {
            steps {
                // Ejecutar pruebas (puedes modificar esto según sea necesario)
                echo 'Test...'
            }
        }

        stage('Archive') {
            steps {
                // Archivar artefactos como el JAR compilado
                echo 'Artifacts...'
                archiveArtifacts artifacts: 'build/*.js', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                // Mover los archivos compilados a la ruta correcta
                echo 'Deploy backend...'
                sh  '''
                    sudo cp -r -f /var/lib/jenkins/workspace/traccar-prod/* /opt/traccar/
                    sudo systemctl restart traccar
                '''
            }
        }
    }

    post {
        // Definir acciones post-ejecución como limpieza, notificaciones, etc.
        always {
            // Ejecutar siempre después de las etapas
            echo 'Proceso finalizado...'
        }

        success {
            // Ejecutar solo si el pipeline ha sido exitoso
            echo 'Con éxito...' 
        }

        failure {
            // Ejecutar solo si el pipeline ha fallado
            echo 'Con error...'
        }
    }
}

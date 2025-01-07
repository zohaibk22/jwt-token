import dotenv from 'dotenv'
import { app } from './src/index'

dotenv.config()

const PORT = process.env.PORT || 3000 
console.log(PORT, 'port')

class App {
    constructor(application, port){
        this.application = application
        this.PORT = port
        
    }
    async initServer(){
        console.log(this.port)
        this.application.listen(this.PORT,() => {
            console.log(`App is running on PORT: ${this.PORT}`)
        } )

    }


}

const application = new App(app, PORT)
application.initServer()
// const initServer = async () => {
//     app.listen(port, ()=> {
//         console.log(`App is running on PORT: ${port}`)

//     });

// };

// initServer();
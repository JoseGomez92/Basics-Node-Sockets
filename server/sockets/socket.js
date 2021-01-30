const socketIO = require('socket.io')


//Configure socket in the server (back-end)
module.exports = function(server) {
    let io = socketIO(server)

    io.on('connection', (client) => {
        console.log('INFO - User connected')

        //Client disconnected
        client.on('disconnect', () => {
            console.log('INFO - User disconnected')
        })


        //Listen messages (messagePrivateType type)
        client.on('messagePrivateType', (message, callback) => {
            console.log(`INFO - MESSAGE FROM: ${ message.data }: ${ message.data }`)
            message.data ? callback({ serverSays: 'Yesss!!' }) : callback({ serverSays: 'Operation KO' })
        })


        //Emit messages to clients
        client.emit('messagePrivateType', {
            message: 'Welcome to application!!'
        })


        //Listen messages and send broadcast 
        client.on('messageBroadcastType', (message) => {
            client.broadcast.emit('messageBroadcastType', message)
        })

    })
}
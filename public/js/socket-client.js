var socket = io()

//Event when connect to socket
socket.on('connect', function () {
  console.log('INFO - Connected to server')
})

//Event when disconnect to socket
socket.on('disconnect', function () {
  console.log('INFO - Disconnect to server')
})


//Listen info (messagePrivateType)
socket.on('messagePrivateType', function (message) {
  console.log(message)
})


//Send info (messageType1)
socket.emit(
  'messagePrivateType',
  {
    data: "There's someone there?",
  },
  function (response) {
    console.log(response)
  },
)


//Send broadcast (messageBroadcastType)
socket.on('messageBroadcastType', function(message) {
  console.log(message)
})

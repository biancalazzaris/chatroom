const app = require('./config/server');

//START SOCKET 

const server = app.listen(5000, ()=> {
    console.log('app start => http:localhost:5000');
});


const io = require('socket.io')(server);

//setando a variavel de socket io para que todo o app possa utilizar
app.set('io', io);

io.on('connection', (socket) => {
    console.log('Entrei na sala! o/');

    socket.on('disconnect', ()=> {
        console.log('saiu da sala');
    });

    socket.on('msgParaServidor', (data)=> {
        socket.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem,
        });
    });

//disparando uma mensagem para todos os usuarios
    socket.broadcast.emit('msgParaCliente', {
        apelido: data.apelido,
        mensagem: data.mensagem,    
        });
});

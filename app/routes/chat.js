module.exports = (application) => {
    application.get('/chat', (req, res) => {
        // res.render('chat');
        //express app module file method 
        application.app.controllers.chat.iniciaChat(application, req, res);
    });


    application.post('/chat', (req, res)=> {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}
import Express from 'express'
import path from 'path';
import Path from 'path';
const app= Express();
const dir=path.resolve();
const dir_front="app_actividades/build/";

app.use(Express.static(dir_front))
app.listen('5000', function(){
    console.log("servidor iniciado")
})

app.get('/',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})

app.get('/login',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})
app.get('/home',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})
app.get('/consultar',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})

app.get('/editar',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})
app.get('/descripcion',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})
app.get('/tiempo',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})
app.get('/activity',function(req, res){
    //res.sendFile('C:/ReactApp/index.html')
    res.sendFile(dir+'/'+dir_front+'index.html')
})
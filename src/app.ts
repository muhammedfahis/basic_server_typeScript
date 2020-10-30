import express,{Application,request,response,NextFunction} from 'express';


const app: Application = express();

const Add = (a:number , b:number):number =>a+b;

app.get('/',(req ,res)=>{
    console.log(Add(5,8));
    
    res.send('welcome to typescript');
});

app.listen(3001,()=>console.log(`server is running in 3001`));

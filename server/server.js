const express=require('express');
const mongoose=require('mongoose');
const Users=require('./models/userModel');
const cookieParser=require('cookie-parser')
const cors=require('cors')
const app=express();
require('dotenv').config()
const port=process.env.port|| 5000;

// // Define the allowed origin
// const allowedOrigin = 'https://rivora-client.vercel.app';

// // CORS configuration
// app.use(cors({
//     origin: allowedOrigin,       // Specify the allowed origin
//     credentials: true,           // Allow cookies to be sent
// }));

app.use(express.json());
const corsOptions = {
    origin: 'https://rivora-client.vercel.app',// Allow requests from this origin['http://localhost:5173',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
//app.use(cors());
app.use(express.static("public"));
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hello server')
})

app.listen(port,()=>{
    console.log('Server running on 5000 port')
})


//routes
app.use(cors(corsOptions),'/user',require('./routes/userRoutes'))
app.use(cors(corsOptions),'/api',require('./routes/categoryRoutes'))
app.use(cors(corsOptions),'/api',require('./routes/productRoutes'))
app.use(cors(corsOptions),'/api',require('./routes/upload'))
app.use(cors(corsOptions),'/api',require('./routes/casualProutes'))
app.use(cors(corsOptions),'/api',require('./routes/formalProutes'))
app.use(cors(corsOptions),'/api',require('./routes/ethnicProutes'))



//connect to mongodb
const URI=process.env.MONGO_URL
console.log(process.env.MONGO_URL)
mongoose.connect(URI,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('MongoDB connected')
}).catch(err=>{
    console.log(err);
})

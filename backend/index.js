//Importing all necesory packages
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')



app.use(cors());
app.use(bodyParser.json())

//creating object databse

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "productdb"
});

//connecting to database

db.connect(err=>{
    if(err)
        console.log(err)
    else
    console.log("Connected to database")
})

//get all data

// app.get('/user',(req,res)=>{
//     let qr='select * from products,categories where categories.cid=products.cid';
//     console.log(qr)
//     db.query(qr,(err,result)=>{
//         if(err)
//             console.log(err,"Error occured")
//         if(result.length>0){
//             res.send({
//                 message:"all product data",
//                 data:result
//             })
//         }

//     })
// })

//get single product data data
app.get('/user/:pid',(req,res)=>{
    let id=parseInt(req.params.pid);
    let qr=`select * from products,categories where categories.cid=products.cid and products.pid = ${id}`;
    console.log(qr)
    db.query(qr,(err,result)=>{
        if(err)
            console.log(err)
        if(result.length>0){
            res.send({
                message:"this is single data",
                data:result
            })
        }else
            console.log("User not found!")
    })
})

//create product record

app.post('/user',(req,res)=>{

    let pname=req.body.pname;
    let pdesc=req.body.pdesc;
    let cid=parseInt(req.body.cid);
    let qr=`insert into products (pname,pdesc,cid) values('${pname}','${pdesc}',${cid})`;
    console.log(qr," <=query")
    db.query(qr,(err,result)=>{
        if(err)
        console.log(result,"Result")
        res.send({
            message:'product Added'
        })
    })
})

//put method to update product

app.put('/user/:pid',(req,res)=>{
    let pname=req.body.pname;
    let pdesc=req.body.pdesc;
    let cid=parseInt(req.body.cid);
    let id=parseInt(req.params.pid);
    // update products set pname='product11',pdesc='product description 11',cid=1 where pid=1
    let qr=`update products set pname='${pname}', pdesc='${pdesc}', cid='${cid}' where pid=${id}`;
    console.log(qr,"<=query");
    db.query(qr,(err,result)=>{
        if(err)
            console.log(err,"error occured")
        res.send({
            message:"data updated!"
        });
    });


});

//Delete the record

app.delete('/user/:pid',(req,res)=>{
    let id=parseInt(req.params.pid);
    let qr=`delete from products where pid = ${id}`;
    console.log(qr,"<=query")
    db.query(qr,(err,result)=>{
        if(err)
            console.log(err,"erro occured")
        res.send({
            message:"data deleted"
        });
    });
});

//To Get all catogory

app.get('/category',(req,res)=>{
    let qr='select * from categories';
    console.log(qr,"<== query");
    db.query(qr,(err,result)=>{
        if(err)
            console.log(err);
        if(result.length>0){
                res.send({
                    message:"all category data",
                    data:result
                });
            }
    });
});

//to create category

app.post('/category',(req,res)=>{
    let cname=req.body.cname;
    let qr=`insert into categories(cname) values('${cname}')`;
    console.log(qr,"<=query");
    db.query(qr,(err,result)=>{
        if(err)
            console.log(result,"<===result")
        else{
            res.send({
                message:"category Added"
            });

        }
    });
});

//update category

app.put('/category/:cid',(req,res)=>{
    let cid=parseInt(req.params.cid);
    let cname=req.body.cname;
    let qr=`update categories set cname='${cname}' where cid=${cid}`;
    console.log(qr,"<==query");
    db.query(qr,(err,result)=>{
        if(err)
        console.log(result,"result");
        else{
            res.send({
                message:"category updated"
            })
        }
    })
})

//select single category
app.get('/category/:cid',(req,res)=>{
    let cid=parseInt(req.params.cid);
    let qr=`select * from categories where cid=${cid}`;
    console.log(qr,"<==Query")
    db.query(qr,(err,result)=>{
        if(err)
            console.log(err,"<==err")
        if(result.length>0){
            res.send({
                message:"category updated",
                data:result
            })
        }else{
            res.send({
                message:"no record found"
            })
        }
    })
})

//delete category

app.delete('/category/:cid',(req,res)=>{
    let cid=req.params.cid;
    let qr=`delete from categories where cid=${cid}`;
    console.log(qr,'<==query');
    db.query(qr,(err,result)=>{
        if(err)
            console.log(result,"<==result")
        else{
            res.send({
                message:"deleted successfully"
            });
        }
    })
})


//get pagiantion wise data

app.get('/user/:offset/:limit',(req,res)=>{
    let offset=parseInt(req.params.offset);
    let limit=parseInt(req.params.limit);
    let qr=`select * from products,categories where categories.cid=products.cid limit ${offset}, ${limit};`
    let totalqr="select count(*) as total from products";
    db.query(qr,(err,result)=>{
        if(err){
            throw err;
        }else{
            db.query(totalqr,(error,results)=>{
                if(error) throw err
                else{
                    console.log(result,results);
                    res.send({
                        message:"Get data",
                        data:result,
                        total:results
                    })
                }
            })
            
        }
    })

})

//listening on port 3000 localhost
const server=app.listen(3000,()=>{
    console.log("Serever is up...")
    console.log("server :",server.address().address);
    console.log("port :",server.address().port)
})


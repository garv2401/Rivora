const formalProducts=require('../models/formalPModel');

class APIfeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString
    }

    filtering(){
        const queryObj={...this.queryString};
        //console.log(queryObj);
        const excludedFields=['page','sort','limit'];
        excludedFields.forEach(el=>delete(queryObj[el]));
        //console.log(queryObj);
        let queryStr=JSON.stringify(queryObj);
        queryStr=queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g,match=>'$'+match);
        this.query.find(JSON.parse(queryStr));
        return this;

    }

    sorting(){
        if(this.queryString.sort){
            const sortBy=this.queryString.sort.split(',').join('')

            this.query=this.query.sort(sortBy)
            console.log(sortBy);
        }else{
            this.query=this.query.sort('-createdAt')

        }

        return this

    }

    pagination(){
        const page=this.query.page*1 || 1;
        const limit=this.query.limit*1||9;

        const skip=(page-1)*limit;
        this.query=this.query.skip(skip).limit(limit);
        return this;

    }
}



const casualPCtrl={
    getProducts:async(req,res)=>{
        try{
            
            const features=new APIfeatures(formalProducts.find(),req.query).filtering().sorting().pagination();
            const products=await features.query;
            
            // const products=await Products.find();
            return res.json({products});


        }catch(err){
            return res.status(500).json({msg:err.message});
        }

    },
    createProduct:async(req,res)=>{
        try{
            const {product_id,title,price,description,content,images,category}=req.body;

            const product=await formalProducts.findOne({product_id});
            if(product){
                return res.status(400).json({msg:"This product already exists"})
            }

            const newProduct=new formalProducts({
                product_id,title:title.toLowerCase(),price,description,content,images,category
            })

            await newProduct.save();

            return res.json({msg:"Created a product"})
            

        }catch(err){
            return res.status(500).json({msg:err.message});

        }
    },
    deleteProduct:async(req,res)=>{
        try{
        formalProducts.findOneAndDelete({ _id: req.params.id });
            return res.json({msg:"Deleted a product"})

        }catch(err){
            return res.status(500).json({msg:err.message});

        }
    },
    updateProduct:async(req,res)=>{
        try{
            const {title,price,description,content,images,category}=req.body;
            if(!images){
                return res.status(500).k=json({msg:"No Image uploaded"})
            }

            await formalProducts.findOneAndUpdate({_id:req.params.id},{
                title:title.toLowerCase(),price,description,content,images,category
            });

            return res.json({msg:"Updated a product"})

        }catch(err){
            return res.status(500).json({msg:err.message});
        
        }
    }

}

module.exports=casualPCtrl
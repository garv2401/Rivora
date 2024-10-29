const Category=require('../models/categoryModel')

const categoryCtrl={
    getCategories:async(req,res)=>{
        try{
            const categories=await Category.find();
            res.json(categories);

        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },

    createCategory:async(req,res)=>{
        try{
            const {name}=req.body;
            const category=await Category.findOne({name});
            if(category){
                return res.status(400).json({msg:"Category Already Exists!"})
            }

            const newCategory=new Category({name});
            await newCategory.save();
            

            res.json({msg:'Created Category'})

        }catch(err){
            res.status(500).json({msg:err.message});
        }
    },

    deleteCategory:async(req,res)=>{
        try{
            await Category.findByIdAndDelete(req.params.id);
            return res.json({msg:"Deleted a Category"});


        }catch(err){
            return res.status(400).json({msg:err.message});

        }

    },
    updateCategory:async(req,res)=>{
        try{
            const category=await Category.findById(req.params.id);
            if(category){
                const {name}=req.body;
                await Category.findByIdAndUpdate(req.params.id,{name:name});
                return res.json({msg:"Updated a Category"})

            }else{
                return res.status(400).json({msg:"Category Does not exists"})
            }

        }catch(err){

        }

    }


}
module.exports=categoryCtrl
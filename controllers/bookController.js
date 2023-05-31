const bookModel = require("../models/bookCollection");


exports.Creatnewbook = async (req,res)=>{
    try {
        const { Title,Author,Description,PublishedYear } = req.body;
    if(!Title.trim()){
        return res.json({error:"Title must be required"});
    }
    if(!Author.trim()){
        return res.json({error:"Author must be required"});
    }

    const bookmodel = await new bookModel({
        Title : Title,
        Author : Author,
        Description : Description,
        PublishedYear: PublishedYear,
    }).save();

    res.status(200).json({
        bookmodel: {
            success: true,
            message:"book create done",
            // Data:bookmodel,
            Title: bookmodel.Title,
            Author:bookmodel.Author,
            Description: bookmodel.Description,
            PublishedYear:bookmodel.PublishedYear
        }
    })
    } catch (error) {
        console.log(error);
    }
};

exports.findAllbook = async (req,res)=>{
    try {
       
        const findallBook = await bookModel.find();
        const findbooks = findallBook.map((book)=>({
          title:book.Title,
          author:book.Author,
          publishedYear:book.PublishedYear
        }));
        
        
        res.status(200).json({
            massage:"success to find all books from database",
            data:findbooks,

        })
        
    } catch (err) {
        console.log(err);
    }
};

exports.findOnebook = async(req,res)=>{
    try {
        const {id} = req.params
        const findonebook = await bookModel.findOne(
            {
               _id:id
            }
           
        );
        res.status(200).json({
            massage:"Success to find a book using _id from req.params",
            _id:findonebook._id,
            title:findonebook.Title,
            author:findonebook.Author,
            publishedYear:findonebook.PublishedYear,
        });
    } catch (err) {
        console.log(err);
    }
};

exports.singleBookUpdate= async(req,res)=>{
    try {

        const {id} = req.params;
        
        const{Title, Author, PublishedYear, description} = req.body

        
        const singleBookUpdate = await bookModel.findByIdAndUpdate(id,{
            Title: Title,
            Author: Author,
            PublishedYear: PublishedYear
        })
        res.status(200).json({
            massage:"success oneSingle book update using req.params",
            success: true,
            data:singleBookUpdate
    })
    } catch (err) {
        console.log(err);
    }
}

exports.deleteAbook = async (req,res)=>{
    try {
        const {id}= req.params;

    const deleteOneBook = await bookModel.deleteOne({_id:id});
    if(id==id){
        return res.json({error:"This id is allready deleted from database"})
    }

    res.json({
        massage:"delete",
        data:deleteOneBook,
    })
    } catch (error) {
        console.log(error);
    }

}


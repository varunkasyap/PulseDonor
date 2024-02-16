const testController= (req,res) =>{
    res.status(200).send({
        message:"Welcome dear user",
        success:true,

    });
};

module.exports ={testController};
import db from "../model/database.js";
export const createCatagory = (req, res) => {
  const { name } = req.body;
  const catagory = { name };

  db.query("INSERT INTO catagories SET ?", catagory, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res
        .status(201)
        .json({
          message: "Category created successfully",
          id: result.insertId,
        });
    }
  });
};
export const getAllCatagories = (req, res) => {
  try {
    db.query("SELECT * FROM catagories", (err, result) => {
      if (result) {
        return res.status(200).json(result);
      }else{

          return res.status(500).json({ err});
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getCatagoryById = (req, res) => {
    const id = req.params.id;

    db.query("select * from catagories where id=?",id,(err,result)=>{
        if(err){
             res.status(500).json({err});
        }else if(result.length===0){

             res.status(404).json({message:'result not found'});
        }else{

             res.status(200).json(result[0]);
        }
    })
}

export const updateCatagoryById = (req, res) => {
    const id = req.params.id;
    const {name} = req.body;

    db.query("update catagories set name=? where id=?",[name,id],(err,result)=>{
        if(err){return res.status(500).json({err});}
        return res.status(200).json(result);
    })
}

export const deleteCatagoryById = (req, res) => {
    const id = req.params.id;
    db.query("delete from catagories where id=?",id,(err,result)=>{
        if(err){return res.status(500).json({err});}
        return res.status(200).json(result);
    })
}
export const Controllers = { createCatagory, getAllCatagories,getCatagoryById ,updateCatagoryById,deleteCatagoryById};
export default Controllers;

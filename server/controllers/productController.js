import database from '../model/database.js'

export const createProduct = async(req, res) => {

    const {name,catagoryId}=req.body;

    const product = {name,catagoryId};

   await database.query("insert into products set ?",product,(err,result) => {
        if(err) return res.status(400).json(err);
        return res.status(201).json(result);
    })
}

const getProduct = async(req, res)=>{
    const pageSize=10;
    const currentPage = req.query.page || 1;
    const offset = (currentPage-1) * pageSize;
    await database.query("select * from products limit ?,?",[offset,pageSize],(err,result) => {
        if(err) return res.status(400).json(err);
        return res.status(201).json(result);
    })
}

const getProductById =async (req, res)=>{

    const id = req.params.id;
   await database.query("select * from products where id=?",id,(err,result)=>{
        if(err) return res.status(400).json(err);
        return res.status(201).json(result);
    })
}

const updateProduct = async(req, res)=>{
    const id = req.params.id;
    const {name,catagoryId} = req.body;
    await database.query("update products set name=?,catagoryId=? where id=?",[name,catagoryId,id],(err,result)=>{
        if(err) return res.status(400).json(err);
        return res.status(201).json(result);
    })
}

const deleteProduct = async(req, res)=>{
    const id = req.params.id;
    await database.query("delete from products where id=?",id,(err,result)=>{
        if(err) return res.status(400).json(err);
        return res.status(201).json(result);
    })
}

const getProductAndCatagory = async(req, res)=>{
    const query = `
    SELECT products.id AS ProductId, products.name AS ProductName, 
           catagories.name AS CatagoryName, products.catagoryId AS CatagoryId
    FROM products
    INNER JOIN catagories ON products.catagoryId = catagories.id
  `;

 await database.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
}

const getPaginatedProducts = async(req, res) => {
    const pageSize = 10; 
    const currentPage = req.query.page || 1; 
  
    const offset = (currentPage - 1) * pageSize;
  
    const query = `
      SELECT products.id AS ProductId, products.name AS ProductName, 
             catagories.name AS CatagoryName, products.catagoryId AS CategoryId
      FROM products
      INNER JOIN catagories ON products.catagoryId = catagories.id
      ORDER BY products.id
      LIMIT ?, ?
    `;
  
    await database.query(query, [offset, pageSize], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json(results);
      }
    });
  };
const productController ={createProduct,getProduct,getProductById,updateProduct,deleteProduct,getProductAndCatagory,getPaginatedProducts}
export default productController
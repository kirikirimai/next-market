
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

const deleteItem = async (req, res) => {
  try {
    await connectDB()
    await ItemModel.deleteOne({_id:req.query.id});
    return res
      .status(200).send({ message: "アイテム削除成功" });
  } catch (error) {
    return res.status(400).send({ message: "アイテム削除失敗" });
  }
};

export default deleteItem;

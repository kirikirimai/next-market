
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

const updateItem = async (req, res) => {
  try {
    await connectDB()
    await ItemModel.updateOne({_id:req.query.id},req.body);
    return res
      .status(200).send({ message: "アイテム編集成功" });
  } catch (error) {
    return res.status(400).send({ message: "アイテム編集失敗（シングル）" });
  }
};

export default updateItem;

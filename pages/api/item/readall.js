import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

const getAllItems = async (req, res) => {
  try {
    //データベース接続
    await connectDB();
    const allItems = await ItemModel.find();
    return res.status(200).send({ message: "アイテム読み込み完了",allItems:allItems });
  } catch (error) {
    //データベース接続

    return res.status(400).send({ message: "アイテム読み取り失敗" });
  }
};

export default getAllItems;

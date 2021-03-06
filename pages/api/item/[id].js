import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

const getSingleItem = async (req, res) => {
  try {
    await connectDB();
    console.log(req);
    const singleItem = await ItemModel.findById(req.query.id);
    return res
      .status(200).send({ message: "アイテムよみこみシングル", singleItem: singleItem });
  } catch (error) {
    return res.status(400).send({ message: "アイテム読み取り失敗（シングル）" });
  }
};

export default getSingleItem;

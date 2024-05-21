import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
const updateProductFromDB = async (
  id: string,
  updatedProduct: Partial<TProduct>,
) => {
  const result = await Product.updateOne({ _id: id }, { $set: updatedProduct });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const getProductBySearchTerm = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [{ name: regex }, { description: regex }],
  });
  if (result.length === 0) {
    throw new Error('No product found for this search: ' + searchTerm);
  }
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
  getProductBySearchTerm,
};

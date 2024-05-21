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
  
  if(!result) {
    throw new Error("Product not found");
  }
  
  return result;
};
const updateProductFromDB = async (
  id: string,
  updatedProduct: Partial<TProduct>,
) => {
  try {
    const updatedData = await Product.findOneAndUpdate(
      { _id: id },
      { $set: updatedProduct },
      { new: true },
    );
    if (!updatedData) {
      throw new Error('Product is not found');
    }
    return updatedData;
  } catch (error: unknown) {
    throw new Error('Error updating product: ');
  }
};

const deleteProductFromDB = async (id: string) => {
  try {
    const result = await Product.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      throw new Error('Product not found');
    }

    return null;
  } catch (error: unknown) {
    throw new Error('Error deleting product: ' + error);
  }
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

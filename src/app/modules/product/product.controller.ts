// controller
import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  const { product: productData } = req.body;
  try {
    // data validation using zod

    const zodParseData = productValidationSchema.parse(productData);

    // will call service func to send this data
    const result = await ProductService.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm as string;

  try {
    if (typeof searchTerm !== 'string') {
      const result = await ProductService.getAllProductsFromDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    } else {
      const result = await ProductService.getProductBySearchTerm(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    }
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { product: updatedData } = req.body;

    const zodParseData = productValidationSchema.parse(updatedData);

    const result = await ProductService.updateProductFromDB(
      productId,
      zodParseData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
};

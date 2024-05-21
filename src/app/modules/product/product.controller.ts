// controller
import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    // data validation using zod
    console.log({ productData });

    const zodParseData = productValidationSchema.parse(productData);

    console.log({ zodParseData });

    // will call service func to send this data
    const result = await ProductService.createProductIntoDB(zodParseData);

    console.log({ result });

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);
    console.log({ result });

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
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
    console.log({ result });

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
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
            message: "Product deleted successfully!",
            data: result,
          });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong.",
            error: error,
          });
    }
}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct
};

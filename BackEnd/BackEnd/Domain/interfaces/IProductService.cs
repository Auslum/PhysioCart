using BackEnd.Domain.dto;
using BackEnd.Domain.models;
using BackEnd.Models;
using System.Collections.Generic;

namespace BackEnd.Domain.interfaces
{
    public interface IProductService
    {
        List<Product> GetAllProducts();
        int AddProduct(Product product);
        int UpdateProduct(Product product);
        Product GetProductData(int productId);
        string DeleteProduct(int productId);
        List<Categories> GetCategories();
        List<CartItemDto> GetProductsAvailableInCart(string cartId);
        List<Product> GetProductsAvailableInWishlist(string wishlistID);
    }
}

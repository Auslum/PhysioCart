using BackEnd.Models;

namespace BackEnd.Domain.dto
{
    public class CartItemDto
    { 
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}

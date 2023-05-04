using System;
using System.Collections.Generic;

namespace BackEnd.Domain.models
{
    public partial class CartItems
    {
        public int CartItemId { get; set; }
        public string CartId { get; set; }
        public int ProductoId { get; set; }
        public int Quantity { get; set; }
    }
}

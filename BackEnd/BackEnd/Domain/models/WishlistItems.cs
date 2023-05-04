using System;
using System.Collections.Generic;

namespace BackEnd.Domain.models
{
    public partial class WishlistItems
    {
        public int WishlistItemId { get; set; }
        public string WishlistId { get; set; }
        public int ProductoId { get; set; }
    }
}

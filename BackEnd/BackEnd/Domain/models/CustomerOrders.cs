﻿using System;
using System.Collections.Generic;

namespace BackEnd.Domain.models
{
    public partial class CustomerOrders
    {
        public string OrderId { get; set; }
        public int UserId { get; set; }
        public DateTime DateCreated { get; set; }
        public decimal CartTotal { get; set; }
    }
}

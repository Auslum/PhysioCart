﻿using System;
using System.Collections.Generic;

namespace BackEnd.Domain.models
{
    public partial class Cart
    {
        public string CartId { get; set; }
        public int UserId { get; set; }
        public DateTime DateCreated { get; set; }
    }
}

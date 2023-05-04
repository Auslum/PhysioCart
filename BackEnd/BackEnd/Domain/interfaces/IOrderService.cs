using BackEnd.Domain.dto;
using System.Collections.Generic;

namespace BackEnd.Domain.interfaces
{
    public interface IOrderService
    {
        void CreateOrder(int userId, OrdersDto orderDetails);
        List<OrdersDto> GetOrderList(int userId);
    }
}

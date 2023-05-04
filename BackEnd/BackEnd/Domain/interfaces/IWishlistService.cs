namespace BackEnd.Domain.interfaces
{
    public interface IWishlistService
    {
        void ToggleWishlistItem(int userId, int productId);
        int ClearWishlist(int userId);
        string GetWishlistId(int userId);
    }
}

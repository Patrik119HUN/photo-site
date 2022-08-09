import { useContext } from "react";
import { ShopifyContext } from "utils/Shopify";
const useShop = () => {
    const context = useContext(ShopifyContext)
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext")
    }
  
    return context
  }
  
  export default useShop
const BASE_URL = "https://e-waste-trade-hub.onrender.com/api/v1"

export const authendpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/resetpasswordtoken",
    RESETPASSWORD_API: BASE_URL + "/auth/resetpassword"
}

export const contactus = {
    CONTACTUS_API: BASE_URL + "/auth/contactus"
}

export const settings = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/auth/updatedisplayimage",
    UPDATE_PROFILE_API: BASE_URL + "/auth/updateprofile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/auth/deleteaccount",
    UPDATE_VENDOR_DETAILS_API: BASE_URL + "/vendor/updatevendordetails"
}

export const product = {
    ADD_PRODUCT_API: BASE_URL + "/individual/createproduct",
    UPDATE_PRODUCT_API: BASE_URL + "/individual/updateproduct",
    DELETE_PRODUCT_API: BASE_URL + "/individual/deleteproduct",
    GET_ALL_CATEGORY_API: BASE_URL + "/individual/getallcategory",
    GET_ALL_BRAND_API: BASE_URL + "/individual/getallbrand",
    GET_ALL_MY_PRODUCTS: BASE_URL + "/individual/getallproductsofuser",
    GET_ALL_INTERESTED_SHOP: BASE_URL + "/individual/allinterestedshopekeepers",
    GET_FULL_DETAILS_OF_PRODUCT: BASE_URL + "/individual/getproductDetail"
}

export const vendor = {
    GET_ALL_VENDOR: BASE_URL + "/individual/getshopbycity",
    GET_ALL_PRODUCTS: BASE_URL + "/vendor/getallproducts",
    ADD_PRICE: BASE_URL + "/vendor/addprice",
    OTHER_PRICE: BASE_URL + "/vendor/othershopkeeperprice",
    GET_INTERESTED_PRODUCT: BASE_URL + "/vendor/interestedproduct",
    EDIT_PRICE: BASE_URL + "/vendor/editprice",
    DELETE_PRICE: BASE_URL + "/vendor/deleteprice",
}

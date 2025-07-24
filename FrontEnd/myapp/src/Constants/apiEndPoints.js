const endPoints = {
    createResEndPoint : "restaurant/create",
    getResEndPoint : "restaurant/getall",
    deleteResEndPoint : "restaurant/delete",
    editResEndPoint : "restaurant/edit",
    approveResEndPoint :"restaurant/approve",
    addPhoto :"image/upload",
    getAllNames : "restaurant/rests-names",
    addmenuEndpoint :"restaurant/create-menu",
    getApprovedRestaurant : "restaurant/getapproved",


    //Admin
    getAdminEndPoint : "admin/allrestaurants",
    approveEndPoint : 'admin/approve-restaurant',

    //Menu
    getAllMenues : "menu/getall",
    adminMenues : "menu/getforadmin",
    deleteMenu : "menu/delete",
    menuActivate : "menu/changestatus",


    //Client
    approvedMenu : "menu/getapprovedmenu",
    placeOrder : "order/placeorder",
    getSingleRest : "restaurant/getsinglerest",
    multipleOrders : "order/placemultipleorder"

}
export default endPoints
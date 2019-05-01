module.exports = {
    dbName : 'sakila',
    collections : {
        customers : {
            collectionName :'customers',
            fields : {

            }
        },
        films : 'films',
        stores : {
            collectionName : 'stores',
            fields : {
                id : '_id',
                address : 'Address',
                city : 'City',
                country : 'Country',
                inventory : 'Inventory',
                managerFirstName : 'Manager First Name',
                managerLastName : 'Manager Last Name',
                phone : 'Phone',
                staff : 'Staff'
            },
            staff : {
                staffId : "staffId",
                address : "Address",
                city :"City",
                country : "Country",
                firstName : "First Name",
                lastName: "Last Name",
                phone : "Phone"
}
        }
    }
}
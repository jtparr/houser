//remember, in database zipcode key is just "zip"

module.exports = {
    getHouseList: (req, res) => {
        const db = req.app.get('db');
        db.get_houselist().then(houses => {
            res.status(200).send(houses)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something's wrong on our end." })
            console.log(err)
        })
    },


    addNewProperty: (req, res) => {
        const { name, address, city, propertystate, zipcode, img, mortgage, rent } = req.body
        console.log('req.body', name, address, city, propertystate, zipcode, img, mortgage, rent)
        const db = req.app.get('db');
        db.add_new_property(name, address, city, propertystate, zipcode, img, mortgage, rent).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something's wrong on our end." })
            console.log(err)
        })
    },

    deleteProperty: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
        db.delete_property(params.id).then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong on our end." })
            console.log(err)
        })
    }

}

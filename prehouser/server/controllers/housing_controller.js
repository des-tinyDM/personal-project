module.exports = {
    getListings: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body;

        dbInstance.get_listings().then(listings => 
        res.status(200).send(listings) )
        .catch( () => res.status(500).send() );
    },

    postListing: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body;

        dbInstance.post_listing([name, address, city, state, zip])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },

    deleteListing: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_listing( [id] )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
}
// This JS file is used for writing long syntax of MongoDB for learning $group

// #1 simple
db.products.aggregate([
    {
        $group: {
            _id: '$company',
            'anyName': { $sum: '$price' } // Add Dollar ($)
        }
    }
])

// #2

db.products.aggregate([
    // First Pipeline
    {
        $match: {
            'price': {
                $eq: 1099
            }
        }
    },
    // Second Pipeline
    {
        $group: {
            _id: '$price',
            'totalPrice': { $sum: '$price' },
            'average': { $avg: '$price' }
        }
    },
    // Third Pipeline
    {
        $sort: { totalPrice: 1 }
    }
])

// #4

db.products.aggregate([
    {
        $match: {
            'price': { // filter
                $gt: 300
            }
        }
    },
    {
        $group: {
            _id: '$price', // accumulator
            'anyName': { $sum: '$price' } // Operation & on which field
        }
    }
])

// #5

db.products.aggregate([
    {
        $match: {
            'price': {
                $eq: 1099
            }
        }
    },
    {
        $group: {
            _id: '$price',
            'totalPrice': { $sum: '$price' },
            'average': { $avg: '$price' }
        }
    }
])

// #6

db.products.aggregate([
    {
        $match: {
            'price': {
                $eq: 1099
            }
        }
    },
    {
        $group: {
            _id: '$price',
            'totalPrice': { $sum: '$price' },
            'average': { $avg: '$price' }
        }
    },
    {
        $sort: { totalPrice: 1 }
        // Sorts total price in accending order
    }
])

// #7

db.products.aggregate([
    {
        $project: {
            price: 1,
            _id: 0,
        }
    }
])

// #8

db.products.aggregate([
    {
        $project: {
            $filter: {
                input: '$values',
                as: 'val',
                cond: { $gt: ['$$val', 30] }
                // Don't Forgot to Use Double Dollar Sign ($$)
            }
        }
    }
])





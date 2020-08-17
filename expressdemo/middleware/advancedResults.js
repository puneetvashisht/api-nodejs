const advancedResults = (model, populate) => async (req, res, next) => {

    console.log(req.query)

    if(!req.otherRolesFlag){
        req.query.user = req.user;
    }
    
    

    const reqQuery = {...req.query};
   
    //Logic to remove field & delete from reqQuery
    const removeFields = ['select', 'sort', 'limit', 'page'];
    removeFields.forEach(param=> delete reqQuery[param])

    console.log(reqQuery);

    let queryStr = JSON.stringify(reqQuery);

    // Advanced find filtering
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match=> `$${match}`)

    //Find Query
    let query = model.find(JSON.parse(queryStr))

    // Select fields
    if(req.query.select){
        const fields = req.query.select.split(',').join(' ');
        console.log(fields);
        query = query.select(fields)
    }
    // Sort fields
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        console.log(sortBy);
        query = query.sort(sortBy)
    }
    else{
        query= query.sort('-createdAt')
    }

    // Pagination Logic
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await model.countDocuments()
    query= query.skip(startIndex).limit(limit);

    if(populate){
        query.populate(populate)
    }
    

    const results = await query;

    // Pagination result
    const pagination = {}
   
    if(endIndex < total){
        pagination.next = {
            page: page + 1,
            limit
        }
    }

    if(startIndex > 0){
        pagination.prev = {
            page: page - 1,
            limit
        }
    }
    res.advancedResults = {
        success: true,
        count: results.length,
        pagination,
        data: results
    };
    next();
}

module.exports = advancedResults;
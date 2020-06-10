const sendResponseToClient = (data,res) => {
    
    

    return res
    .status(200)
    .json({
        success :   true,
        data    :   data
    });

};

module.exports = {
    sendResponseToClient
};
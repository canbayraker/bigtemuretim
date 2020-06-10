const updateWithActualTime = async (timeLine,res) => {


    const currentDateTime = new Date();     // Anlık Date'imi aldım
    timeLine.end = "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds()   // Seçili son timeline'ın end bilgisine anlık zamanı atadım
    await timeLine.save();  // Atamayı database'e kaydettim.

    return res
    .status(200)
    .json({
        success :   true,
        data    :   timeLine
    });

};

module.exports = {
    updateWithActualTime
};
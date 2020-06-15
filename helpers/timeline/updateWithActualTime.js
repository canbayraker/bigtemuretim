const updateWithActualTime = async (timeLine,res) => {


    const currentDateTime = new Date();     // Anlık Date'imi aldım

    timeLine.end = "1-1-2000 " + (currentDateTime.getHours() + 3) + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds()   // Seçili son timeline'ın end bilgisine anlık zamanı atadım. Saat'e +3 ekledim. Çünkü VPS ile TR saati arasında 3 saat var.
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
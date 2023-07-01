const Label = require('../../models/label');

module.exports = {
    /**
     * check if label is already exists then return label id 
     * otherwise create new label and return label id 
     * 
     * @param name 
     * @returns label id
     */

    checkLabelId: async(name) => {
        const label = await Label.find({name:name});
        // console.log('label exists', label, label.length, name);
        if (!label.length) {
            const data = await Label.create({
                name: name
            });
            return data._id;
        }
       return label[0]._id;
    },

    /**
     * Ajax call
     * get labels name with id
     * 
     * @param {*} name 
     * @returns collection of data
     */
    getLabelsData: async(request, response) => { 
        return response.status(200).json( 
            await Label.find({ name: { $regex: request.params.name } }).select('_id name')
        );
    },
}
const Model = require('../model/requrst');
class Control {
    async get(req, res) {
        const model = await Model.find({});
        return res.json(model)
    }
    async getId(req, res) {
        const model = await Model.findById(req.params.id)
        return res.json(model)
    }
    async getIds(req, res) {
        let { ids } = req.params;
        console.log(ids.split(','))
        ids = ids.split(',');
        let arr = [];
        for (let i = 0; i <= ids.length - 1; i++) {
            if (ids[i] === '') continue;
            const model = await Model.findById(ids[i]);
            arr.push(model)
        }
        return res.json(arr)
    }

    async add(req, res) {
        try {
            const model = new Model({
                ...req.body
            })
            model.save();
            return res.send(true)
        }
        catch (e) {
            console.log(e)
            return res.json({ message: e })
        }
    }
}
module.exports = new Control();
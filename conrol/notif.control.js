const Model = require('../model/nofit');
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
            await model.save();
            return res.send(true)
        }
        catch (e) {
            console.log(e)
            return res.json({ message: e })
        }
    }
    async ReqAdd(props) {
        try {
            const model = new Model({
                ...props
            })
            await model.save();
            return model
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports = new Control();
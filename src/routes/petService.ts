import { Router } from 'express';
import { getModel, PetService } from '../models';

const router = Router();

router.get('/', async (req, res, next) => {
    const allRecords = await getModel('PetServiceModel').fetch();
    res.status(200).json({
        data: allRecords,
        msg: `Fetch success!`
    });
});

router.get('/:id', async (req, res, next) => {
    const searchId = req?.params?.id;
    try {
        const record = await getModel('PetServiceModel').get(searchId);
        res.status(200).json({
            data: record,
            msg: `Get success!`
        });
    } catch(err) {
        res.status(200).json({
            msg: `Get failed!`,
            error: err
        });
    }
});

router.get('/user/:userid', async (req, res, next) => {
    const userid = req?.params?.userid;
    try {
        const records = await getModel('PetServiceModel').getUserDatas(userid);
        res.status(200).json({
            data: records,
            msg: `Get records success!`
        });
    } catch(err) {
        res.status(200).json({
            msg: `Get records failed!`,
            error: err
        });
    }
});

router.post('/', async (req, res, next) => {
    const putData = req.body as PetService;
    try {
        const record = await getModel('PetServiceModel').put(putData);
        res.status(200).json({
            data: record.ops[0],
            msg: `Put success ${putData.title}`
        });
    } catch (err) {
        res.status(200).json({
            msg: `Put failed!`,
            error: err
        });
    }
});

router.patch('/', async (req, res, next) => {
    const updateDate = req.body as PetService;
    try {
        if (updateDate._id) {
            const record = await getModel('PetServiceModel').patch(updateDate);
            res.status(200).json({
                data: record,
                msg: `Edit success ${record._id}`
            });
        } else {
            throw new Error('No _id field');
        }
    } catch (err) {
        res.status(200).json({
            msg: `Edit failed!`,
            error: err
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const delId = req?.params?.id;
    try {
        await getModel('PetServiceModel').del(delId);
        res.status(200).json({
            msg: `Delete success!`
        });
    } catch(err) {
        res.status(200).json({
            msg: `Delete failed!`,
            error: err
        });
    }
});

export default router;

import { Router } from 'express';
import { getModel, User } from '../models';

const router = Router();

router.get('/', async (req, res, next) => {
    const allRecords = await getModel('UserModel').fetch();
    res.status(200).json({
        data: allRecords,
        msg: `Fetch success!`
    });
});

router.get('/:id', async (req, res, next) => {
    const searchId = req?.params?.id;
    try {
        const record = await getModel('UserModel').get(searchId);
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

router.post('/', async (req, res, next) => {
    const putData = req.body as User;
    try {
        const record = await getModel('UserModel').put(putData);
        res.status(200).json({
            data: record.ops[0],
            msg: `Put success ${putData.firstname}`
        });
    } catch (err) {
        res.status(200).json({
            msg: `Put failed!`,
            error: err
        });
    }
});

router.patch('/', async (req, res, next) => {
    const updateDate = req.body as User;
    try {
        if (updateDate._id) {
            const record = await getModel('UserModel').patch(updateDate);
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
        await getModel('UserModel').del(delId);
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

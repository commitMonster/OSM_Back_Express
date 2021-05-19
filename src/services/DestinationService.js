import * as DestinationRepository from '../repositorys/DestinationRepository';

export const create = async (req, res, next) => {
  try {
    const data = req.body;
    data.userId = req.user.id;
    const destination = await DestinationRepository.create(data);

    res.send(destination);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const destinationList = await DestinationRepository.findAll();
    return res.send(destinationList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const data = req.body;
    data.userId = req.user.id;
    const destination = await DestinationRepository.updateById(Number(req.params.id), data);
    return res.send(destination);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    await DestinationRepository.deleteById(Number(req.params.id));
    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

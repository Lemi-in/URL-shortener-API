import Url from '../models/Url.js';
export const handleRedirect = async (req, res) => {
    const { shortId } = req.params;
    const found = await Url.findOne({ shortId });
    if (found) {
        console.log(res.redirect(found.originalUrl));
    }
    console.log(res.status(404).send('URL not found'));
};

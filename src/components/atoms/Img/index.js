import React from 'react';
import { containPresenter } from '../../utils/HoC';
const ImgPresenter = props => <img { ...props } />;

function createSrc(src, width, height) {
    if(!width || !height) return src;
    return src.replace(
        /images\/([0-9]+)\/([0-9]+)/, 
        (match, p1, p2) => `images/${width}/${height}`);
}

const ImgContainer = ({presenter, src, width, height, ...props}) => {
    src = createSrc(src, width, height);
    return presenter({src, width, height, ...props});
}

const Img = containPresenter(ImgContainer, ImgPresenter);

export default Img;

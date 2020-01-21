import React from "react";
import './directory.sass'
import {MenuItem} from "../menu-item/menu-item";


export class Directory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections : [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'women\'s',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'men\'s',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, size }, index) => (
                    <MenuItem title={title} imgUrl={imageUrl} size={size}key={index}/> ))}
            </div>
        )
    }
}